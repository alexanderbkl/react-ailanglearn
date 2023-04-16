import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

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
    errorText: {
        color: 'red',
    },
});

const FormikTextInput = ({ name, ...props }: any) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;

    return (
        <>
            <TextInput
                onChangeText={(value: string) => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                value={field.value}
                error={showError}
                style={styles.textInput}
                {...props}
            />
            {showError && <Text style={styles.errorText}>{meta.error}</Text>}
        </>
    );
};

export default FormikTextInput;