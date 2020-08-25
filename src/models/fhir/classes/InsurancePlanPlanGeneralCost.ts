/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IInsurancePlanPlanGeneralCost,
  Money,
  PrimitivePositiveInt,
  PrimitiveString,
} from "../internal";

export class InsurancePlanPlanGeneralCost extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "InsurancePlan.Plan.GeneralCost";

  public type?: CodeableConcept;

  public groupSize?: PrimitivePositiveInt;

  public cost?: Money;

  public comment?: PrimitiveString;

  public static parse(
    json: IInsurancePlanPlanGeneralCost,
    providedInstance: InsurancePlanPlanGeneralCost = new InsurancePlanPlanGeneralCost()
  ): InsurancePlanPlanGeneralCost {
    const newInstance: InsurancePlanPlanGeneralCost = BackboneElement.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.groupSize) {
      newInstance.groupSize = PrimitivePositiveInt.parsePrimitive(json.groupSize, json._groupSize);
    }
    if (json.cost) {
      newInstance.cost = Money.parse(json.cost);
    }
    if (json.comment) {
      newInstance.comment = PrimitiveString.parsePrimitive(json.comment, json._comment);
    }
    return newInstance;
  }

  public static isInsurancePlanPlanGeneralCost(input?: unknown): input is InsurancePlanPlanGeneralCost {
    const castInput = input as InsurancePlanPlanGeneralCost;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "InsurancePlanPlanGeneralCost";
  }

  public toJSON(): IInsurancePlanPlanGeneralCost {
    const result: IInsurancePlanPlanGeneralCost = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.groupSize) {
      result.groupSize = this.groupSize.value;
      result._groupSize = Extension.serializePrimitiveExtension(this.groupSize);
    }

    if (this.cost) {
      result.cost = this.cost.toJSON();
    }

    if (this.comment) {
      result.comment = this.comment.value;
      result._comment = Extension.serializePrimitiveExtension(this.comment);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "InsurancePlanPlanGeneralCost";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
