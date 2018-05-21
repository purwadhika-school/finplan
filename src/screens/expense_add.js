import React, { Component } from "react";
import { View, Text, TouchableOpacity, Alert, TextInput } from "react-native";
import numeral from "numeral";
import { connect } from "react-redux";
import { addExpense } from "../actions";

class ExpenseAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedBtn: "",
      amountFormatted: "0",
      amount: "0",
      label: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      if (nextProps.addExpenseData.status === "ok") {
        this.props.navigation.goBack();
      }
    }
  }

  saveHandler() {
    const { amount, label, selectedBtn } = this.state;
    console.log(amount, label, selectedBtn);
    if (amount === "" || label === "" || selectedBtn === "") {
      Alert.alert("Warning!", "Field can not be empty!");
    } else {
      const data = {
        type: selectedBtn,
        label: label,
        amount: amount
      };
      this.props.dispatch(addExpense(data));
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
            onPress={() => this.setState({ selectedBtn: "unexpected" })}
            style={{
              backgroundColor:
                selectedBtn === "unexpected" ? "#77dd77" : "#F1F1F1",
              width: "20%",
              borderRadius: 10,
              marginLeft: 15
            }}
          >
            <Text
              style={{
                color: selectedBtn === "unexpected" ? "white" : null,
                margin: 15,
                textAlign: "center",
                fontWeight: "500"
              }}
            >
              Unexpected
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
            onChangeText={text => {
              this.setState({ amount: text });
            }}
            keyboardType="numeric"
            underlineColorAndroid="rgba(0,0,0,0)"
            style={{ fontSize: 20, width: "70%", marginLeft: 20 }}
            placeholder="Amount"
          />
        </View>
        <View style={{ marginLeft: 20, marginTop: 20, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goback()}
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
            onPress={() => {
              this.saveHandler();
            }}
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

const mapStateToProps = state => {
  return {
    addExpenseData: state.expenseData
  };
};

export default connect(mapStateToProps)(ExpenseAdd);
