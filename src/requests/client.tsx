
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
            alert(request.data.result);
            return null
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