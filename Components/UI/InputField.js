import { Button, StyleSheet, TextInput, View, Platform } from "react-native";
import ThemedText from "../ThemedText";
import { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import DateTimePicker from "@react-native-community/datetimepicker";

function InputField({ type, title, content, field, setData }) {
  const { theme } = useContext(ThemeContext);
  const [date, setDate] = useState(content || new Date());
  const [showPicker, setShowPicker] = useState(false);

  let themeStyles = [
    {
      backgroundColor: theme.background,
      color: theme.text,
    },
    !content.isValid && styles.error,
  ];

  function inputChangedHandler(enteredValue) {
    const required = content?.required ?? false;
    const isValid = required ? enteredValue.trim().length > 0 : true;
    const newContent = { value: enteredValue, required, isValid };

    setData((prevInputValues) => ({
      ...prevInputValues,
      [field]: newContent,
    }));
  }

  let inputElement = null;
  if (type === "textarea") {
    inputElement = (
      <TextInput
        style={[styles.input, styles.textarea, ...themeStyles]}
        multiline
        numberOfLines={4}
        value={content.value}
        onChangeText={inputChangedHandler}
      />
    );
  } else if (type === "date") {
    inputElement = (
      <View>
        <Button
          title={
            date instanceof Date
              ? date.toDateString()
              : new Date(date).toDateString()
          }
          onPress={() => setShowPicker(true)}
        />
        {showPicker && (
          <DateTimePicker
            value={date instanceof Date ? date : new Date(date)}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={(event, selectedDate) => {
              const currentDate = selectedDate || date;
              setShowPicker(Platform.OS === "ios");
              setDate(currentDate);
              setData((prev) => ({ ...prev, [field]: currentDate }));
            }}
          />
        )}
      </View>
    );
  } else {
    // default/number
    inputElement = (
      <TextInput
        keyboardType={type === "number" ? "decimal-pad" : "default"}
        style={[styles.input, ...themeStyles]}
        value={content.value}
        onChangeText={inputChangedHandler}
      />
    );
  }
  //console.log("INPUT");
  //console.log(content);
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
    marginTop: 10,
    gap: 12,
  },
  input: {
    fontSize: 16,
    padding: 16,
    borderRadius: 8,
    textAlign: "right",
  },
  textarea: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  error: {
    borderColor: "red",
    borderWidth: 2,
  },
});
