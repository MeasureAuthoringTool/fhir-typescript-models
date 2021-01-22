/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ConsentProvisionType", "PrimitiveCode")
export class ConsentProvisionType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ConsentProvisionType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ConsentProvisionType = new ConsentProvisionType()
  ): ConsentProvisionType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isConsentProvisionType(input?: unknown): input is ConsentProvisionType {
    const castInput = input as ConsentProvisionType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ConsentProvisionType";
  }

  public clone(): ConsentProvisionType {
    const result = new ConsentProvisionType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ConsentProvisionType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
