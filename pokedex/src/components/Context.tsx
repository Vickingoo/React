import { createContext, useState } from "react";
import { IGeneralContext } from "./Context.types";

export const INITIAL_STATE = {
  regions: [],
  selectedRegion: undefined,
  locations: [],
  selectedLocation: undefined,
  locationsDetails: undefined
}

export const GeneralContext = createContext<IGeneralContext>({
  state: INITIAL_STATE,
  setState: null,
});

export const GeneralProvider  = (props: any) => {
  const [state, setState] = useState(INITIAL_STATE)

    return (
      <GeneralContext.Provider value={{state, setState}}>
        {props.children}
      </GeneralContext.Provider>
    );
}