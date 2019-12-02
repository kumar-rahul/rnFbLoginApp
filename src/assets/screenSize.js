import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
    '5h': height * 0.05,
    '10h': height * 0.1,
    '20h': height * 0.2,
    '25h': height * 0.25,
    '30h': height * 0.3,
    '35h': height * 0.35,
    '40h': height * 0.4,
    '50h': height * 0.5,
    '70h': height * 0.7,
    '80h': height * 0.8,
    height,
    '5w': width * 0.05,
    '10w': width * 0.1,
    '15w': width * 0.15,
    '20w': width * 0.2,
    '25w': width * 0.25,
    '30w': width * 0.3,
    '40w': width * 0.4,
    '50w': width * 0.5,
    '70w': width * 0.7,
    '80w': width * 0.8,
    width,
};
