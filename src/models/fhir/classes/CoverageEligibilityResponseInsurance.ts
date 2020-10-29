/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CoverageEligibilityResponseInsuranceItem,
  Extension,
  ICoverageEligibilityResponseInsurance,
  Period,
  PrimitiveBoolean,
  Reference,
  FieldMetadata
} from "../internal";

export class CoverageEligibilityResponseInsurance extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CoverageEligibilityResponse.Insurance";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "coverage",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "inforce",
      fieldType: [PrimitiveBoolean],
      isArray: false
    }, {
      fieldName: "benefitPeriod",
      fieldType: [Period],
      isArray: false
    }, {
      fieldName: "item",
      fieldType: [CoverageEligibilityResponseInsuranceItem],
      isArray: true
    }];
  }

  public coverage?: Reference;

  public inforce?: PrimitiveBoolean;

  public benefitPeriod?: Period;

  public item?: Array<CoverageEligibilityResponseInsuranceItem>;

  public static parse(
    json: ICoverageEligibilityResponseInsurance,
    providedInstance: CoverageEligibilityResponseInsurance = new CoverageEligibilityResponseInsurance()
  ): CoverageEligibilityResponseInsurance {
    const newInstance: CoverageEligibilityResponseInsurance = BackboneElement.parse(json, providedInstance);
  
    if (json.coverage !== undefined) {
      newInstance.coverage = Reference.parse(json.coverage);
    }
    if (json.inforce !== undefined) {
      newInstance.inforce = PrimitiveBoolean.parsePrimitive(json.inforce, json._inforce);
    }
    if (json.benefitPeriod !== undefined) {
      newInstance.benefitPeriod = Period.parse(json.benefitPeriod);
    }
    if (json.item !== undefined) {
      newInstance.item = json.item.map((x) => CoverageEligibilityResponseInsuranceItem.parse(x));
    }
    return newInstance;
  }

  public static isCoverageEligibilityResponseInsurance(input?: unknown): input is CoverageEligibilityResponseInsurance {
    const castInput = input as CoverageEligibilityResponseInsurance;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CoverageEligibilityResponseInsurance";
  }

  public toJSON(): ICoverageEligibilityResponseInsurance {
    const result: ICoverageEligibilityResponseInsurance = super.toJSON();

    if (this.coverage) {
      result.coverage = this.coverage.toJSON();
    }

    if (this.inforce) {
      result.inforce = this.inforce.value;
      result._inforce = Extension.serializePrimitiveExtension(this.inforce);
    }

    if (this.benefitPeriod) {
      result.benefitPeriod = this.benefitPeriod.toJSON();
    }

    if (this.item) {
      result.item = this.item.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): CoverageEligibilityResponseInsurance {
    return CoverageEligibilityResponseInsurance.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CoverageEligibilityResponseInsurance";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
