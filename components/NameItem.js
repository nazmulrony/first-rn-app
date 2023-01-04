import { Pressable, StyleSheet, Text, View } from "react-native";

const NameItem = ({ itemData, onDeleteName }) => {
    const deleteNameHandler = () => {
        onDeleteName(itemData.item.id);
    };
    return (
        <View style={styles.nameBox}>
            <Pressable
                android_ripple={{ color: "#41817e" }}
                onPress={deleteNameHandler}
                //for IOS
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.textName}>{itemData.item.text}</Text>
            </Pressable>
        </View>
    );
};

export default NameItem;

const styles = StyleSheet.create({
    nameBox: {
        fontSize: 20,
        backgroundColor: "#4B8F8C",
        borderRadius: 8,
        margin: 8,
    },
    pressedItem: {
        opacity: 0.5,
    },
    textName: {
        color: "white",
        padding: 8,
    },
});
