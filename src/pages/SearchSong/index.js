import React from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const SearchSong = () => {
    return (
        <View style={styles.page}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.hamburgerContainer}>
                    <Text>ham Icon</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>Kidung Pujian</Text>   
            </View>
            <View style={styles.searchWrapper}>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.searchText} placeholder='Cari lagu berdasarkan nomor/judul/isi'/>
                </View>
            </View>
            <View style={styles.showWrapper}>
                <Text style={styles.showText}>Tampilkan : </Text>
                <TouchableOpacity style={styles.showButtonContainer}>
                    <Text style={styles.showButtonText}>Semua</Text> 
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.songsWrapper}>
                <View style={styles.songsContainer}>
                    <TouchableOpacity style={styles.songsTextWrapper}>
                        <Text style={styles.songsText}>KJ 1 - Haleluya! Pujilah</Text>
                        <Text style={styles.songsSubText}>Puji-pujian dan Pembukaan Ibadah</Text>  
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addSongs}>
                        <Text>Add Icon</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.songsContainer}>
                    <TouchableOpacity style={styles.songsTextWrapper}>
                        <Text style={styles.songsText}>KJ 2 - Suci, Suci, Suci</Text>
                        <Text style={styles.songsSubText}>Puji-pujian dan Pembukaan Ibadah</Text>  
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addSongs}>
                        <Text>Add Icon</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.songsContainer}>
                    <TouchableOpacity style={styles.songsTextWrapper}>
                        <Text style={styles.songsText}>KJ 3 - Kami Puji dengan Riang!</Text>
                        <Text style={styles.songsSubText}>Puji-pujian dan Pembukaan Ibadah</Text>  
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addSongs}>
                        <Text>Add Icon</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.songsContainer}>
                    <TouchableOpacity style={styles.songsTextWrapper}>
                        <Text style={styles.songsText}>KJ 4 - Hai Mari Sembah</Text>
                        <Text style={styles.songsSubText}>Puji-pujian dan Pembukaan Ibadah</Text>  
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addSongs}>
                        <Text>Add Icon</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.songsContainer}>
                    <TouchableOpacity style={styles.songsTextWrapper}>
                        <Text style={styles.songsText}>KJ 5 - Tuhan Allah, Namamu</Text>
                        <Text style={styles.songsSubText}>Puji-pujian dan Pembukaan Ibadah</Text>  
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addSongs}>
                        <Text>Add Icon</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.songsContainer}>
                    <TouchableOpacity style={styles.songsTextWrapper}>
                        <Text style={styles.songsText}>KJ 6 - Hai Masyhurkanlah!</Text>
                        <Text style={styles.songsSubText}>Puji-pujian dan Pembukaan Ibadah</Text>  
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addSongs}>
                        <Text>Add Icon</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.songsContainer}>
                    <TouchableOpacity style={styles.songsTextWrapper}>
                        <Text style={styles.songsText}>KJ 7 - Ya Tuhan, Kami Puji Namamu Besar</Text>
                        <Text style={styles.songsSubText}>Puji-pujian dan Pembukaan Ibadah</Text>  
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addSongs}>
                        <Text>Add Icon</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.songsContainer}>
                    <TouchableOpacity style={styles.songsTextWrapper}>
                        <Text style={styles.songsText}>KJ 8 - Bagimu Tuhan, Nyanyianku</Text>
                        <Text style={styles.songsSubText}>Puji-pujian dan Pembukaan Ibadah</Text>  
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addSongs}>
                        <Text>Add Icon</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.songsContainer}>
                    <TouchableOpacity style={styles.songsTextWrapper}>
                        <Text style={styles.songsText}>KJ 9 - Pujilah Hai Jiwaku, Puji Tuhan</Text>
                        <Text style={styles.songsSubText}>Puji-pujian dan Pembukaan Ibadah</Text>  
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addSongs}>
                        <Text>Add Icon</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.songsContainer}>
                    <TouchableOpacity style={styles.songsTextWrapper}>
                        <Text style={styles.songsText}>KJ 10 - Pujilah Tuhan, Sang Raja</Text>
                        <Text style={styles.songsSubText}>Puji-pujian dan Pembukaan Ibadah</Text>  
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addSongs}>
                        <Text>Add Icon</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.songsContainer}>
                    <TouchableOpacity style={styles.songsTextWrapper}>
                        <Text style={styles.songsText}>KJ 11 - Anak - anak Mari Nyanyi</Text>
                        <Text style={styles.songsSubText}>Puji-pujian dan Pembukaan Ibadah</Text>  
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addSongs}>
                        <Text>Add Icon</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.songsContainer}>
                    <TouchableOpacity style={styles.songsTextWrapper}>
                        <Text style={styles.songsText}>KJ 12 - Anak - anak Pujilah</Text>
                        <Text style={styles.songsSubText}>Puji-pujian dan Pembukaan Ibadah</Text>  
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addSongs}>
                        <Text>Add Icon</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default SearchSong

const styles = StyleSheet.create({
    page:{
        flex: 1,
        backgroundColor: '#F3EFCC'
    },
    header:{
        backgroundColor:'#406343',
        paddingVertical:7,
        paddingLeft:5,
        flexDirection:'row',
        alignItems:'center'
    },
    hamburgerContainer:{
        backgroundColor:'#203421',
        width:45,
        height:45,
        borderRadius:2,
        alignItems:'center',
        justifyContent:'center'
    },
    headerText:{
        marginLeft:12,
        letterSpacing:0.2,
        fontWeight:'bold',
        fontSize:18,
        color:'#E5E3CE',
    },
    searchWrapper:{
        backgroundColor:'rgba(64,99,67,0.5)',
        paddingVertical:8,
        paddingHorizontal:5,
    },
    searchContainer:{
        backgroundColor:'rgba(229,229,229,0.5)',
        borderWidth:1,
        borderRadius:2,
        borderColor:'rgba(0,0,0,0.2)',
        paddingHorizontal:8,
    },
    searchText:{
        fontSize:14,
        color:'rgba(0,0,0,0.5)'
    },
    showWrapper:{
        backgroundColor:'rgba(64,99,67,0.25)',
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.5)',
        borderRadius:2,
        marginVertical:4,
        marginHorizontal:5,
        padding:6,
        flexDirection:'row',
        alignItems:'center'
    },
    showText:{
        fontSize:14,
        color:'rgba(0,0,0,0.75)'
    },
    showButtonContainer:{
        backgroundColor:'rgba(229,229,229,0.5)',
        borderWidth:1,
        borderRadius:4,
        borderColor:'rgba(0,0,0,0.5)',
        padding:5,
        marginLeft:4
    },
    showButtonText:{
        fontSize:12,
        fontWeight:'bold',
        color:'rgba(0,0,0,0.75)'
    },
    songsWrapper:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.2)',
        margin:5,
        borderRadius:2,
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.5)'
    },
    songsContainer:{
        marginHorizontal:8,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:10,
        borderBottomWidth:1
    },
    songsTextWrapper:{
        maxWidth:328,
    },
    songsText:{
        fontSize:14,
        color:'#000000',
        letterSpacing:0.2,
    },
    songsSubText:{
        fontSize:11,
        color:'rgba(0,0,0,0.70)',
        letterSpacing:0.2,
    },
    addSongs:{
        alignItems:'center',
        backgroundColor:'yellow',
        width:32,
        height:32
    }
})
