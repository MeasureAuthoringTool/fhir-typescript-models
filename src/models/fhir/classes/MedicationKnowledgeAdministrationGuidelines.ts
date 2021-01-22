/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirChoice,
  FhirList,
  IMedicationKnowledgeAdministrationGuidelines,
  MedicationKnowledgeAdministrationGuidelinesDosage,
  MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics,
  Reference,
  FhirType
} from "../internal";

@FhirType("MedicationKnowledgeAdministrationGuidelines", "BackboneElement")
export class MedicationKnowledgeAdministrationGuidelines extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledge.AdministrationGuidelines";

  static readonly primaryCodePath: string | null = null;

  @FhirList("MedicationKnowledgeAdministrationGuidelinesDosage")
  public dosage?: Array<MedicationKnowledgeAdministrationGuidelinesDosage>;

  @FhirChoice("CodeableConcept", "Reference")
  public indication?: CodeableConcept | Reference;

  @FhirList("MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics")
  public patientCharacteristics?: Array<MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics>;

  public static parse(
    json: IMedicationKnowledgeAdministrationGuidelines,
    providedInstance: MedicationKnowledgeAdministrationGuidelines = new MedicationKnowledgeAdministrationGuidelines()
  ): MedicationKnowledgeAdministrationGuidelines {
    const newInstance: MedicationKnowledgeAdministrationGuidelines = BackboneElement.parse(json, providedInstance);
  
    if (json.dosage !== undefined) {
      newInstance.dosage = json.dosage.map((x) => MedicationKnowledgeAdministrationGuidelinesDosage.parse(x));
    }
    if (json.indicationCodeableConcept !== undefined) {
      newInstance.indication = CodeableConcept.parse(json.indicationCodeableConcept);
    }
    if (json.indicationReference !== undefined) {
      newInstance.indication = Reference.parse(json.indicationReference);
    }
    if (json.patientCharacteristics !== undefined) {
      newInstance.patientCharacteristics = json.patientCharacteristics.map((x) => MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics.parse(x));
    }
    return newInstance;
  }

  public static isMedicationKnowledgeAdministrationGuidelines(input?: unknown): input is MedicationKnowledgeAdministrationGuidelines {
    const castInput = input as MedicationKnowledgeAdministrationGuidelines;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationKnowledgeAdministrationGuidelines";
  }

  public toJSON(): IMedicationKnowledgeAdministrationGuidelines {
    const result: IMedicationKnowledgeAdministrationGuidelines = super.toJSON();

    if (this.dosage) {
      result.dosage = this.dosage.map((x) => x.toJSON());
    }

    if (this.indication && CodeableConcept.isCodeableConcept(this.indication)) {
      result.indicationCodeableConcept = this.indication.toJSON();
    }

    if (this.indication && Reference.isReference(this.indication)) {
      result.indicationReference = this.indication.toJSON();
    }

    if (this.patientCharacteristics) {
      result.patientCharacteristics = this.patientCharacteristics.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MedicationKnowledgeAdministrationGuidelines {
    return MedicationKnowledgeAdministrationGuidelines.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationKnowledgeAdministrationGuidelines";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
