import { Button, TouchableOpacity, View } from "react-native";
import AuthStorage from "./authStorage";
import { useNavigate } from "react-router-native";




//check if user is signed in asynchronously by async auth storage:
export const CheckAuth = async () => {
    var signedIn = false;

    await AuthStorage.getCredentials().then((value) => {
        if (value !== null) {
            signedIn = true;
        } else {
            signedIn = false;
        }
    });
    return signedIn

}

export const SignOut = () => {
    const navigate = useNavigate();

    var signedIn = false;

    AuthStorage.getSignedIn().then((value) => {
        if (value !== null) {
            signedIn = true;
        } else {
            signedIn = false;
        }
    });

    return (
        signedIn ?
        <TouchableOpacity>
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                }}
            >
                <Button onPress={() => {
                    AuthStorage.removeCredentials()
                    }
                    } title="Sign In" />

            </View>
        </TouchableOpacity> :
        <TouchableOpacity>
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
            }}
        >
            <Button onPress={() => {
                navigate('/signin')
                }
                } title="Sign out" />

        </View>
    </TouchableOpacity>
    )
}

export const SignIn = () => {
    return (
        <TouchableOpacity>
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                }}
            >
                <Button onPress={() => AuthStorage.removeCredentials()} title="Sign out" />

            </View>
        </TouchableOpacity>
    )
}

