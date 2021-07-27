
import React from 'react'
import { View, Text } from 'react-native'

interface Props{
    children:React.ReactElement,
    title:string
}
export default function SectionContainer(props:Props) {
    const {title,children}=props
    return (
        <View>
            <Text style={{fontSize:30,fontFamily:"Poppins-Bold",color:"#474746",marginLeft:8}}>{title}</Text>
            {children}
        </View>
    )
}
