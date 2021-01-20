/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  FhirList,
  IClinicalImpressionInvestigation,
  Reference,
  FhirType
} from "../internal";

@FhirType("ClinicalImpressionInvestigation", "BackboneElement")
export class ClinicalImpressionInvestigation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ClinicalImpression.Investigation";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirList("Reference")
  public item?: Array<Reference>;

  public static parse(
    json: IClinicalImpressionInvestigation,
    providedInstance: ClinicalImpressionInvestigation = new ClinicalImpressionInvestigation()
  ): ClinicalImpressionInvestigation {
    const newInstance: ClinicalImpressionInvestigation = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.item !== undefined) {
      newInstance.item = json.item.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isClinicalImpressionInvestigation(input?: unknown): input is ClinicalImpressionInvestigation {
    const castInput = input as ClinicalImpressionInvestigation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClinicalImpressionInvestigation";
  }

  public toJSON(): IClinicalImpressionInvestigation {
    const result: IClinicalImpressionInvestigation = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.item) {
      result.item = this.item.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ClinicalImpressionInvestigation {
    return ClinicalImpressionInvestigation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ClinicalImpressionInvestigation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
