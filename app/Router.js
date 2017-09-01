// @flow

import React, {Component} from "react";
import {BackAndroid, Navigator, ToastAndroid} from "react-native";

//Index
import {MainView} from "./MainView";

import {FlexboxView1} from "./FlexboxView1";

//Main menu
import {Visit} from "./Visit";
import {Landscape} from "./Landscape";
import {Trees} from "./Trees";
import {Wildlife} from "./Wildlife";

//Map
import {Map} from "./Map";

//Sub pages
import {About} from "./About";
import {DarkSubpage} from "./Birds";

import {_} from "lodash";

import * as styles from "../styles/Styles";

//
// list of routes
//

const routes = [
  {
    name: 'Home',
    index: 0
  },
  {
    name: 'Visit',
    index: 1
  },
  {
    name: 'Landscape',
    index: 2
  },
  {
    name: 'Trees',
    index: 3
  },
  {
    name: 'Wildlife',
    index: 4
  },
  {
    name: 'About',
    index: 5
  },
  {
    name: 'DarkSubpage',
    index: 6
  },
  {
    name: 'Map',
    index: 7
  }

];

let _navigator, _route;

//
// This class holds the Navigator component
//

class Router extends Component {

  constructor(props) {
    super(props);
    BackAndroid.addEventListener('hardwareBackPress', () => {
      // debug msg
      let msg = 'back press';
      let length = _navigator.getCurrentRoutes().length;
      if (!_.isNil(_navigator)) {
        msg = `${msg} length=${length}`;
      }
      if (!_.isNil(_route)) {
        msg = `${msg} index=${_route.index}, name=${_route.name}`
      }
      ToastAndroid.show(msg, 10000);

      // actual code
      if (length === 1 || length === routes.length) {
        return false;
      }
      _navigator.pop();
      return true;
    })
  }

  /*
   // The following code is a really simplistic router
   let route = 0;
   switch (route) {
   case 0: return (<MainView/>);
   case 1: return (<FlexboxView1/>);
   case 2: return (<FlexboxView2/>);
   }
   */
  render() {
    return (
      <Navigator
        configureScene={ this.configureScene }
        style={styles.router_style.container}
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={this.renderScene}
      />
    );
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  renderScene(route, navigator) {
    _navigator = navigator;
    _route = route;
    switch (route.index) {
      case 0:
        return (
          <MainView navigator={navigator} title={route.name}/>
        );
      case 1:
        return (
          <Visit navigator={navigator} title={route.name}/>
        );
      case 2:
        return (
          <Landscape navigator={navigator} title={route.name}/>
        );
      case 3:
        return (
          <Trees navigator={navigator} title={route.name}/>
        );
      case 4:
        return (
          <Wildlife navigator={navigator} title={route.name}/>
        );
      case 5:
        return (
          <About navigator={navigator} title={route.name}/>
        );
      case 6:
        return (
          <DarkSubpage navigator={navigator} title={route.name}/>
        );
      case 7:
        return (
          <Map navigator={navigator} title={route.name}/>
        );
    }

  };

  componentWillMount() {
    console.log(`Router component will mount`);
  }

}// end Router component

export {Router}
