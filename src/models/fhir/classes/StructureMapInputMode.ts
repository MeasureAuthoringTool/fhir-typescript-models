/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("StructureMapInputMode", "PrimitiveCode")
export class StructureMapInputMode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureMapInputMode";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: StructureMapInputMode = new StructureMapInputMode()
  ): StructureMapInputMode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isStructureMapInputMode(input?: unknown): input is StructureMapInputMode {
    const castInput = input as StructureMapInputMode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StructureMapInputMode";
  }

  public clone(): StructureMapInputMode {
    const result = new StructureMapInputMode();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "StructureMapInputMode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
