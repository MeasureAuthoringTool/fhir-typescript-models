/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CatalogEntryRelationType,
  Extension,
  ICatalogEntryRelatedEntry,
  Reference,
  FieldMetadata
} from "../internal";

export class CatalogEntryRelatedEntry extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CatalogEntry.RelatedEntry";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "relationtype",
      fieldType: [CatalogEntryRelationType],
      isArray: false
    }, {
      fieldName: "item",
      fieldType: [Reference],
      isArray: false
    }];
  }

  public relationtype?: CatalogEntryRelationType;

  public item?: Reference;

  public static parse(
    json: ICatalogEntryRelatedEntry,
    providedInstance: CatalogEntryRelatedEntry = new CatalogEntryRelatedEntry()
  ): CatalogEntryRelatedEntry {
    const newInstance: CatalogEntryRelatedEntry = BackboneElement.parse(json, providedInstance);
  
    if (json.relationtype !== undefined) {
      newInstance.relationtype = CatalogEntryRelationType.parsePrimitive(json.relationtype, json._relationtype);
    }
    if (json.item !== undefined) {
      newInstance.item = Reference.parse(json.item);
    }
    return newInstance;
  }

  public static isCatalogEntryRelatedEntry(input?: unknown): input is CatalogEntryRelatedEntry {
    const castInput = input as CatalogEntryRelatedEntry;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CatalogEntryRelatedEntry";
  }

  public toJSON(): ICatalogEntryRelatedEntry {
    const result: ICatalogEntryRelatedEntry = super.toJSON();

    if (this.relationtype) {
      result.relationtype = this.relationtype.value;
      result._relationtype = Extension.serializePrimitiveExtension(this.relationtype);
    }

    if (this.item) {
      result.item = this.item.toJSON();
    }

    return result;
  }

  public clone(): CatalogEntryRelatedEntry {
    return CatalogEntryRelatedEntry.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CatalogEntryRelatedEntry";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
