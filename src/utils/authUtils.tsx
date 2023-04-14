import { useEffect } from "react";
import AuthStorage from "./authStorage";
import { useNavigate } from "react-router-native";


const CheckAuth = () => {
    const navigate = useNavigate();
    var signedIn = false;
    useEffect(() => {
        AuthStorage.getCredentials().then((value) => {
            if (value !== null) {
                signedIn = true;
                //navigate to repository list:
                navigate('/repositories');

            } else {
                signedIn = false;
                //navigate to sign in
                navigate('/signin');
            }
        });
    }, [])
    return signedIn
}

