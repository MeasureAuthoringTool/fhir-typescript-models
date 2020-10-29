/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  IList,
  ListEntry,
  ListMode,
  ListStatus,
  PrimitiveDateTime,
  PrimitiveString,
  Reference,
  FieldMetadata
} from "../internal";

export class List extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "List";
  
  static readonly primaryCodePath: string | null = "code";

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "status",
      fieldType: [ListStatus],
      isArray: false
    }, {
      fieldName: "mode",
      fieldType: [ListMode],
      isArray: false
    }, {
      fieldName: "title",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "code",
      fieldType: [CodeableConcept],
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
      fieldName: "date",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "source",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "orderedBy",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "note",
      fieldType: [Annotation],
      isArray: true
    }, {
      fieldName: "entry",
      fieldType: [ListEntry],
      isArray: true
    }, {
      fieldName: "emptyReason",
      fieldType: [CodeableConcept],
      isArray: false
    }];
  }

  public identifier?: Array<Identifier>;

  public status?: ListStatus;

  public mode?: ListMode;

  public title?: PrimitiveString;

  public code?: CodeableConcept;

  public subject?: Reference;

  public encounter?: Reference;

  public date?: PrimitiveDateTime;

  public source?: Reference;

  public orderedBy?: CodeableConcept;

  public note?: Array<Annotation>;

  public entry?: Array<ListEntry>;

  public emptyReason?: CodeableConcept;

  get primaryCode(): CodeableConcept | undefined {
    return this?.code;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: IList,
    providedInstance: List = new List()
  ): List {
    const newInstance: List = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = ListStatus.parsePrimitive(json.status, json._status);
    }
    if (json.mode !== undefined) {
      newInstance.mode = ListMode.parsePrimitive(json.mode, json._mode);
    }
    if (json.title !== undefined) {
      newInstance.title = PrimitiveString.parsePrimitive(json.title, json._title);
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.encounter !== undefined) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.date !== undefined) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.source !== undefined) {
      newInstance.source = Reference.parse(json.source);
    }
    if (json.orderedBy !== undefined) {
      newInstance.orderedBy = CodeableConcept.parse(json.orderedBy);
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.entry !== undefined) {
      newInstance.entry = json.entry.map((x) => ListEntry.parse(x));
    }
    if (json.emptyReason !== undefined) {
      newInstance.emptyReason = CodeableConcept.parse(json.emptyReason);
    }
    return newInstance;
  }

  public static isList(input?: unknown): input is List {
    const castInput = input as List;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "List";
  }

  public toJSON(): IList {
    const result: IList = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.mode) {
      result.mode = this.mode.value;
      result._mode = Extension.serializePrimitiveExtension(this.mode);
    }

    if (this.title) {
      result.title = this.title.value;
      result._title = Extension.serializePrimitiveExtension(this.title);
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.encounter) {
      result.encounter = this.encounter.toJSON();
    }

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.source) {
      result.source = this.source.toJSON();
    }

    if (this.orderedBy) {
      result.orderedBy = this.orderedBy.toJSON();
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    if (this.entry) {
      result.entry = this.entry.map((x) => x.toJSON());
    }

    if (this.emptyReason) {
      result.emptyReason = this.emptyReason.toJSON();
    }

    return result;
  }

  public clone(): List {
    return List.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "List";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
