/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  DeviceNameType,
  Extension,
  FhirField,
  IDeviceDeviceName,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("DeviceDeviceName", "BackboneElement")
export class DeviceDeviceName extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Device.DeviceName";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("DeviceNameType")
  public type?: DeviceNameType;

  public static parse(
    json: IDeviceDeviceName,
    providedInstance: DeviceDeviceName = new DeviceDeviceName()
  ): DeviceDeviceName {
    const newInstance: DeviceDeviceName = BackboneElement.parse(json, providedInstance);
  
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.type !== undefined) {
      newInstance.type = DeviceNameType.parsePrimitive(json.type, json._type);
    }
    return newInstance;
  }

  public static isDeviceDeviceName(input?: unknown): input is DeviceDeviceName {
    const castInput = input as DeviceDeviceName;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceDeviceName";
  }

  public toJSON(): IDeviceDeviceName {
    const result: IDeviceDeviceName = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    return result;
  }

  public clone(): DeviceDeviceName {
    return DeviceDeviceName.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DeviceDeviceName";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
