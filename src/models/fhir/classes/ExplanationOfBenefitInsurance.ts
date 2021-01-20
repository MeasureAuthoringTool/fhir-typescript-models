/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  FhirList,
  IExplanationOfBenefitInsurance,
  PrimitiveBoolean,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("ExplanationOfBenefitInsurance", "BackboneElement")
export class ExplanationOfBenefitInsurance extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefit.Insurance";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveBoolean")
  public focal?: PrimitiveBoolean;

  @FhirField("Reference")
  public coverage?: Reference;

  @FhirList("PrimitiveString")
  public preAuthRef?: Array<PrimitiveString>;

  public static parse(
    json: IExplanationOfBenefitInsurance,
    providedInstance: ExplanationOfBenefitInsurance = new ExplanationOfBenefitInsurance()
  ): ExplanationOfBenefitInsurance {
    const newInstance: ExplanationOfBenefitInsurance = BackboneElement.parse(json, providedInstance);
  
    if (json.focal !== undefined) {
      newInstance.focal = PrimitiveBoolean.parsePrimitive(json.focal, json._focal);
    }
    if (json.coverage !== undefined) {
      newInstance.coverage = Reference.parse(json.coverage);
    }
    if (json.preAuthRef !== undefined) {
      newInstance.preAuthRef = json.preAuthRef.map((x, i) => PrimitiveString.parsePrimitive(x, json._preAuthRef?.[i]));
    }
    return newInstance;
  }

  public static isExplanationOfBenefitInsurance(input?: unknown): input is ExplanationOfBenefitInsurance {
    const castInput = input as ExplanationOfBenefitInsurance;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExplanationOfBenefitInsurance";
  }

  public toJSON(): IExplanationOfBenefitInsurance {
    const result: IExplanationOfBenefitInsurance = super.toJSON();

    if (this.focal) {
      result.focal = this.focal.value;
      result._focal = Extension.serializePrimitiveExtension(this.focal);
    }

    if (this.coverage) {
      result.coverage = this.coverage.toJSON();
    }

    if (this.preAuthRef) {
      result.preAuthRef = this.preAuthRef.filter(x => !!x).map(x => x.value) as typeof result.preAuthRef;
      result._preAuthRef = Extension.serializePrimitiveExtensionArray(this.preAuthRef);
    }

    return result;
  }

  public clone(): ExplanationOfBenefitInsurance {
    return ExplanationOfBenefitInsurance.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExplanationOfBenefitInsurance";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
