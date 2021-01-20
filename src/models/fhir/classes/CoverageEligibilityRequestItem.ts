/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  CoverageEligibilityRequestItemDiagnosis,
  Extension,
  FhirField,
  FhirList,
  ICoverageEligibilityRequestItem,
  Money,
  PrimitivePositiveInt,
  Reference,
  SimpleQuantity,
  FhirType
} from "../internal";

@FhirType("CoverageEligibilityRequestItem", "BackboneElement")
export class CoverageEligibilityRequestItem extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CoverageEligibilityRequest.Item";

  static readonly primaryCodePath: string | null = null;

  @FhirList("PrimitivePositiveInt")
  public supportingInfoSequence?: Array<PrimitivePositiveInt>;

  @FhirField("CodeableConcept")
  public category?: CodeableConcept;

  @FhirField("CodeableConcept")
  public productOrService?: CodeableConcept;

  @FhirList("CodeableConcept")
  public modifier?: Array<CodeableConcept>;

  @FhirField("Reference")
  public provider?: Reference;

  @FhirField("SimpleQuantity")
  public quantity?: SimpleQuantity;

  @FhirField("Money")
  public unitPrice?: Money;

  @FhirField("Reference")
  public facility?: Reference;

  @FhirList("CoverageEligibilityRequestItemDiagnosis")
  public diagnosis?: Array<CoverageEligibilityRequestItemDiagnosis>;

  @FhirList("Reference")
  public detail?: Array<Reference>;

  public static parse(
    json: ICoverageEligibilityRequestItem,
    providedInstance: CoverageEligibilityRequestItem = new CoverageEligibilityRequestItem()
  ): CoverageEligibilityRequestItem {
    const newInstance: CoverageEligibilityRequestItem = BackboneElement.parse(json, providedInstance);
  
    if (json.supportingInfoSequence !== undefined) {
      newInstance.supportingInfoSequence = json.supportingInfoSequence.map((x, i) => PrimitivePositiveInt.parsePrimitive(x, json._supportingInfoSequence?.[i]));
    }
    if (json.category !== undefined) {
      newInstance.category = CodeableConcept.parse(json.category);
    }
    if (json.productOrService !== undefined) {
      newInstance.productOrService = CodeableConcept.parse(json.productOrService);
    }
    if (json.modifier !== undefined) {
      newInstance.modifier = json.modifier.map((x) => CodeableConcept.parse(x));
    }
    if (json.provider !== undefined) {
      newInstance.provider = Reference.parse(json.provider);
    }
    if (json.quantity !== undefined) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    if (json.unitPrice !== undefined) {
      newInstance.unitPrice = Money.parse(json.unitPrice);
    }
    if (json.facility !== undefined) {
      newInstance.facility = Reference.parse(json.facility);
    }
    if (json.diagnosis !== undefined) {
      newInstance.diagnosis = json.diagnosis.map((x) => CoverageEligibilityRequestItemDiagnosis.parse(x));
    }
    if (json.detail !== undefined) {
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

  public clone(): CoverageEligibilityRequestItem {
    return CoverageEligibilityRequestItem.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CoverageEligibilityRequestItem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
