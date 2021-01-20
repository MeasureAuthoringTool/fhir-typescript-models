/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("StructureMapTargetListMode", "PrimitiveCode")
export class StructureMapTargetListMode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureMapTargetListMode";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: StructureMapTargetListMode = new StructureMapTargetListMode()
  ): StructureMapTargetListMode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isStructureMapTargetListMode(input?: unknown): input is StructureMapTargetListMode {
    const castInput = input as StructureMapTargetListMode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StructureMapTargetListMode";
  }

  public clone(): StructureMapTargetListMode {
    const result = new StructureMapTargetListMode();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "StructureMapTargetListMode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
