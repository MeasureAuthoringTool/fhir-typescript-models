/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  FhirList,
  IInsurancePlanPlanSpecificCostBenefitCost,
  Quantity,
  FhirType
} from "../internal";

@FhirType("InsurancePlanPlanSpecificCostBenefitCost", "BackboneElement")
export class InsurancePlanPlanSpecificCostBenefitCost extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "InsurancePlan.Plan.SpecificCost.Benefit.Cost";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("CodeableConcept")
  public applicability?: CodeableConcept;

  @FhirList("CodeableConcept")
  public qualifiers?: Array<CodeableConcept>;

  @FhirField("Quantity")
  public value?: Quantity;

  public static parse(
    json: IInsurancePlanPlanSpecificCostBenefitCost,
    providedInstance: InsurancePlanPlanSpecificCostBenefitCost = new InsurancePlanPlanSpecificCostBenefitCost()
  ): InsurancePlanPlanSpecificCostBenefitCost {
    const newInstance: InsurancePlanPlanSpecificCostBenefitCost = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.applicability !== undefined) {
      newInstance.applicability = CodeableConcept.parse(json.applicability);
    }
    if (json.qualifiers !== undefined) {
      newInstance.qualifiers = json.qualifiers.map((x) => CodeableConcept.parse(x));
    }
    if (json.value !== undefined) {
      newInstance.value = Quantity.parse(json.value);
    }
    return newInstance;
  }

  public static isInsurancePlanPlanSpecificCostBenefitCost(input?: unknown): input is InsurancePlanPlanSpecificCostBenefitCost {
    const castInput = input as InsurancePlanPlanSpecificCostBenefitCost;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "InsurancePlanPlanSpecificCostBenefitCost";
  }

  public toJSON(): IInsurancePlanPlanSpecificCostBenefitCost {
    const result: IInsurancePlanPlanSpecificCostBenefitCost = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.applicability) {
      result.applicability = this.applicability.toJSON();
    }

    if (this.qualifiers) {
      result.qualifiers = this.qualifiers.map((x) => x.toJSON());
    }

    if (this.value) {
      result.value = this.value.toJSON();
    }

    return result;
  }

  public clone(): InsurancePlanPlanSpecificCostBenefitCost {
    return InsurancePlanPlanSpecificCostBenefitCost.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "InsurancePlanPlanSpecificCostBenefitCost";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
