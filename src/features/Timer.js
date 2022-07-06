import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          onProgress={() => {}}
          onEnd={() => {}}
        />
      </View>
      {!isStarted && (
        <View style={styles.buttonWrapper}>
          <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
        </View>
      )}
      {isStarted && (
        <View style={styles.buttonWrapper}>
          <RoundedButton title="Pause" onPress={() => setIsStarted(false)} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDiretion: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
