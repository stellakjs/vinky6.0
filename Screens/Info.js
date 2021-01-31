import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import Card from '../Components/Card';
import BottomNavigator from '../BottomNavigator/index'

export class Info extends Component {
    render() {
        return (
            <>
            <View>
                <Card>
                    <Image source= {{uri:
                    "https://www.flaticon.com/svg/vstatic/svg/2268/2268625.svg?token=exp=1612099685~hmac=9520a9741b2bc837761bfcac0a9d5312"}}></Image>

                <Text> Flight number</Text>
                <Text>Arrival time:</Text>
                <Text>depart time</Text>
                </Card>
                
            </View>
            
            </>
        )
    }
}

export default Info
