/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IInsurancePlanCoverageBenefit,
  InsurancePlanCoverageBenefitLimit,
  PrimitiveString,
  FieldMetadata
} from "../internal";

export class InsurancePlanCoverageBenefit extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "InsurancePlan.Coverage.Benefit";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "type",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "requirement",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "limit",
      fieldType: [InsurancePlanCoverageBenefitLimit],
      isArray: true
    }];
  }

  public type?: CodeableConcept;

  public requirement?: PrimitiveString;

  public limit?: Array<InsurancePlanCoverageBenefitLimit>;

  public static parse(
    json: IInsurancePlanCoverageBenefit,
    providedInstance: InsurancePlanCoverageBenefit = new InsurancePlanCoverageBenefit()
  ): InsurancePlanCoverageBenefit {
    const newInstance: InsurancePlanCoverageBenefit = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.requirement !== undefined) {
      newInstance.requirement = PrimitiveString.parsePrimitive(json.requirement, json._requirement);
    }
    if (json.limit !== undefined) {
      newInstance.limit = json.limit.map((x) => InsurancePlanCoverageBenefitLimit.parse(x));
    }
    return newInstance;
  }

  public static isInsurancePlanCoverageBenefit(input?: unknown): input is InsurancePlanCoverageBenefit {
    const castInput = input as InsurancePlanCoverageBenefit;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "InsurancePlanCoverageBenefit";
  }

  public toJSON(): IInsurancePlanCoverageBenefit {
    const result: IInsurancePlanCoverageBenefit = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.requirement) {
      result.requirement = this.requirement.value;
      result._requirement = Extension.serializePrimitiveExtension(this.requirement);
    }

    if (this.limit) {
      result.limit = this.limit.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): InsurancePlanCoverageBenefit {
    return InsurancePlanCoverageBenefit.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "InsurancePlanCoverageBenefit";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
