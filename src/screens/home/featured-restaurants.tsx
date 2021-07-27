import { responsiveWidth } from '@src/utiles/styles'
import React from 'react'
import { View, Text, FlatList, Image, ImageSourcePropType, TouchableOpacity, StyleSheet } from 'react-native'
import SectionContainer from './section-container'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
interface iItem {
    resturant: {
        icon: ImageSourcePropType,
        location: string,
        status: string,
        delivery: string,
        rate: number,
        distance: string,
    },
    price: string,
    title: string,
    image: ImageSourcePropType,
    isFeatured: boolean
}
const data: iItem[] = [
    {
        title: "Mcdonald's",
        image: require('@src/assets/images/featured-resturants/burger.png'),
        resturant: {
            icon: require('@src/assets/images/featured-resturants/macdonals-logo.png'),
            location: "Middle Eastern, Halal",
            distance: "9220.1 km",
            delivery: "Delivery: $12",
            status: 'Closed',
            rate: 4.0,
        },
        price: "Avg. $20 / person",
        isFeatured: true,

    },


]
export default function HomeFeaturedRestaurants() {
    return (
        <View style={{ marginTop: 8 }}>
            <SectionContainer title="Featured Restaurants">
                <FlatList
                    renderItem={RenderItem}
                    contentContainerStyle={{ flex: 1, paddingHorizontal: 8 }}
                    data={[...data,...data,...data]}
                />
            </SectionContainer>
        </View>
    )
}

const RenderItem = ({ item }: { item: iItem }) => (
    <TouchableOpacity style={styles.itemContainer}>
        <Image source={item.image} resizeMode='cover' style={styles.itemImage} />
        <View style={styles.detailsContainer}>
            <View style={styles.logoContainer}>
                <Image source={item.resturant.icon} style={{borderRadius:8}}  />
            </View>
            <View style={styles.itemRowContainer}>
                <Text style={styles.itemRowTitle}>{item.title}</Text>
                <View style={styles.itemRateContainer}>
                    <View style={styles.itemRateDetailsContainer}>
                        <AntDesignIcon name="star" color="#E9D023" size={18} />
                        <Text style={styles.rateText}>({item.resturant.rate.toPrecision(2)})</Text>
                    </View>
                    <Text style={styles.itemStatusText}>{item.resturant.status}</Text>
                </View>
            </View>

            <View style={styles.itemRowContainer}>
                <Text style={styles.itemLocationText}>{item.resturant.location}</Text>
                <Text style={styles.itemTextInfo}>{item.price}</Text>
            </View>
            <View style={styles.itemRowContainer}>
                <Text style={styles.itemTextInfo}>{item.resturant.delivery}</Text>
                <Text style={styles.itemTextInfo}>{item.resturant.distance}</Text>
            </View>

        </View>
        <View style={styles.itemFeatureContainer}>
        <Text style={styles.itemFeatureText}>{"Featured"}</Text>
        </View>
    </TouchableOpacity>
)

const styles=StyleSheet.create({
    itemContainer:{ width: "100%", alignSelf: 'center', alignItems: 'flex-start', borderRadius: 30, overflow: 'hidden',marginBottom:16,
    backgroundColor:"#fff",
  borderWidth:1,borderColor:"#f4f4f4"
  },
  itemImage:{ width: "100%", },
  detailsContainer:{ paddingHorizontal: 8, top: -10, alignItems: 'flex-start' },
  logoContainer:{ backgroundColor: "#fff", padding: 2, borderRadius: 8, },
  itemRowContainer:{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: "100%" ,},
  itemRateContainer:{ flexDirection: 'row', alignItems: 'center' },
  itemRateDetailsContainer:{ flexDirection: 'row', alignItems: 'center', marginRight: 8 },
  itemRowTitle:{ fontSize: 14, fontFamily: "Poppins-Bold", fontWeight: '900', textAlign: 'center' },
  rateText:{ color: "#E9D023", fontSize: 12, fontFamily: "Poppins-ExtraBold", marginLeft: 2 },
  itemStatusText:{ fontSize: 12, fontFamily: "Poppins-Bold", fontWeight: '900',  textAlign: 'center', color: "green" },
  itemLocationText:{ fontSize: 12, fontFamily: "Poppins-SemiBold",   },
  itemTextInfo:{ fontSize: 12, fontFamily: "Poppins-Regular", fontWeight: '900', textAlign: 'center', },
  itemFeatureContainer:{position:'absolute',top:30,minWidth:160,right:-50,justifyContent:'center',alignItems:'center',backgroundColor:"yellow",transform:[{rotate:"45deg"}]},
  itemFeatureText:{  fontSize: 12, fontFamily: "Poppins-SemiBold", marginLeft: 2 }
})