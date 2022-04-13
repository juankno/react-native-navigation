import { StyleSheet } from 'react-native';

export const colors = {

    primary: '#5856D6',

};

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    bold: {
        fontWeight: 'bold',
        color: 'black',
    },

    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
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

    bigButton: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    bigButtonText: {
        color: 'white',
        fontSize: 18,
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
        alignSelf: 'center',
        marginHorizontal: 10,
    },

});
