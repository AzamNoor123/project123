import React from 'react';
import WebView from 'react-native-webview';
import { Text, View, StyleSheet, SafeAreaView, BackHandler, Button, ActivityIndicator, } from 'react-native';
import { useState, useEffect, useRef } from 'react';
const PdfScreen = () => {


    const loading = () => (
        <View>
            <ActivityIndicator size={'large'} style={{ alignSelf: 'center' }} />
        </View>
    );


    return (


        <SafeAreaView>

            <View style={styles.container}>
                <WebView source={{ uri: "http://www.africau.edu/images/default/sample.pdf" }}
                    startInLoadingState={true}
                    renderLoading={loading}
                    bounces={false}
                >

                </WebView>
            </View>
        </SafeAreaView>



    )
}
export default PdfScreen;
const styles = StyleSheet.create({
    container: {
        width: '100%',

        height: "100%",

        backgroundColor: 'red',

    }
})
