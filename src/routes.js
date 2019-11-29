/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Text, View, StyleSheet } from 'react-native';
import { Fonts } from './assets/fonts'


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
                <Text style={styles.text}>hello world</Text>
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
        fontFamily: Fonts.LatoBold,
        fontSize: 30
    },    
});

const mapStateToProps = createStructuredSelector({});
export default connect(mapStateToProps, {})(Routes);
