import { StyleSheet, Text, View } from "react-native";

const NameItem = ({ itemData }) => {
    return (
        <View style={styles.nameBox}>
            <Text style={styles.textName}>{itemData.item.text}</Text>
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
        padding: 8,
    },
    textName: {
        color: "white",
    },
});
