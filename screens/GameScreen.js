import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const rndNumber = Math.floor(Math.random() * (max-min)) + min;

    if (rndNumber === exclude) {
       return generateRandomBetween(min,max, exclude);
    } else {
        return rndNumber;
    }
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1,100, props.userChoise));

    const currentLow  = useRef(1);
    const currentHigh = useRef(100);

    const nextGuessHandler = (direction) => {
        if ((direction==='lower' && currentGuess < props.userChoise) || (direction === 'higher' && currentGuess > props.userChoise)){
            Alert.alert('Do not lie', 'You know that this is wrong, please do not try to confuse the robot', [{text:'Sorry', style:'cancel'}] )
            return;
        }
        if(direction === 'lower') {
            currentHigh.current = currentGuess;
        }
        else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);    
    } 

    return (
        <View style={styles.screen}>
            <Text>Opponents Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')}/>
                <Button title="HIGHER"onPress={nextGuessHandler.bind(this, 'higher')}/>
            </Card>
        </View>
    )
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection:'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default GameScreen;

