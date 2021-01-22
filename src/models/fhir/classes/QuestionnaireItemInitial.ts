/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Attachment,
  BackboneElement,
  Coding,
  Extension,
  FhirChoice,
  IQuestionnaireItemInitial,
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
  FhirType
} from "../internal";

@FhirType("QuestionnaireItemInitial", "BackboneElement")
export class QuestionnaireItemInitial extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Questionnaire.Item.Initial";

  static readonly primaryCodePath: string | null = null;

  @FhirChoice("PrimitiveBoolean", "PrimitiveDecimal", "PrimitiveInteger", "PrimitiveDate", "PrimitiveDateTime", "PrimitiveTime", "PrimitiveString", "PrimitiveUri", "Attachment", "Coding", "Quantity", "Reference")
  public value?: PrimitiveBoolean | PrimitiveDecimal | PrimitiveInteger | PrimitiveDate | PrimitiveDateTime | PrimitiveTime | PrimitiveString | PrimitiveUri | Attachment | Coding | Quantity | Reference;

  public static parse(
    json: IQuestionnaireItemInitial,
    providedInstance: QuestionnaireItemInitial = new QuestionnaireItemInitial()
  ): QuestionnaireItemInitial {
    const newInstance: QuestionnaireItemInitial = BackboneElement.parse(json, providedInstance);
  
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
    return newInstance;
  }

  public static isQuestionnaireItemInitial(input?: unknown): input is QuestionnaireItemInitial {
    const castInput = input as QuestionnaireItemInitial;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "QuestionnaireItemInitial";
  }

  public toJSON(): IQuestionnaireItemInitial {
    const result: IQuestionnaireItemInitial = super.toJSON();

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

  public clone(): QuestionnaireItemInitial {
    return QuestionnaireItemInitial.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "QuestionnaireItemInitial";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
