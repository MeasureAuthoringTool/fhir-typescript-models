/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IClinicalImpressionInvestigation,
  Reference,
} from "../internal";

export class ClinicalImpressionInvestigation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ClinicalImpression.Investigation";

  public code?: CodeableConcept;

  public item?: Array<Reference>;

  public static parse(
    json: IClinicalImpressionInvestigation,
    providedInstance: ClinicalImpressionInvestigation = new ClinicalImpressionInvestigation()
  ): ClinicalImpressionInvestigation {
    const newInstance: ClinicalImpressionInvestigation = BackboneElement.parse(json, providedInstance);
  
    if (json.code) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.item) {
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
  
  public getTypeName(): string {
    return "ClinicalImpressionInvestigation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
