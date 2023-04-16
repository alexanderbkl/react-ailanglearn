import { Button, TouchableOpacity, View } from 'react-native';
import RepositoryList from './components/Navigation/RepositoryList';
import { Route, Routes, Navigate } from 'react-router-native';
import AuthStorage from './utils/authStorage';
import { useNavigate } from 'react-router-native';

import theme from './theme';
import AppBar from './components/AppBar';
import SignIn from './components/Authentication/SignIn';
import { useEffect, useState } from 'react';
import SignUp from './components/Authentication/SignUp';
import LanguageChat from './components/Navigation/LanguageChat';



const Main = () => {
    const navigate = useNavigate();
    const [signedIn, setSignedIn] = useState(false);
    const [currentTabNum, setCurrentTabNum] = useState(0);

    //envolve it in object to pass as props
    const appBarState = { signedIn: signedIn, setSignedIn: setSignedIn, currentTabNum: currentTabNum, setCurrentTabNum: setCurrentTabNum };


    useEffect(() => {

        AuthStorage.getSignedIn().then((value) => {
            if (value !== null) {
                console.log("vaale" + value)
                //transform value into boolean:
                if (value === 'true') {
                    appBarState.setSignedIn(true);
                    navigate('/languagechat');
                } else {
                    appBarState.setSignedIn(false);
                    navigate('/signin');
                }




            } else {
                appBarState.setSignedIn(false);
                navigate('/signin');

            }
        });

    }, []);




    return (
        <View style={theme.backgroundContainer}>
            <AppBar appBarState={appBarState} />
            <Routes>
                <Route path="/repositories" element={<RepositoryList />} />
                <Route path="/languagechat" element={<LanguageChat />} />
                <Route path="*" element={<Navigate to="/repositories" replace />} />
                <Route path="/signin" element={<SignIn appBarState={appBarState} />} />
                <Route path="/register" element={<SignUp appBarState={appBarState} />} />


            </Routes>
        </View>
    );
};

export default Main;