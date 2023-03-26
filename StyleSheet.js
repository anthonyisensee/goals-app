import { StyleSheet } from "react-native";

export const ss = StyleSheet.create({
    goalContainer: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 16,
    },

    container: {
        padding: 16,
        flex: 1,
        backgroundColor: '#FBFBFB',
    },
    item: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        marginVertical: 8,
        borderRadius: 16,
        borderColor: '#EEEEEE',
        borderWidth: 2,
    },
    header: {
        marginLeft: 4,
        marginBottom: 12,

        header_title: {
            fontSize: 32,
            marginBottom: 4,
        },
        description: {
            fontSize: 20
        },
    },
    title: {
        fontSize: 16,
    },
    newGoalButton: {
        backgroundColor: '#7285FF',
        aspectRatio: 1,
        borderRadius: 12,
        position: 'absolute',
        bottom: 16,
        right: 24,
        width: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        text: {
            color: '#FFFFFF',
            fontSize: 40,
            marginBottom: 3,
        }
    },
});