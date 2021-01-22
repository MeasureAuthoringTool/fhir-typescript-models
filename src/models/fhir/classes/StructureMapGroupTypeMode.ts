/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("StructureMapGroupTypeMode", "PrimitiveCode")
export class StructureMapGroupTypeMode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureMapGroupTypeMode";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: StructureMapGroupTypeMode = new StructureMapGroupTypeMode()
  ): StructureMapGroupTypeMode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isStructureMapGroupTypeMode(input?: unknown): input is StructureMapGroupTypeMode {
    const castInput = input as StructureMapGroupTypeMode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StructureMapGroupTypeMode";
  }

  public clone(): StructureMapGroupTypeMode {
    const result = new StructureMapGroupTypeMode();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "StructureMapGroupTypeMode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
