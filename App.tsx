/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *    
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import AwesomeText from './components/AwesomeText';
import Header from './components/Header';


const App = () => {
  return (
    <SafeAreaView style={{ height: '100%', backgroundColor: 'white'}}>
      <StatusBar/>
      <View style={{ height: '100%', flex: 1, paddingLeft: 12, paddingRight: 12 }}>
        <Header heading="Getting Started" subheading="What's your monthly income?"/>
        <TextInput
          style={{
            height: 40,
            borderWidth: 1,
            borderRadius: 4,
            maxWidth: 200,
            width: '100%',
            color: 'black',

          }}
          placeholderTextColor="gray"
          placeholder="23000"

          />

      </View>
      <View style={{ alignItems: 'center', marginBottom: 40 }}>
        <Pressable style={{
          paddingLeft: 60,
          paddingRight: 60,
          paddingTop: 20,
          paddingBottom: 20,
          backgroundColor: 'green',
          borderRadius: 4 }}>
          <AwesomeText style={{ color: 'white', fontSize: 16 }}>Next</AwesomeText>
        </Pressable> 
      </View>
    </SafeAreaView>
  );
};

export default App;
