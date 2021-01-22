/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirChoice,
  FhirField,
  ISubstanceIngredient,
  Ratio,
  Reference,
  FhirType
} from "../internal";

@FhirType("SubstanceIngredient", "BackboneElement")
export class SubstanceIngredient extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Substance.Ingredient";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Ratio")
  public quantity?: Ratio;

  @FhirChoice("CodeableConcept", "Reference")
  public substance?: CodeableConcept | Reference;

  public static parse(
    json: ISubstanceIngredient,
    providedInstance: SubstanceIngredient = new SubstanceIngredient()
  ): SubstanceIngredient {
    const newInstance: SubstanceIngredient = BackboneElement.parse(json, providedInstance);
  
    if (json.quantity !== undefined) {
      newInstance.quantity = Ratio.parse(json.quantity);
    }
    if (json.substanceCodeableConcept !== undefined) {
      newInstance.substance = CodeableConcept.parse(json.substanceCodeableConcept);
    }
    if (json.substanceReference !== undefined) {
      newInstance.substance = Reference.parse(json.substanceReference);
    }
    return newInstance;
  }

  public static isSubstanceIngredient(input?: unknown): input is SubstanceIngredient {
    const castInput = input as SubstanceIngredient;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceIngredient";
  }

  public toJSON(): ISubstanceIngredient {
    const result: ISubstanceIngredient = super.toJSON();

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    if (this.substance && CodeableConcept.isCodeableConcept(this.substance)) {
      result.substanceCodeableConcept = this.substance.toJSON();
    }

    if (this.substance && Reference.isReference(this.substance)) {
      result.substanceReference = this.substance.toJSON();
    }

    return result;
  }

  public clone(): SubstanceIngredient {
    return SubstanceIngredient.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceIngredient";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
