import React, { Component } from 'react';
import {  Text, View } from 'react-native';
import Card from '../Components/Card';
import BottomNavigator from '../BottomNavigator/index'

export class Info extends Component {
    render() {
        return (
            <>
            <View>
                <Card>

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
