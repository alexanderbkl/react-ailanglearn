import { useAuthStorage } from '../hooks/useAuthStorage';



const host = 'http://localhost:3001';



export const signInUser = async (username: string, password: string) => {
    const response = await fetch(host + '/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "email": username, "password": password }),
    });

    const data = await response.json();

    return data;
}