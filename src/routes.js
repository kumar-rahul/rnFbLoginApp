/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Font } from './assets/fonts'
import Introduction from './components/onboarding/Introduction'


const defaultNavigationOptions1 = {
    headerStyle: {
        backgroundColor: '#fff',
        // shadowColor: 'transparent',
        // elevation: 1,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        // fontFamily: Font.LatoBold,
        // fontSize: 18,
        color: '#fff',
    },
};

const LoginSignupNavigator = createStackNavigator(
    {
        Introduction: {
            screen: Introduction,
            navigationOptions: { header: null },
        },
    }, { defaultNavigationOptions1, initialRouteName: 'Introduction' });

const NotLoggedIn = createAppContainer(LoginSignupNavigator);

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        console.disableYellowBox = true;
    }
    static getDerivedStateFromProps(props, state) {
        return state;
    }
    render() {
        return (
            <View style={styles.container}>
                <NotLoggedIn />                
            </View>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }
    componentWillUnmount() {
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        // fontFamily: Font.LatoBold,
        fontSize: 30
    },    
});

const mapStateToProps = createStructuredSelector({});
export default connect(mapStateToProps, {})(Routes);
