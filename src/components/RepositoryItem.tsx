import Text from './Text';
import { View, Image } from 'react-native';


const RepositoryItem = ({ item, styles }: any) => {

    //function to convert thousands to K and round to 1 decimal
    const convertToK = (num: number) => {
        if (num > 999 && num < 1000000) {
            return (num / 1000).toFixed(1) + 'K';
        } else if (num > 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num < 900) {
            return num;
        }
    }

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.flexContainer}>
                    <View style={styles.flexContainer}>
                        <Image style={styles.image} source={{ uri: item.ownerAvatarUrl }} />
                        <View style={styles.flexContainerColumn}>
                            <Text style={styles.fullName}>{item.fullName}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                            <Text style={styles.language}>{item.language}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.flexContainer}>
                    <View style={styles.flexContainer}>
                        <Text style={styles.stars}>{convertToK(item.stargazersCount)}</Text>
                        <Text style={styles.label}> Stars</Text>
                    </View>
                    <View style={styles.flexContainer}>
                        <Text style={styles.forks}>{convertToK(item.forksCount)}</Text>
                        <Text style={styles.label}> Forks</Text>
                    </View>
                    <View style={styles.flexContainer}>
                        <Text style={styles.reviews}>{convertToK(item.reviewCount)}</Text>
                        <Text style={styles.label}> Reviews</Text>
                    </View>
                    <View style={styles.flexContainer}>
                        <Text style={styles.rating}>{convertToK(item.ratingAverage)}</Text>
                        <Text style={styles.label}> Rating</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default RepositoryItem;