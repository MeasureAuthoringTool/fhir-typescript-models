/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  ExplanationOfBenefitItemAdjudication,
  ExplanationOfBenefitItemDetailSubDetail,
  Extension,
  FhirField,
  FhirList,
  IExplanationOfBenefitItemDetail,
  Money,
  PrimitiveDecimal,
  PrimitivePositiveInt,
  Reference,
  SimpleQuantity,
  FhirType
} from "../internal";

@FhirType("ExplanationOfBenefitItemDetail", "BackboneElement")
export class ExplanationOfBenefitItemDetail extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefit.Item.Detail";

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

  @FhirList("PrimitivePositiveInt")
  public noteNumber?: Array<PrimitivePositiveInt>;

  @FhirList("ExplanationOfBenefitItemAdjudication")
  public adjudication?: Array<ExplanationOfBenefitItemAdjudication>;

  @FhirList("ExplanationOfBenefitItemDetailSubDetail")
  public subDetail?: Array<ExplanationOfBenefitItemDetailSubDetail>;

  public static parse(
    json: IExplanationOfBenefitItemDetail,
    providedInstance: ExplanationOfBenefitItemDetail = new ExplanationOfBenefitItemDetail()
  ): ExplanationOfBenefitItemDetail {
    const newInstance: ExplanationOfBenefitItemDetail = BackboneElement.parse(json, providedInstance);
  
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
    if (json.noteNumber !== undefined) {
      newInstance.noteNumber = json.noteNumber.map((x, i) => PrimitivePositiveInt.parsePrimitive(x, json._noteNumber?.[i]));
    }
    if (json.adjudication !== undefined) {
      newInstance.adjudication = json.adjudication.map((x) => ExplanationOfBenefitItemAdjudication.parse(x));
    }
    if (json.subDetail !== undefined) {
      newInstance.subDetail = json.subDetail.map((x) => ExplanationOfBenefitItemDetailSubDetail.parse(x));
    }
    return newInstance;
  }

  public static isExplanationOfBenefitItemDetail(input?: unknown): input is ExplanationOfBenefitItemDetail {
    const castInput = input as ExplanationOfBenefitItemDetail;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExplanationOfBenefitItemDetail";
  }

  public toJSON(): IExplanationOfBenefitItemDetail {
    const result: IExplanationOfBenefitItemDetail = super.toJSON();

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

    if (this.noteNumber) {
      result.noteNumber = this.noteNumber.filter(x => !!x).map(x => x.value) as typeof result.noteNumber;
      result._noteNumber = Extension.serializePrimitiveExtensionArray(this.noteNumber);
    }

    if (this.adjudication) {
      result.adjudication = this.adjudication.map((x) => x.toJSON());
    }

    if (this.subDetail) {
      result.subDetail = this.subDetail.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ExplanationOfBenefitItemDetail {
    return ExplanationOfBenefitItemDetail.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExplanationOfBenefitItemDetail";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
