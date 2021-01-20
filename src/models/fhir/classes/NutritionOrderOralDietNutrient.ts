/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  INutritionOrderOralDietNutrient,
  SimpleQuantity,
  FhirType
} from "../internal";

@FhirType("NutritionOrderOralDietNutrient", "BackboneElement")
export class NutritionOrderOralDietNutrient extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "NutritionOrder.OralDiet.Nutrient";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public modifier?: CodeableConcept;

  @FhirField("SimpleQuantity")
  public amount?: SimpleQuantity;

  public static parse(
    json: INutritionOrderOralDietNutrient,
    providedInstance: NutritionOrderOralDietNutrient = new NutritionOrderOralDietNutrient()
  ): NutritionOrderOralDietNutrient {
    const newInstance: NutritionOrderOralDietNutrient = BackboneElement.parse(json, providedInstance);
  
    if (json.modifier !== undefined) {
      newInstance.modifier = CodeableConcept.parse(json.modifier);
    }
    if (json.amount !== undefined) {
      newInstance.amount = SimpleQuantity.parse(json.amount);
    }
    return newInstance;
  }

  public static isNutritionOrderOralDietNutrient(input?: unknown): input is NutritionOrderOralDietNutrient {
    const castInput = input as NutritionOrderOralDietNutrient;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "NutritionOrderOralDietNutrient";
  }

  public toJSON(): INutritionOrderOralDietNutrient {
    const result: INutritionOrderOralDietNutrient = super.toJSON();

    if (this.modifier) {
      result.modifier = this.modifier.toJSON();
    }

    if (this.amount) {
      result.amount = this.amount.toJSON();
    }

    return result;
  }

  public clone(): NutritionOrderOralDietNutrient {
    return NutritionOrderOralDietNutrient.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "NutritionOrderOralDietNutrient";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
