import { StyleSheet, Dimensions } from 'react-native';
import Font from '../../assets/fonts'
import ScreenSize from "../../assets/screenSize";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingBottom: 24,
        backgroundColor: '#fff',
    },
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    slide: {
        alignItems: 'center',
        justifyContent:'center',
        marginTop: ScreenSize['10h'],
    },
    image: {
        marginTop: ScreenSize['10h'],
        marginBottom: 0,
        resizeMode: 'contain',
    },
    title: {
        marginTop: 20,
        color: '#222222',
        fontSize: 20,
        lineHeight: 30,
        width: width * 0.6,
        textAlign: 'center',
        // fontFamily: Font.LatoBold,
    }

});
