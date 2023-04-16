import { Button, FlatList, TouchableOpacity, View, Dimensions } from "react-native"
import Text from "../Composable/Text"
import { useEffect, useRef, useState } from "react"
import TextInput from "../Composable/TextInput";
import { StyleSheet } from "react-native";
import MessageItem from "./MessageItem";



const styles = StyleSheet.create({
    errorText: {
        color: 'red',
        height: 3,
        position: 'absolute',
        top: 0,
    },
    separator: {
        height: 10,
    },


});

const LanguageChat = () => {






    const repositoriesList = [
        {
            id: 'jaredpalmer.formik',
            description: 'Build forms in React, without the tears',
            right: true,
        },
        {
            id: 'radils.rails',
            description: 'Ruby on Rails',
            right: true,
        },
        {
            id: 'django.djaango',
            description: 'The Web framework for perfectionists with deadlines.',
            right: true,
        },
        {
            id: 'reduxdjs.redux',
            description: 'Predictable state container for JavaScript apps',
            right: false,
        },
        {
            id: 'jareadpalmer.formik',
            description: 'Build forms in React, without the tears',
            right: true,
        },
        {
            id: 'rails.rdaaails',
            description: 'Ruby on Rails',
            right: true,
        },
        {
            id: 'djangaaao.django',
            description: 'The Web framework for perfectionists with deadlines.',
            right: true,
        },
        {
            id: 'reduaaxdjs.redux',
            description: 'Predictable state container for JavaScript apps',
            right: false,
        },
        {
            id: 'jaredpaaaalmer.formik',
            description: 'Build forms in React, without the tears',
            right: true,
        },
        {
            id: 'raidls.raaails',
            description: 'Ruby on Rails',
            right: true,
        },
        {
            id: 'djangos.aadjango',
            description: 'The Web framework for perfectionists with deadlines.',
            right: true,
        },
        {
            id: 'reduxaasjs.redux',
            description: 'Predictable state container for JavaScript apps',
            right: false,
        },
        {
            id: 'jaredpaldmer.formik',
            description: 'Build forms in React, without the tears',
            right: true,
        },
        {
            id: 'rails.rdails',
            description: 'Ruby on Rails',
            right: true,
        },
        {
            id: 'django.djanago',
            description: 'The Web framework for perfectionists with deadlines.',
            right: true,
        },
        {
            id: 'reduxjs.redux',
            description: 'Predictable state container for JavaScript apps',
            right: false,
        },
    ];

    const [repositories, setRepositories] = useState<any>([]);


    const ItemSeparator = () => <View style={styles.separator} />;




    const onSubmit = async (values: any) => {



        console.log(values)

        if (values.length > 100) {
            setErrorText('Maximum of 100 characters allowed')
            setShowError(true)
            return
        } else if (values.length === 0) {
            setErrorText('Please enter a message')
            setShowError(true)
            return
        }

        //add value to respositories array where id is the count of the array, description is the value and right is true
        const newMessage = { id: Math.random().toString(), description: values, right: true }

        setRepositories([...repositories, newMessage])

        setPromptValue('')
    }


    const [promptValue, setPromptValue] = useState<string>('');

    const [errorText, setErrorText] = useState('');
    const [error, setShowError] = useState(false);


    useEffect(() => {
        setRepositories(repositoriesList);
    }, []);

    useEffect(() => {
        if (promptValue.length > 100) {
            setErrorText('Maximum of 100 characters allowed')
            setShowError(true)
        } else {
            setShowError(false)
        }
    }, [promptValue])

    const messagesEndRef = useRef<FlatList | null>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollToEnd({ animated: true })
    }





    return (
        <View style={{ flexDirection: 'column', width: '100%', height: '100%', marginTop: 'auto', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '100%', height: Dimensions.get('window').height * 0.85, marginTop: 10, position: 'relative' }}>
                <FlatList
                    automaticallyAdjustKeyboardInsets={true}
                    showsVerticalScrollIndicator={false}
                    ref={(ref) => { messagesEndRef.current = ref; }}
                    onContentSizeChange={() => scrollToBottom()}
                    data={repositories}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({ item }) => <MessageItem item={item} />}
                />
            </View>
            <View style={{ width: '100%', height: Dimensions.get('window').height * 0.1, flexDirection: 'column', marginTop: 'auto', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 10 }}>
                    <TextInput
                        onChangeText={(value: string) => setPromptValue(value)}
                        value={promptValue}
                        error={error}
                        onKeyPress={(e: { key: string; }) => {
                            e.key === 'Enter' && onSubmit(promptValue)
                        }}
                        style={{ backgroundColor: 'white', width: '50%', height: 40, borderRadius: 5, padding: 10, }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity
                        >
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 5,
                                    padding: 10,
                                }}
                            >
                                <Button onPress={() => onSubmit(promptValue)} title="Send" />

                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
                {!error && <Text style={styles.errorText}>asdasdasd{errorText}</Text>}

            </View>

        </View >
    );
}

export default LanguageChat