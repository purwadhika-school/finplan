import { AsyncStorage } from "react-native";

export const saveToken = async token => {
  try {
    await AsyncStorage.setItem("token:user", token);
  } catch (error) {
    console.log(error);
  }
};

export const getToken = async key => await AsyncStorage.getItem(key);

export const removeToken = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
