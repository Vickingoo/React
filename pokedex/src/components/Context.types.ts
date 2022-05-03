interface Location {
    name: string
    url: string
  }
  
  interface Region {
    name: string
    url: string
  }
  
  interface LocationDetailData {
    names: string[]
    generations: string[]
  }
  
  export interface IGeneralContext {
    state: {
      regions: Region[];
      selectedRegion?: string;
      locations: Location[];
      selectedLocation?: string;
      locationsDetails?: LocationDetailData;
    };
    setState: any
  }