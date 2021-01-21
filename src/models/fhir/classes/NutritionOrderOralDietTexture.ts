/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  INutritionOrderOralDietTexture,
  FhirType
} from "../internal";

@FhirType("NutritionOrderOralDietTexture", "BackboneElement")
export class NutritionOrderOralDietTexture extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "NutritionOrder.OralDiet.Texture";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public modifier?: CodeableConcept;

  @FhirField("CodeableConcept")
  public foodType?: CodeableConcept;

  public static parse(
    json: INutritionOrderOralDietTexture,
    providedInstance: NutritionOrderOralDietTexture = new NutritionOrderOralDietTexture()
  ): NutritionOrderOralDietTexture {
    const newInstance: NutritionOrderOralDietTexture = BackboneElement.parse(json, providedInstance);
  
    if (json.modifier !== undefined) {
      newInstance.modifier = CodeableConcept.parse(json.modifier);
    }
    if (json.foodType !== undefined) {
      newInstance.foodType = CodeableConcept.parse(json.foodType);
    }
    return newInstance;
  }

  public static isNutritionOrderOralDietTexture(input?: unknown): input is NutritionOrderOralDietTexture {
    const castInput = input as NutritionOrderOralDietTexture;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "NutritionOrderOralDietTexture";
  }

  public toJSON(): INutritionOrderOralDietTexture {
    const result: INutritionOrderOralDietTexture = super.toJSON();

    if (this.modifier) {
      result.modifier = this.modifier.toJSON();
    }

    if (this.foodType) {
      result.foodType = this.foodType.toJSON();
    }

    return result;
  }

  public clone(): NutritionOrderOralDietTexture {
    return NutritionOrderOralDietTexture.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "NutritionOrderOralDietTexture";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
