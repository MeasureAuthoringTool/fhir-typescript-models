/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Duration,
  FhirField,
  IMedicationKnowledgeRegulatoryMaxDispense,
  SimpleQuantity,
  FhirType
} from "../internal";

@FhirType("MedicationKnowledgeRegulatoryMaxDispense", "BackboneElement")
export class MedicationKnowledgeRegulatoryMaxDispense extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledge.Regulatory.MaxDispense";

  static readonly primaryCodePath: string | null = null;

  @FhirField("SimpleQuantity")
  public quantity?: SimpleQuantity;

  @FhirField("Duration")
  public period?: Duration;

  public static parse(
    json: IMedicationKnowledgeRegulatoryMaxDispense,
    providedInstance: MedicationKnowledgeRegulatoryMaxDispense = new MedicationKnowledgeRegulatoryMaxDispense()
  ): MedicationKnowledgeRegulatoryMaxDispense {
    const newInstance: MedicationKnowledgeRegulatoryMaxDispense = BackboneElement.parse(json, providedInstance);
  
    if (json.quantity !== undefined) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    if (json.period !== undefined) {
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

  public clone(): MedicationKnowledgeRegulatoryMaxDispense {
    return MedicationKnowledgeRegulatoryMaxDispense.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationKnowledgeRegulatoryMaxDispense";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
