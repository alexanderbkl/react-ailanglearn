import { useField } from "formik";
import FormikTextInput from "./FormikTextInput";
import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from "../theme";

const foregroundStyle = theme.foregroundContainer;

const styles = StyleSheet.create({
    foregroundContainer: {
        backgroundColor: foregroundStyle.backgroundColor,
        padding: foregroundStyle.padding,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})


const SignInForm = ({ onSubmit }: any) => {




    const [userField, userMeta, userHelpers] = useField('username');
    const [passwordField, passwordMeta, passwordHelpers] = useField('password');




    return (
        <View style={styles.foregroundContainer}>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry />
            <Pressable onPress={() => onSubmit()}>

            </Pressable>



            <TouchableOpacity
            >
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                    }}
                >
                    <Button onPress={() => onSubmit()} title="Sign in" />

                </View>
            </TouchableOpacity>
        </View>
    )
}

export default SignInForm;