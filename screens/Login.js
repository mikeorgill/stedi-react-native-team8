import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function Login(props){
    return(
        <View style={styles.login}>
            <Text>Login Screen</Text>
            <Button
              title="Gabriel"
              color="#841584"
              onPress={()=>{console.log('Hello Gabriel')}}
            />
            <Button
              title="McKenna"
              color="#FF5733"
              onPress={()=>{console.log('Hello McKenna')}}
            />
            <Button
              title="Michael"
              color="pink"
              onPress={()=>{console.log('Hello Michael')}}
            />
            <Button
              title="Amanda"
              color="yellow"
              onPress={()=>{console.log('Hello Amanda')}}
            />
            <Button
              title="Mike"
              color="#1CCACE"
              onPress={()=>{console.log('Hello Mike')}}
            />
        </View>    
    );
}

const styles = StyleSheet.create({
    login: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        height: '12%',
        alignItems: 'flex-end',
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
      },
})
