export default interface IMapProps {
    height: number | string
    width: number | string
    latitude: number
    longitude: number
    latitudeDelta: number
    longitudeDelta: number
    markers?: IMarker[]
    markerOnPress?: (id: number) => void
}

interface IMarker {
    id: number
    coordinate: {
        latitude: number
        longitude: number
    }
    title?: string
    description?: string
}