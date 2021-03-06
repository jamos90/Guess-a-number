import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const GameOver = props => {
    return(
        <View>
            <Text> The Game is Over!</Text>
            <Text>Number of rounds: {props.roundsNumber}</Text>
            <Text> Number was: {props.userNumber}</Text>
            <Button title="New Game" onPress={props.newGame} />
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