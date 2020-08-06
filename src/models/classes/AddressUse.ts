/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class AddressUse extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AddressUse";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: AddressUse = new AddressUse()
  ): AddressUse {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isAddressUse(input?: unknown): input is AddressUse {
    const castInput = input as AddressUse;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AddressUse";
  }
  
  public getTypeName(): string {
    return "AddressUse";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
