/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IInsurancePlanPlanSpecificCostBenefitCost,
  Quantity,
  FieldMetadata
} from "../internal";

export class InsurancePlanPlanSpecificCostBenefitCost extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "InsurancePlan.Plan.SpecificCost.Benefit.Cost";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "type",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "applicability",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "qualifiers",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "value",
      fieldType: [Quantity],
      isArray: false
    }];
  }

  public type?: CodeableConcept;

  public applicability?: CodeableConcept;

  public qualifiers?: Array<CodeableConcept>;

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
