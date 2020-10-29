/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Address,
  AdministrativeGender,
  Attachment,
  CodeableConcept,
  ContactPoint,
  DomainResource,
  Extension,
  HumanName,
  Identifier,
  IPatient,
  PatientCommunication,
  PatientContact,
  PatientLink,
  PrimitiveBoolean,
  PrimitiveDate,
  PrimitiveDateTime,
  PrimitiveInteger,
  Reference,
  FieldMetadata
} from "../internal";

export class Patient extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Patient";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "active",
      fieldType: [PrimitiveBoolean],
      isArray: false
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
      fieldName: "deceased",
      fieldType: [PrimitiveBoolean, PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "address",
      fieldType: [Address],
      isArray: true
    }, {
      fieldName: "maritalStatus",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "multipleBirth",
      fieldType: [PrimitiveBoolean, PrimitiveInteger],
      isArray: false
    }, {
      fieldName: "photo",
      fieldType: [Attachment],
      isArray: true
    }, {
      fieldName: "contact",
      fieldType: [PatientContact],
      isArray: true
    }, {
      fieldName: "communication",
      fieldType: [PatientCommunication],
      isArray: true
    }, {
      fieldName: "generalPractitioner",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "managingOrganization",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "link",
      fieldType: [PatientLink],
      isArray: true
    }];
  }

  public identifier?: Array<Identifier>;

  public active?: PrimitiveBoolean;

  public name?: Array<HumanName>;

  public telecom?: Array<ContactPoint>;

  public gender?: AdministrativeGender;

  public birthDate?: PrimitiveDate;

  public deceased?: PrimitiveBoolean | PrimitiveDateTime;

  public address?: Array<Address>;

  public maritalStatus?: CodeableConcept;

  public multipleBirth?: PrimitiveBoolean | PrimitiveInteger;

  public photo?: Array<Attachment>;

  public contact?: Array<PatientContact>;

  public communication?: Array<PatientCommunication>;

  public generalPractitioner?: Array<Reference>;

  public managingOrganization?: Reference;

  public link?: Array<PatientLink>;

  public static parse(
    json: IPatient,
    providedInstance: Patient = new Patient()
  ): Patient {
    const newInstance: Patient = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.active !== undefined) {
      newInstance.active = PrimitiveBoolean.parsePrimitive(json.active, json._active);
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
    if (json.deceasedBoolean !== undefined) {
      newInstance.deceased = PrimitiveBoolean.parsePrimitive(json.deceasedBoolean, json._deceasedBoolean);
    }
    if (json.deceasedDateTime !== undefined) {
      newInstance.deceased = PrimitiveDateTime.parsePrimitive(json.deceasedDateTime, json._deceasedDateTime);
    }
    if (json.address !== undefined) {
      newInstance.address = json.address.map((x) => Address.parse(x));
    }
    if (json.maritalStatus !== undefined) {
      newInstance.maritalStatus = CodeableConcept.parse(json.maritalStatus);
    }
    if (json.multipleBirthBoolean !== undefined) {
      newInstance.multipleBirth = PrimitiveBoolean.parsePrimitive(json.multipleBirthBoolean, json._multipleBirthBoolean);
    }
    if (json.multipleBirthInteger !== undefined) {
      newInstance.multipleBirth = PrimitiveInteger.parsePrimitive(json.multipleBirthInteger, json._multipleBirthInteger);
    }
    if (json.photo !== undefined) {
      newInstance.photo = json.photo.map((x) => Attachment.parse(x));
    }
    if (json.contact !== undefined) {
      newInstance.contact = json.contact.map((x) => PatientContact.parse(x));
    }
    if (json.communication !== undefined) {
      newInstance.communication = json.communication.map((x) => PatientCommunication.parse(x));
    }
    if (json.generalPractitioner !== undefined) {
      newInstance.generalPractitioner = json.generalPractitioner.map((x) => Reference.parse(x));
    }
    if (json.managingOrganization !== undefined) {
      newInstance.managingOrganization = Reference.parse(json.managingOrganization);
    }
    if (json.link !== undefined) {
      newInstance.link = json.link.map((x) => PatientLink.parse(x));
    }
    return newInstance;
  }

  public static isPatient(input?: unknown): input is Patient {
    const castInput = input as Patient;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Patient";
  }

  public toJSON(): IPatient {
    const result: IPatient = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.active) {
      result.active = this.active.value;
      result._active = Extension.serializePrimitiveExtension(this.active);
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

    if (this.deceased && PrimitiveBoolean.isPrimitiveBoolean(this.deceased)) {
      result.deceasedBoolean = this.deceased.value;
      result._deceasedBoolean = Extension.serializePrimitiveExtension(this.deceased);
    }

    if (this.deceased && PrimitiveDateTime.isPrimitiveDateTime(this.deceased)) {
      result.deceasedDateTime = this.deceased.value;
      result._deceasedDateTime = Extension.serializePrimitiveExtension(this.deceased);
    }

    if (this.address) {
      result.address = this.address.map((x) => x.toJSON());
    }

    if (this.maritalStatus) {
      result.maritalStatus = this.maritalStatus.toJSON();
    }

    if (this.multipleBirth && PrimitiveBoolean.isPrimitiveBoolean(this.multipleBirth)) {
      result.multipleBirthBoolean = this.multipleBirth.value;
      result._multipleBirthBoolean = Extension.serializePrimitiveExtension(this.multipleBirth);
    }

    if (this.multipleBirth && PrimitiveInteger.isPrimitiveInteger(this.multipleBirth)) {
      result.multipleBirthInteger = this.multipleBirth.value;
      result._multipleBirthInteger = Extension.serializePrimitiveExtension(this.multipleBirth);
    }

    if (this.photo) {
      result.photo = this.photo.map((x) => x.toJSON());
    }

    if (this.contact) {
      result.contact = this.contact.map((x) => x.toJSON());
    }

    if (this.communication) {
      result.communication = this.communication.map((x) => x.toJSON());
    }

    if (this.generalPractitioner) {
      result.generalPractitioner = this.generalPractitioner.map((x) => x.toJSON());
    }

    if (this.managingOrganization) {
      result.managingOrganization = this.managingOrganization.toJSON();
    }

    if (this.link) {
      result.link = this.link.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): Patient {
    return Patient.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Patient";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
