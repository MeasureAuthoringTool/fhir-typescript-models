/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  FhirList,
  IInsurancePlanPlanSpecificCostBenefit,
  InsurancePlanPlanSpecificCostBenefitCost,
  FhirType
} from "../internal";

@FhirType("InsurancePlanPlanSpecificCostBenefit", "BackboneElement")
export class InsurancePlanPlanSpecificCostBenefit extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "InsurancePlan.Plan.SpecificCost.Benefit";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirList("InsurancePlanPlanSpecificCostBenefitCost")
  public cost?: Array<InsurancePlanPlanSpecificCostBenefitCost>;

  public static parse(
    json: IInsurancePlanPlanSpecificCostBenefit,
    providedInstance: InsurancePlanPlanSpecificCostBenefit = new InsurancePlanPlanSpecificCostBenefit()
  ): InsurancePlanPlanSpecificCostBenefit {
    const newInstance: InsurancePlanPlanSpecificCostBenefit = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.cost !== undefined) {
      newInstance.cost = json.cost.map((x) => InsurancePlanPlanSpecificCostBenefitCost.parse(x));
    }
    return newInstance;
  }

  public static isInsurancePlanPlanSpecificCostBenefit(input?: unknown): input is InsurancePlanPlanSpecificCostBenefit {
    const castInput = input as InsurancePlanPlanSpecificCostBenefit;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "InsurancePlanPlanSpecificCostBenefit";
  }

  public toJSON(): IInsurancePlanPlanSpecificCostBenefit {
    const result: IInsurancePlanPlanSpecificCostBenefit = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.cost) {
      result.cost = this.cost.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): InsurancePlanPlanSpecificCostBenefit {
    return InsurancePlanPlanSpecificCostBenefit.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "InsurancePlanPlanSpecificCostBenefit";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
