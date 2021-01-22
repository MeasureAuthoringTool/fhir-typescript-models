/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  IExplanationOfBenefitTotal,
  Money,
  FhirType
} from "../internal";

@FhirType("ExplanationOfBenefitTotal", "BackboneElement")
export class ExplanationOfBenefitTotal extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefit.Total";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public category?: CodeableConcept;

  @FhirField("Money")
  public amount?: Money;

  public static parse(
    json: IExplanationOfBenefitTotal,
    providedInstance: ExplanationOfBenefitTotal = new ExplanationOfBenefitTotal()
  ): ExplanationOfBenefitTotal {
    const newInstance: ExplanationOfBenefitTotal = BackboneElement.parse(json, providedInstance);
  
    if (json.category !== undefined) {
      newInstance.category = CodeableConcept.parse(json.category);
    }
    if (json.amount !== undefined) {
      newInstance.amount = Money.parse(json.amount);
    }
    return newInstance;
  }

  public static isExplanationOfBenefitTotal(input?: unknown): input is ExplanationOfBenefitTotal {
    const castInput = input as ExplanationOfBenefitTotal;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExplanationOfBenefitTotal";
  }

  public toJSON(): IExplanationOfBenefitTotal {
    const result: IExplanationOfBenefitTotal = super.toJSON();

    if (this.category) {
      result.category = this.category.toJSON();
    }

    if (this.amount) {
      result.amount = this.amount.toJSON();
    }

    return result;
  }

  public clone(): ExplanationOfBenefitTotal {
    return ExplanationOfBenefitTotal.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExplanationOfBenefitTotal";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
