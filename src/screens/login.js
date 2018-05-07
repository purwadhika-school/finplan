import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { doSignin } from "../actions";
import { getUniversalKeys } from '../global/util'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount(){
    this.checkToken()
  }

  checkToken = async () => {
    const token = await getUniversalKeys('token:user')
    console.log(token)
    if (token && token !== ''){
      this.props.navigation.navigate('HomePage')
    }
  }

  // 1. handle field kosong

  loginHandler() {
    const { email, password } = this.state;
    console.log(email, password)
    if (email === "" || password === "") {
      Alert.alert("Warning!", "Fields can not be empty!");
    } else {
      this.props.dispatch(doSignin(email, password));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.signinData.status !== nextProps.signinData.status) {
      this.props.navigation.navigate("HomePage");
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {this.props.signinData.isProcessing && (
          <ActivityIndicator size="large" animating={true} />
        )}
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
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20
          }}
        >
          <TouchableOpacity
            onPress={() => this.loginHandler()}
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
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("RegisterPage")}
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

const mapStateToProps = state => {
  console.log(state);
  return {
    signinData: state.signinData
  };
};

export default connect(mapStateToProps)(Login);
