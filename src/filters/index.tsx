import type { Filter } from "../types";
import sampleRoseColoredGlasses from "./samples/roseColoredGlasses";
import sampleGrid from "./samples/grid";
import sampleVignette from "./samples/vignette";
import { brightnessFilter } from "./_templateVanillaFilter";

const filters: Filter[] = [
  sampleRoseColoredGlasses,
  sampleGrid,
  sampleVignette,
  brightnessFilter,
];

export default filters;
