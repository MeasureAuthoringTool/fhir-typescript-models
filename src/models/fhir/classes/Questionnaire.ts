/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  Coding,
  ContactDetail,
  DomainResource,
  Extension,
  Identifier,
  IQuestionnaire,
  Period,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveDate,
  PrimitiveDateTime,
  PrimitiveMarkdown,
  PrimitiveString,
  PrimitiveUri,
  PublicationStatus,
  QuestionnaireItem,
  ResourceType,
  UsageContext,
  FieldMetadata
} from "../internal";

export class Questionnaire extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Questionnaire";
  
  static readonly primaryCodePath: string | null = "name";

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "url",
      fieldType: [PrimitiveUri],
      isArray: false
    }, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "version",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "name",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "title",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "derivedFrom",
      fieldType: [PrimitiveCanonical],
      isArray: true
    }, {
      fieldName: "status",
      fieldType: [PublicationStatus],
      isArray: false
    }, {
      fieldName: "experimental",
      fieldType: [PrimitiveBoolean],
      isArray: false
    }, {
      fieldName: "subjectType",
      fieldType: [ResourceType],
      isArray: true
    }, {
      fieldName: "date",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "publisher",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "contact",
      fieldType: [ContactDetail],
      isArray: true
    }, {
      fieldName: "description",
      fieldType: [PrimitiveMarkdown],
      isArray: false
    }, {
      fieldName: "useContext",
      fieldType: [UsageContext],
      isArray: true
    }, {
      fieldName: "jurisdiction",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "purpose",
      fieldType: [PrimitiveMarkdown],
      isArray: false
    }, {
      fieldName: "copyright",
      fieldType: [PrimitiveMarkdown],
      isArray: false
    }, {
      fieldName: "approvalDate",
      fieldType: [PrimitiveDate],
      isArray: false
    }, {
      fieldName: "lastReviewDate",
      fieldType: [PrimitiveDate],
      isArray: false
    }, {
      fieldName: "effectivePeriod",
      fieldType: [Period],
      isArray: false
    }, {
      fieldName: "code",
      fieldType: [Coding],
      isArray: true
    }, {
      fieldName: "item",
      fieldType: [QuestionnaireItem],
      isArray: true
    }];
  }

  public url?: PrimitiveUri;

  public identifier?: Array<Identifier>;

  public version?: PrimitiveString;

  public name?: PrimitiveString;

  public title?: PrimitiveString;

  public derivedFrom?: Array<PrimitiveCanonical>;

  public status?: PublicationStatus;

  public experimental?: PrimitiveBoolean;

  public subjectType?: Array<ResourceType>;

  public date?: PrimitiveDateTime;

  public publisher?: PrimitiveString;

  public contact?: Array<ContactDetail>;

  public description?: PrimitiveMarkdown;

  public useContext?: Array<UsageContext>;

  public jurisdiction?: Array<CodeableConcept>;

  public purpose?: PrimitiveMarkdown;

  public copyright?: PrimitiveMarkdown;

  public approvalDate?: PrimitiveDate;

  public lastReviewDate?: PrimitiveDate;

  public effectivePeriod?: Period;

  public code?: Array<Coding>;

  public item?: Array<QuestionnaireItem>;

  get primaryCode(): PrimitiveString | undefined {
    return this?.name;
  }

  set primaryCode(primaryCode: PrimitiveString | undefined) {
    this.name = primaryCode;
  }

  public static parse(
    json: IQuestionnaire,
    providedInstance: Questionnaire = new Questionnaire()
  ): Questionnaire {
    const newInstance: Questionnaire = DomainResource.parse(json, providedInstance);
  
    if (json.url !== undefined) {
      newInstance.url = PrimitiveUri.parsePrimitive(json.url, json._url);
    }
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.version !== undefined) {
      newInstance.version = PrimitiveString.parsePrimitive(json.version, json._version);
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.title !== undefined) {
      newInstance.title = PrimitiveString.parsePrimitive(json.title, json._title);
    }
    if (json.derivedFrom !== undefined) {
      newInstance.derivedFrom = json.derivedFrom.map((x, i) => {
        const ext = json._derivedFrom && json._derivedFrom[i];
        return PrimitiveCanonical.parsePrimitive(x, ext);
      });
    }
    if (json.status !== undefined) {
      newInstance.status = PublicationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.experimental !== undefined) {
      newInstance.experimental = PrimitiveBoolean.parsePrimitive(json.experimental, json._experimental);
    }
    if (json.subjectType !== undefined) {
      newInstance.subjectType = json.subjectType.map((x, i) => {
        const ext = json._subjectType && json._subjectType[i];
        return ResourceType.parsePrimitive(x, ext);
      });
    }
    if (json.date !== undefined) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.publisher !== undefined) {
      newInstance.publisher = PrimitiveString.parsePrimitive(json.publisher, json._publisher);
    }
    if (json.contact !== undefined) {
      newInstance.contact = json.contact.map((x) => ContactDetail.parse(x));
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveMarkdown.parsePrimitive(json.description, json._description);
    }
    if (json.useContext !== undefined) {
      newInstance.useContext = json.useContext.map((x) => UsageContext.parse(x));
    }
    if (json.jurisdiction !== undefined) {
      newInstance.jurisdiction = json.jurisdiction.map((x) => CodeableConcept.parse(x));
    }
    if (json.purpose !== undefined) {
      newInstance.purpose = PrimitiveMarkdown.parsePrimitive(json.purpose, json._purpose);
    }
    if (json.copyright !== undefined) {
      newInstance.copyright = PrimitiveMarkdown.parsePrimitive(json.copyright, json._copyright);
    }
    if (json.approvalDate !== undefined) {
      newInstance.approvalDate = PrimitiveDate.parsePrimitive(json.approvalDate, json._approvalDate);
    }
    if (json.lastReviewDate !== undefined) {
      newInstance.lastReviewDate = PrimitiveDate.parsePrimitive(json.lastReviewDate, json._lastReviewDate);
    }
    if (json.effectivePeriod !== undefined) {
      newInstance.effectivePeriod = Period.parse(json.effectivePeriod);
    }
    if (json.code !== undefined) {
      newInstance.code = json.code.map((x) => Coding.parse(x));
    }
    if (json.item !== undefined) {
      newInstance.item = json.item.map((x) => QuestionnaireItem.parse(x));
    }
    return newInstance;
  }

  public static isQuestionnaire(input?: unknown): input is Questionnaire {
    const castInput = input as Questionnaire;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Questionnaire";
  }

  public toJSON(): IQuestionnaire {
    const result: IQuestionnaire = super.toJSON();

    if (this.url) {
      result.url = this.url.value;
      result._url = Extension.serializePrimitiveExtension(this.url);
    }

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.version) {
      result.version = this.version.value;
      result._version = Extension.serializePrimitiveExtension(this.version);
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.title) {
      result.title = this.title.value;
      result._title = Extension.serializePrimitiveExtension(this.title);
    }

    if (this.derivedFrom) {
      result.derivedFrom = this.derivedFrom.filter(x => !!x).map(x => x.value) as typeof result.derivedFrom;
      result._derivedFrom = Extension.serializePrimitiveExtensionArray(this.derivedFrom);
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.experimental) {
      result.experimental = this.experimental.value;
      result._experimental = Extension.serializePrimitiveExtension(this.experimental);
    }

    if (this.subjectType) {
      result.subjectType = this.subjectType.filter(x => !!x).map(x => x.value) as typeof result.subjectType;
      result._subjectType = Extension.serializePrimitiveExtensionArray(this.subjectType);
    }

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.publisher) {
      result.publisher = this.publisher.value;
      result._publisher = Extension.serializePrimitiveExtension(this.publisher);
    }

    if (this.contact) {
      result.contact = this.contact.map((x) => x.toJSON());
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.useContext) {
      result.useContext = this.useContext.map((x) => x.toJSON());
    }

    if (this.jurisdiction) {
      result.jurisdiction = this.jurisdiction.map((x) => x.toJSON());
    }

    if (this.purpose) {
      result.purpose = this.purpose.value;
      result._purpose = Extension.serializePrimitiveExtension(this.purpose);
    }

    if (this.copyright) {
      result.copyright = this.copyright.value;
      result._copyright = Extension.serializePrimitiveExtension(this.copyright);
    }

    if (this.approvalDate) {
      result.approvalDate = this.approvalDate.value;
      result._approvalDate = Extension.serializePrimitiveExtension(this.approvalDate);
    }

    if (this.lastReviewDate) {
      result.lastReviewDate = this.lastReviewDate.value;
      result._lastReviewDate = Extension.serializePrimitiveExtension(this.lastReviewDate);
    }

    if (this.effectivePeriod) {
      result.effectivePeriod = this.effectivePeriod.toJSON();
    }

    if (this.code) {
      result.code = this.code.map((x) => x.toJSON());
    }

    if (this.item) {
      result.item = this.item.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): Questionnaire {
    return Questionnaire.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Questionnaire";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
