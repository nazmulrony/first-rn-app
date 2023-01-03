import { Pressable, StyleSheet, Text, View } from "react-native";

const NameItem = ({ itemData, onDeleteName }) => {
    const deleteNameHandler = () => {
        onDeleteName(itemData.item.id);
    };
    return (
        <Pressable onPress={deleteNameHandler}>
            <View style={styles.nameBox}>
                <Text style={styles.textName}>{itemData.item.text}</Text>
            </View>
        </Pressable>
    );
};

export default NameItem;

const styles = StyleSheet.create({
    nameBox: {
        fontSize: 20,
        backgroundColor: "#4B8F8C",
        borderRadius: 8,
        margin: 8,
        padding: 8,
    },
    textName: {
        color: "white",
    },
});
