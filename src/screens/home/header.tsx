import React from 'react'
import {

    Text,
    TouchableOpacity,
    View,
    Image,
    ImageBackground,
} from 'react-native';
export default function HomeHeader() {
    return (
            <View style={{  flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',padding:8,}}>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity>
                        <Image source={require('@src/assets/images/menu.png')} />
                    </TouchableOpacity>
                    <ImageBackground resizeMode='stretch' source={require('@src/assets/images/header-title-bg.png')} style={{ justifyContent: 'center', padding: 4, paddingRight: 16, margin: 4, marginLeft: 8, flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ marginHorizontal: 4 }} source={require('@src/assets/images/location-icon.png')} />
                        <Text style={{ color: "#fff", fontSize: 12 }}>Oxford Street</Text>
                    </ImageBackground>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center',}}>
                    <TouchableOpacity style={{}}>
                        <Image source={require('@src/assets/images/notification-icon.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:8,width:50}}>

                        <Image source={require('@src/assets/images/profile-avatar.png')} />
                    </TouchableOpacity>
                </View>
             
            </View>


    )
}
