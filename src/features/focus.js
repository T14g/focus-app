import React, { useState, usestate } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import { RoundedButton } from "../components/RoundedButton";

export const Focus = () => {
    const [subject, setSubject] = useState(null);
    console.log(subject);
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    label="What would you like to focus on?"
                    onChangeText={(val) => setSubject(val)}
                    style={styles.textInput}
                />
                <View style={styles.button}>
                    <RoundedButton title="+" size={50}  />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textInput : {
        flex: 0.9,
        marginRight: 20
    },
    button: {
        justifyContent: 'center' 
    },
    inputContainer: {
        justifyContent: 'flex-start',
        padding: 25,
        flexDirection: 'row'
    },
    text: {
        color: colors.white
    }
});