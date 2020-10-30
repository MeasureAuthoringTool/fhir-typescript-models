/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  CodeableConcept,
  ContactDetail,
  DomainResource,
  EvidenceVariableCharacteristic,
  EvidenceVariableType,
  Extension,
  Identifier,
  IEvidenceVariable,
  Period,
  PrimitiveDate,
  PrimitiveDateTime,
  PrimitiveMarkdown,
  PrimitiveString,
  PrimitiveUri,
  PublicationStatus,
  RelatedArtifact,
  UsageContext,
  FieldMetadata
} from "../internal";

export class EvidenceVariable extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EvidenceVariable";
  
  static readonly primaryCodePath: string | null = null;

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
      fieldName: "shortTitle",
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
      fieldName: "note",
      fieldType: [Annotation],
      isArray: true
    }, {
      fieldName: "useContext",
      fieldType: [UsageContext],
      isArray: true
    }, {
      fieldName: "jurisdiction",
      fieldType: [CodeableConcept],
      isArray: true
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
      fieldName: "type",
      fieldType: [EvidenceVariableType],
      isArray: false
    }, {
      fieldName: "characteristic",
      fieldType: [EvidenceVariableCharacteristic],
      isArray: true
    }];
  }

  public url?: PrimitiveUri;

  public identifier?: Array<Identifier>;

  public version?: PrimitiveString;

  public name?: PrimitiveString;

  public title?: PrimitiveString;

  public shortTitle?: PrimitiveString;

  public subtitle?: PrimitiveString;

  public status?: PublicationStatus;

  public date?: PrimitiveDateTime;

  public publisher?: PrimitiveString;

  public contact?: Array<ContactDetail>;

  public description?: PrimitiveMarkdown;

  public note?: Array<Annotation>;

  public useContext?: Array<UsageContext>;

  public jurisdiction?: Array<CodeableConcept>;

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

  public type?: EvidenceVariableType;

  public characteristic?: Array<EvidenceVariableCharacteristic>;

  public static parse(
    json: IEvidenceVariable,
    providedInstance: EvidenceVariable = new EvidenceVariable()
  ): EvidenceVariable {
    const newInstance: EvidenceVariable = DomainResource.parse(json, providedInstance);
  
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
    if (json.shortTitle !== undefined) {
      newInstance.shortTitle = PrimitiveString.parsePrimitive(json.shortTitle, json._shortTitle);
    }
    if (json.subtitle !== undefined) {
      newInstance.subtitle = PrimitiveString.parsePrimitive(json.subtitle, json._subtitle);
    }
    if (json.status !== undefined) {
      newInstance.status = PublicationStatus.parsePrimitive(json.status, json._status);
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
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.useContext !== undefined) {
      newInstance.useContext = json.useContext.map((x) => UsageContext.parse(x));
    }
    if (json.jurisdiction !== undefined) {
      newInstance.jurisdiction = json.jurisdiction.map((x) => CodeableConcept.parse(x));
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
    if (json.type !== undefined) {
      newInstance.type = EvidenceVariableType.parsePrimitive(json.type, json._type);
    }
    if (json.characteristic !== undefined) {
      newInstance.characteristic = json.characteristic.map((x) => EvidenceVariableCharacteristic.parse(x));
    }
    return newInstance;
  }

  public static isEvidenceVariable(input?: unknown): input is EvidenceVariable {
    const castInput = input as EvidenceVariable;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EvidenceVariable";
  }

  public toJSON(): IEvidenceVariable {
    const result: IEvidenceVariable = super.toJSON();

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

    if (this.shortTitle) {
      result.shortTitle = this.shortTitle.value;
      result._shortTitle = Extension.serializePrimitiveExtension(this.shortTitle);
    }

    if (this.subtitle) {
      result.subtitle = this.subtitle.value;
      result._subtitle = Extension.serializePrimitiveExtension(this.subtitle);
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
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

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    if (this.useContext) {
      result.useContext = this.useContext.map((x) => x.toJSON());
    }

    if (this.jurisdiction) {
      result.jurisdiction = this.jurisdiction.map((x) => x.toJSON());
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

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.characteristic) {
      result.characteristic = this.characteristic.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): EvidenceVariable {
    return EvidenceVariable.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "EvidenceVariable";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
