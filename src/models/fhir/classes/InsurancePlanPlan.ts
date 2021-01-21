/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  FhirList,
  Identifier,
  IInsurancePlanPlan,
  InsurancePlanPlanGeneralCost,
  InsurancePlanPlanSpecificCost,
  Reference,
  FhirType
} from "../internal";

@FhirType("InsurancePlanPlan", "BackboneElement")
export class InsurancePlanPlan extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "InsurancePlan.Plan";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirList("Reference")
  public coverageArea?: Array<Reference>;

  @FhirList("Reference")
  public network?: Array<Reference>;

  @FhirList("InsurancePlanPlanGeneralCost")
  public generalCost?: Array<InsurancePlanPlanGeneralCost>;

  @FhirList("InsurancePlanPlanSpecificCost")
  public specificCost?: Array<InsurancePlanPlanSpecificCost>;

  public static parse(
    json: IInsurancePlanPlan,
    providedInstance: InsurancePlanPlan = new InsurancePlanPlan()
  ): InsurancePlanPlan {
    const newInstance: InsurancePlanPlan = BackboneElement.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.coverageArea !== undefined) {
      newInstance.coverageArea = json.coverageArea.map((x) => Reference.parse(x));
    }
    if (json.network !== undefined) {
      newInstance.network = json.network.map((x) => Reference.parse(x));
    }
    if (json.generalCost !== undefined) {
      newInstance.generalCost = json.generalCost.map((x) => InsurancePlanPlanGeneralCost.parse(x));
    }
    if (json.specificCost !== undefined) {
      newInstance.specificCost = json.specificCost.map((x) => InsurancePlanPlanSpecificCost.parse(x));
    }
    return newInstance;
  }

  public static isInsurancePlanPlan(input?: unknown): input is InsurancePlanPlan {
    const castInput = input as InsurancePlanPlan;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "InsurancePlanPlan";
  }

  public toJSON(): IInsurancePlanPlan {
    const result: IInsurancePlanPlan = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.coverageArea) {
      result.coverageArea = this.coverageArea.map((x) => x.toJSON());
    }

    if (this.network) {
      result.network = this.network.map((x) => x.toJSON());
    }

    if (this.generalCost) {
      result.generalCost = this.generalCost.map((x) => x.toJSON());
    }

    if (this.specificCost) {
      result.specificCost = this.specificCost.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): InsurancePlanPlan {
    return InsurancePlanPlan.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "InsurancePlanPlan";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
