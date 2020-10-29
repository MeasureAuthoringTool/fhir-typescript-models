/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Address,
  BackboneElement,
  CodeableConcept,
  ExplanationOfBenefitAddItemDetail,
  ExplanationOfBenefitItemAdjudication,
  Extension,
  IExplanationOfBenefitAddItem,
  Money,
  Period,
  PrimitiveDate,
  PrimitiveDecimal,
  PrimitivePositiveInt,
  Reference,
  SimpleQuantity,
  FieldMetadata
} from "../internal";

export class ExplanationOfBenefitAddItem extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefit.AddItem";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "itemSequence",
      fieldType: [PrimitivePositiveInt],
      isArray: true
    }, {
      fieldName: "detailSequence",
      fieldType: [PrimitivePositiveInt],
      isArray: true
    }, {
      fieldName: "subDetailSequence",
      fieldType: [PrimitivePositiveInt],
      isArray: true
    }, {
      fieldName: "provider",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "productOrService",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "modifier",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "programCode",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "serviced",
      fieldType: [PrimitiveDate, Period],
      isArray: false
    }, {
      fieldName: "location",
      fieldType: [CodeableConcept, Address, Reference],
      isArray: false
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
      fieldName: "bodySite",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "subSite",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "noteNumber",
      fieldType: [PrimitivePositiveInt],
      isArray: true
    }, {
      fieldName: "adjudication",
      fieldType: [ExplanationOfBenefitItemAdjudication],
      isArray: true
    }, {
      fieldName: "detail",
      fieldType: [ExplanationOfBenefitAddItemDetail],
      isArray: true
    }];
  }

  public itemSequence?: Array<PrimitivePositiveInt>;

  public detailSequence?: Array<PrimitivePositiveInt>;

  public subDetailSequence?: Array<PrimitivePositiveInt>;

  public provider?: Array<Reference>;

  public productOrService?: CodeableConcept;

  public modifier?: Array<CodeableConcept>;

  public programCode?: Array<CodeableConcept>;

  public serviced?: PrimitiveDate | Period;

  public location?: CodeableConcept | Address | Reference;

  public quantity?: SimpleQuantity;

  public unitPrice?: Money;

  public factor?: PrimitiveDecimal;

  public net?: Money;

  public bodySite?: CodeableConcept;

  public subSite?: Array<CodeableConcept>;

  public noteNumber?: Array<PrimitivePositiveInt>;

  public adjudication?: Array<ExplanationOfBenefitItemAdjudication>;

  public detail?: Array<ExplanationOfBenefitAddItemDetail>;

  public static parse(
    json: IExplanationOfBenefitAddItem,
    providedInstance: ExplanationOfBenefitAddItem = new ExplanationOfBenefitAddItem()
  ): ExplanationOfBenefitAddItem {
    const newInstance: ExplanationOfBenefitAddItem = BackboneElement.parse(json, providedInstance);
  
    if (json.itemSequence !== undefined) {
      newInstance.itemSequence = json.itemSequence.map((x, i) => {
        const ext = json._itemSequence && json._itemSequence[i];
        return PrimitivePositiveInt.parsePrimitive(x, ext);
      });
    }
    if (json.detailSequence !== undefined) {
      newInstance.detailSequence = json.detailSequence.map((x, i) => {
        const ext = json._detailSequence && json._detailSequence[i];
        return PrimitivePositiveInt.parsePrimitive(x, ext);
      });
    }
    if (json.subDetailSequence !== undefined) {
      newInstance.subDetailSequence = json.subDetailSequence.map((x, i) => {
        const ext = json._subDetailSequence && json._subDetailSequence[i];
        return PrimitivePositiveInt.parsePrimitive(x, ext);
      });
    }
    if (json.provider !== undefined) {
      newInstance.provider = json.provider.map((x) => Reference.parse(x));
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
    if (json.servicedDate !== undefined) {
      newInstance.serviced = PrimitiveDate.parsePrimitive(json.servicedDate, json._servicedDate);
    }
    if (json.servicedPeriod !== undefined) {
      newInstance.serviced = Period.parse(json.servicedPeriod);
    }
    if (json.locationCodeableConcept !== undefined) {
      newInstance.location = CodeableConcept.parse(json.locationCodeableConcept);
    }
    if (json.locationAddress !== undefined) {
      newInstance.location = Address.parse(json.locationAddress);
    }
    if (json.locationReference !== undefined) {
      newInstance.location = Reference.parse(json.locationReference);
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
    if (json.bodySite !== undefined) {
      newInstance.bodySite = CodeableConcept.parse(json.bodySite);
    }
    if (json.subSite !== undefined) {
      newInstance.subSite = json.subSite.map((x) => CodeableConcept.parse(x));
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
    if (json.detail !== undefined) {
      newInstance.detail = json.detail.map((x) => ExplanationOfBenefitAddItemDetail.parse(x));
    }
    return newInstance;
  }

  public static isExplanationOfBenefitAddItem(input?: unknown): input is ExplanationOfBenefitAddItem {
    const castInput = input as ExplanationOfBenefitAddItem;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExplanationOfBenefitAddItem";
  }

  public toJSON(): IExplanationOfBenefitAddItem {
    const result: IExplanationOfBenefitAddItem = super.toJSON();

    if (this.itemSequence) {
      result.itemSequence = this.itemSequence.filter(x => !!x).map(x => x.value) as typeof result.itemSequence;
      result._itemSequence = Extension.serializePrimitiveExtensionArray(this.itemSequence);
    }

    if (this.detailSequence) {
      result.detailSequence = this.detailSequence.filter(x => !!x).map(x => x.value) as typeof result.detailSequence;
      result._detailSequence = Extension.serializePrimitiveExtensionArray(this.detailSequence);
    }

    if (this.subDetailSequence) {
      result.subDetailSequence = this.subDetailSequence.filter(x => !!x).map(x => x.value) as typeof result.subDetailSequence;
      result._subDetailSequence = Extension.serializePrimitiveExtensionArray(this.subDetailSequence);
    }

    if (this.provider) {
      result.provider = this.provider.map((x) => x.toJSON());
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

    if (this.serviced && PrimitiveDate.isPrimitiveDate(this.serviced)) {
      result.servicedDate = this.serviced.value;
      result._servicedDate = Extension.serializePrimitiveExtension(this.serviced);
    }

    if (this.serviced && Period.isPeriod(this.serviced)) {
      result.servicedPeriod = this.serviced.toJSON();
    }

    if (this.location && CodeableConcept.isCodeableConcept(this.location)) {
      result.locationCodeableConcept = this.location.toJSON();
    }

    if (this.location && Address.isAddress(this.location)) {
      result.locationAddress = this.location.toJSON();
    }

    if (this.location && Reference.isReference(this.location)) {
      result.locationReference = this.location.toJSON();
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

    if (this.bodySite) {
      result.bodySite = this.bodySite.toJSON();
    }

    if (this.subSite) {
      result.subSite = this.subSite.map((x) => x.toJSON());
    }

    if (this.noteNumber) {
      result.noteNumber = this.noteNumber.filter(x => !!x).map(x => x.value) as typeof result.noteNumber;
      result._noteNumber = Extension.serializePrimitiveExtensionArray(this.noteNumber);
    }

    if (this.adjudication) {
      result.adjudication = this.adjudication.map((x) => x.toJSON());
    }

    if (this.detail) {
      result.detail = this.detail.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ExplanationOfBenefitAddItem {
    return ExplanationOfBenefitAddItem.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExplanationOfBenefitAddItem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
