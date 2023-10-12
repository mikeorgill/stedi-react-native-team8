import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function Login(props){
    return(
        <View style={styles.login}>
            <Text>Login</Text>
            <Button
              title="Gabriel"
              color="#841584"
              onPress={()=>{alert('Hello Gabriel')}}
              style={{ display: 'block' }}
            />
            <Button
              title="McKenna"
              color="#FF5733"
              onPress={()=>{alert('Hello McKenna')}}
              style={{ display: 'block' }}
            />
            <Button
              title="Michael"
              color="pink"
              onPress={()=>{alert('Hello Michael')}}
              style={{ display: 'block' }}
            />
            <Button
              title="Amanda"
              color="yellow"
              onPress={()=>{alert('Hello Amanda')}}
              style={{ display: 'block' }}
            />
            <Button
              title="Mike"
              color="#1CCACE"
              onPress={()=>{alert('Hello Mike')}}
              style={{ display: 'block' }}
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
