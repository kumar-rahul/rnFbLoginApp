/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from "react-redux";
import Swiper from 'react-native-swiper';
import styles from './styles';
import { ONBOARDING_1, ONBOARDING_2, ONBOARDING_3, ONBOARDING_4 } from '../../assets/images';

class Introduction extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>hello world</Text>

        <Swiper
          activeDotColor={'#999999'}
          autoplay
          dotColor={'#cccccc'}
          style={styles.wrapper}
          autoplayTimeout={5}
        >
          <View style={styles.slide}>
            <Text style={styles.title}>{'One-Stop-Solution for all your Study Material needs'}</Text>
            <Image source={ONBOARDING_3} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Text style={styles.title}>{' Attend Free Live Classes every day by Vedantu Master Teachers'}</Text>
            <Image source={ONBOARDING_1} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Text style={styles.title}>{'Attempt Quizzes & Mock tests to get an edge over others'}</Text>
            <Image source={ONBOARDING_4} style={styles.image} />
          </View>
        </Swiper>
      </View>
    );
  }
}

export default connect(null, {})(Introduction);