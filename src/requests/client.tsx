import { Credentials, Message, Profile } from "../types";
import AuthStorage from "../utils/authStorage";

const host = 'http://192.168.1.59:3001';



export const signInUser = async (username: string, password: string) => {

    const response = await fetch(host + '/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "email": username, "password": password }),
    }).then(async (response) => {
        const request = await response.json();

        if (request.status !== 200) {
            console.log('sign in failed')
            alert(request.data.result);
            return null
        }

        return request
    }).catch((error) => {
        alert('Error: ' + error);
    });

    if (!response) {
        return null;
    }
    return response;

}

export const registerUser = async (first_name: string, last_name: string, title: string, email: string, username: string, password: string) => {

    if (await AuthStorage.getCredentials()) {
        await AuthStorage.signOut();
        alert('You must not be signed in to register a new user');
        return null;
    }

    const response = await fetch(host + '/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "first_name": first_name, "last_name": last_name, "title": title, "email": email, "username": username, "password": password }),
    }).then(async (response) => {
        const request = await response.json();

        if (request.status !== 201) {
            console.log('email exists')
            if (request.data.result === 'email already exists') {
                return 'email exists'
            } else {
                console.log(request);
                return null
            }

        }

        return request
    }).catch((error) => {
        alert(error);
    });

    if (!response) {
        return null;
    }
    return response;

}


export const setProfile = async () => {
    const credentials = await AuthStorage.getCredentials();

    if (!credentials) {
        return null;
    }

    const response = await fetch(host + '/getprofile', {
        headers: {
            'Authorization': 'Bearer ' + credentials.token
        },
    }).then(async (response) => {
        const request = await response.json();

        if (request.status !== 200) {
            console.log('get profile failed')
            alert(request.data.result);
            return null
        } else {
            console.log('get profile successful')
            const profile: Profile = {
                firstName: request.data.result.First_name,
                lastName: request.data.result.Last_name,
                title: request.data.result.Title,
                email: request.data.result.Email,
                uid: request.data.result.Uid,
                expiresAt: request.data.result.exp
            }
            await AuthStorage.setProfile(profile);
        }

        return request
    }).catch((error) => {
        alert('Error: ' + error);
    }

    );

    if (!response) {
        return null;
    }
    return response;

}


export const postAiMessage = async (message: string) => {

    const credentials = await AuthStorage.getCredentials();

    if (!credentials) {
        return null;
    }

    if (!await AuthStorage.getCredentials()) {
        alert('You must be signed in to post a message');
        return null;
    }

    const response = await fetch(host + '/message/post', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + credentials.token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "message": message, "right": true }),
    }).then(async (response) => {
        const request = await response.json();

        if (request.status !== 200) {
            if (request.data.result === 'email already exists') {
                return 'email exists'
            } else {
                console.log(request);
                alert(request.data.result)
                return null
            }

        }

        return request
    }).catch((error) => {
        alert(error);
    });

    if (!response) {
        return null;
    }
    return response;

}

export const getMessages = async () => {
    const credentials = await AuthStorage.getCredentials();

    if (!credentials) {
        return null;
    }

    const response = await fetch(host + '/messages/get', {
        headers: {
            'Authorization': 'Bearer ' + credentials.token
        },
    }).then(async (response) => {
        const request = await response.json();

        if (request.status !== 200) {
            console.log('get messages failed')
            alert(request.data.result);
            return null
        } else {
            console.log('get messages successful')
            const messages: Message[] = request.data.result.messages


            await AuthStorage.setMessages(messages);
        }

        return request
    }).catch((error) => {
        alert('Error: ' + error);
    }

    );

    if (!response) {
        return null;
    }
    return response;
}