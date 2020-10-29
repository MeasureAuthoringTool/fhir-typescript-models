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
  FieldMetadata
} from "../internal";

export class MedicinalProductPackaged extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductPackaged";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "subject",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "description",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "legalStatusOfSupply",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "marketingStatus",
      fieldType: [MarketingStatus],
      isArray: true
    }, {
      fieldName: "marketingAuthorization",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "manufacturer",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "batchIdentifier",
      fieldType: [MedicinalProductPackagedBatchIdentifier],
      isArray: true
    }, {
      fieldName: "packageItem",
      fieldType: [MedicinalProductPackagedPackageItem],
      isArray: true
    }];
  }

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
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.subject !== undefined) {
      newInstance.subject = json.subject.map((x) => Reference.parse(x));
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.legalStatusOfSupply !== undefined) {
      newInstance.legalStatusOfSupply = CodeableConcept.parse(json.legalStatusOfSupply);
    }
    if (json.marketingStatus !== undefined) {
      newInstance.marketingStatus = json.marketingStatus.map((x) => MarketingStatus.parse(x));
    }
    if (json.marketingAuthorization !== undefined) {
      newInstance.marketingAuthorization = Reference.parse(json.marketingAuthorization);
    }
    if (json.manufacturer !== undefined) {
      newInstance.manufacturer = json.manufacturer.map((x) => Reference.parse(x));
    }
    if (json.batchIdentifier !== undefined) {
      newInstance.batchIdentifier = json.batchIdentifier.map((x) => MedicinalProductPackagedBatchIdentifier.parse(x));
    }
    if (json.packageItem !== undefined) {
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

  public clone(): MedicinalProductPackaged {
    return MedicinalProductPackaged.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductPackaged";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
