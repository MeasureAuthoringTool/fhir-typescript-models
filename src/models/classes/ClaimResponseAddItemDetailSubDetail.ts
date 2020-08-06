/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  ClaimResponseItemAdjudication,
  CodeableConcept,
  Extension,
  IClaimResponseAddItemDetailSubDetail,
  Money,
  PrimitiveDecimal,
  PrimitivePositiveInt,
  SimpleQuantity,
} from "../internal";

export class ClaimResponseAddItemDetailSubDetail extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ClaimResponse.AddItem.Detail.SubDetail";

  public productOrService?: CodeableConcept;

  public modifier?: Array<CodeableConcept>;

  public quantity?: SimpleQuantity;

  public unitPrice?: Money;

  public factor?: PrimitiveDecimal;

  public net?: Money;

  public noteNumber?: Array<PrimitivePositiveInt>;

  public adjudication?: Array<ClaimResponseItemAdjudication>;

  public static parse(
    json: IClaimResponseAddItemDetailSubDetail,
    providedInstance: ClaimResponseAddItemDetailSubDetail = new ClaimResponseAddItemDetailSubDetail()
  ): ClaimResponseAddItemDetailSubDetail {
    const newInstance: ClaimResponseAddItemDetailSubDetail = BackboneElement.parse(json, providedInstance);
  
    if (json.productOrService) {
      newInstance.productOrService = CodeableConcept.parse(json.productOrService);
    }
    if (json.modifier) {
      newInstance.modifier = json.modifier.map((x) => CodeableConcept.parse(x));
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
    if (json.noteNumber) {
      newInstance.noteNumber = json.noteNumber.map((x, i) => {
        const ext = json._noteNumber && json._noteNumber[i];
        return PrimitivePositiveInt.parsePrimitive(x, ext);
      });
    }
    if (json.adjudication) {
      newInstance.adjudication = json.adjudication.map((x) => ClaimResponseItemAdjudication.parse(x));
    }
    return newInstance;
  }

  public static isClaimResponseAddItemDetailSubDetail(input?: unknown): input is ClaimResponseAddItemDetailSubDetail {
    const castInput = input as ClaimResponseAddItemDetailSubDetail;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClaimResponseAddItemDetailSubDetail";
  }

  public toJSON(): IClaimResponseAddItemDetailSubDetail {
    const result: IClaimResponseAddItemDetailSubDetail = super.toJSON();

    if (this.productOrService) {
      result.productOrService = this.productOrService.toJSON();
    }

    if (this.modifier) {
      result.modifier = this.modifier.map((x) => x.toJSON());
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
    return "ClaimResponseAddItemDetailSubDetail";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
