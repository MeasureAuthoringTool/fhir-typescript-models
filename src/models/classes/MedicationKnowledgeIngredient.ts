/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IMedicationKnowledgeIngredient,
  PrimitiveBoolean,
  Ratio,
  Reference,
} from "../internal";

export class MedicationKnowledgeIngredient extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledge.Ingredient";

  public item?: CodeableConcept | Reference;

  public isActive?: PrimitiveBoolean;

  public strength?: Ratio;

  public static parse(
    json: IMedicationKnowledgeIngredient,
    providedInstance: MedicationKnowledgeIngredient = new MedicationKnowledgeIngredient()
  ): MedicationKnowledgeIngredient {
    const newInstance: MedicationKnowledgeIngredient = BackboneElement.parse(json, providedInstance);
  
    if (json.itemCodeableConcept) {
      newInstance.item = CodeableConcept.parse(json.itemCodeableConcept);
    }
    if (json.itemReference) {
      newInstance.item = Reference.parse(json.itemReference);
    }
    if (json.isActive) {
      newInstance.isActive = PrimitiveBoolean.parsePrimitive(json.isActive, json._isActive);
    }
    if (json.strength) {
      newInstance.strength = Ratio.parse(json.strength);
    }
    return newInstance;
  }

  public static isMedicationKnowledgeIngredient(input?: unknown): input is MedicationKnowledgeIngredient {
    const castInput = input as MedicationKnowledgeIngredient;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationKnowledgeIngredient";
  }

  public toJSON(): IMedicationKnowledgeIngredient {
    const result: IMedicationKnowledgeIngredient = super.toJSON();

    if (this.item && CodeableConcept.isCodeableConcept(this.item)) {
      result.itemCodeableConcept = this.item.toJSON();
    }

    if (this.item && Reference.isReference(this.item)) {
      result.itemReference = this.item.toJSON();
    }

    if (this.isActive) {
      result.isActive = this.isActive.value;
      result._isActive = Extension.serializePrimitiveExtension(this.isActive);
    }

    if (this.strength) {
      result.strength = this.strength.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MedicationKnowledgeIngredient";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
