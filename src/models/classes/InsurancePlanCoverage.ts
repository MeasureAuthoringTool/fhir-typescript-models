/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IInsurancePlanCoverage,
  InsurancePlanCoverageBenefit,
  Reference,
} from "../internal";

export class InsurancePlanCoverage extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "InsurancePlan.Coverage";

  public type?: CodeableConcept;

  public network?: Array<Reference>;

  public benefit?: Array<InsurancePlanCoverageBenefit>;

  public static parse(
    json: IInsurancePlanCoverage,
    providedInstance: InsurancePlanCoverage = new InsurancePlanCoverage()
  ): InsurancePlanCoverage {
    const newInstance: InsurancePlanCoverage = BackboneElement.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.network) {
      newInstance.network = json.network.map((x) => Reference.parse(x));
    }
    if (json.benefit) {
      newInstance.benefit = json.benefit.map((x) => InsurancePlanCoverageBenefit.parse(x));
    }
    return newInstance;
  }

  public static isInsurancePlanCoverage(input?: unknown): input is InsurancePlanCoverage {
    const castInput = input as InsurancePlanCoverage;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "InsurancePlanCoverage";
  }

  public toJSON(): IInsurancePlanCoverage {
    const result: IInsurancePlanCoverage = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.network) {
      result.network = this.network.map((x) => x.toJSON());
    }

    if (this.benefit) {
      result.benefit = this.benefit.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "InsurancePlanCoverage";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
