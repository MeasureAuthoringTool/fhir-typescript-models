/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  DomainResource,
  Extension,
  Identifier,
  IQuestionnaireResponse,
  PrimitiveCanonical,
  PrimitiveDateTime,
  QuestionnaireResponseItem,
  QuestionnaireResponseStatus,
  Reference,
  FieldMetadata
} from "../internal";

export class QuestionnaireResponse extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "QuestionnaireResponse";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: false
    }, {
      fieldName: "basedOn",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "partOf",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "questionnaire",
      fieldType: [PrimitiveCanonical],
      isArray: false
    }, {
      fieldName: "status",
      fieldType: [QuestionnaireResponseStatus],
      isArray: false
    }, {
      fieldName: "subject",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "encounter",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "authored",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "author",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "source",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "item",
      fieldType: [QuestionnaireResponseItem],
      isArray: true
    }];
  }

  public identifier?: Identifier;

  public basedOn?: Array<Reference>;

  public partOf?: Array<Reference>;

  public questionnaire?: PrimitiveCanonical;

  public status?: QuestionnaireResponseStatus;

  public subject?: Reference;

  public encounter?: Reference;

  public authored?: PrimitiveDateTime;

  public author?: Reference;

  public source?: Reference;

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
