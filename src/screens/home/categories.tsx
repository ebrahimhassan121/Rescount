import { responsiveWidth } from '@src/utiles/styles'
import React from 'react'
import { View, Text, FlatList,Image, ImageSourcePropType, TouchableOpacity, StyleSheet } from 'react-native'
import SectionContainer from './section-container'

interface iItem{
    backgroundColor:string,
    title:string,
    icon:ImageSourcePropType
}
const data:iItem[]=[
    {
        backgroundColor:"#E9F3D4",
        title:"Reservation",
        icon:require('@src/assets/images/categories/reservation.png')
    },
    {
        backgroundColor:"#C6F2E8",
        title:"Join Table",
        icon:require('@src/assets/images/categories/join-table.png')
    },
    {
        backgroundColor:"#FFD8D8",
        title:"Reservation & Pre Order",
        icon:require('@src/assets/images/categories/Reservation-And-Preorder.png')
    },
    {
        backgroundColor:"#FFD8D8",
        title:"Pick Up",
        icon:require('@src/assets/images/categories/take-away.png')
    }
   
]
export default function HomeCategories() {
    return (
        <View style={{marginTop:-30}}>
      <SectionContainer title="Categories">
            <View style={styles.catsContainer}>
                {[[...data,...data].map((e,index)=><RenderItem item={e}  />)]}
            </View>
      </SectionContainer>
      </View>
    )
}

const RenderItem=({item}:{item:iItem})=>(
    <TouchableOpacity style={styles.itemContainer}>
    <View style={[styles.imageContainer,{backgroundColor:item.backgroundColor,}]}>
        <Image source={item.icon} style={{}} resizeMode='contain'  />
    </View>
        <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
)

const styles=StyleSheet.create({
    catsContainer:{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around',},
    catRowConinter:{paddingHorizontal:4,marginTop:8},
    itemContainer:{alignItems:'center',marginHorizontal:4,maxWidth:responsiveWidth(0.24)},
    itemTitle:{fontSize:12,fontFamily:"Poppins-Medium",fontWeight:'900',marginTop:4,textAlign:'center'},
    imageContainer:{borderRadius:14,padding:4,minHeight:60,minWidth:80,justifyContent:'center',alignItems:'center'}
})