/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IMedicationKnowledgeRelatedMedicationKnowledge,
  Reference,
} from "../internal";

export class MedicationKnowledgeRelatedMedicationKnowledge extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledge.RelatedMedicationKnowledge";

  public type?: CodeableConcept;

  public reference?: Array<Reference>;

  public static parse(
    json: IMedicationKnowledgeRelatedMedicationKnowledge,
    providedInstance: MedicationKnowledgeRelatedMedicationKnowledge = new MedicationKnowledgeRelatedMedicationKnowledge()
  ): MedicationKnowledgeRelatedMedicationKnowledge {
    const newInstance: MedicationKnowledgeRelatedMedicationKnowledge = BackboneElement.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.reference) {
      newInstance.reference = json.reference.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isMedicationKnowledgeRelatedMedicationKnowledge(input?: unknown): input is MedicationKnowledgeRelatedMedicationKnowledge {
    const castInput = input as MedicationKnowledgeRelatedMedicationKnowledge;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationKnowledgeRelatedMedicationKnowledge";
  }

  public toJSON(): IMedicationKnowledgeRelatedMedicationKnowledge {
    const result: IMedicationKnowledgeRelatedMedicationKnowledge = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.reference) {
      result.reference = this.reference.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MedicationKnowledgeRelatedMedicationKnowledge";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
