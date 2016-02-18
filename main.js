'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View
} from 'react-native';

const gifs = [
  "http://www.thisiscolossal.com/wp-content/uploads/2015/03/florian-1.gif",
  "http://forums.accuweather.com/uploads/post-13204-1436654775.gif",
  "http://www.xuanfengge.com/wp-content/uploads/2015/06/69b7d63agw1esvw782043g20b40b4akc.gif",
  "http://33.media.tumblr.com/bcab88af79112d9e0dee18c959c8a810/tumblr_nsvw5dBX3o1rg590io5_400.gif",
  "http://33.media.tumblr.com/e8600bfcb5bf6d867b8688a82d733787/tumblr_ngn4aayuG41tcuj64o1_400.gif",
];

class GifClipTest extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#000'}}>
        <ScrollView
          removeClippedSubviews
          contentContainerStyle={{overflow: 'hidden', backgroundColor: '#000', alignItems: 'center', justifyContent: 'center'}}
          style={styles.container}>

          {gifs.map(uri => {
            return (
              <View style={styles.imageContainer}>
                <Image
                  source={{uri}}
                  style={{ width: 300, height: 300 }} />
              </View>
            );
          })}

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imageContainer: {
    overflow: 'hidden',
  },
});

AppRegistry.registerComponent('GifClipTest', () => GifClipTest);
