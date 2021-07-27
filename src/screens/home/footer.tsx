import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export default function Footer() {
    const tabs=[
        {
            title:"Home",
            Icon:()=><AntDesign name="home"  size={24} />
        },
        {
            title:"Search",
            Icon:()=><AntDesign name="search1"  size={24} />
        },
        {
            title:"Orders",
            Icon:()=><SimpleLineIcons name="screen-smartphone"  size={24} />
        },
        {
            title:"Rewards",
            Icon:()=><SimpleLineIcons name="badge"  size={24} />
        },
    
    ]
    return (
        <View style={styles.container}>
            {tabs.map(({Icon,title})=>(
                <TouchableOpacity style={styles.itemButton}>
                    <Icon/>
                    <Text style={styles.itemText}>{title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles=StyleSheet.create({
    container:{position:'absolute',left:0,right:0,bottom:0,backgroundColor:"#E9CE25",flexDirection:'row',alignItems:'center',justifyContent:'space-around'},
    itemButton:{alignItems:'center',paddingVertical:4},
    itemText:{fontSize:14,fontWeight:'bold'}

})
