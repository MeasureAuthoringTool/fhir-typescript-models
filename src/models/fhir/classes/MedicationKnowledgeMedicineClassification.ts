/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IMedicationKnowledgeMedicineClassification,
} from "../internal";

export class MedicationKnowledgeMedicineClassification extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledge.MedicineClassification";
  
  static readonly primaryCodePath: string | null = null;

  public type?: CodeableConcept;

  public classification?: Array<CodeableConcept>;

  public static parse(
    json: IMedicationKnowledgeMedicineClassification,
    providedInstance: MedicationKnowledgeMedicineClassification = new MedicationKnowledgeMedicineClassification()
  ): MedicationKnowledgeMedicineClassification {
    const newInstance: MedicationKnowledgeMedicineClassification = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.classification !== undefined) {
      newInstance.classification = json.classification.map((x) => CodeableConcept.parse(x));
    }
    return newInstance;
  }

  public static isMedicationKnowledgeMedicineClassification(input?: unknown): input is MedicationKnowledgeMedicineClassification {
    const castInput = input as MedicationKnowledgeMedicineClassification;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationKnowledgeMedicineClassification";
  }

  public toJSON(): IMedicationKnowledgeMedicineClassification {
    const result: IMedicationKnowledgeMedicineClassification = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.classification) {
      result.classification = this.classification.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MedicationKnowledgeMedicineClassification {
    return MedicationKnowledgeMedicineClassification.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationKnowledgeMedicineClassification";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
