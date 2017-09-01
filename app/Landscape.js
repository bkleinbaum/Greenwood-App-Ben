// @flow

import React, {Component} from "react";
import {Image, Text, TouchableHighlight, View} from "react-native";

import {visit_style} from "../styles/Styles";

import renderIf from './renderIf';

class Landscape extends Component {
  constructor(props) {
    super(props);
    this.state = {longText: "haven't made fetch call yet"};
    this.state ={
      status:false
    }
  }

  componentWillMount() {
    console.log(`Visit component will mount`);
    this.getLongText();
  }

  toggleStatus(){
    this.setState({
      status:!this.state.status
    });
    console.log('toggle button handler: '+ this.state.status);
  }

  render() {
    let msg1: string = "LANDSCAPE";
    let msg2: string = "Details Text";

    return (
      <Image source={require('../assets/landscape.png')} style={visit_style.backgroundImage}>
        <View style={visit_style.v_container}>
          <View style={visit_style.nav_container}>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor='transparent'
              onPress={() => {
                this.props.navigator.pop();
              }}>
              <View style={visit_style.nav_content}>
              <Image source={require('../assets/icon.png')} style={visit_style.icon}>
              </Image>
              <Text style={visit_style.instructions}>{msg1}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        {renderIf(this.state.status)(

          <View style={visit_style.menu}>

            <TouchableHighlight style={visit_style.links}
              activeOpacity={1}
              underlayColor='transparent'
              onPress={() => {
                this.props.navigator.push({index: 5});
              }}>
              <View style={visit_style.linkHolder}>
                <Text style={visit_style.white}>
                  Topography
                </Text>
                <Text style={visit_style.carrot}>
                  >
                </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight style={visit_style.links}
              activeOpacity={1}
              underlayColor='transparent'
              onPress={() => {
                this.props.navigator.push({index: 5});
              }}>
              <View style={visit_style.linkHolder}>
                <Text style={visit_style.white}>
                  Historical Eras
                </Text>
                <Text style={visit_style.carrot}>
                  >
                </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight style={visit_style.bottomLink}
              activeOpacity={1}
              underlayColor='transparent'
              onPress={() => {
                this.props.navigator.push({index: 5});
              }}>
              <View style={visit_style.linkHolder}>
                <Text style={visit_style.white}>
                  Timeline
                </Text>
                <Text style={visit_style.carrot}>
                  >
                </Text>
              </View>
            </TouchableHighlight>

          </View>

        )}
        <View style={visit_style.menu_container}>

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

Landscape.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export {Landscape};
