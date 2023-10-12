import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function Login(props){
    return(
        <View style={styles.login}>
            <Text>Login Screen</Text>
            <Button
              title="Gabriel"
              color="#841584"
              onPress={()=>{alert('Hello Gabriel')}}
            />
            <Button
              title="McKenna"
              color="#FF5733"
              onPress={()=>{alert('Hello McKenna')}}
            />
            <Button
              title="Michael"
              color="pink"
              onPress={()=>{alert('Hello Michael')}}
            />
            <Button
              title="Amanda"
              color="yellow"
              onPress={()=>{alert('Hello Amanda')}}
            />
            <Button
              title="Mike"
              color="#1CCACE"
              onPress={()=>{alert('Hello Mike')}}
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
