import { StyleSheet, View } from 'react-native';
import Text from './Text';
import RepositoryList from './RepositoryList';

import theme from '../theme';

const Main = () => {
    return (
        <View style={theme.backgroundContainer}>
            <RepositoryList />
        </View>
    );
};

export default Main;