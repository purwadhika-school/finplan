import React, { Component } from "react";
import {
  View,
  ScrollView,
  FlatList,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import numeral from "numeral";
import { connect } from "react-redux";
import { getIncomeList } from "../actions";

class IncomeList extends Component {
  componentDidMount() {
    this.props.dispatch(getIncomeList());
  }

  renderBody(dataProps) {
    const amount_formatted = numeral(dataProps.item.amount).format("0,0");
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
          <Text style={{ fontSize: 20 }}>{dataProps.item.label}</Text>
          <View
            style={{
              marginLeft: 15,
              backgroundColor: "green",
              borderRadius: 3,
              width: "15%"
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
              {dataProps.item.type}
            </Text>
          </View>
        </View>
        <Text style={{ fontSize: 40, fontWeight: "600", marginLeft: 20 }}>
          IDR {amount_formatted}
        </Text>
        <Text style={{ fontSize: 15, marginLeft: 20, marginBottom: 20 }}>
          from{" "}
          <Text style={{ fontWeight: "700" }}>
            {dataProps.item.organization}
          </Text>
        </Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#F1F1F1", flex: 1 }}>
        <View style={{ marginTop: 15 }}>
          {this.props.incomeList.length === 0 && (
            <ActivityIndicator size="large" />
          )}
          {this.props.incomeList.length > 0 && (
            <FlatList
              data={this.props.incomeList}
              keyExtractor={(data, index) => index}
              renderItem={this.renderBody}
            />
          )}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("IncomeAddPage")}
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
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                margin: 10,
              }}
            >
              Add Income
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    incomeList: state.incomeData.data
  };
};

export default connect(mapStateToProps)(IncomeList);
