import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import "leaflet-routing-machine";
import RoutingMachine from "./Routing";
export default function Map() {
    return (
        <MapContainer center={[10.8016228, 106.711881]} zoom={13} scrollWheelZoom={true} style={{ width: "200vh", height: "100vh" }}>
            <TileLayer
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            />

            <RoutingMachine />
        </MapContainer>
    );
}