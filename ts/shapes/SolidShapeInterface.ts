import ManageShapeInterface from "./ManageShapeInterface";

export default interface SolidShapeInterface extends ManageShapeInterface {
  volume(): number;
}
