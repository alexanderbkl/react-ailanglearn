import { useField } from "formik";
import FormikTextInput from "../Composable/FormikTextInput";
import { Button, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import theme from "../../theme";
import Text from "../Composable/Text";
import { Navigate, useNavigate } from "react-router-native";

const foregroundStyle = theme.foregroundContainer;

const styles = StyleSheet.create({
    foregroundContainer: {
        backgroundColor: foregroundStyle.backgroundColor,
        padding: foregroundStyle.padding,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingStart: 20,
        paddingEnd: 20,
        height: '100%',
    },
})


const SignInForm = ({ onSubmit }: any) => {




    const [userField, userMeta, userHelpers] = useField('username');
    const [passwordField, passwordMeta, passwordHelpers] = useField('password');

    const navigate = useNavigate();


    return (
        <View style={styles.foregroundContainer}>
            <Text fontWeight="bold" fontSize="subheading">Sign in</Text>
            <FormikTextInput name="username" placeholder="Email" />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry />
            <Pressable onPress={() => onSubmit()}>

            </Pressable>



            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity
                >
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 5,
                            padding: 10,
                        }}
                    >
                        <Button onPress={() => onSubmit()} title="Sign in" />

                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                >
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 5,
                            padding: 10,
                        }}
                    >
                        <Button color="#bbbbbb" onPress={() => navigate('/register')} title="Register" />

                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignInForm;