import React, { Component } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import numeral from "numeral";

class IncomeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      income_data: [
        {
          type: "Regular",
          label: "Penghasilan utama",
          amount: "5000000",
          paydate: "1 January 2018",
          from: "Tokopedia"
        },
        {
          type: "Others",
          label: "Penghasilan tambahan",
          amount: "1000000",
          paydate: "5 January 2018",
          from: "Freelance"
        }
      ]
    };
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
              {item_saya.item.type}
            </Text>
          </View>
        </View>
        <Text style={{ fontSize: 40, fontWeight: "600", marginLeft: 20 }}>
          IDR {amount_formatted}
        </Text>
        <Text style={{ fontSize: 15, marginLeft: 20, marginBottom: 20 }}>
          from <Text style={{ fontWeight: "700" }}>{item_saya.item.from}</Text>
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{ backgroundColor: "#F1F1F1", flex: 1 }}>
        <View style={{ marginTop: 15 }}>
          <FlatList
            data={this.state.income_data}
            keyExtractor={(data, index) => index}
            renderItem={this.renderBody}
          />
          <TouchableOpacity
            style={{
              alignSelf: "center",
              width: "40%",
              borderColor: "#F1F1F1",
              borderRadius: 3,
              backgroundColor: "#77dd77",
              borderWidth: 1,
              marginRight: 5,
              marginTop: 10
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 20, margin: 10 }}>
              Add Income
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default IncomeList;
