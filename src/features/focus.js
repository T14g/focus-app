import React, { usestate } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";

export const Focus = () => {
    const [subject, setSubject] = usestate(null);

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    label="What would you like to focus on?"
                    onChangeText={(val) => setSubject(val)}
                    value={subject}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputContainer: {
        justifyContent: 'flex-start',
        padding: 25
    },
    text: {
        color: colors.white
    }
});