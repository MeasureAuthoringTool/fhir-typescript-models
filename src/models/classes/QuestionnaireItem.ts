/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Coding,
  EnableWhenBehavior,
  Extension,
  IQuestionnaireItem,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveInteger,
  PrimitiveString,
  PrimitiveUri,
  QuestionnaireItemAnswerOption,
  QuestionnaireItemEnableWhen,
  QuestionnaireItemInitial,
  QuestionnaireItemType,
} from "../internal";

export class QuestionnaireItem extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Questionnaire.Item";

  public linkId?: PrimitiveString;

  public definition?: PrimitiveUri;

  public code?: Array<Coding>;

  public prefix?: PrimitiveString;

  public text?: PrimitiveString;

  public type?: QuestionnaireItemType;

  public enableWhen?: Array<QuestionnaireItemEnableWhen>;

  public enableBehavior?: EnableWhenBehavior;

  public required?: PrimitiveBoolean;

  public repeats?: PrimitiveBoolean;

  public readOnly?: PrimitiveBoolean;

  public maxLength?: PrimitiveInteger;

  public answerValueSet?: PrimitiveCanonical;

  public answerOption?: Array<QuestionnaireItemAnswerOption>;

  public initial?: Array<QuestionnaireItemInitial>;

  public item?: Array<QuestionnaireItem>;

  public static parse(
    json: IQuestionnaireItem,
    providedInstance: QuestionnaireItem = new QuestionnaireItem()
  ): QuestionnaireItem {
    const newInstance: QuestionnaireItem = BackboneElement.parse(json, providedInstance);
  
    if (json.linkId) {
      newInstance.linkId = PrimitiveString.parsePrimitive(json.linkId, json._linkId);
    }
    if (json.definition) {
      newInstance.definition = PrimitiveUri.parsePrimitive(json.definition, json._definition);
    }
    if (json.code) {
      newInstance.code = json.code.map((x) => Coding.parse(x));
    }
    if (json.prefix) {
      newInstance.prefix = PrimitiveString.parsePrimitive(json.prefix, json._prefix);
    }
    if (json.text) {
      newInstance.text = PrimitiveString.parsePrimitive(json.text, json._text);
    }
    if (json.type) {
      newInstance.type = QuestionnaireItemType.parsePrimitive(json.type, json._type);
    }
    if (json.enableWhen) {
      newInstance.enableWhen = json.enableWhen.map((x) => QuestionnaireItemEnableWhen.parse(x));
    }
    if (json.enableBehavior) {
      newInstance.enableBehavior = EnableWhenBehavior.parsePrimitive(json.enableBehavior, json._enableBehavior);
    }
    if (json.required) {
      newInstance.required = PrimitiveBoolean.parsePrimitive(json.required, json._required);
    }
    if (json.repeats) {
      newInstance.repeats = PrimitiveBoolean.parsePrimitive(json.repeats, json._repeats);
    }
    if (json.readOnly) {
      newInstance.readOnly = PrimitiveBoolean.parsePrimitive(json.readOnly, json._readOnly);
    }
    if (json.maxLength) {
      newInstance.maxLength = PrimitiveInteger.parsePrimitive(json.maxLength, json._maxLength);
    }
    if (json.answerValueSet) {
      newInstance.answerValueSet = PrimitiveCanonical.parsePrimitive(json.answerValueSet, json._answerValueSet);
    }
    if (json.answerOption) {
      newInstance.answerOption = json.answerOption.map((x) => QuestionnaireItemAnswerOption.parse(x));
    }
    if (json.initial) {
      newInstance.initial = json.initial.map((x) => QuestionnaireItemInitial.parse(x));
    }
    if (json.item) {
      newInstance.item = json.item.map((x) => QuestionnaireItem.parse(x));
    }
    return newInstance;
  }

  public static isQuestionnaireItem(input?: unknown): input is QuestionnaireItem {
    const castInput = input as QuestionnaireItem;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "QuestionnaireItem";
  }

  public toJSON(): IQuestionnaireItem {
    const result: IQuestionnaireItem = super.toJSON();

    if (this.linkId) {
      result.linkId = this.linkId.value;
      result._linkId = Extension.serializePrimitiveExtension(this.linkId);
    }

    if (this.definition) {
      result.definition = this.definition.value;
      result._definition = Extension.serializePrimitiveExtension(this.definition);
    }

    if (this.code) {
      result.code = this.code.map((x) => x.toJSON());
    }

    if (this.prefix) {
      result.prefix = this.prefix.value;
      result._prefix = Extension.serializePrimitiveExtension(this.prefix);
    }

    if (this.text) {
      result.text = this.text.value;
      result._text = Extension.serializePrimitiveExtension(this.text);
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.enableWhen) {
      result.enableWhen = this.enableWhen.map((x) => x.toJSON());
    }

    if (this.enableBehavior) {
      result.enableBehavior = this.enableBehavior.value;
      result._enableBehavior = Extension.serializePrimitiveExtension(this.enableBehavior);
    }

    if (this.required) {
      result.required = this.required.value;
      result._required = Extension.serializePrimitiveExtension(this.required);
    }

    if (this.repeats) {
      result.repeats = this.repeats.value;
      result._repeats = Extension.serializePrimitiveExtension(this.repeats);
    }

    if (this.readOnly) {
      result.readOnly = this.readOnly.value;
      result._readOnly = Extension.serializePrimitiveExtension(this.readOnly);
    }

    if (this.maxLength) {
      result.maxLength = this.maxLength.value;
      result._maxLength = Extension.serializePrimitiveExtension(this.maxLength);
    }

    if (this.answerValueSet) {
      result.answerValueSet = this.answerValueSet.value;
      result._answerValueSet = Extension.serializePrimitiveExtension(this.answerValueSet);
    }

    if (this.answerOption) {
      result.answerOption = this.answerOption.map((x) => x.toJSON());
    }

    if (this.initial) {
      result.initial = this.initial.map((x) => x.toJSON());
    }

    if (this.item) {
      result.item = this.item.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "QuestionnaireItem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
