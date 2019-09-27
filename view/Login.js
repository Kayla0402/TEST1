import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';
import {TabNavigator,StackNavigator} from 'react-navigation';
import RegisterScreen from './Register';
// import AuthScreen from './Auth';
export default class LoginScreen extends Component {
    _getpen(){
        this.props.navigation.goBack();
    }
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>登录页面</Text>
                <Button
                    title="返回首页"
                    onPress={() =>navigate('Home', { name: 'Jane' })}
                />
                <Button
                    title="去注册"
                    onPress={() =>navigate('Register', { name: 'Jane' })}
                />
            </View>
        );
    };
}
const Apps = StackNavigator({
    Logins: {
        screen: LoginScreen,
        navigationOptions: {
            header: null // 无标题栏
        }
    },
});
