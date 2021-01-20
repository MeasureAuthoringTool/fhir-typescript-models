/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Coding,
  Extension,
  FhirChoice,
  FhirField,
  IQuestionnaireItemEnableWhen,
  PrimitiveBoolean,
  PrimitiveDate,
  PrimitiveDateTime,
  PrimitiveDecimal,
  PrimitiveInteger,
  PrimitiveString,
  PrimitiveTime,
  Quantity,
  QuestionnaireItemOperator,
  Reference,
  FhirType
} from "../internal";

@FhirType("QuestionnaireItemEnableWhen", "BackboneElement")
export class QuestionnaireItemEnableWhen extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Questionnaire.Item.EnableWhen";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public question?: PrimitiveString;

  @FhirField("QuestionnaireItemOperator")
  public operator?: QuestionnaireItemOperator;

  @FhirChoice("PrimitiveBoolean", "PrimitiveDecimal", "PrimitiveInteger", "PrimitiveDate", "PrimitiveDateTime", "PrimitiveTime", "PrimitiveString", "Coding", "Quantity", "Reference")
  public answer?: PrimitiveBoolean | PrimitiveDecimal | PrimitiveInteger | PrimitiveDate | PrimitiveDateTime | PrimitiveTime | PrimitiveString | Coding | Quantity | Reference;

  public static parse(
    json: IQuestionnaireItemEnableWhen,
    providedInstance: QuestionnaireItemEnableWhen = new QuestionnaireItemEnableWhen()
  ): QuestionnaireItemEnableWhen {
    const newInstance: QuestionnaireItemEnableWhen = BackboneElement.parse(json, providedInstance);
  
    if (json.question !== undefined) {
      newInstance.question = PrimitiveString.parsePrimitive(json.question, json._question);
    }
    if (json.operator !== undefined) {
      newInstance.operator = QuestionnaireItemOperator.parsePrimitive(json.operator, json._operator);
    }
    if (json.answerBoolean !== undefined) {
      newInstance.answer = PrimitiveBoolean.parsePrimitive(json.answerBoolean, json._answerBoolean);
    }
    if (json.answerDecimal !== undefined) {
      newInstance.answer = PrimitiveDecimal.parsePrimitive(json.answerDecimal, json._answerDecimal);
    }
    if (json.answerInteger !== undefined) {
      newInstance.answer = PrimitiveInteger.parsePrimitive(json.answerInteger, json._answerInteger);
    }
    if (json.answerDate !== undefined) {
      newInstance.answer = PrimitiveDate.parsePrimitive(json.answerDate, json._answerDate);
    }
    if (json.answerDateTime !== undefined) {
      newInstance.answer = PrimitiveDateTime.parsePrimitive(json.answerDateTime, json._answerDateTime);
    }
    if (json.answerTime !== undefined) {
      newInstance.answer = PrimitiveTime.parsePrimitive(json.answerTime, json._answerTime);
    }
    if (json.answerString !== undefined) {
      newInstance.answer = PrimitiveString.parsePrimitive(json.answerString, json._answerString);
    }
    if (json.answerCoding !== undefined) {
      newInstance.answer = Coding.parse(json.answerCoding);
    }
    if (json.answerQuantity !== undefined) {
      newInstance.answer = Quantity.parse(json.answerQuantity);
    }
    if (json.answerReference !== undefined) {
      newInstance.answer = Reference.parse(json.answerReference);
    }
    return newInstance;
  }

  public static isQuestionnaireItemEnableWhen(input?: unknown): input is QuestionnaireItemEnableWhen {
    const castInput = input as QuestionnaireItemEnableWhen;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "QuestionnaireItemEnableWhen";
  }

  public toJSON(): IQuestionnaireItemEnableWhen {
    const result: IQuestionnaireItemEnableWhen = super.toJSON();

    if (this.question) {
      result.question = this.question.value;
      result._question = Extension.serializePrimitiveExtension(this.question);
    }

    if (this.operator) {
      result.operator = this.operator.value;
      result._operator = Extension.serializePrimitiveExtension(this.operator);
    }

    if (this.answer && PrimitiveBoolean.isPrimitiveBoolean(this.answer)) {
      result.answerBoolean = this.answer.value;
      result._answerBoolean = Extension.serializePrimitiveExtension(this.answer);
    }

    if (this.answer && PrimitiveDecimal.isPrimitiveDecimal(this.answer)) {
      result.answerDecimal = this.answer.value;
      result._answerDecimal = Extension.serializePrimitiveExtension(this.answer);
    }

    if (this.answer && PrimitiveInteger.isPrimitiveInteger(this.answer)) {
      result.answerInteger = this.answer.value;
      result._answerInteger = Extension.serializePrimitiveExtension(this.answer);
    }

    if (this.answer && PrimitiveDate.isPrimitiveDate(this.answer)) {
      result.answerDate = this.answer.value;
      result._answerDate = Extension.serializePrimitiveExtension(this.answer);
    }

    if (this.answer && PrimitiveDateTime.isPrimitiveDateTime(this.answer)) {
      result.answerDateTime = this.answer.value;
      result._answerDateTime = Extension.serializePrimitiveExtension(this.answer);
    }

    if (this.answer && PrimitiveTime.isPrimitiveTime(this.answer)) {
      result.answerTime = this.answer.value;
      result._answerTime = Extension.serializePrimitiveExtension(this.answer);
    }

    if (this.answer && PrimitiveString.isPrimitiveString(this.answer)) {
      result.answerString = this.answer.value;
      result._answerString = Extension.serializePrimitiveExtension(this.answer);
    }

    if (this.answer && Coding.isCoding(this.answer)) {
      result.answerCoding = this.answer.toJSON();
    }

    if (this.answer && Quantity.isQuantity(this.answer)) {
      result.answerQuantity = this.answer.toJSON();
    }

    if (this.answer && Reference.isReference(this.answer)) {
      result.answerReference = this.answer.toJSON();
    }

    return result;
  }

  public clone(): QuestionnaireItemEnableWhen {
    return QuestionnaireItemEnableWhen.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "QuestionnaireItemEnableWhen";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
