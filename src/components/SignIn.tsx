import { Formik } from 'formik';
import * as yup from 'yup';
import { signInUser } from '../requests/client';
import React, { useContext } from 'react';
import SignInForm from './SignInForm';
import { Button } from 'react-native';
import AuthStorage from '../utils/authStorage';
import { useNavigate } from 'react-router-native';





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

    const navigate = useNavigate();


    const onSubmit = async (values: any) => {


        var signInRequest: any = await signInUser(values.username, values.password);


        if (!signInRequest) {
            console.log('Sign in failed')
            return
        }

        if (signInRequest.status === 200) {
            console.log('Sign in successful: ' + signInRequest.message);
            console.log(JSON.stringify(signInRequest.data.result))


            await AuthStorage.setCredentials(signInRequest.data.result);

            navigate('/repositories');

        } else {
            console.log(signInRequest.message + ': ' + signInRequest.data.result);
            console.log(JSON.stringify(signInRequest))
            alert(signInRequest.message + ': ' + signInRequest.data.result);
        }

    }



    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }: any) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    )
}

export default SignIn;