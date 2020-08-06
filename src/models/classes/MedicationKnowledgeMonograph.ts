/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IMedicationKnowledgeMonograph,
  Reference,
} from "../internal";

export class MedicationKnowledgeMonograph extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledge.Monograph";

  public type?: CodeableConcept;

  public source?: Reference;

  public static parse(
    json: IMedicationKnowledgeMonograph,
    providedInstance: MedicationKnowledgeMonograph = new MedicationKnowledgeMonograph()
  ): MedicationKnowledgeMonograph {
    const newInstance: MedicationKnowledgeMonograph = BackboneElement.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.source) {
      newInstance.source = Reference.parse(json.source);
    }
    return newInstance;
  }

  public static isMedicationKnowledgeMonograph(input?: unknown): input is MedicationKnowledgeMonograph {
    const castInput = input as MedicationKnowledgeMonograph;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationKnowledgeMonograph";
  }

  public toJSON(): IMedicationKnowledgeMonograph {
    const result: IMedicationKnowledgeMonograph = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.source) {
      result.source = this.source.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MedicationKnowledgeMonograph";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
