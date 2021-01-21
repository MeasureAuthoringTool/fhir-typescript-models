/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  FhirList,
  IInsurancePlanPlanSpecificCost,
  InsurancePlanPlanSpecificCostBenefit,
  FhirType
} from "../internal";

@FhirType("InsurancePlanPlanSpecificCost", "BackboneElement")
export class InsurancePlanPlanSpecificCost extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "InsurancePlan.Plan.SpecificCost";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public category?: CodeableConcept;

  @FhirList("InsurancePlanPlanSpecificCostBenefit")
  public benefit?: Array<InsurancePlanPlanSpecificCostBenefit>;

  public static parse(
    json: IInsurancePlanPlanSpecificCost,
    providedInstance: InsurancePlanPlanSpecificCost = new InsurancePlanPlanSpecificCost()
  ): InsurancePlanPlanSpecificCost {
    const newInstance: InsurancePlanPlanSpecificCost = BackboneElement.parse(json, providedInstance);
  
    if (json.category !== undefined) {
      newInstance.category = CodeableConcept.parse(json.category);
    }
    if (json.benefit !== undefined) {
      newInstance.benefit = json.benefit.map((x) => InsurancePlanPlanSpecificCostBenefit.parse(x));
    }
    return newInstance;
  }

  public static isInsurancePlanPlanSpecificCost(input?: unknown): input is InsurancePlanPlanSpecificCost {
    const castInput = input as InsurancePlanPlanSpecificCost;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "InsurancePlanPlanSpecificCost";
  }

  public toJSON(): IInsurancePlanPlanSpecificCost {
    const result: IInsurancePlanPlanSpecificCost = super.toJSON();

    if (this.category) {
      result.category = this.category.toJSON();
    }

    if (this.benefit) {
      result.benefit = this.benefit.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): InsurancePlanPlanSpecificCost {
    return InsurancePlanPlanSpecificCost.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "InsurancePlanPlanSpecificCost";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
