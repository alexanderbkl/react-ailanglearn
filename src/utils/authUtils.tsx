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


export const SignOut = ({ signedObj }: any) => {

    const navigate = useNavigate();
    var signedIn = signedObj.signedIn;




    

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
                        AuthStorage.signOut().then(() => {
                            signedObj.setSignedIn(false), signedIn = false
                            console.log("signout")
                            navigate('/signin')
                        });
                    }
                    } title="Sign Out" />

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
                        console.log("signout")
                        navigate('/signin')
                    }
                    } title="Sign in" />

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
                <Button onPress={() => AuthStorage.signOut()} title="Sign out" />

            </View>
        </TouchableOpacity>
    )
}

