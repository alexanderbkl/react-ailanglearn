import { View, StyleSheet, Pressable, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Composable/Text';
import { Link, useNavigate } from 'react-router-native';
import { CheckAuth, SignOut } from '../utils/authUtils';
import { useEffect, useState } from 'react';
import AuthStorage from '../utils/authStorage';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBarBackground,
    },
    flexContainer: {
        paddingTop: Constants.statusBarHeight,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.appBarBackground,
        width: '100%',
    },
    flexColumnContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    tabContainer: {
        color: 'white',
        padding: 10,
        minWidth: 100,
        textAlign: 'center',
    },
    tabContainerSelected: {
        color: 'white',
        padding: 10,
        minWidth: 100,
        backgroundColor: 'gray',
        textAlign: 'center',
    },
})


const AppBar = ({ appBarState }: any) => {




    //check if user is signed in:

    const navigate = useNavigate();





    return (
        <View style={styles.flexContainer}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                <TouchableOpacity onPress={() => {
                    appBarState.setCurrentTabNum(0)
                    navigate('/repositories')
                }}>
                    <Text style={appBarState.currentTabNum === 0 ? styles.tabContainerSelected : styles.tabContainer} color="textWhite" fontWeight="bold" >Repositories</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    appBarState.setCurrentTabNum(1)
                    navigate('/languagechat')
                }}>
                    <Text style={appBarState.currentTabNum === 1 ? styles.tabContainerSelected : styles.tabContainer} color="textWhite" fontWeight="bold" >Languageachat</Text>
                </TouchableOpacity>
            </ScrollView>
            <SignOut appBarState={appBarState} />

        </View>
    )
}

export default AppBar;