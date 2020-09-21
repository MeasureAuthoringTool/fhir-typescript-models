/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IDeviceUdiCarrier,
  PrimitiveBase64Binary,
  PrimitiveString,
  PrimitiveUri,
  UDIEntryType,
} from "../internal";

export class DeviceUdiCarrier extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Device.UdiCarrier";
  
  static readonly primaryCodePath: string | null = null;

  public deviceIdentifier?: PrimitiveString;

  public issuer?: PrimitiveUri;

  public jurisdiction?: PrimitiveUri;

  public carrierAIDC?: PrimitiveBase64Binary;

  public carrierHRF?: PrimitiveString;

  public entryType?: UDIEntryType;

  public static parse(
    json: IDeviceUdiCarrier,
    providedInstance: DeviceUdiCarrier = new DeviceUdiCarrier()
  ): DeviceUdiCarrier {
    const newInstance: DeviceUdiCarrier = BackboneElement.parse(json, providedInstance);
  
    if (json.deviceIdentifier !== undefined) {
      newInstance.deviceIdentifier = PrimitiveString.parsePrimitive(json.deviceIdentifier, json._deviceIdentifier);
    }
    if (json.issuer !== undefined) {
      newInstance.issuer = PrimitiveUri.parsePrimitive(json.issuer, json._issuer);
    }
    if (json.jurisdiction !== undefined) {
      newInstance.jurisdiction = PrimitiveUri.parsePrimitive(json.jurisdiction, json._jurisdiction);
    }
    if (json.carrierAIDC !== undefined) {
      newInstance.carrierAIDC = PrimitiveBase64Binary.parsePrimitive(json.carrierAIDC, json._carrierAIDC);
    }
    if (json.carrierHRF !== undefined) {
      newInstance.carrierHRF = PrimitiveString.parsePrimitive(json.carrierHRF, json._carrierHRF);
    }
    if (json.entryType !== undefined) {
      newInstance.entryType = UDIEntryType.parsePrimitive(json.entryType, json._entryType);
    }
    return newInstance;
  }

  public static isDeviceUdiCarrier(input?: unknown): input is DeviceUdiCarrier {
    const castInput = input as DeviceUdiCarrier;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceUdiCarrier";
  }

  public toJSON(): IDeviceUdiCarrier {
    const result: IDeviceUdiCarrier = super.toJSON();

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

    if (this.carrierAIDC) {
      result.carrierAIDC = this.carrierAIDC.value;
      result._carrierAIDC = Extension.serializePrimitiveExtension(this.carrierAIDC);
    }

    if (this.carrierHRF) {
      result.carrierHRF = this.carrierHRF.value;
      result._carrierHRF = Extension.serializePrimitiveExtension(this.carrierHRF);
    }

    if (this.entryType) {
      result.entryType = this.entryType.value;
      result._entryType = Extension.serializePrimitiveExtension(this.entryType);
    }

    return result;
  }

  public clone(): DeviceUdiCarrier {
    return DeviceUdiCarrier.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DeviceUdiCarrier";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
