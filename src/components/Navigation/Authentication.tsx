import { Button, TouchableOpacity, View } from "react-native";
import AuthStorage from "../../utils/authStorage";
import { useNavigate } from "react-router-native";







export const Authentication = ({ appBarState }: any) => {

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
                            appBarState.setSignedIn(false)
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
                        navigate('/signin')
                    }
                    } title="Sign in" />

                </View>
            </TouchableOpacity>
    )
}



