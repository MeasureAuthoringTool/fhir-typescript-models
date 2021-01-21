/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("StructureMapSourceListMode", "PrimitiveCode")
export class StructureMapSourceListMode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureMapSourceListMode";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: StructureMapSourceListMode = new StructureMapSourceListMode()
  ): StructureMapSourceListMode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isStructureMapSourceListMode(input?: unknown): input is StructureMapSourceListMode {
    const castInput = input as StructureMapSourceListMode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StructureMapSourceListMode";
  }

  public clone(): StructureMapSourceListMode {
    const result = new StructureMapSourceListMode();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "StructureMapSourceListMode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
