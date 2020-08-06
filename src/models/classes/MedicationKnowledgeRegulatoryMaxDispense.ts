/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Duration,
  IMedicationKnowledgeRegulatoryMaxDispense,
  SimpleQuantity,
} from "../internal";

export class MedicationKnowledgeRegulatoryMaxDispense extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledge.Regulatory.MaxDispense";

  public quantity?: SimpleQuantity;

  public period?: Duration;

  public static parse(
    json: IMedicationKnowledgeRegulatoryMaxDispense,
    providedInstance: MedicationKnowledgeRegulatoryMaxDispense = new MedicationKnowledgeRegulatoryMaxDispense()
  ): MedicationKnowledgeRegulatoryMaxDispense {
    const newInstance: MedicationKnowledgeRegulatoryMaxDispense = BackboneElement.parse(json, providedInstance);
  
    if (json.quantity) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    if (json.period) {
      newInstance.period = Duration.parse(json.period);
    }
    return newInstance;
  }

  public static isMedicationKnowledgeRegulatoryMaxDispense(input?: unknown): input is MedicationKnowledgeRegulatoryMaxDispense {
    const castInput = input as MedicationKnowledgeRegulatoryMaxDispense;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationKnowledgeRegulatoryMaxDispense";
  }

  public toJSON(): IMedicationKnowledgeRegulatoryMaxDispense {
    const result: IMedicationKnowledgeRegulatoryMaxDispense = super.toJSON();

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MedicationKnowledgeRegulatoryMaxDispense";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
