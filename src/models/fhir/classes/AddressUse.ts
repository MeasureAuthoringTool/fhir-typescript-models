/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("AddressUse", "PrimitiveCode")
export class AddressUse extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AddressUse";

  static readonly primaryCodePath: string | null = null;

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

  public clone(): AddressUse {
    const result = new AddressUse();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "AddressUse";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
