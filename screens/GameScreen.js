import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NumberContainer from '../components/NumberContainer'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(man);
    max = Math.floor(max);

    const rndNumber = Math.floor(Math.random() * (max-min)) + min;

    if (rndNumber === exclude) {
        generateRandomBetween(min,max, exclude);
    } else {
        return rndNumber;
    }
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1,100, props.userChoise));

    return (
        <View>
            <Text>Opponents Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
        </View>
    )
};


const styles = StyleSheet.create({

})

export default GameScreen;

