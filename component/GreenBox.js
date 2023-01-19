import { StyleSheet, View, Text } from "react-native";




function GreenBox(props) {
    return(
        <View styles= {styles.box}>
            <Text styles={styles.label}>{props.message}</Text>
        </View>
    );
}

export default GreenBox;

const styles = StyleSheet.create({
    box: {
        width: 85,
        height: 85,
        backgroundColor: 'blue'
    },
    label: {
        color: 'green'
    }
});