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



const Main = () => {
    const navigate = useNavigate();

    useEffect(() => {
        //check if user is signed in:
        CheckAuth().then((value) => {
            if (value !== null) {
                //navigate to repository list:
                navigate('/repositories');
            } else {
                //navigate to sign in
                navigate('/signin');
            }
        })
    }, [])

    return (
        <View style={theme.backgroundContainer}>
            <AppBar />
            <Routes>
                <Route path="/repositories" element={<RepositoryList />} />
                <Route path="*" element={<Navigate to="/repositories" replace />} />
                <Route path="/signin" element={<SignIn />} />
                
            </Routes>
        </View>
    );
};

export default Main;