import React, { useContext, useEffect, useState } from "react";
import { GeneralContext } from "./Context";
import LocationDetail from "./LocationDetail";


interface RegionData {
  locations: Location[];
}

const Locations: React.FC = () => {

  const {state, setState} = useContext(GeneralContext)

  useEffect(() => {
    if (state.selectedRegion) {
      fetch(`https://pokeapi.co/api/v2/region/${state.selectedRegion}`)
        .then((res) => res.json())
        .then((data: RegionData) => setState({...state, locations: data.locations}));
    }
  }, [state.selectedRegion]);

  return (
    <div style={{ display: "flex", border: "1px solid blue" }}>
      <h1>Locations</h1>
      <ul>
        {state.locations.map((location) => (
          <li key={location.name}>
            <button
              onClick={() => setState({...state, selectedLocation: location.name})}
            >
              {location.name}
            </button>
          </li>
        ))}
      </ul>

      <LocationDetail

      />
    </div>
  );
};

export default Locations;