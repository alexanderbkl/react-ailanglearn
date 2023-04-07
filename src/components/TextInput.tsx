import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#e1e4e8',
        borderRadius: 6,
        padding: 10,
        margin: 10,
        color: 'black',
        placeholderTextColor: 'gray',
    },
});

const TextInput = ({ style, error, ...props }: any) => {
    const textInputStyle = [styles.textInput, error && { borderColor: 'red' }];

    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;