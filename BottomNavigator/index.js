import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  Link,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Text,
  Alert,

} from "react-native";

import {createStackNavigator} from 'react-navigation-stack'

import Map from '../Screens/Map'
import Qrcode from '../Screens/Qrcode'
import Info from '../Screens/Info'

fetch('localhost:3030', {
  method: 'POST',
  headers: {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    date: '2021-01-01',
    destination: 'ORD',
    origin: 'DFW'
  }),
  })
  

{
  /* <a target="_blank" href="https://icons8.com/icons/set/qr-code--v2">QR Code icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */
}

export default class BottomNavigator extends Component {
   
  toggleOpen = () => {};

  render() {
     
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            position: "absolute",
            alignSelf: "center",
            backgroundColor: "white",
            width: 70,
            height: 70,
            borderRadius: 35,
            bottom: 35,
            zIndex: 10,
          }}
        >
          <TouchableWithoutFeedback onPress={console.log("hi")} >
            <View style={[styles.button, styles.actionBtn]}>
                
              <Image
                style={{ width: 60, height: 60 }}
                resizeMode="contain"
                source={{
                    uri:
                    "https://www.flaticon.com/svg/vstatic/svg/2268/2268625.svg?token=exp=1612099685~hmac=9520a9741b2bc837761bfcac0a9d5312",
                }}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            position: "absolute",
            backgroundColor: "white",
            border: 4,
            radius: 3,
            borderColor: "grey",
            shadowOpacity: 0.3,
            shadowRadius: 3,
            shadowOffset: {
              height: 3,
              width: 3,
            },
            x: 0,
            y: 0,
            style: { marginVertical: 5 },
            bottom: 0,
            width: "100%",
            height: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            paddingHorizontal: 25,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                
              
                
              }}
            >
              <Image
                style={{ marginHorizontal: 30, width: 30, height: 30 }}
                source={{
                  uri:
                    "https://www.flaticon.com/svg/vstatic/svg/3126/3126504.svg?token=exp=1612099179~hmac=27d71eb82f6d8126cb424f1e48df8ee2",
                }}
                onPress={() => {
                  Alert.alert("");
                }}
              ></Image>
            </TouchableOpacity>
            <Text style={{ justifyContent: "center", alignItems: "center" }}>
              QRScan
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              marginStart: 85,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Alert.alert("click");
              }}
            >
              <Image
                source={{
                  uri:
                    "https://www.flaticon.com/svg/vstatic/svg/945/945120.svg?token=exp=1612099543~hmac=d71c4835e6d5e5b2a7b2af7328a92c71",
                }}
                onPress={() => {
                  Alert.alert("click");
                }}
                style={{ marginHorizontal: 30, width: 30, height: 30 }}
                containerStyle={{ marginHorizontal: 20 }}
              />
            </TouchableOpacity>
            <Text style={{ justifyContent: "center", alignItems: "center" }}>
              {" "}
              Account{" "}
            </Text>
          </View>

          {/* </View> */}
        </View>
      </View>
    );
  }
}

// const AppNavigator = createStackNavigator({
//     Mapscreen: Map,
// },{
//     initalRouteName:'Info'
// });

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  button: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "grey",
    shadowOpacity: 0.1,
    shadowOffset: { x: 2, y: 0 },
    shadowRadius: 2,
    borderRadius: 30,
    position: "absolute",
    bottom: 20,
    right: 0,
    top: 5,
    left: 5,
    shadowOpacity: 5.0,
  },
  actionBtn: {
    backgroundColor: "#1E90FF",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
  },
});
