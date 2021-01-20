/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Attachment,
  BackboneElement,
  Coding,
  Extension,
  FhirChoice,
  FhirList,
  IQuestionnaireResponseItemAnswer,
  PrimitiveBoolean,
  PrimitiveDate,
  PrimitiveDateTime,
  PrimitiveDecimal,
  PrimitiveInteger,
  PrimitiveString,
  PrimitiveTime,
  PrimitiveUri,
  Quantity,
  QuestionnaireResponseItem,
  Reference,
  FhirType
} from "../internal";

@FhirType("QuestionnaireResponseItemAnswer", "BackboneElement")
export class QuestionnaireResponseItemAnswer extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "QuestionnaireResponse.Item.Answer";

  static readonly primaryCodePath: string | null = null;

  @FhirChoice("PrimitiveBoolean", "PrimitiveDecimal", "PrimitiveInteger", "PrimitiveDate", "PrimitiveDateTime", "PrimitiveTime", "PrimitiveString", "PrimitiveUri", "Attachment", "Coding", "Quantity", "Reference")
  public value?: PrimitiveBoolean | PrimitiveDecimal | PrimitiveInteger | PrimitiveDate | PrimitiveDateTime | PrimitiveTime | PrimitiveString | PrimitiveUri | Attachment | Coding | Quantity | Reference;

  @FhirList("QuestionnaireResponseItem")
  public item?: Array<QuestionnaireResponseItem>;

  public static parse(
    json: IQuestionnaireResponseItemAnswer,
    providedInstance: QuestionnaireResponseItemAnswer = new QuestionnaireResponseItemAnswer()
  ): QuestionnaireResponseItemAnswer {
    const newInstance: QuestionnaireResponseItemAnswer = BackboneElement.parse(json, providedInstance);
  
    if (json.valueBoolean !== undefined) {
      newInstance.value = PrimitiveBoolean.parsePrimitive(json.valueBoolean, json._valueBoolean);
    }
    if (json.valueDecimal !== undefined) {
      newInstance.value = PrimitiveDecimal.parsePrimitive(json.valueDecimal, json._valueDecimal);
    }
    if (json.valueInteger !== undefined) {
      newInstance.value = PrimitiveInteger.parsePrimitive(json.valueInteger, json._valueInteger);
    }
    if (json.valueDate !== undefined) {
      newInstance.value = PrimitiveDate.parsePrimitive(json.valueDate, json._valueDate);
    }
    if (json.valueDateTime !== undefined) {
      newInstance.value = PrimitiveDateTime.parsePrimitive(json.valueDateTime, json._valueDateTime);
    }
    if (json.valueTime !== undefined) {
      newInstance.value = PrimitiveTime.parsePrimitive(json.valueTime, json._valueTime);
    }
    if (json.valueString !== undefined) {
      newInstance.value = PrimitiveString.parsePrimitive(json.valueString, json._valueString);
    }
    if (json.valueUri !== undefined) {
      newInstance.value = PrimitiveUri.parsePrimitive(json.valueUri, json._valueUri);
    }
    if (json.valueAttachment !== undefined) {
      newInstance.value = Attachment.parse(json.valueAttachment);
    }
    if (json.valueCoding !== undefined) {
      newInstance.value = Coding.parse(json.valueCoding);
    }
    if (json.valueQuantity !== undefined) {
      newInstance.value = Quantity.parse(json.valueQuantity);
    }
    if (json.valueReference !== undefined) {
      newInstance.value = Reference.parse(json.valueReference);
    }
    if (json.item !== undefined) {
      newInstance.item = json.item.map((x) => QuestionnaireResponseItem.parse(x));
    }
    return newInstance;
  }

  public static isQuestionnaireResponseItemAnswer(input?: unknown): input is QuestionnaireResponseItemAnswer {
    const castInput = input as QuestionnaireResponseItemAnswer;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "QuestionnaireResponseItemAnswer";
  }

  public toJSON(): IQuestionnaireResponseItemAnswer {
    const result: IQuestionnaireResponseItemAnswer = super.toJSON();

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

    if (this.item) {
      result.item = this.item.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): QuestionnaireResponseItemAnswer {
    return QuestionnaireResponseItemAnswer.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "QuestionnaireResponseItemAnswer";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
