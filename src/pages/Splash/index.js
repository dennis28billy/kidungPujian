import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Splash = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.text}>
                Kidung Pilihan
            </Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page: { 
        backgroundColor:'#32502E', 
        flex: 1, 
        justifyContent: 'center', 
        alignItems:'center' 
    },
    text: { 
        fontSize: 36,
        fontWeight: '700',
        color: '#DDDDDD',
    }
})
