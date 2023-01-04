import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import NameInput from "./components/NameInput";
import NameItem from "./components/NameItem";

export default function App() {
    const [names, setNames] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    const addNameHandler = (enteredName) => {
        setNames((currentNames) => [
            ...names,
            { text: enteredName, id: Math.random().toString() },
        ]);
        // console.log(names);
        setModalIsVisible(false);
    };
    const deleteNameHandler = (id) => {
        setNames(names.filter((name) => name.id !== id));
    };
    return (
        <>
            <StatusBar style="light" />
            <View style={styles.appContainer}>
                <Button
                    onPress={() => setModalIsVisible(true)}
                    title="Add New Name"
                    color="#70c7c3"
                />
                {modalIsVisible && (
                    <NameInput
                        onAddName={addNameHandler}
                        visible={modalIsVisible}
                        setVisible={setModalIsVisible}
                    />
                )}
                <View style={styles.nameContainer}>
                    <FlatList
                        data={names}
                        renderItem={(itemData) => {
                            return (
                                <NameItem
                                    itemData={itemData}
                                    onDeleteName={deleteNameHandler}
                                />
                            );
                        }}
                        keyExtractor={(item, idex) => {
                            return item.id;
                        }}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        backgroundColor: "#1b6a66",
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
    },

    nameContainer: {
        flex: 5,
    },
});
