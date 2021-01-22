/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CatalogEntryRelatedEntry,
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  ICatalogEntry,
  Identifier,
  Period,
  PrimitiveBoolean,
  PrimitiveDateTime,
  PublicationStatus,
  Reference,
  FhirType
} from "../internal";

@FhirType("CatalogEntry", "DomainResource")
export class CatalogEntry extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CatalogEntry";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("PrimitiveBoolean")
  public orderable?: PrimitiveBoolean;

  @FhirField("Reference")
  public referencedItem?: Reference;

  @FhirList("Identifier")
  public additionalIdentifier?: Array<Identifier>;

  @FhirList("CodeableConcept")
  public classification?: Array<CodeableConcept>;

  @FhirField("PublicationStatus")
  public status?: PublicationStatus;

  @FhirField("Period")
  public validityPeriod?: Period;

  @FhirField("PrimitiveDateTime")
  public validTo?: PrimitiveDateTime;

  @FhirField("PrimitiveDateTime")
  public lastUpdated?: PrimitiveDateTime;

  @FhirList("CodeableConcept")
  public additionalCharacteristic?: Array<CodeableConcept>;

  @FhirList("CodeableConcept")
  public additionalClassification?: Array<CodeableConcept>;

  @FhirList("CatalogEntryRelatedEntry")
  public relatedEntry?: Array<CatalogEntryRelatedEntry>;

  public static parse(
    json: ICatalogEntry,
    providedInstance: CatalogEntry = new CatalogEntry()
  ): CatalogEntry {
    const newInstance: CatalogEntry = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.orderable !== undefined) {
      newInstance.orderable = PrimitiveBoolean.parsePrimitive(json.orderable, json._orderable);
    }
    if (json.referencedItem !== undefined) {
      newInstance.referencedItem = Reference.parse(json.referencedItem);
    }
    if (json.additionalIdentifier !== undefined) {
      newInstance.additionalIdentifier = json.additionalIdentifier.map((x) => Identifier.parse(x));
    }
    if (json.classification !== undefined) {
      newInstance.classification = json.classification.map((x) => CodeableConcept.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = PublicationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.validityPeriod !== undefined) {
      newInstance.validityPeriod = Period.parse(json.validityPeriod);
    }
    if (json.validTo !== undefined) {
      newInstance.validTo = PrimitiveDateTime.parsePrimitive(json.validTo, json._validTo);
    }
    if (json.lastUpdated !== undefined) {
      newInstance.lastUpdated = PrimitiveDateTime.parsePrimitive(json.lastUpdated, json._lastUpdated);
    }
    if (json.additionalCharacteristic !== undefined) {
      newInstance.additionalCharacteristic = json.additionalCharacteristic.map((x) => CodeableConcept.parse(x));
    }
    if (json.additionalClassification !== undefined) {
      newInstance.additionalClassification = json.additionalClassification.map((x) => CodeableConcept.parse(x));
    }
    if (json.relatedEntry !== undefined) {
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

  public clone(): CatalogEntry {
    return CatalogEntry.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CatalogEntry";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
