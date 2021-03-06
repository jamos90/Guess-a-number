import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colours from '../constants/colours';

const Header = props => {
    return(
        <View style={styles.header}>
            <Text styles={styles.headerText}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colours.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        color: 'black',
        fontSize: 18
    }
})

export default Header