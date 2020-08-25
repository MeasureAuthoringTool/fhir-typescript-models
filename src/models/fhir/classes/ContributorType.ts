/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class ContributorType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ContributorType";

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
  
  public getTypeName(): string {
    return "ContributorType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
