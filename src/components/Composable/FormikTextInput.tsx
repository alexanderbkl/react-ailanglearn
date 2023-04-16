import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
    errorText: {
        color: 'red',
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        minWidth: 200,
    }
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
                style={styles.TextInput}
                {...props}
            />
            {showError && <Text style={styles.errorText}>{meta.error}</Text>}
        </>
    );
};

export default FormikTextInput;