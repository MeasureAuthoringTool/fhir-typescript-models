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
  FhirField,
  FhirList,
  Identifier,
  IDevice,
  PrimitiveDateTime,
  PrimitiveString,
  PrimitiveUri,
  Reference,
  FhirType
} from "../internal";

@FhirType("Device", "DomainResource")
export class Device extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Device";

  static readonly primaryCodePath: string | null = "type";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("Reference")
  public definition?: Reference;

  @FhirList("DeviceUdiCarrier")
  public udiCarrier?: Array<DeviceUdiCarrier>;

  @FhirField("FHIRDeviceStatus")
  public status?: FHIRDeviceStatus;

  @FhirList("CodeableConcept")
  public statusReason?: Array<CodeableConcept>;

  @FhirField("PrimitiveString")
  public distinctIdentifier?: PrimitiveString;

  @FhirField("PrimitiveString")
  public manufacturer?: PrimitiveString;

  @FhirField("PrimitiveDateTime")
  public manufactureDate?: PrimitiveDateTime;

  @FhirField("PrimitiveDateTime")
  public expirationDate?: PrimitiveDateTime;

  @FhirField("PrimitiveString")
  public lotNumber?: PrimitiveString;

  @FhirField("PrimitiveString")
  public serialNumber?: PrimitiveString;

  @FhirList("DeviceDeviceName")
  public deviceName?: Array<DeviceDeviceName>;

  @FhirField("PrimitiveString")
  public modelNumber?: PrimitiveString;

  @FhirField("PrimitiveString")
  public partNumber?: PrimitiveString;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirList("DeviceSpecialization")
  public specialization?: Array<DeviceSpecialization>;

  @FhirList("DeviceVersion")
  public version?: Array<DeviceVersion>;

  @FhirList("DeviceProperty")
  public property?: Array<DeviceProperty>;

  @FhirField("Reference")
  public patient?: Reference;

  @FhirField("Reference")
  public owner?: Reference;

  @FhirList("ContactPoint")
  public contact?: Array<ContactPoint>;

  @FhirField("Reference")
  public location?: Reference;

  @FhirField("PrimitiveUri")
  public url?: PrimitiveUri;

  @FhirList("Annotation")
  public note?: Array<Annotation>;

  @FhirList("CodeableConcept")
  public safety?: Array<CodeableConcept>;

  @FhirField("Reference")
  public parent?: Reference;

  get primaryCode(): CodeableConcept | undefined {
    return this?.type;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.type = primaryCode;
  }

  public static parse(
    json: IDevice,
    providedInstance: Device = new Device()
  ): Device {
    const newInstance: Device = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.definition !== undefined) {
      newInstance.definition = Reference.parse(json.definition);
    }
    if (json.udiCarrier !== undefined) {
      newInstance.udiCarrier = json.udiCarrier.map((x) => DeviceUdiCarrier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = FHIRDeviceStatus.parsePrimitive(json.status, json._status);
    }
    if (json.statusReason !== undefined) {
      newInstance.statusReason = json.statusReason.map((x) => CodeableConcept.parse(x));
    }
    if (json.distinctIdentifier !== undefined) {
      newInstance.distinctIdentifier = PrimitiveString.parsePrimitive(json.distinctIdentifier, json._distinctIdentifier);
    }
    if (json.manufacturer !== undefined) {
      newInstance.manufacturer = PrimitiveString.parsePrimitive(json.manufacturer, json._manufacturer);
    }
    if (json.manufactureDate !== undefined) {
      newInstance.manufactureDate = PrimitiveDateTime.parsePrimitive(json.manufactureDate, json._manufactureDate);
    }
    if (json.expirationDate !== undefined) {
      newInstance.expirationDate = PrimitiveDateTime.parsePrimitive(json.expirationDate, json._expirationDate);
    }
    if (json.lotNumber !== undefined) {
      newInstance.lotNumber = PrimitiveString.parsePrimitive(json.lotNumber, json._lotNumber);
    }
    if (json.serialNumber !== undefined) {
      newInstance.serialNumber = PrimitiveString.parsePrimitive(json.serialNumber, json._serialNumber);
    }
    if (json.deviceName !== undefined) {
      newInstance.deviceName = json.deviceName.map((x) => DeviceDeviceName.parse(x));
    }
    if (json.modelNumber !== undefined) {
      newInstance.modelNumber = PrimitiveString.parsePrimitive(json.modelNumber, json._modelNumber);
    }
    if (json.partNumber !== undefined) {
      newInstance.partNumber = PrimitiveString.parsePrimitive(json.partNumber, json._partNumber);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.specialization !== undefined) {
      newInstance.specialization = json.specialization.map((x) => DeviceSpecialization.parse(x));
    }
    if (json.version !== undefined) {
      newInstance.version = json.version.map((x) => DeviceVersion.parse(x));
    }
    if (json.property !== undefined) {
      newInstance.property = json.property.map((x) => DeviceProperty.parse(x));
    }
    if (json.patient !== undefined) {
      newInstance.patient = Reference.parse(json.patient);
    }
    if (json.owner !== undefined) {
      newInstance.owner = Reference.parse(json.owner);
    }
    if (json.contact !== undefined) {
      newInstance.contact = json.contact.map((x) => ContactPoint.parse(x));
    }
    if (json.location !== undefined) {
      newInstance.location = Reference.parse(json.location);
    }
    if (json.url !== undefined) {
      newInstance.url = PrimitiveUri.parsePrimitive(json.url, json._url);
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.safety !== undefined) {
      newInstance.safety = json.safety.map((x) => CodeableConcept.parse(x));
    }
    if (json.parent !== undefined) {
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

  public clone(): Device {
    return Device.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Device";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
