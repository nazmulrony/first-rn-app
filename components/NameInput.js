import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const NameInput = ({ onAddName, visible, setVisible }) => {
    const [enteredName, setEnteredName] = useState("");

    function nameInputHandler(enteredText) {
        setEnteredName(enteredText);
    }
    const handleAddName = () => {
        onAddName(enteredName);
        setEnteredName("");
    };
    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={nameInputHandler}
                    style={styles.textInput}
                    placeholder="Enter your Name"
                    value={enteredName}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            onPress={handleAddName}
                            title="Add Name"
                            color={"#4B8F8C"}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            color={"#EF476F"}
                            onPress={() => setVisible(false)}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default NameInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

        marginBottom: 24,
    },
    textInput: {
        width: "70%",
        borderWidth: 1,
        borderColor: "#ccc",
        marginRight: 8,
        padding: 8,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
    },
    button: {
        marginRight: 8,
    },
});
