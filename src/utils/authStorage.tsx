import AsyncStorage from '@react-native-async-storage/async-storage';
import { Credentials, Profile } from '../types';

class AuthStorage {

    static namespace: string;
    constructor(namespace = 'auth') {
        AuthStorage.namespace = namespace;
    }


    static async getSignedIn() {
        const signedIn = await AsyncStorage.getItem(`${this.namespace}:signedIn`);
        console.log("getsignedin: " + signedIn)
        if (!signedIn) {
            return null;
        }
        return signedIn;
    }

    static async getCredentials() {

        // Get the access token for the storage
        const accessToken = await AsyncStorage.getItem(`${this.namespace}:token`);
        const expiresIn = await AsyncStorage.getItem(`${this.namespace}:expires_in`);

        if (!accessToken) {
            await AsyncStorage.setItem(`${this.namespace}:signedIn`, "false");
            return null;
        }

        const credentials: Credentials = { token: accessToken, expires_in: Number(expiresIn) };


        return credentials;
    }


    static async setCredentials(credentials: Credentials) {
        // Add the access token to the storage
        AsyncStorage.setItem(`${this.namespace}:token`, credentials.token);
        if (credentials.expires_in) {
            AsyncStorage.setItem(`${this.namespace}:expires_in`, credentials.expires_in.toString());
        }

        await AsyncStorage.setItem(`${this.namespace}:signedIn`, "true");

    }


    static async signOut() {
        // Remove the access token from the storage
        AsyncStorage.removeItem(`${this.namespace}:token`);
        AsyncStorage.removeItem(`${this.namespace}:expires_in`);
        AsyncStorage.removeItem(`${this.namespace}:profile`);

        await AsyncStorage.setItem(`${this.namespace}:signedIn`, "false");
    }

    static async getProfile() {
        return await AsyncStorage.getItem(`${this.namespace}:profile`);
    }

    static async setProfile(profile: Profile) {
        // Add the access token to the storage
        AsyncStorage.setItem(`${this.namespace}:profile`, JSON.stringify(profile));
    }

    

}

export default AuthStorage;