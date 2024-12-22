import { StyleSheet } from "react-native";
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  keyboardWrapper: {
    flex: 1,
    position: "relative", // Absolute positioning for accidental keys
    flexDirection: "row", // Flex layout for natural keys
  },
  key: {
    display: "flex", // For layout of note labels inside keys
    flexDirection: "row",
  },
  accidentalKey: {
    backgroundColor: "#555",
    borderColor: "rgb(24,24,24)",
    borderWidth: 2, // Specifies the width of the border
    borderTopWidth: 1, // Override the top border width
    borderTopColor: "transparent", // Override the top border color
    borderBottomLeftRadius: 4, // Apply radius to the bottom-left corner
    borderBottomRightRadius: 4, // Apply radius to the bottom-right corner
    height: "66%", // Slightly shorter than natural keys
    zIndex: 1, // Overlay on top of natural keys
    position: "absolute",
    top: 0,
  },
  naturalKey: {
    backgroundColor: "#f6f5f3", // Background color
    borderWidth: 1, // Border width
    borderColor: "s", // Border color
    borderBottomLeftRadius: 6, // Bottom-left corner radius
    borderBottomRightRadius: 6, // Bottom-right corner radius
    zIndex: 0, // Z-index equivalent in React Native
    flex: 1, // Flexbox to distribute space equally
    marginRight: 1, // Right margin
  },
  lastNaturalKey: {
    marginRight: 0, // Remove extra margin for the last natural key
  },

  // Key which is being pressed
  activeKey: {
    backgroundColor: "#3ac8da",
  },
  activeAccidentalKey: {
    borderWidth: 1, // Default border width
    borderColor: "#fff", // Default border color
    borderTopWidth: 1, // Top border width
    borderTopColor: "#3ac8da", // Top border color override
    height: "65%", // Height as a percentage
  },
  activeNaturalKey: {
    borderWidth: 1, // Border width
    borderColor: "#3ac8da", // Border color
    height: "98%", // Slight height reduction for "pushed-down" effect
  },

  disabledAccidentalKey: {
    borderWidth: 1,
    backgroundColor: "#ddd",
    borderColor: "#999",
  },
  disabledNaturalKey: {
    borderWidth: 1,
    backgroundColor: "#eee",
    borderColor: "#aaa",
  },

  noteLabelContainer: {
    flex: 1,
    alignSelf: "flex-end", // Align note labels to the bottom
  },
  noteLabel: {
    fontSize: moderateScale(10, 0.7),
    textAlign: "center",
    textTransform: "capitalize", // Capitalize text
  },
  accidentalNoteLabel: {
    color: "#f8e8d5",
    marginBottom: 3,
  },
  naturalNoteLabel: {
    color: "#888",
    marginBottom: 3,
  },
  activeNaturalNoteLabel: {
    color: "#f8e8d5",
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;