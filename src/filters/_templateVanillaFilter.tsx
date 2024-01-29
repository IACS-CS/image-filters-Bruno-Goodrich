import type { Filter } from "../types";

export const brightnessFilter : Filter = {
  name: "Brighten",
  apply: (pixels, width, height) => {
    for (let i = 0; i < pixels.length; i++ ){
      pixels[i] = pixels[i] + 50;
    }
    /* Modify pixels... */
    return pixels;
  },
};
