/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  IPatientCommunication,
  PrimitiveBoolean,
  FhirType
} from "../internal";

@FhirType("PatientCommunication", "BackboneElement")
export class PatientCommunication extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Patient.Communication";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public language?: CodeableConcept;

  @FhirField("PrimitiveBoolean")
  public preferred?: PrimitiveBoolean;

  public static parse(
    json: IPatientCommunication,
    providedInstance: PatientCommunication = new PatientCommunication()
  ): PatientCommunication {
    const newInstance: PatientCommunication = BackboneElement.parse(json, providedInstance);
  
    if (json.language !== undefined) {
      newInstance.language = CodeableConcept.parse(json.language);
    }
    if (json.preferred !== undefined) {
      newInstance.preferred = PrimitiveBoolean.parsePrimitive(json.preferred, json._preferred);
    }
    return newInstance;
  }

  public static isPatientCommunication(input?: unknown): input is PatientCommunication {
    const castInput = input as PatientCommunication;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PatientCommunication";
  }

  public toJSON(): IPatientCommunication {
    const result: IPatientCommunication = super.toJSON();

    if (this.language) {
      result.language = this.language.toJSON();
    }

    if (this.preferred) {
      result.preferred = this.preferred.value;
      result._preferred = Extension.serializePrimitiveExtension(this.preferred);
    }

    return result;
  }

  public clone(): PatientCommunication {
    return PatientCommunication.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "PatientCommunication";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
