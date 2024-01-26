
import type { Filter } from "../types";

type colorOptions = {
red: number;
blue: number;
green: number;
alpha: number;
}

export const colorShift : Filter<colorOptions> ={
  name: 'Color Shift',
  apply: (pixels, width, height, options )=>{
    for (let i = 0; i < pixels.length; i++){
      const isRed = i % 4 === 0;
      const isGreen = i % 4 === 1;
      const isBlue = i % 4 === 2;
      const isAlpha= i % 4 ===3
      if (isRed){
        pixels[i] = pixels[i]+options.red
      };
     /* if (isBlue){
        pixels[i]= pixels[i]+options.blue
      }
      if (isGreen){
        pixels[i]= pixels[i]+options.green
      }*/
      if (isAlpha){
        pixels[i]= pixels[i]-options.alpha
      }
  }
  return pixels 
},
options: [
  {
    name: 'red',
    type: 'integer',
    default:50,
    min: 0,
    max: 255,
  },
  /*{
    name: 'blue',
    type: 'integer',
    default: 50,
    min: 0,
    max: 255,
  },
  {
    name: 'green',
    type: 'integer',
    default: 50,
    min:0,
    max:255,
  },*/
  {
    name: 'alpha',
    type: 'integer',
    default: 50,
    min:0,
    max:0,
  }
]
}