/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Dosage,
  FhirField,
  FhirList,
  IMedicationKnowledgeAdministrationGuidelinesDosage,
  FhirType
} from "../internal";

@FhirType("MedicationKnowledgeAdministrationGuidelinesDosage", "BackboneElement")
export class MedicationKnowledgeAdministrationGuidelinesDosage extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledge.AdministrationGuidelines.Dosage";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirList("Dosage")
  public dosage?: Array<Dosage>;

  public static parse(
    json: IMedicationKnowledgeAdministrationGuidelinesDosage,
    providedInstance: MedicationKnowledgeAdministrationGuidelinesDosage = new MedicationKnowledgeAdministrationGuidelinesDosage()
  ): MedicationKnowledgeAdministrationGuidelinesDosage {
    const newInstance: MedicationKnowledgeAdministrationGuidelinesDosage = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.dosage !== undefined) {
      newInstance.dosage = json.dosage.map((x) => Dosage.parse(x));
    }
    return newInstance;
  }

  public static isMedicationKnowledgeAdministrationGuidelinesDosage(input?: unknown): input is MedicationKnowledgeAdministrationGuidelinesDosage {
    const castInput = input as MedicationKnowledgeAdministrationGuidelinesDosage;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationKnowledgeAdministrationGuidelinesDosage";
  }

  public toJSON(): IMedicationKnowledgeAdministrationGuidelinesDosage {
    const result: IMedicationKnowledgeAdministrationGuidelinesDosage = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.dosage) {
      result.dosage = this.dosage.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MedicationKnowledgeAdministrationGuidelinesDosage {
    return MedicationKnowledgeAdministrationGuidelinesDosage.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationKnowledgeAdministrationGuidelinesDosage";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
