/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IMedicationKnowledgeAdministrationGuidelines,
  MedicationKnowledgeAdministrationGuidelinesDosage,
  MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics,
  Reference,
} from "../internal";

export class MedicationKnowledgeAdministrationGuidelines extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledge.AdministrationGuidelines";

  public dosage?: Array<MedicationKnowledgeAdministrationGuidelinesDosage>;

  public indication?: CodeableConcept | Reference;

  public patientCharacteristics?: Array<MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics>;

  public static parse(
    json: IMedicationKnowledgeAdministrationGuidelines,
    providedInstance: MedicationKnowledgeAdministrationGuidelines = new MedicationKnowledgeAdministrationGuidelines()
  ): MedicationKnowledgeAdministrationGuidelines {
    const newInstance: MedicationKnowledgeAdministrationGuidelines = BackboneElement.parse(json, providedInstance);
  
    if (json.dosage) {
      newInstance.dosage = json.dosage.map((x) => MedicationKnowledgeAdministrationGuidelinesDosage.parse(x));
    }
    if (json.indicationCodeableConcept) {
      newInstance.indication = CodeableConcept.parse(json.indicationCodeableConcept);
    }
    if (json.indicationReference) {
      newInstance.indication = Reference.parse(json.indicationReference);
    }
    if (json.patientCharacteristics) {
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
  
  public getTypeName(): string {
    return "MedicationKnowledgeAdministrationGuidelines";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
