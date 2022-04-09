import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    globalMargin: {
        marginHorizontal: 10,
        marginVertical: 10,
    },

    title: {
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center',
    },

    button: {
        backgroundColor: '#20232A',
        borderRadius: 20,
        padding: 10,
        width: 200,
        margin: 10,
    },
    textButton: {
        color: '#FFFFFF',
        alignSelf: 'center',
        fontWeight: 'bold',
    },

    avatarContainer: {
        alignItems: 'center',
        padding: 10,
    },

    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
        alignSelf: 'center',
    },

    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 40,
    },

    menuButton: {
       marginVertical: 10,
    },

    menuText: {
        fontSize: 20,
    },

});
