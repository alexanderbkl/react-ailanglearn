import Text from '../Composable/Text';
import { View, Image } from 'react-native';
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
            /*width: 'fit-content',*/
            display: 'flex',
            flexDirection: 'row',

        },
        flexContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
        },
        flexContainerColumn: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            alignContent: contentAlignment,
        },
        description: {
            color: 'grey',
            fontSize: 16,

        },

        image: {
            width: 25,
            height: 25,
            borderRadius: 5,
            marginRight: 15,
            marginLeft: 15,
            alignContent: contentAlignment,
        },


    });

    return (
        <View style={{ width: '100%', alignItems: contentAlignment }}>
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
                            <Text style={styles.description}>{item.description}</Text>
                        </View>

                    </View>
                </View>
            </View>
        </View>
    )
}

export default MessageItem;