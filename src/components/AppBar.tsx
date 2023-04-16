import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';
import { Link } from 'react-router-native';
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
})


const AppBar = ({ signedObj }: any) => {




    //check if user is signed in:







    return (
        <View style={styles.flexContainer}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                <Link style={styles.tabContainer} to="/">
                    <Text color="textWhite" fontWeight="bold" >Repositories</Text>
                </Link>
                <SignOut signedObj={signedObj} />

            </ScrollView>
        </View>
    )
}

export default AppBar;