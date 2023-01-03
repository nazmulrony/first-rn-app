import { useState } from "react";
import {
    Button,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import NameInput from "./components/NameInput";
import NameItem from "./components/NameItem";

export default function App() {
    const [names, setNames] = useState([]);

    const addNameHandler = (enteredName) => {
        setNames((currentNames) => [
            ...names,
            { text: enteredName, id: Math.random().toString() },
        ]);
        console.log(names);
    };
    const deleteNameHandler = (id) => {
        setNames(names.filter((name) => name.id !== id));
    };
    return (
        <View style={styles.appContainer}>
            <NameInput onAddName={addNameHandler} />
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
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
    },

    nameContainer: {
        flex: 5,
    },
});
