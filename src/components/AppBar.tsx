import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBarBackground,
    }
})

const AppBar = () => {
    return (
        <Pressable onPress={() => console.log('pressed')}>
            <View style={styles.container}>
                <Text fontWeight="bold" style={{ color: 'white', padding: 10 }}>Repositories</Text>
            </View>
        </Pressable>
    )
}

export default AppBar;