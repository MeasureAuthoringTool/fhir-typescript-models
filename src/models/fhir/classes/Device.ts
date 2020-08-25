/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  CodeableConcept,
  ContactPoint,
  DeviceDeviceName,
  DeviceProperty,
  DeviceSpecialization,
  DeviceUdiCarrier,
  DeviceVersion,
  DomainResource,
  Extension,
  FHIRDeviceStatus,
  Identifier,
  IDevice,
  PrimitiveDateTime,
  PrimitiveString,
  PrimitiveUri,
  Reference,
} from "../internal";

export class Device extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Device";

  public identifier?: Array<Identifier>;

  public definition?: Reference;

  public udiCarrier?: Array<DeviceUdiCarrier>;

  public status?: FHIRDeviceStatus;

  public statusReason?: Array<CodeableConcept>;

  public distinctIdentifier?: PrimitiveString;

  public manufacturer?: PrimitiveString;

  public manufactureDate?: PrimitiveDateTime;

  public expirationDate?: PrimitiveDateTime;

  public lotNumber?: PrimitiveString;

  public serialNumber?: PrimitiveString;

  public deviceName?: Array<DeviceDeviceName>;

  public modelNumber?: PrimitiveString;

  public partNumber?: PrimitiveString;

  public type?: CodeableConcept;

  public specialization?: Array<DeviceSpecialization>;

  public version?: Array<DeviceVersion>;

  public property?: Array<DeviceProperty>;

  public patient?: Reference;

  public owner?: Reference;

  public contact?: Array<ContactPoint>;

  public location?: Reference;

  public url?: PrimitiveUri;

  public note?: Array<Annotation>;

  public safety?: Array<CodeableConcept>;

  public parent?: Reference;

  public static parse(
    json: IDevice,
    providedInstance: Device = new Device()
  ): Device {
    const newInstance: Device = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.definition) {
      newInstance.definition = Reference.parse(json.definition);
    }
    if (json.udiCarrier) {
      newInstance.udiCarrier = json.udiCarrier.map((x) => DeviceUdiCarrier.parse(x));
    }
    if (json.status) {
      newInstance.status = FHIRDeviceStatus.parsePrimitive(json.status, json._status);
    }
    if (json.statusReason) {
      newInstance.statusReason = json.statusReason.map((x) => CodeableConcept.parse(x));
    }
    if (json.distinctIdentifier) {
      newInstance.distinctIdentifier = PrimitiveString.parsePrimitive(json.distinctIdentifier, json._distinctIdentifier);
    }
    if (json.manufacturer) {
      newInstance.manufacturer = PrimitiveString.parsePrimitive(json.manufacturer, json._manufacturer);
    }
    if (json.manufactureDate) {
      newInstance.manufactureDate = PrimitiveDateTime.parsePrimitive(json.manufactureDate, json._manufactureDate);
    }
    if (json.expirationDate) {
      newInstance.expirationDate = PrimitiveDateTime.parsePrimitive(json.expirationDate, json._expirationDate);
    }
    if (json.lotNumber) {
      newInstance.lotNumber = PrimitiveString.parsePrimitive(json.lotNumber, json._lotNumber);
    }
    if (json.serialNumber) {
      newInstance.serialNumber = PrimitiveString.parsePrimitive(json.serialNumber, json._serialNumber);
    }
    if (json.deviceName) {
      newInstance.deviceName = json.deviceName.map((x) => DeviceDeviceName.parse(x));
    }
    if (json.modelNumber) {
      newInstance.modelNumber = PrimitiveString.parsePrimitive(json.modelNumber, json._modelNumber);
    }
    if (json.partNumber) {
      newInstance.partNumber = PrimitiveString.parsePrimitive(json.partNumber, json._partNumber);
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.specialization) {
      newInstance.specialization = json.specialization.map((x) => DeviceSpecialization.parse(x));
    }
    if (json.version) {
      newInstance.version = json.version.map((x) => DeviceVersion.parse(x));
    }
    if (json.property) {
      newInstance.property = json.property.map((x) => DeviceProperty.parse(x));
    }
    if (json.patient) {
      newInstance.patient = Reference.parse(json.patient);
    }
    if (json.owner) {
      newInstance.owner = Reference.parse(json.owner);
    }
    if (json.contact) {
      newInstance.contact = json.contact.map((x) => ContactPoint.parse(x));
    }
    if (json.location) {
      newInstance.location = Reference.parse(json.location);
    }
    if (json.url) {
      newInstance.url = PrimitiveUri.parsePrimitive(json.url, json._url);
    }
    if (json.note) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.safety) {
      newInstance.safety = json.safety.map((x) => CodeableConcept.parse(x));
    }
    if (json.parent) {
      newInstance.parent = Reference.parse(json.parent);
    }
    return newInstance;
  }

  public static isDevice(input?: unknown): input is Device {
    const castInput = input as Device;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Device";
  }

  public toJSON(): IDevice {
    const result: IDevice = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.definition) {
      result.definition = this.definition.toJSON();
    }

    if (this.udiCarrier) {
      result.udiCarrier = this.udiCarrier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.statusReason) {
      result.statusReason = this.statusReason.map((x) => x.toJSON());
    }

    if (this.distinctIdentifier) {
      result.distinctIdentifier = this.distinctIdentifier.value;
      result._distinctIdentifier = Extension.serializePrimitiveExtension(this.distinctIdentifier);
    }

    if (this.manufacturer) {
      result.manufacturer = this.manufacturer.value;
      result._manufacturer = Extension.serializePrimitiveExtension(this.manufacturer);
    }

    if (this.manufactureDate) {
      result.manufactureDate = this.manufactureDate.value;
      result._manufactureDate = Extension.serializePrimitiveExtension(this.manufactureDate);
    }

    if (this.expirationDate) {
      result.expirationDate = this.expirationDate.value;
      result._expirationDate = Extension.serializePrimitiveExtension(this.expirationDate);
    }

    if (this.lotNumber) {
      result.lotNumber = this.lotNumber.value;
      result._lotNumber = Extension.serializePrimitiveExtension(this.lotNumber);
    }

    if (this.serialNumber) {
      result.serialNumber = this.serialNumber.value;
      result._serialNumber = Extension.serializePrimitiveExtension(this.serialNumber);
    }

    if (this.deviceName) {
      result.deviceName = this.deviceName.map((x) => x.toJSON());
    }

    if (this.modelNumber) {
      result.modelNumber = this.modelNumber.value;
      result._modelNumber = Extension.serializePrimitiveExtension(this.modelNumber);
    }

    if (this.partNumber) {
      result.partNumber = this.partNumber.value;
      result._partNumber = Extension.serializePrimitiveExtension(this.partNumber);
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.specialization) {
      result.specialization = this.specialization.map((x) => x.toJSON());
    }

    if (this.version) {
      result.version = this.version.map((x) => x.toJSON());
    }

    if (this.property) {
      result.property = this.property.map((x) => x.toJSON());
    }

    if (this.patient) {
      result.patient = this.patient.toJSON();
    }

    if (this.owner) {
      result.owner = this.owner.toJSON();
    }

    if (this.contact) {
      result.contact = this.contact.map((x) => x.toJSON());
    }

    if (this.location) {
      result.location = this.location.toJSON();
    }

    if (this.url) {
      result.url = this.url.value;
      result._url = Extension.serializePrimitiveExtension(this.url);
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    if (this.safety) {
      result.safety = this.safety.map((x) => x.toJSON());
    }

    if (this.parent) {
      result.parent = this.parent.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "Device";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
