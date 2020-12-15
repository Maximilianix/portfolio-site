import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Googlemap extends React.Component {
  static defaultProps = {
    center: {
      lat: 32.093,
      lng: 34.794
    },
    zoom: 13
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="contactMap">
          <h2>Contact Map</h2>
          <div style={{ height: '400px', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyAMqFwLGCxxumhPou3Ms2tctzSnJPIj64k' }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={32.09363874944252}
                lng={34.79476240002239}
                text=""
              />
            </GoogleMapReact>
            </div>
        </div>
    );
  }
}

 
export default Googlemap;

