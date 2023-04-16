import { Button, TouchableOpacity, View } from 'react-native';
import RepositoryList from './RepositoryList';
import { Route, Routes, Navigate } from 'react-router-native';
import AuthStorage from '../utils/authStorage';
import { useNavigate } from 'react-router-native';

import theme from '../theme';
import AppBar from './AppBar';
import SignIn from './SignIn';
import { useEffect, useState } from 'react';
import { CheckAuth } from '../utils/authUtils';
import SignUp from './SignUp';



const Main = () => {
    const navigate = useNavigate();
    const [signedIn, setSignedIn] = useState(false);

    //envolve it in object to pass as props
    const signedObj = { signedIn: signedIn, setSignedIn: setSignedIn };


    useEffect(() => {

        AuthStorage.getSignedIn().then((value) => {
            if (value !== null) {
                console.log("vaale" + value)
                //transform value into boolean:
                if (value === 'true') {
                    signedObj.setSignedIn(true);
                    navigate('/repositories');
                } else {
                    signedObj.setSignedIn(false);
                    navigate('/signin');
                }




            } else {
                signedObj.setSignedIn(false);
                navigate('/signin');

            }
        });

    }, []);




    return (
        <View style={theme.backgroundContainer}>
            <AppBar signedObj={signedObj} />
            <Routes>
                <Route path="/repositories" element={<RepositoryList />} />
                <Route path="*" element={<Navigate to="/repositories" replace />} />
                <Route path="/signin" element={<SignIn signedObj={signedObj} />} />
                <Route path="/register" element={<SignUp signedObj={signedObj} />} />


            </Routes>
        </View>
    );
};

export default Main;