import type { Filter } from "../types";

export const Sad : Filter = {
  name: "Sad",
  apply: (pixels, width, height) => {
    for (let i = 0; i < pixels.length; i++ ){
      const isRed = i % 4 === 0;
      const isGreen = i % 4 === 1;
      const isBlue = i % 4 === 2;
      const isAlpha = i % 4 === 3;;
      if (isBlue){
        pixels[i]=pixels[i]+100
      }
      if (isGreen){
        pixels[i]=pixels[i]+50
      }
      if (isAlpha){
        pixels[i]=pixels[i]-100
      }
      if (isRed){
pixels[i]=pixels[i]+50
      }
    }
    return pixels;
  }

}