import { StyleSheet, View, Text } from "react-native";




function Box(props) {
    return(
        <View styles= {styles.box}>
            <Text styles={styles.label}>{props.message}</Text>
        </View>
    );
}

export default Box;

const styles = StyleSheet.create({
    box: {
        width: 85,
        height: 85,
        backgroundColor: 'blue'
    },
    label: {
        color: 'blue'
    }
});