import { AsyncStorage } from 'react-native'

export const saveToken = (token) => {
    try {
        await AsyncStorage.setItem('token', token)
    } catch (error) {
        console.log(error)
    }
}

export const getToken = (key) => {
    try {
        const token = await AsyncStorage.getItem(key)
        return token
    } catch (error) {
        console.log(error)
    }
}

export const removeToken = (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (error) {
        console.log(error)
    }
}