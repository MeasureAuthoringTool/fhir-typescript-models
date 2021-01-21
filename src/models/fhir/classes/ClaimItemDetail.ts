/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  ClaimItemDetailSubDetail,
  CodeableConcept,
  Extension,
  FhirField,
  FhirList,
  IClaimItemDetail,
  Money,
  PrimitiveDecimal,
  PrimitivePositiveInt,
  Reference,
  SimpleQuantity,
  FhirType
} from "../internal";

@FhirType("ClaimItemDetail", "BackboneElement")
export class ClaimItemDetail extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Claim.Item.Detail";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitivePositiveInt")
  public sequence?: PrimitivePositiveInt;

  @FhirField("CodeableConcept")
  public revenue?: CodeableConcept;

  @FhirField("CodeableConcept")
  public category?: CodeableConcept;

  @FhirField("CodeableConcept")
  public productOrService?: CodeableConcept;

  @FhirList("CodeableConcept")
  public modifier?: Array<CodeableConcept>;

  @FhirList("CodeableConcept")
  public programCode?: Array<CodeableConcept>;

  @FhirField("SimpleQuantity")
  public quantity?: SimpleQuantity;

  @FhirField("Money")
  public unitPrice?: Money;

  @FhirField("PrimitiveDecimal")
  public factor?: PrimitiveDecimal;

  @FhirField("Money")
  public net?: Money;

  @FhirList("Reference")
  public udi?: Array<Reference>;

  @FhirList("ClaimItemDetailSubDetail")
  public subDetail?: Array<ClaimItemDetailSubDetail>;

  public static parse(
    json: IClaimItemDetail,
    providedInstance: ClaimItemDetail = new ClaimItemDetail()
  ): ClaimItemDetail {
    const newInstance: ClaimItemDetail = BackboneElement.parse(json, providedInstance);
  
    if (json.sequence !== undefined) {
      newInstance.sequence = PrimitivePositiveInt.parsePrimitive(json.sequence, json._sequence);
    }
    if (json.revenue !== undefined) {
      newInstance.revenue = CodeableConcept.parse(json.revenue);
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
    if (json.programCode !== undefined) {
      newInstance.programCode = json.programCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.quantity !== undefined) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    if (json.unitPrice !== undefined) {
      newInstance.unitPrice = Money.parse(json.unitPrice);
    }
    if (json.factor !== undefined) {
      newInstance.factor = PrimitiveDecimal.parsePrimitive(json.factor, json._factor);
    }
    if (json.net !== undefined) {
      newInstance.net = Money.parse(json.net);
    }
    if (json.udi !== undefined) {
      newInstance.udi = json.udi.map((x) => Reference.parse(x));
    }
    if (json.subDetail !== undefined) {
      newInstance.subDetail = json.subDetail.map((x) => ClaimItemDetailSubDetail.parse(x));
    }
    return newInstance;
  }

  public static isClaimItemDetail(input?: unknown): input is ClaimItemDetail {
    const castInput = input as ClaimItemDetail;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClaimItemDetail";
  }

  public toJSON(): IClaimItemDetail {
    const result: IClaimItemDetail = super.toJSON();

    if (this.sequence) {
      result.sequence = this.sequence.value;
      result._sequence = Extension.serializePrimitiveExtension(this.sequence);
    }

    if (this.revenue) {
      result.revenue = this.revenue.toJSON();
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

    if (this.programCode) {
      result.programCode = this.programCode.map((x) => x.toJSON());
    }

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    if (this.unitPrice) {
      result.unitPrice = this.unitPrice.toJSON();
    }

    if (this.factor) {
      result.factor = this.factor.value;
      result._factor = Extension.serializePrimitiveExtension(this.factor);
    }

    if (this.net) {
      result.net = this.net.toJSON();
    }

    if (this.udi) {
      result.udi = this.udi.map((x) => x.toJSON());
    }

    if (this.subDetail) {
      result.subDetail = this.subDetail.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ClaimItemDetail {
    return ClaimItemDetail.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ClaimItemDetail";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
