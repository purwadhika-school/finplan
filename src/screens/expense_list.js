import React, { Component } from "react";
import {
  View,
  ScrollView,
  FlatList,
  Text,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import numeral from "numeral";
import { connect } from "react-redux";
import { getExpense } from "../actions";

class ExpenseList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getExpense());
  }

  renderBody(item_saya) {
    const amount_formatted = numeral(item_saya.item.amount).format("0,0");
    return (
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 8,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 20
        }}
      >
        <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 20 }}>{item_saya.item.label}</Text>
          <View
            style={{
              marginLeft: 15,
              backgroundColor: "green",
              borderRadius: 3,
              width: "20%"
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "500",
                margin: 5
              }}
            >
              {item_saya.item.type}
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "600",
            marginLeft: 20,
            marginBottom: 15
          }}
        >
          IDR {amount_formatted}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#F1F1F1", flex: 1 }}>
        <View style={{ marginTop: 15 }}>
          {this.props.expenseData.length > 0 ? (
            <FlatList
              data={this.props.expenseData}
              keyExtractor={(data, index) => index}
              renderItem={this.renderBody}
            />
          ) : (
            <ActivityIndicator size="large" />
          )}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ExpenseAddPage")}
            style={{
              alignSelf: "center",
              width: "40%",
              borderColor: "#F1F1F1",
              borderRadius: 3,
              backgroundColor: "#77dd77",
              borderWidth: 1,
              marginRight: 5,
              marginTop: 10,
              marginBottom: 35
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 20, margin: 10 }}>
              Add Expense
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    expenseData: state.expenseData.data
  };
};

export default connect(mapStateToProps)(ExpenseList);
