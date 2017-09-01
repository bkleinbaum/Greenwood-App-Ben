// @flow

import React from "react";
import {
  StyleSheet
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  map: {
    flex: 1
  },
  scrollView: {
    flex: 1
  }
});

const visit_style = StyleSheet.create({
  v_container: {
    flex: 1,
    flexDirection: 'column', // main axis
    // justifyContent: 'flex-end', // main axis
    alignItems: 'center', // cross axis
    backgroundColor: 'transparent',
  },
  nav_container: {
    flex: -1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '#555',
    alignItems: 'center',
    padding: 16,
    paddingTop: 25,
  },
  nav_content: {
    flex: -1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  title: {
    textAlign: 'left',
  },
  icon: {
    borderRadius: 5,
    height: 25,
    width: 25
  },
  instructions: {
    flex: -1,
    margin: 8,
    fontFamily: 'Avenir',
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: 12,
    color: '#fff',
  },
  menu_container: {
    flex: -1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    // alignSelf: 'flex-end', // overrides container alignItems
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 16,
  },
  menu: {
    flex: -1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    // alignSelf: 'flex-end', // overrides container alignItems
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginRight: 10,
    marginLeft: 10,
  },
  links: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  bottomLink: {
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    flex: -1,
    margin: 8,
    height: 100,
    width: 75,
    resizeMode: 'contain', //'cover' | 'contain'
  },
  image2: {
    flex: -1,
    height: 100,
    width: 150,
    resizeMode: 'contain', //'cover' | 'contain'
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  linkHolder: {
    flex: 1,
    flexDirection: 'row',
  },
  white: {
    fontSize: 23,
    flex: 1,
    color: '#fff',
    // backgroundColor: 'pink',
  },
  carrot: {
    fontSize: 23,
    color: '#fff',
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
  }
});

const landscape_style = StyleSheet.create({
  v_container: {
    flex: 1,
    flexDirection: 'column', // main axis
    // justifyContent: 'flex-end', // main axis
    alignItems: 'center', // cross axis
    backgroundColor: 'transparent',
  },
  nav_container: {
    flex: -1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '#555',
    padding: 16,
    paddingTop: 25,
  },
  title: {
    textAlign: 'left',
  },
  instructions: {
    flex: -1,
    margin: 8,
    fontFamily: 'Avenir',
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: 12,
    color: '#fff',
  },
  menu_container: {
    flex: -1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    // alignSelf: 'flex-end', // overrides container alignItems
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 16,
  },
  image: {
    flex: -1,
    margin: 8,
    height: 100,
    width: 75,
    resizeMode: 'contain', //'cover' | 'contain'
  },
  image2: {
    flex: -1,
    height: 100,
    width: 150,
    resizeMode: 'contain', //'cover' | 'contain'
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  menu: {
    flex: -1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    // alignSelf: 'flex-end', // overrides container alignItems
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    // padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  links: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  bottomLink: {
    padding: 10,
  }
});

const subpage_style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    backgroundColor: '#fff'
  },
  instructions: {
    flex: -1,
    margin: 8,
    fontFamily: 'Avenir',
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: 12,
    color: '#fff',
  },
  nav_content: {
    flex: -1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  title: {
    textAlign: 'left',
  },
  icon: {
    borderRadius: 5,
    height: 25,
    width: 25
  },
  text1: {
    flex: -1,
    fontSize: 20,
    fontWeight: '900',
    fontFamily: 'Avenir',
    backgroundColor: '#00d084',
    padding: 16,
  },
  text2: {
    flex: -1,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Avenir',
    color: '#000',
    backgroundColor: '#1273de',
    margin: 16,
    padding: 16,
  },
  text3: {
    flex: 1,
    fontSize: 12,
    fontWeight: '200',
    fontFamily: 'Avenir',
    color: '#000',
    // backgroundColor: '#d4c4fb',
    margin: 16,
    padding: 16,
  },
  nav_container: {
    flex: -1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '#555',
    padding: 16,
    paddingTop: 25,
  },
  instructions: {
    flex: -1,
    margin: 8,
    fontFamily: 'Avenir',
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: 12,
    color: '#fff',
  },
});


const subpageDark_style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    backgroundColor: '#777'
  },
  instructions: {
    flex: -1,
    margin: 8,
    fontFamily: 'Avenir',
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: 12,
    color: '#fff',
  },
  nav_content: {
    flex: -1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  title: {
    textAlign: 'left',
  },
  icon: {
    borderRadius: 5,
    height: 25,
    width: 25
  },
  text1: {
    flex: -1,
    fontSize: 20,
    fontWeight: '900',
    fontFamily: 'Avenir',
    // backgroundColor: '#00d084',
    padding: 16,
  },
  text2: {
    flex: -1,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Avenir',
    color: '#fff',
    // backgroundColor: '#1273de',
    margin: 16,
    padding: 16,
  },
  text3: {
    flex: 1,
    fontSize: 12,
    fontWeight: '200',
    fontFamily: 'Avenir',
    color: '#fff',
    // backgroundColor: '#d4c4fb',
    margin: 16,
    padding: 16,
  },
  nav_container: {
    flex: -1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '#555',
    padding: 16,
    paddingTop: 25,
  },
  instructions: {
    flex: -1,
    margin: 8,
    fontFamily: 'Avenir',
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: 12,
    color: '#fff',
  },
});

