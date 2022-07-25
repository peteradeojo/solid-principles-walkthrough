export default interface ShapeInterface {
  area(): number;
}

export type Shape = {
  length?: number;
  radius?: number;
  width?: number;
  height?: number;
  area(): number;
  volume?(): number;
};
