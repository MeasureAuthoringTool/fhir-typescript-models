/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("StructureMapContextType", "PrimitiveCode")
export class StructureMapContextType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureMapContextType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: StructureMapContextType = new StructureMapContextType()
  ): StructureMapContextType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isStructureMapContextType(input?: unknown): input is StructureMapContextType {
    const castInput = input as StructureMapContextType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StructureMapContextType";
  }

  public clone(): StructureMapContextType {
    const result = new StructureMapContextType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "StructureMapContextType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
