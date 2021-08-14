import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Alert } from 'react-native';

const HelloWorld = () => {
  return (
          <TouchableWithoutFeedback
            onPress={() => Alert.alert('You pressed the text!')}
          >
            <Text>HelloWorld</Text>
          </TouchableWithoutFeedback>
      )
}

export default function App() {
  return (
    <View>
      <HelloWorld/>
      <StatusBar style="auto" />
    </View>
  );
}

