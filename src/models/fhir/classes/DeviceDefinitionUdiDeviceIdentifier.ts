/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IDeviceDefinitionUdiDeviceIdentifier,
  PrimitiveString,
  PrimitiveUri,
  FhirType
} from "../internal";

@FhirType("DeviceDefinitionUdiDeviceIdentifier", "BackboneElement")
export class DeviceDefinitionUdiDeviceIdentifier extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceDefinition.UdiDeviceIdentifier";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public deviceIdentifier?: PrimitiveString;

  @FhirField("PrimitiveUri")
  public issuer?: PrimitiveUri;

  @FhirField("PrimitiveUri")
  public jurisdiction?: PrimitiveUri;

  public static parse(
    json: IDeviceDefinitionUdiDeviceIdentifier,
    providedInstance: DeviceDefinitionUdiDeviceIdentifier = new DeviceDefinitionUdiDeviceIdentifier()
  ): DeviceDefinitionUdiDeviceIdentifier {
    const newInstance: DeviceDefinitionUdiDeviceIdentifier = BackboneElement.parse(json, providedInstance);
  
    if (json.deviceIdentifier !== undefined) {
      newInstance.deviceIdentifier = PrimitiveString.parsePrimitive(json.deviceIdentifier, json._deviceIdentifier);
    }
    if (json.issuer !== undefined) {
      newInstance.issuer = PrimitiveUri.parsePrimitive(json.issuer, json._issuer);
    }
    if (json.jurisdiction !== undefined) {
      newInstance.jurisdiction = PrimitiveUri.parsePrimitive(json.jurisdiction, json._jurisdiction);
    }
    return newInstance;
  }

  public static isDeviceDefinitionUdiDeviceIdentifier(input?: unknown): input is DeviceDefinitionUdiDeviceIdentifier {
    const castInput = input as DeviceDefinitionUdiDeviceIdentifier;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceDefinitionUdiDeviceIdentifier";
  }

  public toJSON(): IDeviceDefinitionUdiDeviceIdentifier {
    const result: IDeviceDefinitionUdiDeviceIdentifier = super.toJSON();

    if (this.deviceIdentifier) {
      result.deviceIdentifier = this.deviceIdentifier.value;
      result._deviceIdentifier = Extension.serializePrimitiveExtension(this.deviceIdentifier);
    }

    if (this.issuer) {
      result.issuer = this.issuer.value;
      result._issuer = Extension.serializePrimitiveExtension(this.issuer);
    }

    if (this.jurisdiction) {
      result.jurisdiction = this.jurisdiction.value;
      result._jurisdiction = Extension.serializePrimitiveExtension(this.jurisdiction);
    }

    return result;
  }

  public clone(): DeviceDefinitionUdiDeviceIdentifier {
    return DeviceDefinitionUdiDeviceIdentifier.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DeviceDefinitionUdiDeviceIdentifier";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
