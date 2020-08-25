/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Attachment,
  BackboneElement,
  Coding,
  Extension,
  IContractTermOfferAnswer,
  PrimitiveBoolean,
  PrimitiveDate,
  PrimitiveDateTime,
  PrimitiveDecimal,
  PrimitiveInteger,
  PrimitiveString,
  PrimitiveTime,
  PrimitiveUri,
  Quantity,
  Reference,
} from "../internal";

export class ContractTermOfferAnswer extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Contract.Term.Offer.Answer";

  public value?: PrimitiveBoolean | PrimitiveDecimal | PrimitiveInteger | PrimitiveDate | PrimitiveDateTime | PrimitiveTime | PrimitiveString | PrimitiveUri | Attachment | Coding | Quantity | Reference;

  public static parse(
    json: IContractTermOfferAnswer,
    providedInstance: ContractTermOfferAnswer = new ContractTermOfferAnswer()
  ): ContractTermOfferAnswer {
    const newInstance: ContractTermOfferAnswer = BackboneElement.parse(json, providedInstance);
  
    if (json.valueBoolean) {
      newInstance.value = PrimitiveBoolean.parsePrimitive(json.valueBoolean, json._valueBoolean);
    }
    if (json.valueDecimal) {
      newInstance.value = PrimitiveDecimal.parsePrimitive(json.valueDecimal, json._valueDecimal);
    }
    if (json.valueInteger) {
      newInstance.value = PrimitiveInteger.parsePrimitive(json.valueInteger, json._valueInteger);
    }
    if (json.valueDate) {
      newInstance.value = PrimitiveDate.parsePrimitive(json.valueDate, json._valueDate);
    }
    if (json.valueDateTime) {
      newInstance.value = PrimitiveDateTime.parsePrimitive(json.valueDateTime, json._valueDateTime);
    }
    if (json.valueTime) {
      newInstance.value = PrimitiveTime.parsePrimitive(json.valueTime, json._valueTime);
    }
    if (json.valueString) {
      newInstance.value = PrimitiveString.parsePrimitive(json.valueString, json._valueString);
    }
    if (json.valueUri) {
      newInstance.value = PrimitiveUri.parsePrimitive(json.valueUri, json._valueUri);
    }
    if (json.valueAttachment) {
      newInstance.value = Attachment.parse(json.valueAttachment);
    }
    if (json.valueCoding) {
      newInstance.value = Coding.parse(json.valueCoding);
    }
    if (json.valueQuantity) {
      newInstance.value = Quantity.parse(json.valueQuantity);
    }
    if (json.valueReference) {
      newInstance.value = Reference.parse(json.valueReference);
    }
    return newInstance;
  }

  public static isContractTermOfferAnswer(input?: unknown): input is ContractTermOfferAnswer {
    const castInput = input as ContractTermOfferAnswer;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ContractTermOfferAnswer";
  }

  public toJSON(): IContractTermOfferAnswer {
    const result: IContractTermOfferAnswer = super.toJSON();

    if (this.value && PrimitiveBoolean.isPrimitiveBoolean(this.value)) {
      result.valueBoolean = this.value.value;
      result._valueBoolean = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveDecimal.isPrimitiveDecimal(this.value)) {
      result.valueDecimal = this.value.value;
      result._valueDecimal = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveInteger.isPrimitiveInteger(this.value)) {
      result.valueInteger = this.value.value;
      result._valueInteger = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveDate.isPrimitiveDate(this.value)) {
      result.valueDate = this.value.value;
      result._valueDate = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveDateTime.isPrimitiveDateTime(this.value)) {
      result.valueDateTime = this.value.value;
      result._valueDateTime = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveTime.isPrimitiveTime(this.value)) {
      result.valueTime = this.value.value;
      result._valueTime = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveString.isPrimitiveString(this.value)) {
      result.valueString = this.value.value;
      result._valueString = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveUri.isPrimitiveUri(this.value)) {
      result.valueUri = this.value.value;
      result._valueUri = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && Attachment.isAttachment(this.value)) {
      result.valueAttachment = this.value.toJSON();
    }

    if (this.value && Coding.isCoding(this.value)) {
      result.valueCoding = this.value.toJSON();
    }

    if (this.value && Quantity.isQuantity(this.value)) {
      result.valueQuantity = this.value.toJSON();
    }

    if (this.value && Reference.isReference(this.value)) {
      result.valueReference = this.value.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ContractTermOfferAnswer";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
