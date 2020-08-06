/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  CoverageEligibilityRequestItemDiagnosis,
  Extension,
  ICoverageEligibilityRequestItem,
  Money,
  PrimitivePositiveInt,
  Reference,
  SimpleQuantity,
} from "../internal";

export class CoverageEligibilityRequestItem extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CoverageEligibilityRequest.Item";

  public supportingInfoSequence?: Array<PrimitivePositiveInt>;

  public category?: CodeableConcept;

  public productOrService?: CodeableConcept;

  public modifier?: Array<CodeableConcept>;

  public provider?: Reference;

  public quantity?: SimpleQuantity;

  public unitPrice?: Money;

  public facility?: Reference;

  public diagnosis?: Array<CoverageEligibilityRequestItemDiagnosis>;

  public detail?: Array<Reference>;

  public static parse(
    json: ICoverageEligibilityRequestItem,
    providedInstance: CoverageEligibilityRequestItem = new CoverageEligibilityRequestItem()
  ): CoverageEligibilityRequestItem {
    const newInstance: CoverageEligibilityRequestItem = BackboneElement.parse(json, providedInstance);
  
    if (json.supportingInfoSequence) {
      newInstance.supportingInfoSequence = json.supportingInfoSequence.map((x, i) => {
        const ext = json._supportingInfoSequence && json._supportingInfoSequence[i];
        return PrimitivePositiveInt.parsePrimitive(x, ext);
      });
    }
    if (json.category) {
      newInstance.category = CodeableConcept.parse(json.category);
    }
    if (json.productOrService) {
      newInstance.productOrService = CodeableConcept.parse(json.productOrService);
    }
    if (json.modifier) {
      newInstance.modifier = json.modifier.map((x) => CodeableConcept.parse(x));
    }
    if (json.provider) {
      newInstance.provider = Reference.parse(json.provider);
    }
    if (json.quantity) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    if (json.unitPrice) {
      newInstance.unitPrice = Money.parse(json.unitPrice);
    }
    if (json.facility) {
      newInstance.facility = Reference.parse(json.facility);
    }
    if (json.diagnosis) {
      newInstance.diagnosis = json.diagnosis.map((x) => CoverageEligibilityRequestItemDiagnosis.parse(x));
    }
    if (json.detail) {
      newInstance.detail = json.detail.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isCoverageEligibilityRequestItem(input?: unknown): input is CoverageEligibilityRequestItem {
    const castInput = input as CoverageEligibilityRequestItem;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CoverageEligibilityRequestItem";
  }

  public toJSON(): ICoverageEligibilityRequestItem {
    const result: ICoverageEligibilityRequestItem = super.toJSON();

    if (this.supportingInfoSequence) {
      result.supportingInfoSequence = this.supportingInfoSequence.filter(x => !!x).map(x => x.value) as typeof result.supportingInfoSequence;
      result._supportingInfoSequence = Extension.serializePrimitiveExtensionArray(this.supportingInfoSequence);
    }

    if (this.category) {
      result.category = this.category.toJSON();
    }

    if (this.productOrService) {
      result.productOrService = this.productOrService.toJSON();
    }

    if (this.modifier) {
      result.modifier = this.modifier.map((x) => x.toJSON());
    }

    if (this.provider) {
      result.provider = this.provider.toJSON();
    }

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    if (this.unitPrice) {
      result.unitPrice = this.unitPrice.toJSON();
    }

    if (this.facility) {
      result.facility = this.facility.toJSON();
    }

    if (this.diagnosis) {
      result.diagnosis = this.diagnosis.map((x) => x.toJSON());
    }

    if (this.detail) {
      result.detail = this.detail.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "CoverageEligibilityRequestItem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
