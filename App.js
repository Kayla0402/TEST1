import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    Image,
    StyleSheet,
    AppRegistry,
    Alert,
    ScrollView,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        selectedTitleStyle={{color: 'pink'}}
                        title="最热"
                        renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'pink'}]}
                                                         source={require('./res/images/ic_polular.png')}/>}
                        badgeText="1"
                        onPress={() => this.setState({selectedTab: 'home'})}>
                        <View style={styles.page1}>
                            <Text> page1</Text>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        selectedTitleStyle={{color: 'yellow'}}
                        title="趋势"
                        renderIcon={() => <Image style={styles.image}
                                                 source={require('./res/images/ic_trending.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'yellow'}]}
                                                         source={require('./res/images/ic_trending.png')}/>}
                        onPress={() => this.setState({selectedTab: 'profile'})}>
                        <View style={styles.page2}>
                            <Text> page2</Text>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        selectedTitleStyle={{color: 'pink'}}
                        title="收藏"
                        renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'pink'}]}
                                                         source={require('./res/images/ic_polular.png')}/>}
                        badgeText="1"
                        onPress={() => this.setState({selectedTab: 'home'})}>
                        <View style={styles.page1}>
                            <Text> page1</Text>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        selectedTitleStyle={{color: 'yellow'}}
                        title="我的"
                        renderIcon={() => <Image style={styles.image}
                                                 source={require('./res/images/ic_trending.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'yellow'}]}
                                                         source={require('./res/images/ic_trending.png')}/>}
                        onPress={() => this.setState({selectedTab: 'profile'})}>
                        <View style={styles.page2}>
                            <Text> page2</Text>
                        </View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    page1: {
        backgroundColor: 'pink',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    page2: {
        backgroundColor: 'yellow',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 23,
        height: 23,
    },
});

