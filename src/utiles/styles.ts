import { Dimensions } from "react-native";

export const responsiveWidth=(percentage:number=1)=>Dimensions.get('screen').width*percentage
export const responsiveHeight=(percentage:number=1)=>Dimensions.get('screen').height*percentage

export const isLandscape = () => {
    const dim = Dimensions.get('screen');
    return dim.width >= dim.height;
};