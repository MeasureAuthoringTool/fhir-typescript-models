/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CatalogEntryRelatedEntry,
  CodeableConcept,
  DomainResource,
  Extension,
  ICatalogEntry,
  Identifier,
  Period,
  PrimitiveBoolean,
  PrimitiveDateTime,
  PublicationStatus,
  Reference,
} from "../internal";

export class CatalogEntry extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CatalogEntry";

  public identifier?: Array<Identifier>;

  public type?: CodeableConcept;

  public orderable?: PrimitiveBoolean;

  public referencedItem?: Reference;

  public additionalIdentifier?: Array<Identifier>;

  public classification?: Array<CodeableConcept>;

  public status?: PublicationStatus;

  public validityPeriod?: Period;

  public validTo?: PrimitiveDateTime;

  public lastUpdated?: PrimitiveDateTime;

  public additionalCharacteristic?: Array<CodeableConcept>;

  public additionalClassification?: Array<CodeableConcept>;

  public relatedEntry?: Array<CatalogEntryRelatedEntry>;

  public static parse(
    json: ICatalogEntry,
    providedInstance: CatalogEntry = new CatalogEntry()
  ): CatalogEntry {
    const newInstance: CatalogEntry = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.orderable) {
      newInstance.orderable = PrimitiveBoolean.parsePrimitive(json.orderable, json._orderable);
    }
    if (json.referencedItem) {
      newInstance.referencedItem = Reference.parse(json.referencedItem);
    }
    if (json.additionalIdentifier) {
      newInstance.additionalIdentifier = json.additionalIdentifier.map((x) => Identifier.parse(x));
    }
    if (json.classification) {
      newInstance.classification = json.classification.map((x) => CodeableConcept.parse(x));
    }
    if (json.status) {
      newInstance.status = PublicationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.validityPeriod) {
      newInstance.validityPeriod = Period.parse(json.validityPeriod);
    }
    if (json.validTo) {
      newInstance.validTo = PrimitiveDateTime.parsePrimitive(json.validTo, json._validTo);
    }
    if (json.lastUpdated) {
      newInstance.lastUpdated = PrimitiveDateTime.parsePrimitive(json.lastUpdated, json._lastUpdated);
    }
    if (json.additionalCharacteristic) {
      newInstance.additionalCharacteristic = json.additionalCharacteristic.map((x) => CodeableConcept.parse(x));
    }
    if (json.additionalClassification) {
      newInstance.additionalClassification = json.additionalClassification.map((x) => CodeableConcept.parse(x));
    }
    if (json.relatedEntry) {
      newInstance.relatedEntry = json.relatedEntry.map((x) => CatalogEntryRelatedEntry.parse(x));
    }
    return newInstance;
  }

  public static isCatalogEntry(input?: unknown): input is CatalogEntry {
    const castInput = input as CatalogEntry;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CatalogEntry";
  }

  public toJSON(): ICatalogEntry {
    const result: ICatalogEntry = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.orderable) {
      result.orderable = this.orderable.value;
      result._orderable = Extension.serializePrimitiveExtension(this.orderable);
    }

    if (this.referencedItem) {
      result.referencedItem = this.referencedItem.toJSON();
    }

    if (this.additionalIdentifier) {
      result.additionalIdentifier = this.additionalIdentifier.map((x) => x.toJSON());
    }

    if (this.classification) {
      result.classification = this.classification.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.validityPeriod) {
      result.validityPeriod = this.validityPeriod.toJSON();
    }

    if (this.validTo) {
      result.validTo = this.validTo.value;
      result._validTo = Extension.serializePrimitiveExtension(this.validTo);
    }

    if (this.lastUpdated) {
      result.lastUpdated = this.lastUpdated.value;
      result._lastUpdated = Extension.serializePrimitiveExtension(this.lastUpdated);
    }

    if (this.additionalCharacteristic) {
      result.additionalCharacteristic = this.additionalCharacteristic.map((x) => x.toJSON());
    }

    if (this.additionalClassification) {
      result.additionalClassification = this.additionalClassification.map((x) => x.toJSON());
    }

    if (this.relatedEntry) {
      result.relatedEntry = this.relatedEntry.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "CatalogEntry";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
