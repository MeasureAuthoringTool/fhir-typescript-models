/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  IMedicationKnowledgeCost,
  Money,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("MedicationKnowledgeCost", "BackboneElement")
export class MedicationKnowledgeCost extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledge.Cost";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("PrimitiveString")
  public source?: PrimitiveString;

  @FhirField("Money")
  public cost?: Money;

  public static parse(
    json: IMedicationKnowledgeCost,
    providedInstance: MedicationKnowledgeCost = new MedicationKnowledgeCost()
  ): MedicationKnowledgeCost {
    const newInstance: MedicationKnowledgeCost = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.source !== undefined) {
      newInstance.source = PrimitiveString.parsePrimitive(json.source, json._source);
    }
    if (json.cost !== undefined) {
      newInstance.cost = Money.parse(json.cost);
    }
    return newInstance;
  }

  public static isMedicationKnowledgeCost(input?: unknown): input is MedicationKnowledgeCost {
    const castInput = input as MedicationKnowledgeCost;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationKnowledgeCost";
  }

  public toJSON(): IMedicationKnowledgeCost {
    const result: IMedicationKnowledgeCost = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.source) {
      result.source = this.source.value;
      result._source = Extension.serializePrimitiveExtension(this.source);
    }

    if (this.cost) {
      result.cost = this.cost.toJSON();
    }

    return result;
  }

  public clone(): MedicationKnowledgeCost {
    return MedicationKnowledgeCost.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationKnowledgeCost";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
