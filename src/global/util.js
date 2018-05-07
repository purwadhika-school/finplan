import { AsyncStorage } from "react-native";

export const saveToken = async token => {
  try {
    await AsyncStorage.setItem("token:user", token);
  } catch (error) {
    console.log(error);
  }
};

export const saveUserID = async userId => {
  try {
    await AsyncStorage.setItem("uid:@#$%", userId);
  } catch (error) {
    console.log(error);
  }
};

export const getUniversalKeys = async key => await AsyncStorage.getItem(key);

export const removeUniversalKeys = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
