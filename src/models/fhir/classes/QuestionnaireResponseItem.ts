/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  FhirList,
  IQuestionnaireResponseItem,
  PrimitiveString,
  PrimitiveUri,
  QuestionnaireResponseItemAnswer,
  FhirType
} from "../internal";

@FhirType("QuestionnaireResponseItem", "BackboneElement")
export class QuestionnaireResponseItem extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "QuestionnaireResponse.Item";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public linkId?: PrimitiveString;

  @FhirField("PrimitiveUri")
  public definition?: PrimitiveUri;

  @FhirField("PrimitiveString")
  public text?: PrimitiveString;

  @FhirList("QuestionnaireResponseItemAnswer")
  public answer?: Array<QuestionnaireResponseItemAnswer>;

  @FhirList("QuestionnaireResponseItem")
  public item?: Array<QuestionnaireResponseItem>;

  public static parse(
    json: IQuestionnaireResponseItem,
    providedInstance: QuestionnaireResponseItem = new QuestionnaireResponseItem()
  ): QuestionnaireResponseItem {
    const newInstance: QuestionnaireResponseItem = BackboneElement.parse(json, providedInstance);
  
    if (json.linkId !== undefined) {
      newInstance.linkId = PrimitiveString.parsePrimitive(json.linkId, json._linkId);
    }
    if (json.definition !== undefined) {
      newInstance.definition = PrimitiveUri.parsePrimitive(json.definition, json._definition);
    }
    if (json.text !== undefined) {
      newInstance.text = PrimitiveString.parsePrimitive(json.text, json._text);
    }
    if (json.answer !== undefined) {
      newInstance.answer = json.answer.map((x) => QuestionnaireResponseItemAnswer.parse(x));
    }
    if (json.item !== undefined) {
      newInstance.item = json.item.map((x) => QuestionnaireResponseItem.parse(x));
    }
    return newInstance;
  }

  public static isQuestionnaireResponseItem(input?: unknown): input is QuestionnaireResponseItem {
    const castInput = input as QuestionnaireResponseItem;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "QuestionnaireResponseItem";
  }

  public toJSON(): IQuestionnaireResponseItem {
    const result: IQuestionnaireResponseItem = super.toJSON();

    if (this.linkId) {
      result.linkId = this.linkId.value;
      result._linkId = Extension.serializePrimitiveExtension(this.linkId);
    }

    if (this.definition) {
      result.definition = this.definition.value;
      result._definition = Extension.serializePrimitiveExtension(this.definition);
    }

    if (this.text) {
      result.text = this.text.value;
      result._text = Extension.serializePrimitiveExtension(this.text);
    }

    if (this.answer) {
      result.answer = this.answer.map((x) => x.toJSON());
    }

    if (this.item) {
      result.item = this.item.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): QuestionnaireResponseItem {
    return QuestionnaireResponseItem.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "QuestionnaireResponseItem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
