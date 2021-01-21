/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("StrandType", "PrimitiveCode")
export class StrandType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StrandType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: StrandType = new StrandType()
  ): StrandType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isStrandType(input?: unknown): input is StrandType {
    const castInput = input as StrandType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StrandType";
  }

  public clone(): StrandType {
    const result = new StrandType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "StrandType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
