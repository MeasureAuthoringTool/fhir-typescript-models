/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Identifier,
  IEncounterHospitalization,
  Reference,
  FieldMetadata
} from "../internal";

export class EncounterHospitalization extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Encounter.Hospitalization";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "preAdmissionIdentifier",
      fieldType: [Identifier],
      isArray: false
    }, {
      fieldName: "origin",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "admitSource",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "reAdmission",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "dietPreference",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "specialCourtesy",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "specialArrangement",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "destination",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "dischargeDisposition",
      fieldType: [CodeableConcept],
      isArray: false
    }];
  }

  public preAdmissionIdentifier?: Identifier;

  public origin?: Reference;

  public admitSource?: CodeableConcept;

  public reAdmission?: CodeableConcept;

  public dietPreference?: Array<CodeableConcept>;

  public specialCourtesy?: Array<CodeableConcept>;

  public specialArrangement?: Array<CodeableConcept>;

  public destination?: Reference;

  public dischargeDisposition?: CodeableConcept;

  public static parse(
    json: IEncounterHospitalization,
    providedInstance: EncounterHospitalization = new EncounterHospitalization()
  ): EncounterHospitalization {
    const newInstance: EncounterHospitalization = BackboneElement.parse(json, providedInstance);
  
    if (json.preAdmissionIdentifier !== undefined) {
      newInstance.preAdmissionIdentifier = Identifier.parse(json.preAdmissionIdentifier);
    }
    if (json.origin !== undefined) {
      newInstance.origin = Reference.parse(json.origin);
    }
    if (json.admitSource !== undefined) {
      newInstance.admitSource = CodeableConcept.parse(json.admitSource);
    }
    if (json.reAdmission !== undefined) {
      newInstance.reAdmission = CodeableConcept.parse(json.reAdmission);
    }
    if (json.dietPreference !== undefined) {
      newInstance.dietPreference = json.dietPreference.map((x) => CodeableConcept.parse(x));
    }
    if (json.specialCourtesy !== undefined) {
      newInstance.specialCourtesy = json.specialCourtesy.map((x) => CodeableConcept.parse(x));
    }
    if (json.specialArrangement !== undefined) {
      newInstance.specialArrangement = json.specialArrangement.map((x) => CodeableConcept.parse(x));
    }
    if (json.destination !== undefined) {
      newInstance.destination = Reference.parse(json.destination);
    }
    if (json.dischargeDisposition !== undefined) {
      newInstance.dischargeDisposition = CodeableConcept.parse(json.dischargeDisposition);
    }
    return newInstance;
  }

  public static isEncounterHospitalization(input?: unknown): input is EncounterHospitalization {
    const castInput = input as EncounterHospitalization;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EncounterHospitalization";
  }

  public toJSON(): IEncounterHospitalization {
    const result: IEncounterHospitalization = super.toJSON();

    if (this.preAdmissionIdentifier) {
      result.preAdmissionIdentifier = this.preAdmissionIdentifier.toJSON();
    }

    if (this.origin) {
      result.origin = this.origin.toJSON();
    }

    if (this.admitSource) {
      result.admitSource = this.admitSource.toJSON();
    }

    if (this.reAdmission) {
      result.reAdmission = this.reAdmission.toJSON();
    }

    if (this.dietPreference) {
      result.dietPreference = this.dietPreference.map((x) => x.toJSON());
    }

    if (this.specialCourtesy) {
      result.specialCourtesy = this.specialCourtesy.map((x) => x.toJSON());
    }

    if (this.specialArrangement) {
      result.specialArrangement = this.specialArrangement.map((x) => x.toJSON());
    }

    if (this.destination) {
      result.destination = this.destination.toJSON();
    }

    if (this.dischargeDisposition) {
      result.dischargeDisposition = this.dischargeDisposition.toJSON();
    }

    return result;
  }

  public clone(): EncounterHospitalization {
    return EncounterHospitalization.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "EncounterHospitalization";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
