/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IMedicationKnowledgePackaging,
  SimpleQuantity,
} from "../internal";

export class MedicationKnowledgePackaging extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledge.Packaging";

  public type?: CodeableConcept;

  public quantity?: SimpleQuantity;

  public static parse(
    json: IMedicationKnowledgePackaging,
    providedInstance: MedicationKnowledgePackaging = new MedicationKnowledgePackaging()
  ): MedicationKnowledgePackaging {
    const newInstance: MedicationKnowledgePackaging = BackboneElement.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.quantity) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    return newInstance;
  }

  public static isMedicationKnowledgePackaging(input?: unknown): input is MedicationKnowledgePackaging {
    const castInput = input as MedicationKnowledgePackaging;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationKnowledgePackaging";
  }

  public toJSON(): IMedicationKnowledgePackaging {
    const result: IMedicationKnowledgePackaging = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MedicationKnowledgePackaging";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
