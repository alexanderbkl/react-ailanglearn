import AsyncStorage from '@react-native-async-storage/async-storage';
import { Credentials } from '../types';

class AuthStorage {
    namespace: string;
    constructor(namespace = 'auth') {
        this.namespace = namespace;
    }

    async getCredentials() {
        // Get the access token for the storage
        const accessToken = await AsyncStorage.getItem(`${this.namespace}:token`);
        const expiresIn = await AsyncStorage.getItem(`${this.namespace}:expiresAt`);

        if (!accessToken || !expiresIn) {
            return null;
        }

        const credentials: Credentials = { token: accessToken, expiresAt: expiresIn };
        
        return credentials;
    }

    setCredentials(credentials: Credentials) {
        // Add the access token to the storage
        AsyncStorage.setItem(`${this.namespace}:token`, credentials.token);
        AsyncStorage.setItem(`${this.namespace}:expiresAt`, credentials.expires_in);

    }

    removeCredentials() {
        // Remove the access token from the storage
        AsyncStorage.removeItem(`${this.namespace}:token`);
        AsyncStorage.removeItem(`${this.namespace}:expiresAt`);
    }
}

export default AuthStorage;