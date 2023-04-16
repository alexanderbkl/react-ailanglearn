import { useNavigate } from "react-router-native";
import { registerUser } from "../../requests/client";
import AuthStorage from "../../utils/authStorage";
import { Formik } from "formik";
import * as yup from 'yup';
import SignUpForm from "./SignUpForm";
import { View } from "react-native";
import Text from "../Composable/Text";
import { useState } from "react";
import { Credentials } from "../../types";
import { setProfile } from '../../requests/client';


const validationSchema = yup.object().shape({
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .max(50, 'Password must be at most 50 characters')
        .required('Password is required'),
    passwordConfirmation: yup
        .string()
        .required('Password confirmation is required')
        .oneOf([yup.ref('password'), ""], 'Passwords must match'),
    email: yup
        .string()
        .email('Email must be a valid email')
        .required('Email is required'),
    firstName: yup
        .string()
        .min(1, 'First name must be at least 1 character')
        .max(50, 'First name must be at most 50 characters')
        .required('First name is required'),
    lastName: yup
        .string()
        .min(1, 'Last name must be at least 1 character')
        .max(50, 'Last name must be at most 50 characters')
        .required('Last name is required'),
    title: yup
        .string()
        .min(1, 'Title must be at least 1 character')
        .max(50, 'Title must be at most 50 characters'),


})





const SignUp = ({ appBarState }: any) => {

    var signedIn = appBarState.signedIn;

    const [errorForm, setErrorForm] = useState('');

    const navigate = useNavigate();



    const onSubmit = async (values: any) => {

        console.log('Signing up...')
        var signUpRequest: any = await registerUser(values.firstName, values.lastName, values.title, values.email, values.username, values.password);


        if (!signUpRequest) {
            console.log('Sign un failed')
            return
        } else if (signUpRequest === 'email exists') {
            console.log('Sign un failed: email exists')
            setErrorForm('Email exists')
            return
        }

        if (signUpRequest.status === 201) {
            console.log('Sign up successful: ' + signUpRequest.message);

            const credentials: Credentials = {
                token: signUpRequest.data.result.token,
                expires_in: null
            }
            await AuthStorage.setCredentials(credentials);

            setProfile()

            appBarState.setSignedIn(true), signedIn = true

            navigate('/repositories');

        } else {
            console.log(signUpRequest)
        }

    }



    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', title: '', username: '', password: '', passwordConfirmation: '', email: '' }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }: any) => <SignUpForm errorForm={errorForm} onSubmit={handleSubmit} />}
        </Formik>
    )
}

export default SignUp;