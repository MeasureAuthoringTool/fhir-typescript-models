/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  ICoverageEligibilityRequestInsurance,
  PrimitiveBoolean,
  PrimitiveString,
  Reference,
  FieldMetadata
} from "../internal";

export class CoverageEligibilityRequestInsurance extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CoverageEligibilityRequest.Insurance";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "focal",
      fieldType: [PrimitiveBoolean],
      isArray: false
    }, {
      fieldName: "coverage",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "businessArrangement",
      fieldType: [PrimitiveString],
      isArray: false
    }];
  }

  public focal?: PrimitiveBoolean;

  public coverage?: Reference;

  public businessArrangement?: PrimitiveString;

  public static parse(
    json: ICoverageEligibilityRequestInsurance,
    providedInstance: CoverageEligibilityRequestInsurance = new CoverageEligibilityRequestInsurance()
  ): CoverageEligibilityRequestInsurance {
    const newInstance: CoverageEligibilityRequestInsurance = BackboneElement.parse(json, providedInstance);
  
    if (json.focal !== undefined) {
      newInstance.focal = PrimitiveBoolean.parsePrimitive(json.focal, json._focal);
    }
    if (json.coverage !== undefined) {
      newInstance.coverage = Reference.parse(json.coverage);
    }
    if (json.businessArrangement !== undefined) {
      newInstance.businessArrangement = PrimitiveString.parsePrimitive(json.businessArrangement, json._businessArrangement);
    }
    return newInstance;
  }

  public static isCoverageEligibilityRequestInsurance(input?: unknown): input is CoverageEligibilityRequestInsurance {
    const castInput = input as CoverageEligibilityRequestInsurance;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CoverageEligibilityRequestInsurance";
  }

  public toJSON(): ICoverageEligibilityRequestInsurance {
    const result: ICoverageEligibilityRequestInsurance = super.toJSON();

    if (this.focal) {
      result.focal = this.focal.value;
      result._focal = Extension.serializePrimitiveExtension(this.focal);
    }

    if (this.coverage) {
      result.coverage = this.coverage.toJSON();
    }

    if (this.businessArrangement) {
      result.businessArrangement = this.businessArrangement.value;
      result._businessArrangement = Extension.serializePrimitiveExtension(this.businessArrangement);
    }

    return result;
  }

  public clone(): CoverageEligibilityRequestInsurance {
    return CoverageEligibilityRequestInsurance.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CoverageEligibilityRequestInsurance";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
