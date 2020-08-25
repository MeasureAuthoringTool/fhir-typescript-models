/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CatalogEntryRelationType,
  Extension,
  ICatalogEntryRelatedEntry,
  Reference,
} from "../internal";

export class CatalogEntryRelatedEntry extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CatalogEntry.RelatedEntry";

  public relationtype?: CatalogEntryRelationType;

  public item?: Reference;

  public static parse(
    json: ICatalogEntryRelatedEntry,
    providedInstance: CatalogEntryRelatedEntry = new CatalogEntryRelatedEntry()
  ): CatalogEntryRelatedEntry {
    const newInstance: CatalogEntryRelatedEntry = BackboneElement.parse(json, providedInstance);
  
    if (json.relationtype) {
      newInstance.relationtype = CatalogEntryRelationType.parsePrimitive(json.relationtype, json._relationtype);
    }
    if (json.item) {
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
  
  public getTypeName(): string {
    return "CatalogEntryRelatedEntry";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
