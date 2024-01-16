import type { Filter } from "../types";
import sampleRoseColoredGlasses from "./samples/roseColoredGlasses";
import sampleGrid from "./samples/grid";
import sampleVignette from "./samples/vignette";
import { brightnessFilter } from "./_templateVanillaFilter";
import { Sad } from "./DepressedFilter";

const filters: Filter[] = [
  sampleRoseColoredGlasses,
  sampleGrid,
  sampleVignette,
  brightnessFilter,
  Sad,
];

export default filters;
