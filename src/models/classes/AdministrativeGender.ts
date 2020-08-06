/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class AdministrativeGender extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AdministrativeGender";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: AdministrativeGender = new AdministrativeGender()
  ): AdministrativeGender {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isAdministrativeGender(input?: unknown): input is AdministrativeGender {
    const castInput = input as AdministrativeGender;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AdministrativeGender";
  }
  
  public getTypeName(): string {
    return "AdministrativeGender";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
