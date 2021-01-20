/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Annotation,
  CodeableConcept,
  ContactPoint,
  DeviceDefinitionCapability,
  DeviceDefinitionDeviceName,
  DeviceDefinitionMaterial,
  DeviceDefinitionProperty,
  DeviceDefinitionSpecialization,
  DeviceDefinitionUdiDeviceIdentifier,
  DomainResource,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  Identifier,
  IDeviceDefinition,
  PrimitiveString,
  PrimitiveUri,
  ProdCharacteristic,
  ProductShelfLife,
  Quantity,
  Reference,
  FhirType
} from "../internal";

@FhirType("DeviceDefinition", "DomainResource")
export class DeviceDefinition extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceDefinition";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirList("DeviceDefinitionUdiDeviceIdentifier")
  public udiDeviceIdentifier?: Array<DeviceDefinitionUdiDeviceIdentifier>;

  @FhirChoice("PrimitiveString", "Reference")
  public manufacturer?: PrimitiveString | Reference;

  @FhirList("DeviceDefinitionDeviceName")
  public deviceName?: Array<DeviceDefinitionDeviceName>;

  @FhirField("PrimitiveString")
  public modelNumber?: PrimitiveString;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirList("DeviceDefinitionSpecialization")
  public specialization?: Array<DeviceDefinitionSpecialization>;

  @FhirList("PrimitiveString")
  public version?: Array<PrimitiveString>;

  @FhirList("CodeableConcept")
  public safety?: Array<CodeableConcept>;

  @FhirList("ProductShelfLife")
  public shelfLifeStorage?: Array<ProductShelfLife>;

  @FhirField("ProdCharacteristic")
  public physicalCharacteristics?: ProdCharacteristic;

  @FhirList("CodeableConcept")
  public languageCode?: Array<CodeableConcept>;

  @FhirList("DeviceDefinitionCapability")
  public capability?: Array<DeviceDefinitionCapability>;

  @FhirList("DeviceDefinitionProperty")
  public property?: Array<DeviceDefinitionProperty>;

  @FhirField("Reference")
  public owner?: Reference;

  @FhirList("ContactPoint")
  public contact?: Array<ContactPoint>;

  @FhirField("PrimitiveUri")
  public url?: PrimitiveUri;

  @FhirField("PrimitiveUri")
  public onlineInformation?: PrimitiveUri;

  @FhirList("Annotation")
  public note?: Array<Annotation>;

  @FhirField("Quantity")
  public quantity?: Quantity;

  @FhirField("Reference")
  public parentDevice?: Reference;

  @FhirList("DeviceDefinitionMaterial")
  public material?: Array<DeviceDefinitionMaterial>;

  public static parse(
    json: IDeviceDefinition,
    providedInstance: DeviceDefinition = new DeviceDefinition()
  ): DeviceDefinition {
    const newInstance: DeviceDefinition = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.udiDeviceIdentifier !== undefined) {
      newInstance.udiDeviceIdentifier = json.udiDeviceIdentifier.map((x) => DeviceDefinitionUdiDeviceIdentifier.parse(x));
    }
    if (json.manufacturerString !== undefined) {
      newInstance.manufacturer = PrimitiveString.parsePrimitive(json.manufacturerString, json._manufacturerString);
    }
    if (json.manufacturerReference !== undefined) {
      newInstance.manufacturer = Reference.parse(json.manufacturerReference);
    }
    if (json.deviceName !== undefined) {
      newInstance.deviceName = json.deviceName.map((x) => DeviceDefinitionDeviceName.parse(x));
    }
    if (json.modelNumber !== undefined) {
      newInstance.modelNumber = PrimitiveString.parsePrimitive(json.modelNumber, json._modelNumber);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.specialization !== undefined) {
      newInstance.specialization = json.specialization.map((x) => DeviceDefinitionSpecialization.parse(x));
    }
    if (json.version !== undefined) {
      newInstance.version = json.version.map((x, i) => PrimitiveString.parsePrimitive(x, json._version?.[i]));
    }
    if (json.safety !== undefined) {
      newInstance.safety = json.safety.map((x) => CodeableConcept.parse(x));
    }
    if (json.shelfLifeStorage !== undefined) {
      newInstance.shelfLifeStorage = json.shelfLifeStorage.map((x) => ProductShelfLife.parse(x));
    }
    if (json.physicalCharacteristics !== undefined) {
      newInstance.physicalCharacteristics = ProdCharacteristic.parse(json.physicalCharacteristics);
    }
    if (json.languageCode !== undefined) {
      newInstance.languageCode = json.languageCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.capability !== undefined) {
      newInstance.capability = json.capability.map((x) => DeviceDefinitionCapability.parse(x));
    }
    if (json.property !== undefined) {
      newInstance.property = json.property.map((x) => DeviceDefinitionProperty.parse(x));
    }
    if (json.owner !== undefined) {
      newInstance.owner = Reference.parse(json.owner);
    }
    if (json.contact !== undefined) {
      newInstance.contact = json.contact.map((x) => ContactPoint.parse(x));
    }
    if (json.url !== undefined) {
      newInstance.url = PrimitiveUri.parsePrimitive(json.url, json._url);
    }
    if (json.onlineInformation !== undefined) {
      newInstance.onlineInformation = PrimitiveUri.parsePrimitive(json.onlineInformation, json._onlineInformation);
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.quantity !== undefined) {
      newInstance.quantity = Quantity.parse(json.quantity);
    }
    if (json.parentDevice !== undefined) {
      newInstance.parentDevice = Reference.parse(json.parentDevice);
    }
    if (json.material !== undefined) {
      newInstance.material = json.material.map((x) => DeviceDefinitionMaterial.parse(x));
    }
    return newInstance;
  }

  public static isDeviceDefinition(input?: unknown): input is DeviceDefinition {
    const castInput = input as DeviceDefinition;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceDefinition";
  }

  public toJSON(): IDeviceDefinition {
    const result: IDeviceDefinition = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.udiDeviceIdentifier) {
      result.udiDeviceIdentifier = this.udiDeviceIdentifier.map((x) => x.toJSON());
    }

    if (this.manufacturer && PrimitiveString.isPrimitiveString(this.manufacturer)) {
      result.manufacturerString = this.manufacturer.value;
      result._manufacturerString = Extension.serializePrimitiveExtension(this.manufacturer);
    }

    if (this.manufacturer && Reference.isReference(this.manufacturer)) {
      result.manufacturerReference = this.manufacturer.toJSON();
    }

    if (this.deviceName) {
      result.deviceName = this.deviceName.map((x) => x.toJSON());
    }

    if (this.modelNumber) {
      result.modelNumber = this.modelNumber.value;
      result._modelNumber = Extension.serializePrimitiveExtension(this.modelNumber);
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.specialization) {
      result.specialization = this.specialization.map((x) => x.toJSON());
    }

    if (this.version) {
      result.version = this.version.filter(x => !!x).map(x => x.value) as typeof result.version;
      result._version = Extension.serializePrimitiveExtensionArray(this.version);
    }

    if (this.safety) {
      result.safety = this.safety.map((x) => x.toJSON());
    }

    if (this.shelfLifeStorage) {
      result.shelfLifeStorage = this.shelfLifeStorage.map((x) => x.toJSON());
    }

    if (this.physicalCharacteristics) {
      result.physicalCharacteristics = this.physicalCharacteristics.toJSON();
    }

    if (this.languageCode) {
      result.languageCode = this.languageCode.map((x) => x.toJSON());
    }

    if (this.capability) {
      result.capability = this.capability.map((x) => x.toJSON());
    }

    if (this.property) {
      result.property = this.property.map((x) => x.toJSON());
    }

    if (this.owner) {
      result.owner = this.owner.toJSON();
    }

    if (this.contact) {
      result.contact = this.contact.map((x) => x.toJSON());
    }

    if (this.url) {
      result.url = this.url.value;
      result._url = Extension.serializePrimitiveExtension(this.url);
    }

    if (this.onlineInformation) {
      result.onlineInformation = this.onlineInformation.value;
      result._onlineInformation = Extension.serializePrimitiveExtension(this.onlineInformation);
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    if (this.parentDevice) {
      result.parentDevice = this.parentDevice.toJSON();
    }

    if (this.material) {
      result.material = this.material.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): DeviceDefinition {
    return DeviceDefinition.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DeviceDefinition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
