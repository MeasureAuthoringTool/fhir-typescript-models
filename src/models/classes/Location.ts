/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Address,
  CodeableConcept,
  Coding,
  ContactPoint,
  DomainResource,
  Extension,
  Identifier,
  ILocation,
  LocationHoursOfOperation,
  LocationMode,
  LocationPosition,
  LocationStatus,
  PrimitiveString,
  Reference,
} from "../internal";

export class Location extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Location";

  public identifier?: Array<Identifier>;

  public status?: LocationStatus;

  public operationalStatus?: Coding;

  public name?: PrimitiveString;

  public alias?: Array<PrimitiveString>;

  public description?: PrimitiveString;

  public mode?: LocationMode;

  public type?: Array<CodeableConcept>;

  public telecom?: Array<ContactPoint>;

  public address?: Address;

  public physicalType?: CodeableConcept;

  public position?: LocationPosition;

  public managingOrganization?: Reference;

  public partOf?: Reference;

  public hoursOfOperation?: Array<LocationHoursOfOperation>;

  public availabilityExceptions?: PrimitiveString;

  public endpoint?: Array<Reference>;

  public static parse(
    json: ILocation,
    providedInstance: Location = new Location()
  ): Location {
    const newInstance: Location = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status) {
      newInstance.status = LocationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.operationalStatus) {
      newInstance.operationalStatus = Coding.parse(json.operationalStatus);
    }
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.alias) {
      newInstance.alias = json.alias.map((x, i) => {
        const ext = json._alias && json._alias[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.mode) {
      newInstance.mode = LocationMode.parsePrimitive(json.mode, json._mode);
    }
    if (json.type) {
      newInstance.type = json.type.map((x) => CodeableConcept.parse(x));
    }
    if (json.telecom) {
      newInstance.telecom = json.telecom.map((x) => ContactPoint.parse(x));
    }
    if (json.address) {
      newInstance.address = Address.parse(json.address);
    }
    if (json.physicalType) {
      newInstance.physicalType = CodeableConcept.parse(json.physicalType);
    }
    if (json.position) {
      newInstance.position = LocationPosition.parse(json.position);
    }
    if (json.managingOrganization) {
      newInstance.managingOrganization = Reference.parse(json.managingOrganization);
    }
    if (json.partOf) {
      newInstance.partOf = Reference.parse(json.partOf);
    }
    if (json.hoursOfOperation) {
      newInstance.hoursOfOperation = json.hoursOfOperation.map((x) => LocationHoursOfOperation.parse(x));
    }
    if (json.availabilityExceptions) {
      newInstance.availabilityExceptions = PrimitiveString.parsePrimitive(json.availabilityExceptions, json._availabilityExceptions);
    }
    if (json.endpoint) {
      newInstance.endpoint = json.endpoint.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isLocation(input?: unknown): input is Location {
    const castInput = input as Location;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Location";
  }

  public toJSON(): ILocation {
    const result: ILocation = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.operationalStatus) {
      result.operationalStatus = this.operationalStatus.toJSON();
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.alias) {
      result.alias = this.alias.filter(x => !!x).map(x => x.value) as typeof result.alias;
      result._alias = Extension.serializePrimitiveExtensionArray(this.alias);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.mode) {
      result.mode = this.mode.value;
      result._mode = Extension.serializePrimitiveExtension(this.mode);
    }

    if (this.type) {
      result.type = this.type.map((x) => x.toJSON());
    }

    if (this.telecom) {
      result.telecom = this.telecom.map((x) => x.toJSON());
    }

    if (this.address) {
      result.address = this.address.toJSON();
    }

    if (this.physicalType) {
      result.physicalType = this.physicalType.toJSON();
    }

    if (this.position) {
      result.position = this.position.toJSON();
    }

    if (this.managingOrganization) {
      result.managingOrganization = this.managingOrganization.toJSON();
    }

    if (this.partOf) {
      result.partOf = this.partOf.toJSON();
    }

    if (this.hoursOfOperation) {
      result.hoursOfOperation = this.hoursOfOperation.map((x) => x.toJSON());
    }

    if (this.availabilityExceptions) {
      result.availabilityExceptions = this.availabilityExceptions.value;
      result._availabilityExceptions = Extension.serializePrimitiveExtension(this.availabilityExceptions);
    }

    if (this.endpoint) {
      result.endpoint = this.endpoint.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "Location";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
