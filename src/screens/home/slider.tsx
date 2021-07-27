import { isLandscape, responsiveHeight, responsiveWidth } from '@src/utiles/styles'
import React, { useEffect, useRef, useState } from 'react'
import { View, Text, FlatList, Image, Dimensions, ImageBackground, TouchableOpacity, Animated } from 'react-native'
import SectionContainer from './section-container'
const images=[
    require("@src/assets/images/slider/slide-1.png"),
    require("@src/assets/images/slider/slide-1.png"),
    require("@src/assets/images/slider/slide-1.png"),

]
const imageSize=responsiveWidth(1)
export default function HomeSlider() {
    const currentSlide=useRef(new Animated.Value(0)).current
    const  RenderItem=({index }:{index:number}) => <Animated.View   style={{maxWidth:imageSize,
        transform:[
            {scaleX:currentSlide.interpolate({
                inputRange:[(index-1)*imageSize,index*imageSize,(index+1)*imageSize],
                outputRange:[1,1.3,1],
            extrapolate:'clamp'
        })
    },
    {translateX:currentSlide.interpolate({
        inputRange:[(index-1)*imageSize,index*imageSize,(index+1)*imageSize],
        outputRange:[responsiveWidth(0.1),responsiveWidth(0.1),-responsiveWidth(0.1)],
        extrapolate:'clamp'
    })
    }

],}
    }   >
        <Image style={{maxWidth:imageSize,alignSelf:'center',left:-16,top:0,bottom:0,right:0}} resizeMode={'contain'} source={images[index]} />
    </Animated.View>
    return (
        <SectionContainer title="Discover">
            <>
            <Animated.ScrollView 
                style={{ marginTop: -16,paddingRight:responsiveWidth(0.4), }}
                contentContainerStyle={{justifyContent:'center',alignItems:'center'}}
                  horizontal
                  centerContent={true}
                  pagingEnabled={true}
                  onScroll={Animated.event(
                      [{
                        nativeEvent: {
                          contentOffset: {
                            x: currentSlide,
                          },
                        },
                      }],{useNativeDriver:true} )} 
                      showsHorizontalScrollIndicator={false}
            >
                <RenderItem index={0} />
                <RenderItem index={1} />
                <RenderItem index={2} />

            </Animated.ScrollView>
            <RenderIndecator animatedValue={currentSlide}  />
            </>
        </SectionContainer>

    )
}

const RenderIndecator=({animatedValue}:{animatedValue:Animated.Value})=>{
    const [page,setPage]=useState(0);
    useEffect(()=>{
        animatedValue.addListener(({value})=>{
            let pageNum = Math.floor(value / responsiveWidth(0.5));
            setPage(pageNum>2?2:pageNum)

        })
    },[])
   return <View style={{flexDirection:"row",position:'absolute',right:32,bottom:70}}>
    {[...Array(images.length)].map((e,i)=> {
       return  <Animated.View style={{width:5,height:5,borderRadius:5,
          backgroundColor:page==i?"orange":"#ccc"
          ,marginLeft:4}}
          />
    })}
  </View>
}