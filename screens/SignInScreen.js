import React from 'react';
import { StyleSheet, Text, ScrollView, View, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { Form, Item, Input, Label, Button} from 'native-base';
import * as firebase from 'firebase';

export default class SignInScreen extends React.Component{
    
    state = {
        email: "",
        password: "",
    }

    static navigationOptions = {
        title: "Sign In",
        header: null,
    };
    
    render(){
      return (
        <ScrollView>
            <KeyboardAvoidingView
            style={styles.container}
            behavior="position"
            enabled
            >
                <View style={styles.logoContainer}>
                    <Image
                    source = {require('../assets/logo.png')}
                    />
                    <Text>Victor Tram</Text>
                </View>
                <Form style={styles.form}>
                    <Item floatingLabel
                    autocorrect = {false} 
                    autoCapitalize="none" 
                    keyboardType=""
                    onChangeText={password=> this.setState({password})}
                    >
                        <Label> Email</Label>
                        <Input
                        autocorrect = {false} 
                        autoCapitalize="none" 
                        keyboardType="email-address"
                        onChangeText={email => this.setState({email})}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label> Password</Label>
                        <Input
                        autocorrect = {false} 
                        autoCapitalize="none" 
                        keyboardType="email-address"
                        onChangeText={password=> this.setState({password})}
                        />
                    </Item>
                    <Button 
                    style={styles.button} 
                    full 
                    rounded 
                    onPress={ () =>{

                    }}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </Button>
                </Form>
                <View style={styles.footer}>
                    <Text>OR</Text>
                    <TouchableOpacity 
                    onPress = {() => {
                        this.props.navigation.navigate("SignUp")
                    }}
                    >
                        <Text>Create a new Account</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.empty}></View>
            </KeyboardAvoidingView>
        </ScrollView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    logoContainer: {
      alignItems: "center",
      marginTop: 100,
      marginBottom: 100
    },
    form: {
      padding: 20,
      width: "100%",
      marginBottom: 30
    },
    button: {
      marginTop: 20
    },
    buttonText: {
      color: "#fff"
    },
    footer: {
      alignItems: "center"
    },
    empty: {
        height: 500,
        backgroundColor: "#FFF"
      }
  });