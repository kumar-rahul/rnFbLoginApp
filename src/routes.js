/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Text, View, StyleSheet } from 'react-native';

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
                <Text>hello world</Text>
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
});

const mapStateToProps = createStructuredSelector({});
export default connect(mapStateToProps, {})(Routes);
