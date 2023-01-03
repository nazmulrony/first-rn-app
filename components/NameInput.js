import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const NameInput = ({ onAddName }) => {
    const [enteredName, setEnteredName] = useState("");

    function nameInputHandler(enteredText) {
        setEnteredName(enteredText);
    }
    const handleAddName = () => {
        onAddName(enteredName);
        setEnteredName("");
    };
    return (
        <View style={styles.inputContainer}>
            <TextInput
                onChangeText={nameInputHandler}
                style={styles.textInput}
                placeholder="Enter your Name"
                value={enteredName}
            />
            <Button onPress={handleAddName} title="Add Name" />
        </View>
    );
};

export default NameInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        marginBottom: 24,
    },
    textInput: {
        width: "70%",
        borderWidth: 1,
        borderColor: "#ccc",
        marginRight: 8,
        padding: 8,
    },
});
