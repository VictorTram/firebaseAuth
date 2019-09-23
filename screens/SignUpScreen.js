import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {Form, Item, Input, Label, Button} from 'native-base';

import * as firebase from 'firebase';

export default class SignUpScreen extends React.Component{

    state = {
        email: "",
        password: "",
        name: "",
    }

    static navigationOptions = {
        title: "Sign Up",
        header: null
    }

    signUpUser = (name, email, password) =>{
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then( authenticate => {
                return authenticate.user
                    .updateProfile({
                        displayName: name,
                    })
                    .then ( () => {
                        this.props.navigation.replace("Home");
                    })
            })
            .catch(error =>{
                alert(error.message);
            })
    }

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
                <Item floatingLabel>
                        <Label> Name</Label>
                        <Input
                        autocorrect = {false} 
                        autoCapitalize="none" 
                        keyboardType="email-address"
                        onChangeText={name => this.setState({name})}
                        />
                    </Item>
                    <Item floatingLabel>
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
                        this.signUpUser(
                            this.state.name,
                            this.state.email,
                            this.state.password,
                        )
                    }}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </Button>
                </Form>
                <View style={styles.footer}>
                    <Text>OR</Text>
                    <TouchableOpacity 
                    onPress = {() => {
                        this.props.navigation.navigate("SignIn")
                    }}
                    >
                        <Text>Already having an account?</Text>
                    </TouchableOpacity>
                </View>
                
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
        width: "100%"
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
    
  });