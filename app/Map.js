// @flow

import React, {Component} from "react";
import Mapbox, { MapView } from "react-native-mapbox-gl";
import {ScrollView, StatusBar, Text, TouchableHighlight, View} from "react-native";

import {styles} from "../styles/Styles";

const accessToken = 'pk.eyJ1IjoiYms3NDEiLCJhIjoiZFNVcTNvdyJ9.h8G4i4ib7PicRCiejvZW6g';
Mapbox.setAccessToken(accessToken);

var REQUEST_URL = '/assets/WhirlwindTrees.geojson';


class Map extends Component {
  state = {
    center: {
      latitude: 40.652308,
      longitude: -73.9917204
    },
    zoom: 13,
    userTrackingMode: Mapbox.userTrackingMode.none,

    annotations: [{
      coordinates: [40.652308, -73.9917204],
      type: 'point',
      title: 'This is marker 1',
      subtitle: 'It has a rightCalloutAccessory too',
      // rightCalloutAccessory: {
      //   source: { uri: 'https://cldup.com/9Lp0EaBw5s.png' },
      //   height: 25,
      //   width: 25
      // },
      // annotationImage: {
      //   source: { uri: 'https://cldup.com/CnRLZem9k9.png' },
      //   height: 25,
      //   width: 25
      // },
      id: 'marker1'
    }]
  };

  onRegionDidChange = (location) => {
    this.setState({ currentZoom: location.zoomLevel });
    console.log('onRegionDidChange', location);
  };
  onRegionWillChange = (location) => {
    console.log('onRegionWillChange', location);
  };
  onUpdateUserLocation = (location) => {
    console.log('onUpdateUserLocation', location);
  };
  onOpenAnnotation = (annotation) => {
    console.log('onOpenAnnotation', annotation);
  };
  onRightAnnotationTapped = (e) => {
    console.log('onRightAnnotationTapped', e);
  };
  onLongPress = (location) => {
    console.log('onLongPress', location);
  };
  onTap = (location) => {
    console.log('onTap', location);
  };
  onChangeUserTrackingMode = (userTrackingMode) => {
    this.setState({ userTrackingMode });
    console.log('onChangeUserTrackingMode', userTrackingMode);
  };


    componentWillMount() {
      this._offlineProgressSubscription = Mapbox.addOfflinePackProgressListener(progress => {
        console.log('offline pack progress', progress);
      });
      this._offlineMaxTilesSubscription = Mapbox.addOfflineMaxAllowedTilesListener(tiles => {
        console.log('offline max allowed tiles', tiles);
      });
      this._offlineErrorSubscription = Mapbox.addOfflineErrorListener(error => {
        console.log('offline error', error);
      });
    }

    componentWillUnmount() {
      this._offlineProgressSubscription.remove();
      this._offlineMaxTilesSubscription.remove();
      this._offlineErrorSubscription.remove();
    }



render() {
    StatusBar.setHidden(true);
    return (
      <View style={styles.container}>
        <MapView
          ref={map => { this._map = map; }}
          style={styles.map}
          initialCenterCoordinate={this.state.center}
          initialZoomLevel={this.state.zoom}
          initialDirection={0}
          rotateEnabled={true}
          scrollEnabled={true}
          zoomEnabled={true}
          showsUserLocation={false}
          styleURL={'mapbox://styles/bk741/cj6gkj29d3iuu2st6zjtpywte'}
          userTrackingMode={this.state.userTrackingMode}
          annotations={this.state.annotations}
          annotationsAreImmutable
          onChangeUserTrackingMode={this.onChangeUserTrackingMode}
          onRegionDidChange={this.onRegionDidChange}
          onRegionWillChange={this.onRegionWillChange}
          onOpenAnnotation={this.onOpenAnnotation}
          onRightAnnotationTapped={this.onRightAnnotationTapped}
          onUpdateUserLocation={this.onUpdateUserLocation}
          onLongPress={this.onLongPress}
          onTap={this.onTap}
        />
      <ScrollView style={styles.scrollView}>
        {this._renderButtons()}
      </ScrollView>
      </View>
    );
  }

  _renderButtons() {
    return (
      <View>


      </View>
    );
  }


}
Map.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export {Map};
