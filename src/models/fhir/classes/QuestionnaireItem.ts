/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Coding,
  EnableWhenBehavior,
  Extension,
  FhirField,
  FhirList,
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
  FhirType
} from "../internal";

@FhirType("QuestionnaireItem", "BackboneElement")
export class QuestionnaireItem extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Questionnaire.Item";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public linkId?: PrimitiveString;

  @FhirField("PrimitiveUri")
  public definition?: PrimitiveUri;

  @FhirList("Coding")
  public code?: Array<Coding>;

  @FhirField("PrimitiveString")
  public prefix?: PrimitiveString;

  @FhirField("PrimitiveString")
  public text?: PrimitiveString;

  @FhirField("QuestionnaireItemType")
  public type?: QuestionnaireItemType;

  @FhirList("QuestionnaireItemEnableWhen")
  public enableWhen?: Array<QuestionnaireItemEnableWhen>;

  @FhirField("EnableWhenBehavior")
  public enableBehavior?: EnableWhenBehavior;

  @FhirField("PrimitiveBoolean")
  public required?: PrimitiveBoolean;

  @FhirField("PrimitiveBoolean")
  public repeats?: PrimitiveBoolean;

  @FhirField("PrimitiveBoolean")
  public readOnly?: PrimitiveBoolean;

  @FhirField("PrimitiveInteger")
  public maxLength?: PrimitiveInteger;

  @FhirField("PrimitiveCanonical")
  public answerValueSet?: PrimitiveCanonical;

  @FhirList("QuestionnaireItemAnswerOption")
  public answerOption?: Array<QuestionnaireItemAnswerOption>;

  @FhirList("QuestionnaireItemInitial")
  public initial?: Array<QuestionnaireItemInitial>;

  @FhirList("QuestionnaireItem")
  public item?: Array<QuestionnaireItem>;

  public static parse(
    json: IQuestionnaireItem,
    providedInstance: QuestionnaireItem = new QuestionnaireItem()
  ): QuestionnaireItem {
    const newInstance: QuestionnaireItem = BackboneElement.parse(json, providedInstance);
  
    if (json.linkId !== undefined) {
      newInstance.linkId = PrimitiveString.parsePrimitive(json.linkId, json._linkId);
    }
    if (json.definition !== undefined) {
      newInstance.definition = PrimitiveUri.parsePrimitive(json.definition, json._definition);
    }
    if (json.code !== undefined) {
      newInstance.code = json.code.map((x) => Coding.parse(x));
    }
    if (json.prefix !== undefined) {
      newInstance.prefix = PrimitiveString.parsePrimitive(json.prefix, json._prefix);
    }
    if (json.text !== undefined) {
      newInstance.text = PrimitiveString.parsePrimitive(json.text, json._text);
    }
    if (json.type !== undefined) {
      newInstance.type = QuestionnaireItemType.parsePrimitive(json.type, json._type);
    }
    if (json.enableWhen !== undefined) {
      newInstance.enableWhen = json.enableWhen.map((x) => QuestionnaireItemEnableWhen.parse(x));
    }
    if (json.enableBehavior !== undefined) {
      newInstance.enableBehavior = EnableWhenBehavior.parsePrimitive(json.enableBehavior, json._enableBehavior);
    }
    if (json.required !== undefined) {
      newInstance.required = PrimitiveBoolean.parsePrimitive(json.required, json._required);
    }
    if (json.repeats !== undefined) {
      newInstance.repeats = PrimitiveBoolean.parsePrimitive(json.repeats, json._repeats);
    }
    if (json.readOnly !== undefined) {
      newInstance.readOnly = PrimitiveBoolean.parsePrimitive(json.readOnly, json._readOnly);
    }
    if (json.maxLength !== undefined) {
      newInstance.maxLength = PrimitiveInteger.parsePrimitive(json.maxLength, json._maxLength);
    }
    if (json.answerValueSet !== undefined) {
      newInstance.answerValueSet = PrimitiveCanonical.parsePrimitive(json.answerValueSet, json._answerValueSet);
    }
    if (json.answerOption !== undefined) {
      newInstance.answerOption = json.answerOption.map((x) => QuestionnaireItemAnswerOption.parse(x));
    }
    if (json.initial !== undefined) {
      newInstance.initial = json.initial.map((x) => QuestionnaireItemInitial.parse(x));
    }
    if (json.item !== undefined) {
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

  public clone(): QuestionnaireItem {
    return QuestionnaireItem.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "QuestionnaireItem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
