/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Identifier,
  IEncounterHospitalization,
  Reference,
} from "../internal";

export class EncounterHospitalization extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Encounter.Hospitalization";

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
  
    if (json.preAdmissionIdentifier) {
      newInstance.preAdmissionIdentifier = Identifier.parse(json.preAdmissionIdentifier);
    }
    if (json.origin) {
      newInstance.origin = Reference.parse(json.origin);
    }
    if (json.admitSource) {
      newInstance.admitSource = CodeableConcept.parse(json.admitSource);
    }
    if (json.reAdmission) {
      newInstance.reAdmission = CodeableConcept.parse(json.reAdmission);
    }
    if (json.dietPreference) {
      newInstance.dietPreference = json.dietPreference.map((x) => CodeableConcept.parse(x));
    }
    if (json.specialCourtesy) {
      newInstance.specialCourtesy = json.specialCourtesy.map((x) => CodeableConcept.parse(x));
    }
    if (json.specialArrangement) {
      newInstance.specialArrangement = json.specialArrangement.map((x) => CodeableConcept.parse(x));
    }
    if (json.destination) {
      newInstance.destination = Reference.parse(json.destination);
    }
    if (json.dischargeDisposition) {
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
  
  public getTypeName(): string {
    return "EncounterHospitalization";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
