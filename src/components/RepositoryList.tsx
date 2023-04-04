import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    flexContainerColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    fullName: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
        marginTop: 10,
    },
    description: {
        color: 'grey',
    },
    language: {
        color: 'white',
        backgroundColor: '#2986cc',
        padding: 5,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 10,
    },
    stars: {
        fontWeight: 'bold',
    },
    forks: {
        fontWeight: 'bold',
    },
    reviews: {
        fontWeight: 'bold',
    },
    rating: {
        fontWeight: 'bold',
    },
    label: {
        color: 'grey',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 15,
    },

})

const repositories = [
    {
        id: 'jaredpalmer.formik',
        fullName: 'jaredpalmer/formik',
        description: 'Build forms in React, without the tears',
        language: 'TypeScript',
        forksCount: 1589,
        stargazersCount: 21553,
        ratingAverage: 88,
        reviewCount: 4,
        ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
    },
    {
        id: 'rails.rails',
        fullName: 'rails/rails',
        description: 'Ruby on Rails',
        language: 'Ruby',
        forksCount: 18349,
        stargazersCount: 45377,
        ratingAverage: 100,
        reviewCount: 2,
        ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
    },
    {
        id: 'django.django',
        fullName: 'django/django',
        description: 'The Web framework for perfectionists with deadlines.',
        language: 'Python',
        forksCount: 21015,
        stargazersCount: 48496,
        ratingAverage: 73,
        reviewCount: 5,
        ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
    },
    {
        id: 'reduxjs.redux',
        fullName: 'reduxjs/redux',
        description: 'Predictable state container for JavaScript apps',
        language: 'TypeScript',
        forksCount: 13902,
        stargazersCount: 52869,
        ratingAverage: 0,
        reviewCount: 0,
        ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
    },
];


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <RepositoryItem styles={styles} item={item} />}
        />
    )
}



export default RepositoryList;