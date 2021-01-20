/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Coding,
  Extension,
  FhirChoice,
  FhirField,
  IQuestionnaireItemAnswerOption,
  PrimitiveBoolean,
  PrimitiveDate,
  PrimitiveInteger,
  PrimitiveString,
  PrimitiveTime,
  Reference,
  FhirType
} from "../internal";

@FhirType("QuestionnaireItemAnswerOption", "BackboneElement")
export class QuestionnaireItemAnswerOption extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Questionnaire.Item.AnswerOption";

  static readonly primaryCodePath: string | null = null;

  @FhirChoice("PrimitiveInteger", "PrimitiveDate", "PrimitiveTime", "PrimitiveString", "Coding", "Reference")
  public value?: PrimitiveInteger | PrimitiveDate | PrimitiveTime | PrimitiveString | Coding | Reference;

  @FhirField("PrimitiveBoolean")
  public initialSelected?: PrimitiveBoolean;

  public static parse(
    json: IQuestionnaireItemAnswerOption,
    providedInstance: QuestionnaireItemAnswerOption = new QuestionnaireItemAnswerOption()
  ): QuestionnaireItemAnswerOption {
    const newInstance: QuestionnaireItemAnswerOption = BackboneElement.parse(json, providedInstance);
  
    if (json.valueInteger !== undefined) {
      newInstance.value = PrimitiveInteger.parsePrimitive(json.valueInteger, json._valueInteger);
    }
    if (json.valueDate !== undefined) {
      newInstance.value = PrimitiveDate.parsePrimitive(json.valueDate, json._valueDate);
    }
    if (json.valueTime !== undefined) {
      newInstance.value = PrimitiveTime.parsePrimitive(json.valueTime, json._valueTime);
    }
    if (json.valueString !== undefined) {
      newInstance.value = PrimitiveString.parsePrimitive(json.valueString, json._valueString);
    }
    if (json.valueCoding !== undefined) {
      newInstance.value = Coding.parse(json.valueCoding);
    }
    if (json.valueReference !== undefined) {
      newInstance.value = Reference.parse(json.valueReference);
    }
    if (json.initialSelected !== undefined) {
      newInstance.initialSelected = PrimitiveBoolean.parsePrimitive(json.initialSelected, json._initialSelected);
    }
    return newInstance;
  }

  public static isQuestionnaireItemAnswerOption(input?: unknown): input is QuestionnaireItemAnswerOption {
    const castInput = input as QuestionnaireItemAnswerOption;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "QuestionnaireItemAnswerOption";
  }

  public toJSON(): IQuestionnaireItemAnswerOption {
    const result: IQuestionnaireItemAnswerOption = super.toJSON();

    if (this.value && PrimitiveInteger.isPrimitiveInteger(this.value)) {
      result.valueInteger = this.value.value;
      result._valueInteger = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveDate.isPrimitiveDate(this.value)) {
      result.valueDate = this.value.value;
      result._valueDate = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveTime.isPrimitiveTime(this.value)) {
      result.valueTime = this.value.value;
      result._valueTime = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveString.isPrimitiveString(this.value)) {
      result.valueString = this.value.value;
      result._valueString = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && Coding.isCoding(this.value)) {
      result.valueCoding = this.value.toJSON();
    }

    if (this.value && Reference.isReference(this.value)) {
      result.valueReference = this.value.toJSON();
    }

    if (this.initialSelected) {
      result.initialSelected = this.initialSelected.value;
      result._initialSelected = Extension.serializePrimitiveExtension(this.initialSelected);
    }

    return result;
  }

  public clone(): QuestionnaireItemAnswerOption {
    return QuestionnaireItemAnswerOption.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "QuestionnaireItemAnswerOption";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
