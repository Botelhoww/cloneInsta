import React from 'react';
import { View, FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

import options from '../../../assets/options.png'
import like from '../../../assets/like.png'
import comment from '../../../assets/comment.png'
import save from '../../../assets/save.png'
import send from '../../../assets/send.png'
import logo from '../../../assets/logo.png'
import igtv from '../../../assets/igtv.png'
import camera from '../../../assets/camera.png'
import icon from '../../../assets/icon.png'


function Feed() {

const posts = [
    {
        id: '1',
        autor: 'Bolheto',
        local: 'Filipinas',
        urlFoto: 'https://s3.amazonaws.com/files.shopmoment.com/general/momentist/Sam-6.jpg?mtime=20170407124646',
        likes: 'neymarjr e outras pessoas',
        descricao: 'De tirar o folego!!',
        hashtags: '#filipinas #view'
    },
    {
        id: '2',
        autor: 'Bolheto',
        local: 'New York City',
        urlFoto: 'https://i.pinimg.com/564x/10/17/a5/1017a50b00d69b72ee7c4db29138e206.jpg',
        likes: 'samuelkins e outras pessoas',
        descricao: 'Saudade de acordar com essa vista!!',
        hashtags: '#newyork'
    },
    {
        id: '3',
        autor: 'Bolheto',
        local: 'Indra no Brasil',
        urlFoto: 'https://pbs.twimg.com/media/D7H1QNWWkAAmCOY?format=jpg&name=medium',
        likes: 'ausentejogandocs e outras pessoas',
        descricao: 'Céu hoje tava de brincadeira!',
        hashtags: '#sky'
    },
    
];

function renderItem({ item: post }){
    return (
        <View style={styles.post}>
            <View style={styles.postHeader}>
                <View style={styles.userInfo}>
                    <Text style={styles.autor}>{post.autor}</Text> 
                    <Text style={styles.local}>{post.local}</Text>
                </View>
                
                <View style={styles.postOptions}>
                    <TouchableOpacity>
                    <Image source={options}/>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                 <View>
                    <Image style={styles.urlFoto} source={{ uri: post.urlFoto }}/>
                </View>
            </View>

            <View style={styles.footer}>
                <View style={styles.actions}>
                    <View style={styles.leftActions}>
                        <TouchableOpacity style={styles.action}>
                                <Image source={like}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action}>
                                <Image source={comment}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                                <Image source={send}/>
                        </TouchableOpacity>
                    </View>

                    <View>
                    <TouchableOpacity>
                                <Image source={save}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.CurtidoPor}>
                    <Text style={styles.CurtidoPor}>Curtido por </Text>      
                    <Text style={styles.likes}>{post.likes}</Text>
                </View>

                <Text style={styles.hashtags}>{post.hashtags}</Text>
                <Text style={styles.descricao}>{post.descricao}</Text>
            </View>
        </View>
    );
}

    return (
        <View>
            <FlatList
                data = {posts}
                keyExtractor={(item) => {item.id}}
                renderItem={renderItem}
            />
        </View> 
    )
};

const styles = StyleSheet.create({
    post:{
        marginVertical: 12
    },
    CurtidoPor:{
        flexDirection: 'row',
        fontSize: 13
        },
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: "center",
        marginBottom: 15
    },
    postOptions: {},
    userInfo: {},
    autor: {
        fontSize: 14,
        color: "#000",
        fontWeight: "bold"
    },
    local: {
        fontSize: 12,
        color: '#666'
    },
    urlFoto: {
        width: '100%',
        height: 400
    },
    footer: {
        paddingHorizontal: 15,
    },
    leftActions:{
        flexDirection: "row"
    },
    actions:{
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingVertical: 10

    },
    action:{
        marginRight: 8
    },
    likes:{
        fontWeight: "bold",
        fontSize: 13
    },
    hashtags:{
        color: '#002D5E'
    },
    descricao:{
        color: '#000',
        lineHeight: 18
    }
});

export default Feed;