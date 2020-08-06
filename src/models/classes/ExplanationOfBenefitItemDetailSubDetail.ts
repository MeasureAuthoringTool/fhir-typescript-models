/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  ExplanationOfBenefitItemAdjudication,
  Extension,
  IExplanationOfBenefitItemDetailSubDetail,
  Money,
  PrimitiveDecimal,
  PrimitivePositiveInt,
  Reference,
  SimpleQuantity,
} from "../internal";

export class ExplanationOfBenefitItemDetailSubDetail extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefit.Item.Detail.SubDetail";

  public sequence?: PrimitivePositiveInt;

  public revenue?: CodeableConcept;

  public category?: CodeableConcept;

  public productOrService?: CodeableConcept;

  public modifier?: Array<CodeableConcept>;

  public programCode?: Array<CodeableConcept>;

  public quantity?: SimpleQuantity;

  public unitPrice?: Money;

  public factor?: PrimitiveDecimal;

  public net?: Money;

  public udi?: Array<Reference>;

  public noteNumber?: Array<PrimitivePositiveInt>;

  public adjudication?: Array<ExplanationOfBenefitItemAdjudication>;

  public static parse(
    json: IExplanationOfBenefitItemDetailSubDetail,
    providedInstance: ExplanationOfBenefitItemDetailSubDetail = new ExplanationOfBenefitItemDetailSubDetail()
  ): ExplanationOfBenefitItemDetailSubDetail {
    const newInstance: ExplanationOfBenefitItemDetailSubDetail = BackboneElement.parse(json, providedInstance);
  
    if (json.sequence) {
      newInstance.sequence = PrimitivePositiveInt.parsePrimitive(json.sequence, json._sequence);
    }
    if (json.revenue) {
      newInstance.revenue = CodeableConcept.parse(json.revenue);
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
    if (json.programCode) {
      newInstance.programCode = json.programCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.quantity) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    if (json.unitPrice) {
      newInstance.unitPrice = Money.parse(json.unitPrice);
    }
    if (json.factor) {
      newInstance.factor = PrimitiveDecimal.parsePrimitive(json.factor, json._factor);
    }
    if (json.net) {
      newInstance.net = Money.parse(json.net);
    }
    if (json.udi) {
      newInstance.udi = json.udi.map((x) => Reference.parse(x));
    }
    if (json.noteNumber) {
      newInstance.noteNumber = json.noteNumber.map((x, i) => {
        const ext = json._noteNumber && json._noteNumber[i];
        return PrimitivePositiveInt.parsePrimitive(x, ext);
      });
    }
    if (json.adjudication) {
      newInstance.adjudication = json.adjudication.map((x) => ExplanationOfBenefitItemAdjudication.parse(x));
    }
    return newInstance;
  }

  public static isExplanationOfBenefitItemDetailSubDetail(input?: unknown): input is ExplanationOfBenefitItemDetailSubDetail {
    const castInput = input as ExplanationOfBenefitItemDetailSubDetail;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExplanationOfBenefitItemDetailSubDetail";
  }

  public toJSON(): IExplanationOfBenefitItemDetailSubDetail {
    const result: IExplanationOfBenefitItemDetailSubDetail = super.toJSON();

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

    return result;
  }
  
  public getTypeName(): string {
    return "ExplanationOfBenefitItemDetailSubDetail";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
