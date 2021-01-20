/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ContributorType", "PrimitiveCode")
export class ContributorType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ContributorType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ContributorType = new ContributorType()
  ): ContributorType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isContributorType(input?: unknown): input is ContributorType {
    const castInput = input as ContributorType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ContributorType";
  }

  public clone(): ContributorType {
    const result = new ContributorType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ContributorType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
