import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const GameOver = props => {
    return(
        <View>
            <Text>Game Over!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default GameOver;