
import type { Filter } from "../types";

type colorOptions = {
redStrength: number
blueStrength: number
greenStrength: number
}

export const colorShift : Filter<colorOptions> ={
  name: 'Color Shift',
  apply: (pixels, width, height, options )=>{
    for (let i = 0; i < pixels.length; i++){
      const isRed = i % 4 === 0;
      const isGreen = i % 4 === 1;
      const isBlue = i % 4 === 2;
      const redShift = options.redStrength;
      const blueShift = options.blueStrength;
      const greenShift = options.greenStrength;
      if (isRed){
        pixels[i]=pixels[i]+redShift
      };
      if (isBlue){
        pixels[i]=pixels[i]+blueShift
      }
      if (isGreen){
        pixels[i]=pixels[i]+greenShift
      }
  }
  return pixels 
},
options: [
  {
    name: 'Red',
    type: 'integer',
    default: 50,
    min: 0,
    max: 255,
  },
  {
    name: 'Blue',
    type: 'integer',
    default: 50,
    min: 0,
    max: 255,
  },
  {
    name: 'Green',
    type: 'integer',
    default: 50,
    min:0,
    max:255,
  },
]
}