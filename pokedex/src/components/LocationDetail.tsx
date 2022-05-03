import React, { useContext, useEffect, useState } from "react";
import { GeneralContext, INITIAL_STATE } from "./Context";


const LocationDetail: React.FC = () => {
  const {state, setState} = useContext(GeneralContext)

  useEffect(() => {
      if (state.selectedLocation) {
        fetch(`https://pokeapi.co/api/v2/location/${state.selectedLocation}`)
        .then((res) => res.json())
        .then((data) => setState({...state,locationsDetails:  {
          names: data.names.map((item: any) => item.name),
          generations: data.game_indices.map(
            (item: any) => item.generation.name
          ),
        }})
         
        );

      }

  }, [state.selectedLocation]);

  return (
    <div style={{ border: "1px solid green" }}>
        <h1>Details</h1>
      <ul>
        <p>{state.locationsDetails?.names.join(", ")}</p>
        <p>{state.locationsDetails?.generations.join(", ")}</p>
        <button
          onClick={() => {
           setState(INITIAL_STATE)
          }}
        >
          Reset
        </button>
      </ul>
    </div>
  );
}

export default LocationDetail;