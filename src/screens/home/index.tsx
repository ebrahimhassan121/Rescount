import React, { useEffect, useState } from 'react'
import {
    ScrollView,
    View,
    Dimensions,
} from 'react-native';
import HomeHeader from './header';
import HomeSlider from './slider'
import HomeCategories from './categories';
import HomeFeaturedRestaurants from './featured-restaurants';
import Footer from './footer';
export default function Home() {
    return (
        <View style={{ flex: 1, width: Dimensions.get('screen').width }}>
            <HomeHeader />
            <ScrollView
                style={{ marginBottom: 50 }}>
                <HomeSlider />
                <HomeCategories />
                <HomeFeaturedRestaurants />
            </ScrollView>
            <Footer />
        </View>

    )
}
