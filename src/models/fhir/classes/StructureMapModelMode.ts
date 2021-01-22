/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("StructureMapModelMode", "PrimitiveCode")
export class StructureMapModelMode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureMapModelMode";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: StructureMapModelMode = new StructureMapModelMode()
  ): StructureMapModelMode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isStructureMapModelMode(input?: unknown): input is StructureMapModelMode {
    const castInput = input as StructureMapModelMode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StructureMapModelMode";
  }

  public clone(): StructureMapModelMode {
    const result = new StructureMapModelMode();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "StructureMapModelMode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
