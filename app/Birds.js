// @flow

import React, {Component} from "react";
import {Image, ScrollView, StatusBar, Text, TouchableHighlight, View} from "react-native";

import {subpageDark_style} from "../styles/Styles";

class DarkSubpage extends Component {
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
    let msg2: string = "Dark Subpage";

    return (
      <View style={subpageDark_style.container}>
        <View style={subpageDark_style.nav_container}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor='transparent'
            onPress={() => {
              this.props.navigator.pop();
            }}>
            <View style={subpageDark_style.nav_content}>
            <Image source={require('../assets/icon.png')} style={subpageDark_style.icon}>
            </Image>
            <Text style={subpageDark_style.instructions}>{msg1}</Text>
            </View>
          </TouchableHighlight>
        </View>
        <ScrollView>
          <Text style={subpageDark_style.text2}>{msg2}</Text>
          <Text style={subpageDark_style.text3}>{this.state.longText}</Text>
          <Text style={subpageDark_style.text3}>{this.state.longText}</Text>
          <Text style={subpageDark_style.text3}>{this.state.longText}</Text>
          <Text style={subpageDark_style.text3}>{this.state.longText}</Text>
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

DarkSubpage.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export {DarkSubpage};
