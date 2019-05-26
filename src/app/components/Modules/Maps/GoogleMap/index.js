/* eslint-disable max-len */

import React from 'react'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

// https://tomchentw.github.io/react-google-maps/

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      `https://maps.googleapis.com/maps/api/js?key=${process.env.GMAPS_TOKEN}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '500px' }} />,
    mapElement: <div style={{ height: '100%' }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={15} defaultCenter={{ lat: 37.0843358, lng: -7.7888226 }}>
    {props.isMarkerShown && <Marker position={{ lat: 37.0843358, lng: -7.7888226 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
))

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    const { isMarkerShown } = this.state
    return <MyMapComponent isMarkerShown={isMarkerShown} onMarkerClick={this.handleMarkerClick} />
  }
}

export default MyFancyComponent
