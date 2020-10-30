/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  ExplanationOfBenefitAddItemDetailSubDetail,
  ExplanationOfBenefitItemAdjudication,
  Extension,
  IExplanationOfBenefitAddItemDetail,
  Money,
  PrimitiveDecimal,
  PrimitivePositiveInt,
  SimpleQuantity,
  FieldMetadata
} from "../internal";

export class ExplanationOfBenefitAddItemDetail extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefit.AddItem.Detail";
  
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
      fieldType: [ExplanationOfBenefitItemAdjudication],
      isArray: true
    }, {
      fieldName: "subDetail",
      fieldType: [ExplanationOfBenefitAddItemDetailSubDetail],
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

  public adjudication?: Array<ExplanationOfBenefitItemAdjudication>;

  public subDetail?: Array<ExplanationOfBenefitAddItemDetailSubDetail>;

  public static parse(
    json: IExplanationOfBenefitAddItemDetail,
    providedInstance: ExplanationOfBenefitAddItemDetail = new ExplanationOfBenefitAddItemDetail()
  ): ExplanationOfBenefitAddItemDetail {
    const newInstance: ExplanationOfBenefitAddItemDetail = BackboneElement.parse(json, providedInstance);
  
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
      newInstance.adjudication = json.adjudication.map((x) => ExplanationOfBenefitItemAdjudication.parse(x));
    }
    if (json.subDetail !== undefined) {
      newInstance.subDetail = json.subDetail.map((x) => ExplanationOfBenefitAddItemDetailSubDetail.parse(x));
    }
    return newInstance;
  }

  public static isExplanationOfBenefitAddItemDetail(input?: unknown): input is ExplanationOfBenefitAddItemDetail {
    const castInput = input as ExplanationOfBenefitAddItemDetail;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExplanationOfBenefitAddItemDetail";
  }

  public toJSON(): IExplanationOfBenefitAddItemDetail {
    const result: IExplanationOfBenefitAddItemDetail = super.toJSON();

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

    if (this.subDetail) {
      result.subDetail = this.subDetail.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ExplanationOfBenefitAddItemDetail {
    return ExplanationOfBenefitAddItemDetail.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExplanationOfBenefitAddItemDetail";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
