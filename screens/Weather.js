import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
useState
const WeatherScreen = () => {
    return (
        <View style={styles.continer}>
            <Text style={styles.text}>Weather Screen</Text>
            <Text style={styles.text}>
                
                Today Temp is :
            </Text>
            <Button title="Pressed"/>

        </View>)
}
export default WeatherScreen;
const styles = StyleSheet.create({
    continer: {


        height: '100%',
        width: '100%',

    },
    text: {
        alignSelf: 'center',
    }
})