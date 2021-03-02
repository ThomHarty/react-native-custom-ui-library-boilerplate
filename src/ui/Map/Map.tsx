import * as React from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

import IMapProps from './Map.interface'

const Map: React.FC<IMapProps> = ({
    height,
    width,
    latitude,
    longitude,
    latitudeDelta,
    longitudeDelta,
    markers,
    markerOnPress,
}) => {
    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={{ height, width }}
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta,
              longitudeDelta,
            }}
        >
            {markers && markers.map(marker => (
                <Marker
                    key={marker.id}
                    onPress={markerOnPress ? id => markerOnPress(marker.id) : undefined}
                    coordinate={{
                        latitude: marker.coordinate.latitude,
                        longitude: marker.coordinate.longitude,
                    }}
                    title={marker.title}
                    description={marker.description}
                />
            ))}
        </MapView>
    )
}

export default Map