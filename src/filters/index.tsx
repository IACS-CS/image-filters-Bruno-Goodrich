import type { Filter } from "../types";
import sampleRoseColoredGlasses from "./samples/roseColoredGlasses";
import sampleGrid from "./samples/grid";
import sampleVignette from "./samples/vignette";
import { brightnessFilter } from "./_templateVanillaFilter";
import { Sad } from "./DepressedFilter";
import { colorShift } from "./colorShift";

const filters: Filter[] = [
  //sampleRoseColoredGlasses,
  //sampleGrid,
  //sampleVignette,
  Sad,
  colorShift,
  brightnessFilter,
];

export default filters;
