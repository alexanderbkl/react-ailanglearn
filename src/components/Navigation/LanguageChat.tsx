import { Button, FlatList, TouchableOpacity, View, Dimensions } from "react-native"
import Text from "../Composable/Text"
import { useEffect, useRef, useState } from "react"
import TextInput from "../Composable/TextInput";
import { StyleSheet } from "react-native";
import MessageItem from "./MessageItem";
import { getMessages, postAiMessage } from "../../requests/client";
import { Message } from "../../types";
import AuthStorage from "../../utils/authStorage";



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





    const [messages, setMessages] = useState<Message[]>([]);


    const ItemSeparator = () => <View style={styles.separator} />;




    const onSubmit = async (values: any) => {




        if (values.length > 100) {
            setErrorText('Maximum of 100 characters allowed')
            setShowError(true)
            return
        } else if (values.length === 0) {
            setErrorText('Please enter a message')
            setShowError(true)
            return
        }

        const response = await postAiMessage(values)

        let newMessage: Message = response.data.result.message
        let newResponseMessage: Message = response.data.result.response

        //break line each 60 characters of newMessage and newResponseMessage (check for undefined first)
        
        newMessage.right = true

        setMessages([...messages, newMessage, newResponseMessage])

        AuthStorage.setMessages([...messages, newMessage, newResponseMessage])



        //add value to respositories array where id is the count of the array, message is the value and right is true
        //const newMessage = { id: Math.random().toString(), message: values, right: true }

        //setRepositories([...repositories, newMessage])

        setPromptValue('')
    }


    const [promptValue, setPromptValue] = useState<string>('');

    const [errorText, setErrorText] = useState('');
    const [error, setShowError] = useState(false);


    useEffect(() => {
        AuthStorage.getMessages().then((res) => {
            if (res === "undefined" || !res) {
                getMessages().then((res) => {
                    //map each value inside res.data.result to a new object with id, message and right
                    if (res.data.result === "No messages") {
                        return setMessages([])
                    }
                    const newMessages = res.data.result.map((message: any) => {
                        return {
                            id: message._id,
                            message: message.message,
                            right: message.right,
                            created_at: message.created_at,
                            udpated_at: message.updated_at
                        }
                    })
                    AuthStorage.setMessages(newMessages)
                    setMessages(newMessages)
                })
            } else {
                //transform string to object
                setMessages(JSON.parse(res))
            }
        })

    }, []);

    useEffect(() => {
        if (promptValue.length > 100) {
            setErrorText('Maximum of 100 characters allowed')
            setShowError(true)
        } else {
            setShowError(false)
            setErrorText('')
        }
    }, [promptValue])

    const messagesEndRef = useRef<FlatList | null>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollToEnd({ animated: true })
    }





    return (
        <View style={{ flexDirection: 'column', width: '100%', marginTop: 'auto', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '100%', height: Dimensions.get('window').height * 0.85, marginTop: 10, position: 'relative' }}>
                <FlatList
                    automaticallyAdjustKeyboardInsets={true}
                    showsVerticalScrollIndicator={false}
                    ref={(ref) => { messagesEndRef.current = ref; }}
                    onContentSizeChange={() => scrollToBottom()}
                    data={messages}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({ item }) => <MessageItem item={item} />}
                />
            </View>
            <View style={{ width: '100%', height: Dimensions.get('window').height * 0.1, flexDirection: 'column', marginTop: 'auto', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 10 }}>
                    <TextInput
                        onChangeText={(value: string) => setPromptValue(value)}
                        value={promptValue}
                        showsVerticalScrollIndicator={false}
                        multiline={true}
                        error={error}
                        placeholder="Type your message here"
                        style={{ backgroundColor: 'white', width: '50%', height: 40, borderRadius: 5, padding: 10, overflow: 'hidden' }}
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
                {!error && <Text style={styles.errorText}>{errorText}</Text>}

            </View>

        </View >
    );
}

export default LanguageChat