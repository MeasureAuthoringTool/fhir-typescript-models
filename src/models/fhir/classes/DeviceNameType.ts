/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class DeviceNameType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceNameType";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: DeviceNameType = new DeviceNameType()
  ): DeviceNameType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isDeviceNameType(input?: unknown): input is DeviceNameType {
    const castInput = input as DeviceNameType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceNameType";
  }

  public clone(): DeviceNameType {
    const result = new DeviceNameType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "DeviceNameType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
