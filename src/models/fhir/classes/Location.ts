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
  FieldMetadata
} from "../internal";

export class Location extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Location";
  
  static readonly primaryCodePath: string | null = "type";

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "status",
      fieldType: [LocationStatus],
      isArray: false
    }, {
      fieldName: "operationalStatus",
      fieldType: [Coding],
      isArray: false
    }, {
      fieldName: "name",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "alias",
      fieldType: [PrimitiveString],
      isArray: true
    }, {
      fieldName: "description",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "mode",
      fieldType: [LocationMode],
      isArray: false
    }, {
      fieldName: "type",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "telecom",
      fieldType: [ContactPoint],
      isArray: true
    }, {
      fieldName: "address",
      fieldType: [Address],
      isArray: false
    }, {
      fieldName: "physicalType",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "position",
      fieldType: [LocationPosition],
      isArray: false
    }, {
      fieldName: "managingOrganization",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "partOf",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "hoursOfOperation",
      fieldType: [LocationHoursOfOperation],
      isArray: true
    }, {
      fieldName: "availabilityExceptions",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "endpoint",
      fieldType: [Reference],
      isArray: true
    }];
  }

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

  get primaryCode(): CodeableConcept | undefined {
    return this?.type?.[0];
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.type = primaryCode ? [primaryCode] : [];
  }

  public static parse(
    json: ILocation,
    providedInstance: Location = new Location()
  ): Location {
    const newInstance: Location = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = LocationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.operationalStatus !== undefined) {
      newInstance.operationalStatus = Coding.parse(json.operationalStatus);
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.alias !== undefined) {
      newInstance.alias = json.alias.map((x, i) => {
        const ext = json._alias && json._alias[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.mode !== undefined) {
      newInstance.mode = LocationMode.parsePrimitive(json.mode, json._mode);
    }
    if (json.type !== undefined) {
      newInstance.type = json.type.map((x) => CodeableConcept.parse(x));
    }
    if (json.telecom !== undefined) {
      newInstance.telecom = json.telecom.map((x) => ContactPoint.parse(x));
    }
    if (json.address !== undefined) {
      newInstance.address = Address.parse(json.address);
    }
    if (json.physicalType !== undefined) {
      newInstance.physicalType = CodeableConcept.parse(json.physicalType);
    }
    if (json.position !== undefined) {
      newInstance.position = LocationPosition.parse(json.position);
    }
    if (json.managingOrganization !== undefined) {
      newInstance.managingOrganization = Reference.parse(json.managingOrganization);
    }
    if (json.partOf !== undefined) {
      newInstance.partOf = Reference.parse(json.partOf);
    }
    if (json.hoursOfOperation !== undefined) {
      newInstance.hoursOfOperation = json.hoursOfOperation.map((x) => LocationHoursOfOperation.parse(x));
    }
    if (json.availabilityExceptions !== undefined) {
      newInstance.availabilityExceptions = PrimitiveString.parsePrimitive(json.availabilityExceptions, json._availabilityExceptions);
    }
    if (json.endpoint !== undefined) {
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

  public clone(): Location {
    return Location.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Location";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
