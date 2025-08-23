import { Button, StyleSheet, TextInput, View } from "react-native";
import ThemedText from "../ThemedText";
import { useContext, useState } from "react";
import { ThemeContext } from "../../App";

function InputField({ type, title, content }) {
  const { theme } = useContext(ThemeContext);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  let inputProps = {};
  let themeStyles = {
    backgroundColor: theme.headerBackground,
    color: theme.text,
  };

  let inputElement = null;
  if (type === "number") {
    inputElement = (
      <TextInput
        style={[styles.input, themeStyles]}
        keyboardType="numeric"
        value={content}
      />
    );
  } else if (type === "textarea") {
    inputElement = (
      <TextInput
        style={[styles.input, styles.textarea, themeStyles]}
        multiline
        numberOfLines={4}
        value={content}
      />
    );
  } else if (type === "date") {
    inputElement = (
      <View>
        <Button
          title={date.toDateString()}
          onPress={() => setShowPicker(true)}
        />
        {showPicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={(event, selectedDate) => {
              const currentDate = selectedDate || date;
              setShowPicker(Platform.OS === "ios");
              setDate(currentDate);
            }}
          />
        )}
      </View>
    );
  } else {
    inputElement = (
      <TextInput style={[styles.input, themeStyles]} value={content || ""} />
    );
  }

  return (
    <View style={styles.container}>
      <ThemedText>{title}</ThemedText>
      {inputElement}
    </View>
  );
}

export default InputField;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
  },
  input: {
    fontSize: 16,
    padding: 16,
    borderRadius: 12,
    textAlign: "right",
  },
  textarea: {
    minHeight: 150,
    textAlignVertical: "top",
  },
});
