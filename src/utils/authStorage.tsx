import AsyncStorage from '@react-native-async-storage/async-storage';
import { Credentials } from '../types';

class AuthStorage {

    static namespace: string;
    constructor(namespace = 'auth') {
        AuthStorage.namespace = namespace;
    }

    static async getCredentials() {
        // Get the access token for the storage
        const accessToken = await AsyncStorage.getItem(`${this.namespace}:token`);
        const expiresIn = await AsyncStorage.getItem(`${this.namespace}:expires_in`);

        if (!accessToken || !expiresIn) {
            return null;
        }

        const credentials: Credentials = { token: accessToken, expires_in: parseInt(expiresIn) };
        
        return credentials;
    }

    static async setCredentials(credentials: Credentials) {
        // Add the access token to the storage
        AsyncStorage.setItem(`${this.namespace}:token`, credentials.token);
        AsyncStorage.setItem(`${this.namespace}:expires_in`, credentials.expires_in.toString());

    }

    static async removeCredentials() {
        // Remove the access token from the storage
        AsyncStorage.removeItem(`${this.namespace}:token`);
        AsyncStorage.removeItem(`${this.namespace}:expires_in`);
    }
}

export default AuthStorage;