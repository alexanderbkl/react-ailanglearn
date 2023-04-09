import FormikTextInput from './FormikTextInput';
import { View, Pressable, Button, StyleSheet } from 'react-native';
import { Formik, useField } from 'formik';
import theme from '../theme';
import * as yup from 'yup';

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

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(5, 'Username must be at least 5 characters')
        .max(30, 'Username must be at most 30 characters')
        .required('Username is required'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .max(50, 'Password must be at most 50 characters')
        .required('Password is required'),
})

const SignIn = () => {
    const onSubmit = (values: any) => {
        console.log(values);
    }
    return <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
    >
        {({ handleSubmit }: any) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>;
}

export default SignIn;