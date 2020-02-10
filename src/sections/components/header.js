import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    SafeAreaView
} from 'react-native';

const Header = (props) => {
    return (
        <View>
            <SafeAreaView>
                <View style={styles.container}>
                    <Image
                        source={require('../../../assets/logo.png')}
                        style={styles.logo} />
                </View>
                <View>
                    { props.children }
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 26,
        resizeMode: 'contain'
    },
    container: {
        padding: 10
    }
});

export default Header;