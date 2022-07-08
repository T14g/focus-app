import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { colors } from "./src/utils/colors";
import { Focus } from "./src/features/Focus";
import { Timer } from "./src/features/Timer";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState('teste');

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <View style={styles.viewTimer}> 
          <Timer
            focusSubject={currentSubject}
            onTimerEnd={() => {}}
            clearSubject={() => setCurrentSubject(null)}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
  viewTimer : {
    flex: 1
  },  
  textStyle: {
    color: "#fff",
  },
});
