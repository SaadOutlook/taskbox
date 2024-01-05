import { Accordion } from './Accordion';

export default {
    title: "Toolkit/Accordion",
    component: Accordion,
    parameters: {
        layout: 'centered',
    },

}

export const Primary = {
    args: {
      list:["Sources","Destinations","Transformation","Data Profiling","Resources","Data Warehouse","Services","Text Processors","EDI","Analytical Model","Dashboard Tiles"]
    },
  };