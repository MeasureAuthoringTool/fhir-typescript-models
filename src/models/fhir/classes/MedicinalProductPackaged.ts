/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  IMedicinalProductPackaged,
  MarketingStatus,
  MedicinalProductPackagedBatchIdentifier,
  MedicinalProductPackagedPackageItem,
  PrimitiveString,
  Reference,
} from "../internal";

export class MedicinalProductPackaged extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductPackaged";

  public identifier?: Array<Identifier>;

  public subject?: Array<Reference>;

  public description?: PrimitiveString;

  public legalStatusOfSupply?: CodeableConcept;

  public marketingStatus?: Array<MarketingStatus>;

  public marketingAuthorization?: Reference;

  public manufacturer?: Array<Reference>;

  public batchIdentifier?: Array<MedicinalProductPackagedBatchIdentifier>;

  public packageItem?: Array<MedicinalProductPackagedPackageItem>;

  public static parse(
    json: IMedicinalProductPackaged,
    providedInstance: MedicinalProductPackaged = new MedicinalProductPackaged()
  ): MedicinalProductPackaged {
    const newInstance: MedicinalProductPackaged = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.subject) {
      newInstance.subject = json.subject.map((x) => Reference.parse(x));
    }
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.legalStatusOfSupply) {
      newInstance.legalStatusOfSupply = CodeableConcept.parse(json.legalStatusOfSupply);
    }
    if (json.marketingStatus) {
      newInstance.marketingStatus = json.marketingStatus.map((x) => MarketingStatus.parse(x));
    }
    if (json.marketingAuthorization) {
      newInstance.marketingAuthorization = Reference.parse(json.marketingAuthorization);
    }
    if (json.manufacturer) {
      newInstance.manufacturer = json.manufacturer.map((x) => Reference.parse(x));
    }
    if (json.batchIdentifier) {
      newInstance.batchIdentifier = json.batchIdentifier.map((x) => MedicinalProductPackagedBatchIdentifier.parse(x));
    }
    if (json.packageItem) {
      newInstance.packageItem = json.packageItem.map((x) => MedicinalProductPackagedPackageItem.parse(x));
    }
    return newInstance;
  }

  public static isMedicinalProductPackaged(input?: unknown): input is MedicinalProductPackaged {
    const castInput = input as MedicinalProductPackaged;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductPackaged";
  }

  public toJSON(): IMedicinalProductPackaged {
    const result: IMedicinalProductPackaged = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.subject) {
      result.subject = this.subject.map((x) => x.toJSON());
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.legalStatusOfSupply) {
      result.legalStatusOfSupply = this.legalStatusOfSupply.toJSON();
    }

    if (this.marketingStatus) {
      result.marketingStatus = this.marketingStatus.map((x) => x.toJSON());
    }

    if (this.marketingAuthorization) {
      result.marketingAuthorization = this.marketingAuthorization.toJSON();
    }

    if (this.manufacturer) {
      result.manufacturer = this.manufacturer.map((x) => x.toJSON());
    }

    if (this.batchIdentifier) {
      result.batchIdentifier = this.batchIdentifier.map((x) => x.toJSON());
    }

    if (this.packageItem) {
      result.packageItem = this.packageItem.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MedicinalProductPackaged";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
