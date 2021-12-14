import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Song = () => {
    return (
        <View style={styles.pages}>
            <View style={styles.iconWrapper}>
                <TouchableOpacity style={styles.iconContainer}>
                    <Text>Back Icon</Text>
                    </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                    <Text>Like Icon</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.songTitleContainer}>
                <Text style={styles.songTitle}>KJ 1 - Haleluya! Pujilah </Text>
            </View>
                <View style={styles.songDescWrapper}>
                    <Text>Do = D</Text>
                    <Text>Birama =  4 ketuk</Text>
                </View>
                <ScrollView style={styles.songWrapper}>
                    <Text style={styles.songVerse}>Reff :</Text>
                    <Text style={styles.songLyric}>Haleluya! Pujilah Allah Yang Agung, Mahaesa! Dalam Kristus kita kenal Allah Yang Hidup, Bapa kekal!</Text>
                    <Text style={styles.songVerse}>1/2</Text>
                    <Text style={styles.songLyric}>Langit, buana semesta patut memuji kuasaNya, karna berkatNya tak henti, limpah kasihNya tak terperi {"\n"}(Kembali ke Reff)</Text>
                    <Text style={styles.songVerse}>2/2</Text>
                    <Text style={styles.songLyric}>Wahai dunia, soraklah! Angkat suaramu, nyanyilah! Tabuhlah tifa dan gendang, iringi puji dalam tembang! {"\n"}(Kembali ke Reff)</Text>
                </ScrollView>
        </View>
    )
}

export default Song

const styles = StyleSheet.create({
    pages:{
        backgroundColor:'#E5E3CE',
        flex:1,
        paddingVertical:20,
    },
    iconWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:10,
        paddingHorizontal:21,
    },
    iconContainer:{
        width:32,
        height:32
    },
    songTitleContainer:{
        alignItems:'center',
    },
    songTitle:{
        fontSize:20
    },
    songDescWrapper:{
        paddingVertical:18,
        paddingHorizontal:38
    },
    songWrapper:{
        flex:1,
        marginHorizontal:5,
        paddingHorizontal:60,
        marginTop:8,
    },
    songVerse:{
        textAlign:'center',
        marginBottom:5,
        letterSpacing:0.2,
        fontSize:14
    },
    songLyric:{
        textAlign:'center',
        marginBottom:14,
        letterSpacing:0.2,
        fontSize:14
    }
})
