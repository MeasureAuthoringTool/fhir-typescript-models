/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  FhirChoice,
  FhirField,
  INutritionOrderEnteralFormulaAdministration,
  Ratio,
  SimpleQuantity,
  Timing,
  FhirType
} from "../internal";

@FhirType("NutritionOrderEnteralFormulaAdministration", "BackboneElement")
export class NutritionOrderEnteralFormulaAdministration extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "NutritionOrder.EnteralFormula.Administration";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Timing")
  public schedule?: Timing;

  @FhirField("SimpleQuantity")
  public quantity?: SimpleQuantity;

  @FhirChoice("SimpleQuantity", "Ratio")
  public rate?: SimpleQuantity | Ratio;

  public static parse(
    json: INutritionOrderEnteralFormulaAdministration,
    providedInstance: NutritionOrderEnteralFormulaAdministration = new NutritionOrderEnteralFormulaAdministration()
  ): NutritionOrderEnteralFormulaAdministration {
    const newInstance: NutritionOrderEnteralFormulaAdministration = BackboneElement.parse(json, providedInstance);
  
    if (json.schedule !== undefined) {
      newInstance.schedule = Timing.parse(json.schedule);
    }
    if (json.quantity !== undefined) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    if (json.rateQuantity !== undefined) {
      newInstance.rate = SimpleQuantity.parse(json.rateQuantity);
    }
    if (json.rateRatio !== undefined) {
      newInstance.rate = Ratio.parse(json.rateRatio);
    }
    return newInstance;
  }

  public static isNutritionOrderEnteralFormulaAdministration(input?: unknown): input is NutritionOrderEnteralFormulaAdministration {
    const castInput = input as NutritionOrderEnteralFormulaAdministration;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "NutritionOrderEnteralFormulaAdministration";
  }

  public toJSON(): INutritionOrderEnteralFormulaAdministration {
    const result: INutritionOrderEnteralFormulaAdministration = super.toJSON();

    if (this.schedule) {
      result.schedule = this.schedule.toJSON();
    }

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    if (this.rate && SimpleQuantity.isSimpleQuantity(this.rate)) {
      result.rateQuantity = this.rate.toJSON();
    }

    if (this.rate && Ratio.isRatio(this.rate)) {
      result.rateRatio = this.rate.toJSON();
    }

    return result;
  }

  public clone(): NutritionOrderEnteralFormulaAdministration {
    return NutritionOrderEnteralFormulaAdministration.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "NutritionOrderEnteralFormulaAdministration";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
