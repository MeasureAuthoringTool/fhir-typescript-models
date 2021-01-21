/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  IListEntry,
  PrimitiveBoolean,
  PrimitiveDateTime,
  Reference,
  FhirType
} from "../internal";

@FhirType("ListEntry", "BackboneElement")
export class ListEntry extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "List.Entry";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public flag?: CodeableConcept;

  @FhirField("PrimitiveBoolean")
  public deleted?: PrimitiveBoolean;

  @FhirField("PrimitiveDateTime")
  public date?: PrimitiveDateTime;

  @FhirField("Reference")
  public item?: Reference;

  public static parse(
    json: IListEntry,
    providedInstance: ListEntry = new ListEntry()
  ): ListEntry {
    const newInstance: ListEntry = BackboneElement.parse(json, providedInstance);
  
    if (json.flag !== undefined) {
      newInstance.flag = CodeableConcept.parse(json.flag);
    }
    if (json.deleted !== undefined) {
      newInstance.deleted = PrimitiveBoolean.parsePrimitive(json.deleted, json._deleted);
    }
    if (json.date !== undefined) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.item !== undefined) {
      newInstance.item = Reference.parse(json.item);
    }
    return newInstance;
  }

  public static isListEntry(input?: unknown): input is ListEntry {
    const castInput = input as ListEntry;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ListEntry";
  }

  public toJSON(): IListEntry {
    const result: IListEntry = super.toJSON();

    if (this.flag) {
      result.flag = this.flag.toJSON();
    }

    if (this.deleted) {
      result.deleted = this.deleted.value;
      result._deleted = Extension.serializePrimitiveExtension(this.deleted);
    }

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.item) {
      result.item = this.item.toJSON();
    }

    return result;
  }

  public clone(): ListEntry {
    return ListEntry.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ListEntry";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
