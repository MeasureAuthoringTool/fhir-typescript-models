/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  DeviceNameType,
  Extension,
  IDeviceDefinitionDeviceName,
  PrimitiveString,
  FieldMetadata
} from "../internal";

export class DeviceDefinitionDeviceName extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceDefinition.DeviceName";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "name",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "type",
      fieldType: [DeviceNameType],
      isArray: false
    }];
  }

  public name?: PrimitiveString;

  public type?: DeviceNameType;

  public static parse(
    json: IDeviceDefinitionDeviceName,
    providedInstance: DeviceDefinitionDeviceName = new DeviceDefinitionDeviceName()
  ): DeviceDefinitionDeviceName {
    const newInstance: DeviceDefinitionDeviceName = BackboneElement.parse(json, providedInstance);
  
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.type !== undefined) {
      newInstance.type = DeviceNameType.parsePrimitive(json.type, json._type);
    }
    return newInstance;
  }

  public static isDeviceDefinitionDeviceName(input?: unknown): input is DeviceDefinitionDeviceName {
    const castInput = input as DeviceDefinitionDeviceName;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceDefinitionDeviceName";
  }

  public toJSON(): IDeviceDefinitionDeviceName {
    const result: IDeviceDefinitionDeviceName = super.toJSON();

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

  public clone(): DeviceDefinitionDeviceName {
    return DeviceDefinitionDeviceName.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DeviceDefinitionDeviceName";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
