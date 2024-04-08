import React from 'react';
import { WebView } from 'react-native-webview';
import { Text, View, StyleSheet, SafeAreaView, BackHandler, Button, ActivityIndicator, } from 'react-native';
// import { TapGestureHandler, RotationGestureHandler,GestureHandlerRootView } from 'react-native-gesture-handler';
import { useState, useEffect, useRef } from 'react';
const WebScreen = () => {
    const ref = useRef();
    const loading = () => (
        <View>
            <ActivityIndicator size={'large'} style={{ alignSelf: 'center' }} color={'red'} />
        </View>
    )


    return (


        <SafeAreaView>
            <View>
                <Button title='Back' onPress={() => { ref.current?.goBack() }} />
            </View>
            <View style={styles.container}>
                <WebView source={{ uri: 'https://reactnative.dev/' }}
                    startInLoadingState={true}
                    renderLoading={loading}
                >

                </WebView>
            </View>
        </SafeAreaView>




    )
}
export default WebScreen;
const styles = StyleSheet.create({
    container: {
        width: '100%',

        height: "100%",

        backgroundColor: 'red',

    }
})


