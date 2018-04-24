import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { connect } from "react-redux";
import { doSignup } from "../actions";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirm_password: ""
    };
  }

  handleSignup() {
    // 1. handle jika salah satu field kosong
    // 2. handle password dan confirm password hrs sama
    const { email, password, confirm_password } = this.state;
    if (email === "" || password === "" || confirm_password === "") {
      Alert.alert("Warning!", "Fields can not be empty!");
    } else {
      if (password !== confirm_password) {
        Alert.alert(
          "Warning!",
          "Fields password and confirmation password should be the same!"
        );
      } else {
        this.props.dispatch(doSignup(email, password));
      }
    }
  }

  componentWillReceiveProps(nextProps){
    if (this.props.signupData.status !== nextProps.signupData.status){
      Alert.alert('Congratulations!', 'Signup success! Now please login.')
      this.props.navigation.goBack()
    }
  }

  render() {
    // 1. Password dan confirm password harus di masking
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            margin: 10,
            width: "70%",
            borderColor: "#F1F1F1",
            borderRadius: 3,
            borderWidth: 1
          }}
        >
          <TextInput
            onChangeText={txt => this.setState({ email: txt })}
            underlineColorAndroid="rgba(0,0,0,0)"
            style={{ fontSize: 20, width: "70%", marginLeft: 10 }}
            placeholder="Email"
          />
        </View>
        <View
          style={{
            margin: 10,
            width: "70%",
            borderColor: "#F1F1F1",
            borderRadius: 3,
            borderWidth: 1
          }}
        >
          <TextInput
            secureTextEntry={true}
            onChangeText={txt => this.setState({ password: txt })}
            underlineColorAndroid="rgba(0,0,0,0)"
            style={{ fontSize: 20, marginLeft: 10 }}
            placeholder="Password"
          />
        </View>
        <View
          style={{
            margin: 10,
            width: "70%",
            borderColor: "#F1F1F1",
            borderRadius: 3,
            borderWidth: 1
          }}
        >
          <TextInput
            secureTextEntry={true}
            onChangeText={txt => this.setState({ confirm_password: txt })}
            underlineColorAndroid="rgba(0,0,0,0)"
            style={{ fontSize: 20, marginLeft: 10 }}
            placeholder="Password Confirmation"
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{
              width: "30%",
              borderColor: "#F1F1F1",
              borderRadius: 3,
              backgroundColor: "#77dd77",
              borderWidth: 1,
              marginRight: 5
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 20, margin: 10 }}>
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.handleSignup()}
            style={{
              width: "30%",
              borderColor: "#F1F1F1",
              borderRadius: 3,
              backgroundColor: "#77dd77",
              borderWidth: 1,
              marginLeft: 5
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 20, margin: 10 }}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
    signupData: state.signupData
  }
}

export default connect(mapStateToProps)(Register);
