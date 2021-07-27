/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   StatusBar,
   StyleSheet,
   Text,
 } from 'react-native';


import Home from './src/screens/home';



 const App = () => {
  
// @ts-ignore
Text['defaultProps'] = Text.defaultProps || {};
// @ts-ignore
Text['defaultProps']['style'] =  { fontFamily: 'Poppins-Medium', }

   return (
     <SafeAreaView style={styles.container}>
       <StatusBar backgroundColor="white"  barStyle={'dark-content'}  />
        <Home/>
     </SafeAreaView>
   );
 };

 const styles = StyleSheet.create({
container:{flex:1,backgroundColor:"#fff"}
 });

 export default App;
