import { Button, StyleSheet, TextInput, View, Platform } from "react-native";
import ThemedText from "../ThemedText";
import { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import DateTimePicker from "@react-native-community/datetimepicker";

function InputField({
  type,
  title,
  content: initialContent,
  field,
  setProductData,
}) {
  const { theme } = useContext(ThemeContext);
  const [content, setContent] = useState(initialContent || "");
  const [date, setDate] = useState(initialContent || new Date());
  const [showPicker, setShowPicker] = useState(false);

  let themeStyles = {
    backgroundColor: theme.background,
    color: theme.text,
  };

  function inputChangedHandler(enteredValue) {
    const required = content?.required ?? false;
    const isValid = required ? enteredValue.trim().length > 0 : true;

    const newContent = { value: enteredValue, required, isValid };
    setContent(newContent);

    setProductData((prevInputValues) => ({
      ...prevInputValues,
      [field]: newContent,
    }));
  }

  let inputElement = null;
  if (type === "textarea") {
    inputElement = (
      <TextInput
        style={[
          styles.input,
          styles.textarea,
          themeStyles,
          content.isValid ? "" : styles.error,
        ]}
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
              setProductData((prev) => ({ ...prev, [field]: currentDate }));
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
        style={[styles.input, themeStyles, content.isValid ? "" : styles.error]}
        value={content.value}
        onChangeText={inputChangedHandler}
      />
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
    gap: 12,
  },
  input: {
    fontSize: 16,
    padding: 16,
    borderRadius: 8,
    textAlign: "right",
  },
  textarea: {
    minHeight: 150,
    textAlignVertical: "top",
  },
  error: {
    borderColor: "red",
    borderWidth: 2,
  },
});
