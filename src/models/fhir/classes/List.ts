/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Annotation,
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  Identifier,
  IList,
  ListEntry,
  ListMode,
  ListStatus,
  PrimitiveDateTime,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("List", "DomainResource")
export class List extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "List";

  static readonly primaryCodePath: string | null = "code";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("ListStatus")
  public status?: ListStatus;

  @FhirField("ListMode")
  public mode?: ListMode;

  @FhirField("PrimitiveString")
  public title?: PrimitiveString;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirField("Reference")
  public encounter?: Reference;

  @FhirField("PrimitiveDateTime")
  public date?: PrimitiveDateTime;

  @FhirField("Reference")
  public source?: Reference;

  @FhirField("CodeableConcept")
  public orderedBy?: CodeableConcept;

  @FhirList("Annotation")
  public note?: Array<Annotation>;

  @FhirList("ListEntry")
  public entry?: Array<ListEntry>;

  @FhirField("CodeableConcept")
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
