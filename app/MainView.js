// @flow

import React, {Component} from "react";
import {Image, StatusBar, Text, TouchableHighlight, View} from "react-native";

import type {ImageType} from "../flow/TypeAliases";
import {mainview_style} from "../styles/Styles";

import renderIf from './renderIf';

// note uri won't work on iOS with http
const res_img = require('../static-res/react-native-img-by-maret-eiland.png');

// note uri won't work on iOS with http
const imageUrl2: ImageType = {
  uri: 'https://lh3.ggpht.com/XL0CrI8skkxnboGct-duyg-bZ_MxJDTrjczyjdU8OP2PM1dmj7SP4jL1K8JQeMIB3AM=w300',
  alt_text: 'android'
};

// note uri won't work on iOS with http
const imageUrl3: ImageType = {
  uri: 'https://cdn0.iconfinder.com/data/icons/Android-R2-png/512/Market-Android-R.png',
  alt_text: 'google play store'
};

class MainView extends Component {
  componentWillMount() {
    console.log(`MainView component will mount`);
  }

  constructor(){
    super();
    this.state ={
      status:false
    }
  }

  toggleStatus(){
    this.setState({
      status:!this.state.status
    });
    console.log('toggle button handler: '+ this.state.status);
  }

  render() {
    return (
      <Image source={require('../assets/summer.png')} style={mainview_style.backgroundImage}>
        <View style={mainview_style.v_container}>
          <View style={mainview_style.nav_container}>
            <Image source={require('../assets/icon.png')} style={mainview_style.icon}>
            </Image>
            <Text style={mainview_style.instructions}>
              GREEN-WOOD
            </Text>
          </View>
        </View>
        {renderIf(this.state.status)(

          <View style={mainview_style.menu}>

            <TouchableHighlight style={mainview_style.links}
              activeOpacity={1}
              underlayColor='transparent'
              onPress={() => {
                this.props.navigator.push({index: 1});
              }}>
              <View style={mainview_style.linkHolder}>
                <Text style={mainview_style.white}>
                  Visit
                </Text>
                <Text style={mainview_style.carrot}>
                  >
                </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight style={mainview_style.links}
              activeOpacity={1}
              underlayColor='transparent'
              onPress={() => {
                this.props.navigator.push({index: 2});
              }}>
              <View style={mainview_style.linkHolder}>
                <Text style={mainview_style.white}>
                  Landscape
                </Text>
                <Text style={mainview_style.carrot}>
                  >
                </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight style={mainview_style.links}
              activeOpacity={1}
              underlayColor='transparent'
              onPress={() => {
                this.props.navigator.push({index: 3});
              }}>
              <View style={mainview_style.linkHolder}>
                <Text style={mainview_style.white}>
                  Trees
                </Text>
                <Text style={mainview_style.carrot}>
                  >
                </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight style={mainview_style.bottomLink}
              activeOpacity={1}
              underlayColor='transparent'
              onPress={() => {
                this.props.navigator.push({index: 4});
              }}>
              <View style={mainview_style.linkHolder}>
                <Text style={mainview_style.white}>
                  Wildlife
                </Text>
                <Text style={mainview_style.carrot}>
                  >
                </Text>
              </View>
            </TouchableHighlight>

          </View>

        )}
        <View style={mainview_style.menu_container}>



          <TouchableHighlight
          activeOpacity={1}
          underlayColor='transparent'
          onPress={()=>this.toggleStatus()}>
            <Text>
              MENU
            </Text>
          </TouchableHighlight>

        </View>
      </Image>
    );
  }

}

MainView.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export {MainView};
