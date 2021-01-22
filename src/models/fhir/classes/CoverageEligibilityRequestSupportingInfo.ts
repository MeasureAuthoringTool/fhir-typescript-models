/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  ICoverageEligibilityRequestSupportingInfo,
  PrimitiveBoolean,
  PrimitivePositiveInt,
  Reference,
  FhirType
} from "../internal";

@FhirType("CoverageEligibilityRequestSupportingInfo", "BackboneElement")
export class CoverageEligibilityRequestSupportingInfo extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CoverageEligibilityRequest.SupportingInfo";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitivePositiveInt")
  public sequence?: PrimitivePositiveInt;

  @FhirField("Reference")
  public information?: Reference;

  @FhirField("PrimitiveBoolean")
  public appliesToAll?: PrimitiveBoolean;

  public static parse(
    json: ICoverageEligibilityRequestSupportingInfo,
    providedInstance: CoverageEligibilityRequestSupportingInfo = new CoverageEligibilityRequestSupportingInfo()
  ): CoverageEligibilityRequestSupportingInfo {
    const newInstance: CoverageEligibilityRequestSupportingInfo = BackboneElement.parse(json, providedInstance);
  
    if (json.sequence !== undefined) {
      newInstance.sequence = PrimitivePositiveInt.parsePrimitive(json.sequence, json._sequence);
    }
    if (json.information !== undefined) {
      newInstance.information = Reference.parse(json.information);
    }
    if (json.appliesToAll !== undefined) {
      newInstance.appliesToAll = PrimitiveBoolean.parsePrimitive(json.appliesToAll, json._appliesToAll);
    }
    return newInstance;
  }

  public static isCoverageEligibilityRequestSupportingInfo(input?: unknown): input is CoverageEligibilityRequestSupportingInfo {
    const castInput = input as CoverageEligibilityRequestSupportingInfo;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CoverageEligibilityRequestSupportingInfo";
  }

  public toJSON(): ICoverageEligibilityRequestSupportingInfo {
    const result: ICoverageEligibilityRequestSupportingInfo = super.toJSON();

    if (this.sequence) {
      result.sequence = this.sequence.value;
      result._sequence = Extension.serializePrimitiveExtension(this.sequence);
    }

    if (this.information) {
      result.information = this.information.toJSON();
    }

    if (this.appliesToAll) {
      result.appliesToAll = this.appliesToAll.value;
      result._appliesToAll = Extension.serializePrimitiveExtension(this.appliesToAll);
    }

    return result;
  }

  public clone(): CoverageEligibilityRequestSupportingInfo {
    return CoverageEligibilityRequestSupportingInfo.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CoverageEligibilityRequestSupportingInfo";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
