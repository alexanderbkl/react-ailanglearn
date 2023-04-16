import { useField } from "formik";
import FormikTextInput from "../Composable/FormikTextInput";
import { Button, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import theme from "../../theme";
import { Navigate, useNavigate } from "react-router-native";
import Text from "../Composable/Text";
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


const SignUpForm = ({ errorForm, onSubmit }: any) => {




    const [emailField, emailMeta, emailHelpers] = useField('email');
    const [passwordField, passwordMeta, passwordHelpers] = useField('password');
    const [passwordConfirmationField, passwordConfirmationMeta, passwordConfirmationHelpers] = useField('passwordConfirmation');
    const [firstNameField, firstNameMeta, firstNameHelpers] = useField('firstName');
    const [lastNameField, lastNameMeta, lastNameHelpers] = useField('lastName');
    const [titleField, titleMeta, titleHelpers] = useField('title');


    const navigate = useNavigate();


    return (
        <View style={styles.foregroundContainer}>
            <Text fontWeight="bold" fontSize="subheading">Sign up</Text>
            <FormikTextInput name="firstName" placeholder="First name" />
            <FormikTextInput name="lastName" placeholder="Last name" />
            <FormikTextInput name="title" placeholder="Title" />
            <FormikTextInput name="email" placeholder="Email" />
            {errorForm === 'Email exists' &&
                <Text style={{ color: 'red' }}>{errorForm}</Text>
            }
            <FormikTextInput name="password" placeholder="Password" secureTextEntry />
            <FormikTextInput name="passwordConfirmation" placeholder="Password confirmation" secureTextEntry />



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
                        <Button onPress={() => onSubmit()} title="Sign up" />

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
                        <Button color="#bbbbbb" onPress={() => navigate('/signin')} title="login" />

                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUpForm;