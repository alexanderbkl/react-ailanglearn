import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { View, Pressable, Button, StyleSheet } from 'react-native';
import { Formik, useField } from 'formik';
import theme from '../theme';

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
            <Pressable onPress={onSubmit}>
                <Button title="Sign in" />
            </Pressable>
        </View>
    )
}


const SignIn = () => {
    const onSubmit = (values: any) => {
        console.log(values);
    }
    return <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit}>
        {({ handleSubmit }: any) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>;
}

export default SignIn;