/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Attachment,
  CodeableConcept,
  ContactDetail,
  DataRequirement,
  DomainResource,
  Extension,
  Identifier,
  ILibrary,
  ParameterDefinition,
  Period,
  PrimitiveBoolean,
  PrimitiveDate,
  PrimitiveDateTime,
  PrimitiveMarkdown,
  PrimitiveString,
  PrimitiveUri,
  PublicationStatus,
  Reference,
  RelatedArtifact,
  UsageContext,
  FieldMetadata
} from "../internal";

export class Library extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Library";
  
  static readonly primaryCodePath: string | null = "topic";

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
      fieldName: "subtitle",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "status",
      fieldType: [PublicationStatus],
      isArray: false
    }, {
      fieldName: "experimental",
      fieldType: [PrimitiveBoolean],
      isArray: false
    }, {
      fieldName: "type",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "subject",
      fieldType: [CodeableConcept, Reference],
      isArray: false
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
      fieldName: "usage",
      fieldType: [PrimitiveString],
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
      fieldName: "topic",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "author",
      fieldType: [ContactDetail],
      isArray: true
    }, {
      fieldName: "editor",
      fieldType: [ContactDetail],
      isArray: true
    }, {
      fieldName: "reviewer",
      fieldType: [ContactDetail],
      isArray: true
    }, {
      fieldName: "endorser",
      fieldType: [ContactDetail],
      isArray: true
    }, {
      fieldName: "relatedArtifact",
      fieldType: [RelatedArtifact],
      isArray: true
    }, {
      fieldName: "parameter",
      fieldType: [ParameterDefinition],
      isArray: true
    }, {
      fieldName: "dataRequirement",
      fieldType: [DataRequirement],
      isArray: true
    }, {
      fieldName: "content",
      fieldType: [Attachment],
      isArray: true
    }];
  }

  public url?: PrimitiveUri;

  public identifier?: Array<Identifier>;

  public version?: PrimitiveString;

  public name?: PrimitiveString;

  public title?: PrimitiveString;

  public subtitle?: PrimitiveString;

  public status?: PublicationStatus;

  public experimental?: PrimitiveBoolean;

  public type?: CodeableConcept;

  public subject?: CodeableConcept | Reference;

  public date?: PrimitiveDateTime;

  public publisher?: PrimitiveString;

  public contact?: Array<ContactDetail>;

  public description?: PrimitiveMarkdown;

  public useContext?: Array<UsageContext>;

  public jurisdiction?: Array<CodeableConcept>;

  public purpose?: PrimitiveMarkdown;

  public usage?: PrimitiveString;

  public copyright?: PrimitiveMarkdown;

  public approvalDate?: PrimitiveDate;

  public lastReviewDate?: PrimitiveDate;

  public effectivePeriod?: Period;

  public topic?: Array<CodeableConcept>;

  public author?: Array<ContactDetail>;

  public editor?: Array<ContactDetail>;

  public reviewer?: Array<ContactDetail>;

  public endorser?: Array<ContactDetail>;

  public relatedArtifact?: Array<RelatedArtifact>;

  public parameter?: Array<ParameterDefinition>;

  public dataRequirement?: Array<DataRequirement>;

  public content?: Array<Attachment>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.topic?.[0];
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.topic = primaryCode ? [primaryCode] : [];
  }

  public static parse(
    json: ILibrary,
    providedInstance: Library = new Library()
  ): Library {
    const newInstance: Library = DomainResource.parse(json, providedInstance);
  
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
    if (json.subtitle !== undefined) {
      newInstance.subtitle = PrimitiveString.parsePrimitive(json.subtitle, json._subtitle);
    }
    if (json.status !== undefined) {
      newInstance.status = PublicationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.experimental !== undefined) {
      newInstance.experimental = PrimitiveBoolean.parsePrimitive(json.experimental, json._experimental);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.subjectCodeableConcept !== undefined) {
      newInstance.subject = CodeableConcept.parse(json.subjectCodeableConcept);
    }
    if (json.subjectReference !== undefined) {
      newInstance.subject = Reference.parse(json.subjectReference);
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
    if (json.usage !== undefined) {
      newInstance.usage = PrimitiveString.parsePrimitive(json.usage, json._usage);
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
    if (json.topic !== undefined) {
      newInstance.topic = json.topic.map((x) => CodeableConcept.parse(x));
    }
    if (json.author !== undefined) {
      newInstance.author = json.author.map((x) => ContactDetail.parse(x));
    }
    if (json.editor !== undefined) {
      newInstance.editor = json.editor.map((x) => ContactDetail.parse(x));
    }
    if (json.reviewer !== undefined) {
      newInstance.reviewer = json.reviewer.map((x) => ContactDetail.parse(x));
    }
    if (json.endorser !== undefined) {
      newInstance.endorser = json.endorser.map((x) => ContactDetail.parse(x));
    }
    if (json.relatedArtifact !== undefined) {
      newInstance.relatedArtifact = json.relatedArtifact.map((x) => RelatedArtifact.parse(x));
    }
    if (json.parameter !== undefined) {
      newInstance.parameter = json.parameter.map((x) => ParameterDefinition.parse(x));
    }
    if (json.dataRequirement !== undefined) {
      newInstance.dataRequirement = json.dataRequirement.map((x) => DataRequirement.parse(x));
    }
    if (json.content !== undefined) {
      newInstance.content = json.content.map((x) => Attachment.parse(x));
    }
    return newInstance;
  }

  public static isLibrary(input?: unknown): input is Library {
    const castInput = input as Library;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Library";
  }

  public toJSON(): ILibrary {
    const result: ILibrary = super.toJSON();

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

    if (this.subtitle) {
      result.subtitle = this.subtitle.value;
      result._subtitle = Extension.serializePrimitiveExtension(this.subtitle);
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.experimental) {
      result.experimental = this.experimental.value;
      result._experimental = Extension.serializePrimitiveExtension(this.experimental);
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.subject && CodeableConcept.isCodeableConcept(this.subject)) {
      result.subjectCodeableConcept = this.subject.toJSON();
    }

    if (this.subject && Reference.isReference(this.subject)) {
      result.subjectReference = this.subject.toJSON();
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

    if (this.usage) {
      result.usage = this.usage.value;
      result._usage = Extension.serializePrimitiveExtension(this.usage);
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

    if (this.topic) {
      result.topic = this.topic.map((x) => x.toJSON());
    }

    if (this.author) {
      result.author = this.author.map((x) => x.toJSON());
    }

    if (this.editor) {
      result.editor = this.editor.map((x) => x.toJSON());
    }

    if (this.reviewer) {
      result.reviewer = this.reviewer.map((x) => x.toJSON());
    }

    if (this.endorser) {
      result.endorser = this.endorser.map((x) => x.toJSON());
    }

    if (this.relatedArtifact) {
      result.relatedArtifact = this.relatedArtifact.map((x) => x.toJSON());
    }

    if (this.parameter) {
      result.parameter = this.parameter.map((x) => x.toJSON());
    }

    if (this.dataRequirement) {
      result.dataRequirement = this.dataRequirement.map((x) => x.toJSON());
    }

    if (this.content) {
      result.content = this.content.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): Library {
    return Library.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Library";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
