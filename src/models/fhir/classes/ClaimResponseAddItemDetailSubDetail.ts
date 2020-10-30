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
  FieldMetadata
} from "../internal";

export class ClaimResponseAddItemDetailSubDetail extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ClaimResponse.AddItem.Detail.SubDetail";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "productOrService",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "modifier",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "quantity",
      fieldType: [SimpleQuantity],
      isArray: false
    }, {
      fieldName: "unitPrice",
      fieldType: [Money],
      isArray: false
    }, {
      fieldName: "factor",
      fieldType: [PrimitiveDecimal],
      isArray: false
    }, {
      fieldName: "net",
      fieldType: [Money],
      isArray: false
    }, {
      fieldName: "noteNumber",
      fieldType: [PrimitivePositiveInt],
      isArray: true
    }, {
      fieldName: "adjudication",
      fieldType: [ClaimResponseItemAdjudication],
      isArray: true
    }];
  }

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
  
    if (json.productOrService !== undefined) {
      newInstance.productOrService = CodeableConcept.parse(json.productOrService);
    }
    if (json.modifier !== undefined) {
      newInstance.modifier = json.modifier.map((x) => CodeableConcept.parse(x));
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
    if (json.noteNumber !== undefined) {
      newInstance.noteNumber = json.noteNumber.map((x, i) => {
        const ext = json._noteNumber && json._noteNumber[i];
        return PrimitivePositiveInt.parsePrimitive(x, ext);
      });
    }
    if (json.adjudication !== undefined) {
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

  public clone(): ClaimResponseAddItemDetailSubDetail {
    return ClaimResponseAddItemDetailSubDetail.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ClaimResponseAddItemDetailSubDetail";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
