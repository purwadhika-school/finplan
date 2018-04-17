import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ marginLeft: 25 }}>
          <Text style={{ marginTop: 20, fontSize: 25 }}>Hi, Yogie</Text>

          <View style={{ marginTop: 45 }}>
            <Text style={{ fontSize: 20 }}>Total Saldo Anda:</Text>
            <View
              style={{
                borderBottomColor: "#F1F1F1",
                borderBottomWidth: 2,
                width: "50%"
              }}
            />
            <Text style={{ fontSize: 45 }}>IDR 5,000,000</Text>
            <Text style={{ fontSize: 19 }}>Sabtu, 9 January 2018, 20:00</Text>
          </View>

          <View style={{ marginTop: 40 }}>
            <Text style={{ fontSize: 20 }}>Total Pengeluaran Anda:</Text>
            <View
              style={{
                borderBottomColor: "#F1F1F1",
                borderBottomWidth: 2,
                width: "50%"
              }}
            />
            <Text style={{ fontSize: 45 }}>IDR 1,200,000</Text>
            <Text style={{ fontSize: 19 }}>Sabtu, 9 January 2018, 20:00</Text>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 20,
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 70
          }}
        >
          <TouchableOpacity
            style={{
              width: "40%",
              borderColor: "#F1F1F1",
              borderRadius: 3,
              backgroundColor: "#77dd77",
              borderWidth: 1,
              marginRight: 5
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 20, margin: 10 }}>
              Add Income
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "40%",
              borderColor: "#F1F1F1",
              borderRadius: 3,
              backgroundColor: "#77dd77",
              borderWidth: 1,
              marginLeft: 5
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 20, margin: 10 }}>
              Add Expense
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home;
