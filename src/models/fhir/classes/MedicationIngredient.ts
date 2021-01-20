/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  IMedicationIngredient,
  PrimitiveBoolean,
  Ratio,
  Reference,
  FhirType
} from "../internal";

@FhirType("MedicationIngredient", "BackboneElement")
export class MedicationIngredient extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Medication.Ingredient";

  static readonly primaryCodePath: string | null = null;

  @FhirChoice("CodeableConcept", "Reference")
  public item?: CodeableConcept | Reference;

  @FhirField("PrimitiveBoolean")
  public isActive?: PrimitiveBoolean;

  @FhirField("Ratio")
  public strength?: Ratio;

  public static parse(
    json: IMedicationIngredient,
    providedInstance: MedicationIngredient = new MedicationIngredient()
  ): MedicationIngredient {
    const newInstance: MedicationIngredient = BackboneElement.parse(json, providedInstance);
  
    if (json.itemCodeableConcept !== undefined) {
      newInstance.item = CodeableConcept.parse(json.itemCodeableConcept);
    }
    if (json.itemReference !== undefined) {
      newInstance.item = Reference.parse(json.itemReference);
    }
    if (json.isActive !== undefined) {
      newInstance.isActive = PrimitiveBoolean.parsePrimitive(json.isActive, json._isActive);
    }
    if (json.strength !== undefined) {
      newInstance.strength = Ratio.parse(json.strength);
    }
    return newInstance;
  }

  public static isMedicationIngredient(input?: unknown): input is MedicationIngredient {
    const castInput = input as MedicationIngredient;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationIngredient";
  }

  public toJSON(): IMedicationIngredient {
    const result: IMedicationIngredient = super.toJSON();

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

  public clone(): MedicationIngredient {
    return MedicationIngredient.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationIngredient";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
