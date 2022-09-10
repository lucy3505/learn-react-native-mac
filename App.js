/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  Button,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <Text>11</Text>
        <Icon name="rocket" size={30} color="green" />
        <Button
          style={styles.mybutton}
          color="red"
          title="跳转到外部"
          onPress={() => {
            Linking.openURL('http://baidu.com');
          }}></Button>
        <View>
          <Text
            style={styles.mybutton}
            onPress={() => {
              Linking.openURL('http://www.gxaedu.com');
            }}>
            button
          </Text>
        </View>
        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor="orange"
          style={styles.highlightbutton}
          onPress={() => {
            console.log('11');
          }}>
          <Text style={styles.textbutton}>highlight button</Text>
        </TouchableHighlight>
        <TouchableOpacity style={styles.highlightbutton}>
          <Text style={styles.textbutton}>TouchableOpacity</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mybutton: {
    width: 200,
    color: 'red',
    backgroundColor: 'yellow',
    height: 50,
    borderRadius: 25,
    textAlign: 'center',
    lineHeight: 50,
    marginHorizontal: 'auto', //表示左右的Margin  auto是没用的
    marginVertical: 100, //表示上下的margin
    //paddingHorizontal一样的
  },
  textbutton: {
    color: 'black',
  },
  highlightbutton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    backgroundColor: 'yellow',
    height: 50,
    borderRadius: 25,
  },
});
export default App;
