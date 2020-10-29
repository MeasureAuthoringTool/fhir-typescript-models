/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Address,
  AdministrativeGender,
  Attachment,
  ContactPoint,
  DomainResource,
  Extension,
  HumanName,
  Identifier,
  IPerson,
  PersonLink,
  PrimitiveBoolean,
  PrimitiveDate,
  Reference,
  FieldMetadata
} from "../internal";

export class Person extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Person";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "name",
      fieldType: [HumanName],
      isArray: true
    }, {
      fieldName: "telecom",
      fieldType: [ContactPoint],
      isArray: true
    }, {
      fieldName: "gender",
      fieldType: [AdministrativeGender],
      isArray: false
    }, {
      fieldName: "birthDate",
      fieldType: [PrimitiveDate],
      isArray: false
    }, {
      fieldName: "address",
      fieldType: [Address],
      isArray: true
    }, {
      fieldName: "photo",
      fieldType: [Attachment],
      isArray: false
    }, {
      fieldName: "managingOrganization",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "active",
      fieldType: [PrimitiveBoolean],
      isArray: false
    }, {
      fieldName: "link",
      fieldType: [PersonLink],
      isArray: true
    }];
  }

  public identifier?: Array<Identifier>;

  public name?: Array<HumanName>;

  public telecom?: Array<ContactPoint>;

  public gender?: AdministrativeGender;

  public birthDate?: PrimitiveDate;

  public address?: Array<Address>;

  public photo?: Attachment;

  public managingOrganization?: Reference;

  public active?: PrimitiveBoolean;

  public link?: Array<PersonLink>;

  public static parse(
    json: IPerson,
    providedInstance: Person = new Person()
  ): Person {
    const newInstance: Person = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.name !== undefined) {
      newInstance.name = json.name.map((x) => HumanName.parse(x));
    }
    if (json.telecom !== undefined) {
      newInstance.telecom = json.telecom.map((x) => ContactPoint.parse(x));
    }
    if (json.gender !== undefined) {
      newInstance.gender = AdministrativeGender.parsePrimitive(json.gender, json._gender);
    }
    if (json.birthDate !== undefined) {
      newInstance.birthDate = PrimitiveDate.parsePrimitive(json.birthDate, json._birthDate);
    }
    if (json.address !== undefined) {
      newInstance.address = json.address.map((x) => Address.parse(x));
    }
    if (json.photo !== undefined) {
      newInstance.photo = Attachment.parse(json.photo);
    }
    if (json.managingOrganization !== undefined) {
      newInstance.managingOrganization = Reference.parse(json.managingOrganization);
    }
    if (json.active !== undefined) {
      newInstance.active = PrimitiveBoolean.parsePrimitive(json.active, json._active);
    }
    if (json.link !== undefined) {
      newInstance.link = json.link.map((x) => PersonLink.parse(x));
    }
    return newInstance;
  }

  public static isPerson(input?: unknown): input is Person {
    const castInput = input as Person;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Person";
  }

  public toJSON(): IPerson {
    const result: IPerson = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.name) {
      result.name = this.name.map((x) => x.toJSON());
    }

    if (this.telecom) {
      result.telecom = this.telecom.map((x) => x.toJSON());
    }

    if (this.gender) {
      result.gender = this.gender.value;
      result._gender = Extension.serializePrimitiveExtension(this.gender);
    }

    if (this.birthDate) {
      result.birthDate = this.birthDate.value;
      result._birthDate = Extension.serializePrimitiveExtension(this.birthDate);
    }

    if (this.address) {
      result.address = this.address.map((x) => x.toJSON());
    }

    if (this.photo) {
      result.photo = this.photo.toJSON();
    }

    if (this.managingOrganization) {
      result.managingOrganization = this.managingOrganization.toJSON();
    }

    if (this.active) {
      result.active = this.active.value;
      result._active = Extension.serializePrimitiveExtension(this.active);
    }

    if (this.link) {
      result.link = this.link.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): Person {
    return Person.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Person";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