// fonts available - https://github.com/dabit3/react-native-fonts
// flexbox guide - https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox
const flexboxview1_style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'column-reverse',
    flexWrap: 'nowrap',
    backgroundColor: '#8ed1fc'
  },
  text1: {
    flex: -1,
    fontSize: 20,
    fontWeight: '900',
    fontFamily: 'Avenir',
    backgroundColor: '#00d084',
    margin: 16,
    padding: 16,
  },
  text2: {
    flex: -1,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Avenir',
    color: '#c4def6',
    backgroundColor: '#1273de',
    margin: 16,
    padding: 16,
  },
  text3: {
    flex: 1,
    fontSize: 12,
    fontWeight: '200',
    fontFamily: 'Avenir',
    color: '#697689',
    backgroundColor: '#d4c4fb',
    margin: 16,
    padding: 16,
  }
});

// more info on images - https://facebook.github.io/react-native/docs/images.html
const flexboxview2_style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    overflow: 'visible',
    flexWrap: 'wrap',
    backgroundColor: '#8ed1fc'
  },
  img_static: {
    flex: 1,
    width: undefined,
    height: 150,
    resizeMode: 'cover'
  },
  img_network: {
    flex: 1,
    resizeMode: 'contain'
  },
  text1: {
    flex: -1,
    alignSelf: 'flex-end',
    fontSize: 20,
    fontWeight: '900',
    fontFamily: 'Avenir',
    backgroundColor: '#00d084',
    margin: 16,
    padding: 16,
  },
  text2: {
    flex: -1,
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Avenir',
    color: '#c4def6',
    backgroundColor: '#1273de',
    margin: 16,
    padding: 16,
  },
  text3: {
    flex: -1,
    fontSize: 12,
    fontWeight: '200',
    fontFamily: 'Avenir',
    color: '#697689',
    backgroundColor: '#d4c4fb',
    margin: 16,
    padding: 16,
  },
  text4: {
    color: '#1273de',
    backgroundColor: 'rgba(212, 196, 251, 0.5)',
    fontSize: 12,
    fontWeight: '200',
    fontFamily: 'Avenir',
    padding: 16,
  }
});

const router_style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text1: {
    flex: -1,
    color: '#1273de',
    backgroundColor: '#fff',
    fontSize: 18,
    fontWeight: '200',
    fontFamily: 'Avenir',
    padding: 16,
  }
});

const mainview_style = StyleSheet.create({
  v_container: {
    flex: 1,
    flexDirection: 'column', // main axis
    // justifyContent: 'flex-end', // main axis
    alignItems: 'center', // cross axis
    backgroundColor: 'transparent',
  },
  nav_container: {
    flex: -1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#555',
    padding: 16,
    paddingTop: 25,
  },
  icon: {
    borderRadius: 5,
    height: 25,
    width: 25
  },
  title: {
    textAlign: 'left',
  },
  instructions: {
    flex: -1,
    margin: 8,
    fontFamily: 'Avenir',
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: 18,
    color: '#fff',
  },
  menu_container: {
    flex: -1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    // alignSelf: 'flex-end', // overrides container alignItems
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 16,
  },
  menu: {
    flex: -1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    // alignSelf: 'flex-end', // overrides container alignItems
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginRight: 10,
    marginLeft: 10,
  },
  links: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  bottomLink: {
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    flex: -1,
    margin: 8,
    height: 100,
    width: 75,
    resizeMode: 'contain', //'cover' | 'contain'
  },
  image2: {
    flex: -1,
    height: 100,
    width: 150,
    resizeMode: 'contain', //'cover' | 'contain'
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  linkHolder: {
    flex: 1,
    flexDirection: 'row',
  },
  white: {
    fontSize: 23,
    flex: 1,
    color: '#fff',
    // backgroundColor: 'pink',
  },
  carrot: {
    fontSize: 23,
    color: '#fff',
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
  }
});

function mainview_style_image(width: number, height: number) {
  return StyleSheet.create({
    imageSize: {
      width: width,
      height: height,
    },
    padding: {
      marginTop: 8,
    },
  });
}

export {
  styles,
  mainview_style,
  mainview_style_image,
  visit_style,
  subpage_style,
  subpageDark_style,
  flexboxview1_style,
  flexboxview2_style,
  router_style,
};
