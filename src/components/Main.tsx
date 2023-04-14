import { Button, TouchableOpacity, View } from 'react-native';
import RepositoryList from './RepositoryList';
import { Route, Routes, Navigate } from 'react-router-native';
import AuthStorage from '../utils/authStorage';
import { useNavigate } from 'react-router-native';

import theme from '../theme';
import AppBar from './AppBar';
import SignIn from './SignIn';
import { useEffect } from 'react';

const SignOut = () => {
    return(
    <TouchableOpacity
            >
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                    }}
                >
                    <Button onPress={() => AuthStorage.removeCredentials()} title="Sign in" />

                </View>
            </TouchableOpacity>)
}

const Main = () => {
    const navigate = useNavigate();

    var signedIn = false;
    useEffect(() => {
        AuthStorage.getCredentials().then((value) => {
            if (value !== null) {
                signedIn = true;
                //navigate to repository list:
                navigate('/repositories');

            } else {
                signedIn = false;
                //navigate to sign in
                navigate('/signin');
            }
        });
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