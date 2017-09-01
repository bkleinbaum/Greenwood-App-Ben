// @flow

import React, {Component} from "react";
import {Image, ScrollView, StatusBar, Text, TouchableHighlight, View} from "react-native";

import {subpage_style} from "../styles/Styles";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {longText: "haven't made fetch call yet"};
  }

  componentWillMount() {
    console.log(`FlexbovView1 component will mount`);
    this.getLongText();
  }

  render() {
    let msg1: string = "About";
    let msg2: string = "Alive at Greenwood";

    return (
      <View style={subpage_style.container}>
        <View style={subpage_style.nav_container}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor='transparent'
            onPress={() => {
              this.props.navigator.pop();
            }}>
            <View style={subpage_style.nav_content}>
            <Image source={require('../assets/icon.png')} style={subpage_style.icon}>
            </Image>
            <Text style={subpage_style.instructions}>{msg1}</Text>
            </View>
          </TouchableHighlight>
        </View>
        <ScrollView>
          <Text style={subpage_style.text2}>{msg2}</Text>
          <Text style={subpage_style.text3}>{this.state.longText}</Text>
          <Text style={subpage_style.text3}>{this.state.longText}</Text>
          <Text style={subpage_style.text3}>{this.state.longText}</Text>
          <Text style={subpage_style.text3}>{this.state.longText}</Text>
        </ScrollView>
      </View>
    );
  }

  getLongText() {
    this.setState({longText: "about to load uri"});
    let numLines: number = 1;
    let uri: string = `https://baconipsum.com/api/?type=meat-and-filler&paras=${numLines}&format=text`;

    fetch(uri)
      .then((resp) => {
        resp.text()
            .then((data) => {
              this.setState({longText: data})
            })
      })
      .catch((err) => {
        console.log(`problem getting data from ${uri}, error: ${err}`)
      });
  }

}// end FlexBoxView1

About.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export {About};
