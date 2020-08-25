/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Address,
  BackboneElement,
  ClaimResponseAddItemDetail,
  ClaimResponseItemAdjudication,
  CodeableConcept,
  Extension,
  IClaimResponseAddItem,
  Money,
  Period,
  PrimitiveDate,
  PrimitiveDecimal,
  PrimitivePositiveInt,
  Reference,
  SimpleQuantity,
} from "../internal";

export class ClaimResponseAddItem extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ClaimResponse.AddItem";

  public itemSequence?: Array<PrimitivePositiveInt>;

  public detailSequence?: Array<PrimitivePositiveInt>;

  public subdetailSequence?: Array<PrimitivePositiveInt>;

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

  public adjudication?: Array<ClaimResponseItemAdjudication>;

  public detail?: Array<ClaimResponseAddItemDetail>;

  public static parse(
    json: IClaimResponseAddItem,
    providedInstance: ClaimResponseAddItem = new ClaimResponseAddItem()
  ): ClaimResponseAddItem {
    const newInstance: ClaimResponseAddItem = BackboneElement.parse(json, providedInstance);
  
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
    if (json.subdetailSequence !== undefined) {
      newInstance.subdetailSequence = json.subdetailSequence.map((x, i) => {
        const ext = json._subdetailSequence && json._subdetailSequence[i];
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
      newInstance.adjudication = json.adjudication.map((x) => ClaimResponseItemAdjudication.parse(x));
    }
    if (json.detail !== undefined) {
      newInstance.detail = json.detail.map((x) => ClaimResponseAddItemDetail.parse(x));
    }
    return newInstance;
  }

  public static isClaimResponseAddItem(input?: unknown): input is ClaimResponseAddItem {
    const castInput = input as ClaimResponseAddItem;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClaimResponseAddItem";
  }

  public toJSON(): IClaimResponseAddItem {
    const result: IClaimResponseAddItem = super.toJSON();

    if (this.itemSequence) {
      result.itemSequence = this.itemSequence.filter(x => !!x).map(x => x.value) as typeof result.itemSequence;
      result._itemSequence = Extension.serializePrimitiveExtensionArray(this.itemSequence);
    }

    if (this.detailSequence) {
      result.detailSequence = this.detailSequence.filter(x => !!x).map(x => x.value) as typeof result.detailSequence;
      result._detailSequence = Extension.serializePrimitiveExtensionArray(this.detailSequence);
    }

    if (this.subdetailSequence) {
      result.subdetailSequence = this.subdetailSequence.filter(x => !!x).map(x => x.value) as typeof result.subdetailSequence;
      result._subdetailSequence = Extension.serializePrimitiveExtensionArray(this.subdetailSequence);
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

  public clone(): ClaimResponseAddItem {
    return ClaimResponseAddItem.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ClaimResponseAddItem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
