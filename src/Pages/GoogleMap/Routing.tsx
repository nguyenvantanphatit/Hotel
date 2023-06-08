import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

function RoutingMachine() {
    const map = useMap();

    useEffect(() => {
        const routingControl = L.Routing.control({
            waypoints: [
                L.latLng(10.8016228, 106.711881),
                L.latLng(10.840169, 106.755447),
            ],
        }).addTo(map);

        return () => {
            map.removeControl(routingControl);
        };
    }, [map]);

    return null;
}

export default RoutingMachine;
