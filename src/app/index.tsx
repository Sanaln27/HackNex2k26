import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";

const stars = [
  { x: 8, y: 12, size: 2 },
  { x: 18, y: 20, size: 1 },
  { x: 29, y: 8, size: 2 },
  { x: 41, y: 17, size: 1 },
  { x: 53, y: 10, size: 2 },
  { x: 67, y: 22, size: 1 },
  { x: 78, y: 8, size: 2 },
  { x: 91, y: 18, size: 1 },

  { x: 5, y: 35, size: 1 },
  { x: 15, y: 48, size: 2 },
  { x: 27, y: 39, size: 1 },
  { x: 38, y: 52, size: 2 },
  { x: 49, y: 34, size: 1 },
  { x: 61, y: 45, size: 2 },
  { x: 74, y: 37, size: 1 },
  { x: 88, y: 51, size: 2 },
  { x: 96, y: 42, size: 1 },

  { x: 9, y: 67, size: 2 },
  { x: 21, y: 78, size: 1 },
  { x: 34, y: 68, size: 2 },
  { x: 47, y: 84, size: 1 },
  { x: 58, y: 72, size: 2 },
  { x: 71, y: 88, size: 1 },
  { x: 83, y: 70, size: 2 },
  { x: 94, y: 82, size: 1 },

  { x: 12, y: 94, size: 1 },
  { x: 31, y: 92, size: 2 },
  { x: 54, y: 95, size: 1 },
  { x: 76, y: 94, size: 2 },
  { x: 90, y: 92, size: 1 },
];

function MicrophoneIcon({ active }: { active: boolean }) {
  return (
    <View style={styles.micIcon}>
      <View
        style={[
          styles.micBody,
          active && styles.micBodyActive,
        ]}
      />

      <View style={styles.micArc} />

      <View style={styles.micStem} />

      <View style={styles.micBase} />
    </View>
  );
}

export default function HomeScreen() {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);

  const handleAudioPress = () => {
    setListening((previous) => !previous);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#05070B"
      />

      {/* Space background */}
      <View
        style={styles.spaceBackground}
        pointerEvents="none"
      >
        {/* Stars */}
        {stars.map((star, index) => (
          <View
            key={index}
            style={[
              styles.star,
              {
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
                borderRadius: star.size / 2,
              },
            ]}
          />
        ))}
      </View>

      {/* Main content */}
      <View style={styles.content}>
        <View style={styles.centerArea}>

          {/* Assistant indicator */}
          <View
            style={[
              styles.orbit,
              listening && styles.orbitActive,
            ]}
          >
            <View
              style={[
                styles.orbitDot,
                listening && styles.orbitDotActive,
              ]}
            />
          </View>

          {/* Heading */}
          <Text style={styles.heading}>
            {listening ? "I'm listening" : "How can I help?"}
          </Text>

          <Text style={styles.helperText}>
            {listening
              ? "Speak naturally"
              : "Ask anything"}
          </Text>
        </View>

        {/* Input area */}
        <View style={styles.bottomArea}>

          <View
            style={[
              styles.inputBar,
              listening && styles.inputBarActive,
            ]}
          >
            <TextInput
              value={text}
              onChangeText={setText}
              placeholder="Ask Andromeda anything..."
              placeholderTextColor="#686D73"
              style={styles.textInput}
              multiline
              maxLength={500}
            />

            {/* Audio button */}
            <Pressable
              onPress={handleAudioPress}
              style={({ pressed }) => [
                styles.audioButton,
                listening && styles.audioButtonActive,
                pressed && styles.audioButtonPressed,
              ]}
            >
              <MicrophoneIcon active={listening} />
            </Pressable>
          </View>

          <Text style={styles.footerText}>
            ON-DEVICE • PRIVATE • OFFLINE
          </Text>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05070B",
  },

  spaceBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#05070B",
    overflow: "hidden",
  },

  star: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    opacity: 0.55,
  },

  content: {
    flex: 1,
    paddingHorizontal: 22,
    paddingBottom: 20,
  },

  centerArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  orbit: {
    width: 92,
    height: 92,
    borderRadius: 46,
    borderWidth: 1,
    borderColor: "#30353B",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
  },

  orbitActive: {
    borderColor: "#8BE7DB",
  },

  orbitDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#858B91",
  },

  orbitDotActive: {
    backgroundColor: "#8BE7DB",
  },

  heading: {
    color: "#E9EDF1",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    letterSpacing: 0.2,
  },

  helperText: {
    color: "#626970",
    fontSize: 13,
    marginTop: 9,
  },

  bottomArea: {
    width: "100%",
    alignItems: "center",
  },

  inputBar: {
    width: "100%",
    maxWidth: 700,
    minHeight: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "#30353A",
    backgroundColor: "#12151A",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 8,
  },

  inputBarActive: {
    borderColor: "#4B716D",
  },

  textInput: {
    flex: 1,
    color: "#E6E9EC",
    fontSize: 14,
    minHeight: 48,
    maxHeight: 90,
    paddingVertical: 10,
    paddingRight: 10,
  },

  audioButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#1D2228",
    borderWidth: 1,
    borderColor: "#3A4148",
    alignItems: "center",
    justifyContent: "center",
  },

  audioButtonActive: {
    backgroundColor: "#153936",
    borderColor: "#7AD9D0",
  },

  audioButtonPressed: {
    transform: [{ scale: 0.92 }],
  },

  micIcon: {
    width: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  micBody: {
    width: 10,
    height: 17,
    borderRadius: 6,
    backgroundColor: "#BFC5CA",
    position: "absolute",
    top: 1,
  },

  micBodyActive: {
    backgroundColor: "#8BE7DB",
  },

  micArc: {
    width: 19,
    height: 17,
    borderWidth: 2,
    borderTopWidth: 0,
    borderColor: "#AEB5BA",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    position: "absolute",
    top: 7,
  },

  micStem: {
    width: 2,
    height: 6,
    backgroundColor: "#AEB5BA",
    position: "absolute",
    bottom: 3,
  },

  micBase: {
    width: 12,
    height: 2,
    borderRadius: 2,
    backgroundColor: "#AEB5BA",
    position: "absolute",
    bottom: 0,
  },

  footerText: {
    color: "#41474D",
    fontSize: 9,
    letterSpacing: 2,
    marginTop: 14,
  },
});