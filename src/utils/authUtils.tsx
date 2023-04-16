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


export const SignOut = ({ appBarState }: any) => {

    const navigate = useNavigate();
    var signedIn = appBarState.signedIn;




    

    return (
        signedIn ?
            <TouchableOpacity>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Button onPress={() => {
                        AuthStorage.signOut().then(() => {
                            appBarState.setSignedIn(false), signedIn = false
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



