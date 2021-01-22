/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  Identifier,
  IQuestionnaireResponse,
  PrimitiveCanonical,
  PrimitiveDateTime,
  QuestionnaireResponseItem,
  QuestionnaireResponseStatus,
  Reference,
  FhirType
} from "../internal";

@FhirType("QuestionnaireResponse", "DomainResource")
export class QuestionnaireResponse extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "QuestionnaireResponse";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Identifier")
  public identifier?: Identifier;

  @FhirList("Reference")
  public basedOn?: Array<Reference>;

  @FhirList("Reference")
  public partOf?: Array<Reference>;

  @FhirField("PrimitiveCanonical")
  public questionnaire?: PrimitiveCanonical;

  @FhirField("QuestionnaireResponseStatus")
  public status?: QuestionnaireResponseStatus;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirField("Reference")
  public encounter?: Reference;

  @FhirField("PrimitiveDateTime")
  public authored?: PrimitiveDateTime;

  @FhirField("Reference")
  public author?: Reference;

  @FhirField("Reference")
  public source?: Reference;

  @FhirList("QuestionnaireResponseItem")
  public item?: Array<QuestionnaireResponseItem>;

  public static parse(
    json: IQuestionnaireResponse,
    providedInstance: QuestionnaireResponse = new QuestionnaireResponse()
  ): QuestionnaireResponse {
    const newInstance: QuestionnaireResponse = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.basedOn !== undefined) {
      newInstance.basedOn = json.basedOn.map((x) => Reference.parse(x));
    }
    if (json.partOf !== undefined) {
      newInstance.partOf = json.partOf.map((x) => Reference.parse(x));
    }
    if (json.questionnaire !== undefined) {
      newInstance.questionnaire = PrimitiveCanonical.parsePrimitive(json.questionnaire, json._questionnaire);
    }
    if (json.status !== undefined) {
      newInstance.status = QuestionnaireResponseStatus.parsePrimitive(json.status, json._status);
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.encounter !== undefined) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.authored !== undefined) {
      newInstance.authored = PrimitiveDateTime.parsePrimitive(json.authored, json._authored);
    }
    if (json.author !== undefined) {
      newInstance.author = Reference.parse(json.author);
    }
    if (json.source !== undefined) {
      newInstance.source = Reference.parse(json.source);
    }
    if (json.item !== undefined) {
      newInstance.item = json.item.map((x) => QuestionnaireResponseItem.parse(x));
    }
    return newInstance;
  }

  public static isQuestionnaireResponse(input?: unknown): input is QuestionnaireResponse {
    const castInput = input as QuestionnaireResponse;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "QuestionnaireResponse";
  }

  public toJSON(): IQuestionnaireResponse {
    const result: IQuestionnaireResponse = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    if (this.basedOn) {
      result.basedOn = this.basedOn.map((x) => x.toJSON());
    }

    if (this.partOf) {
      result.partOf = this.partOf.map((x) => x.toJSON());
    }

    if (this.questionnaire) {
      result.questionnaire = this.questionnaire.value;
      result._questionnaire = Extension.serializePrimitiveExtension(this.questionnaire);
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.encounter) {
      result.encounter = this.encounter.toJSON();
    }

    if (this.authored) {
      result.authored = this.authored.value;
      result._authored = Extension.serializePrimitiveExtension(this.authored);
    }

    if (this.author) {
      result.author = this.author.toJSON();
    }

    if (this.source) {
      result.source = this.source.toJSON();
    }

    if (this.item) {
      result.item = this.item.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): QuestionnaireResponse {
    return QuestionnaireResponse.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "QuestionnaireResponse";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
