/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IInsurancePlanCoverageBenefitLimit,
  Quantity,
} from "../internal";

export class InsurancePlanCoverageBenefitLimit extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "InsurancePlan.Coverage.Benefit.Limit";
  
  static readonly primaryCodePath: string | null = null;

  public value?: Quantity;

  public code?: CodeableConcept;

  public static parse(
    json: IInsurancePlanCoverageBenefitLimit,
    providedInstance: InsurancePlanCoverageBenefitLimit = new InsurancePlanCoverageBenefitLimit()
  ): InsurancePlanCoverageBenefitLimit {
    const newInstance: InsurancePlanCoverageBenefitLimit = BackboneElement.parse(json, providedInstance);
  
    if (json.value !== undefined) {
      newInstance.value = Quantity.parse(json.value);
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    return newInstance;
  }

  public static isInsurancePlanCoverageBenefitLimit(input?: unknown): input is InsurancePlanCoverageBenefitLimit {
    const castInput = input as InsurancePlanCoverageBenefitLimit;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "InsurancePlanCoverageBenefitLimit";
  }

  public toJSON(): IInsurancePlanCoverageBenefitLimit {
    const result: IInsurancePlanCoverageBenefitLimit = super.toJSON();

    if (this.value) {
      result.value = this.value.toJSON();
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    return result;
  }

  public clone(): InsurancePlanCoverageBenefitLimit {
    return InsurancePlanCoverageBenefitLimit.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "InsurancePlanCoverageBenefitLimit";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
