import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import numeral from "numeral";
import { connect } from "react-redux";
import { addIncome } from "../actions";

class IncomeAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedBtn: "",
      amountFormatted: "0",

      label: "",
      amount: "",
      paydate: "",
      from: ""
    };
  }

  saveHandler() {
    const { selectedBtn, label, amount, paydate, from } = this.state;
    if (
      selectedBtn === "" ||
      label === "" ||
      amount === "" ||
      paydate === "" ||
      from === ""
    ) {
      Alert.alert("Warning!", "Field tidak boleh kosong!");
    } else {
      this.props.dispatch(addIncome(selectedBtn, label, amount, paydate, from));
    }
  }

  render() {
    const { selectedBtn } = this.state;
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            marginLeft: 20
          }}
        >
          <TouchableOpacity
            onPress={() => this.setState({ selectedBtn: "regular" })}
            style={{
              backgroundColor:
                selectedBtn === "regular" ? "#77dd77" : "#F1F1F1",
              width: "20%",
              borderRadius: 10
            }}
          >
            <Text
              style={{
                color: selectedBtn === "regular" ? "white" : null,
                margin: 15,
                textAlign: "center",
                fontWeight: "500"
              }}
            >
              Regular
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ selectedBtn: "others" })}
            style={{
              backgroundColor: selectedBtn === "others" ? "#77dd77" : "#F1F1F1",
              width: "20%",
              borderRadius: 10,
              marginLeft: 15
            }}
          >
            <Text
              style={{
                color: selectedBtn === "others" ? "white" : null,
                margin: 15,
                textAlign: "center",
                fontWeight: "500"
              }}
            >
              Others
            </Text>
          </TouchableOpacity>
          <Text style={{ marginLeft: 15, marginTop: 15 }}>
            * Type of income
          </Text>
        </View>
        <View
          style={{
            margin: 10,
            marginTop: 20,
            width: "70%",
            borderColor: "#F1F1F1",
            borderRadius: 3,
            borderWidth: 1
          }}
        >
          <TextInput
            onChangeText={txt => this.setState({ label: txt })}
            underlineColorAndroid="rgba(0,0,0,0)"
            style={{ fontSize: 20, width: "70%", marginLeft: 20 }}
            placeholder="Label"
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
            onChangeText={txt => this.setState({ amount: txt })}
            keyboardType="numeric"
            underlineColorAndroid="rgba(0,0,0,0)"
            style={{ fontSize: 20, width: "70%", marginLeft: 20 }}
            placeholder="Amount"
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
            onChangeText={txt => this.setState({ paydate: txt })}
            underlineColorAndroid="rgba(0,0,0,0)"
            style={{ fontSize: 20, width: "70%", marginLeft: 20 }}
            placeholder="Paydate"
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
            onChangeText={txt => this.setState({ from: txt })}
            underlineColorAndroid="rgba(0,0,0,0)"
            style={{ fontSize: 20, width: "70%", marginLeft: 20 }}
            placeholder="From"
          />
        </View>
        <View style={{ marginLeft: 20, marginTop: 20, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{
              width: "30%",
              borderColor: "#F1F1F1",
              borderRadius: 3,
              backgroundColor: "#ff6666",
              borderWidth: 1,
              marginLeft: 5
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "500",
                margin: 10,
                color: "white"
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.saveHandler()}
            style={{
              width: "30%",
              borderColor: "#F1F1F1",
              borderRadius: 3,
              backgroundColor: "#77dd77",
              borderWidth: 1,
              marginLeft: 5
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                margin: 10,
                fontWeight: "500",
                color: "white"
              }}
            >
              Save
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
    data_income: state.incomeData
  }
}

export default connect(mapStateToProps)(IncomeAdd);
