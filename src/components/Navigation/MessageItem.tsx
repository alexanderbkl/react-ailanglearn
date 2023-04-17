import Text from '../Composable/Text';
import { View, Image, Dimensions } from 'react-native';
import { StyleSheet } from "react-native";

const teacherImg = require("../../../assets/teacher.png")
const userImg = require("../../../assets/user.png")



const MessageItem = ({ item }: any) => {

    const contentAlignment = item.right ? 'flex-end' : 'flex-start';

    const styles = StyleSheet.create({
        container: {

            backgroundColor: item.right ? 'white' : '#f7ffff',
            padding: 10,
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
            display: 'flex',
            flexDirection: 'row',
            maxWidth: '80%',
            height: 'auto',
        },
        flexContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            flexWrap: 'wrap',
            width: '100%',
            height: 'auto',

        },
        flexContainerColumn: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            flexWrap: 'wrap',
            width: '100%',
            height: 'auto',


        },
        message: {
            color: 'grey',
            fontSize: 16,
            height: 'auto',

        },

        image: {
            width: 25,
            height: 25,
            borderRadius: 5,
            margin: 15,
            alignContent: contentAlignment,
        },


    });

    return (
        <View style={{ width: '100%', height: 'auto', alignItems: contentAlignment }}>
            <View style={styles.container}>
                <View style={styles.flexContainer}>

                    <View style={styles.flexContainer}>


                        <View style={styles.flexContainerColumn}>
                            {
                                item.right &&
                                <Image style={styles.image} source={userImg} />
                            }
                            {
                                !item.right &&
                                <Image style={styles.image} source={teacherImg} />
                            }
                            <Text
                                style={styles.message}>{item.message}</Text>
                        </View>

                    </View>
                </View>
            </View>
        </View>
    )
}

export default MessageItem;