/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BiologicallyDerivedProductCategory,
  BiologicallyDerivedProductCollection,
  BiologicallyDerivedProductManipulation,
  BiologicallyDerivedProductProcessing,
  BiologicallyDerivedProductStatus,
  BiologicallyDerivedProductStorage,
  CodeableConcept,
  DomainResource,
  Extension,
  IBiologicallyDerivedProduct,
  Identifier,
  PrimitiveInteger,
  Reference,
} from "../internal";

export class BiologicallyDerivedProduct extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "BiologicallyDerivedProduct";

  public identifier?: Array<Identifier>;

  public productCategory?: BiologicallyDerivedProductCategory;

  public productCode?: CodeableConcept;

  public status?: BiologicallyDerivedProductStatus;

  public request?: Array<Reference>;

  public quantity?: PrimitiveInteger;

  public parent?: Array<Reference>;

  public collection?: BiologicallyDerivedProductCollection;

  public processing?: Array<BiologicallyDerivedProductProcessing>;

  public manipulation?: BiologicallyDerivedProductManipulation;

  public storage?: Array<BiologicallyDerivedProductStorage>;

  public static parse(
    json: IBiologicallyDerivedProduct,
    providedInstance: BiologicallyDerivedProduct = new BiologicallyDerivedProduct()
  ): BiologicallyDerivedProduct {
    const newInstance: BiologicallyDerivedProduct = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.productCategory) {
      newInstance.productCategory = BiologicallyDerivedProductCategory.parsePrimitive(json.productCategory, json._productCategory);
    }
    if (json.productCode) {
      newInstance.productCode = CodeableConcept.parse(json.productCode);
    }
    if (json.status) {
      newInstance.status = BiologicallyDerivedProductStatus.parsePrimitive(json.status, json._status);
    }
    if (json.request) {
      newInstance.request = json.request.map((x) => Reference.parse(x));
    }
    if (json.quantity) {
      newInstance.quantity = PrimitiveInteger.parsePrimitive(json.quantity, json._quantity);
    }
    if (json.parent) {
      newInstance.parent = json.parent.map((x) => Reference.parse(x));
    }
    if (json.collection) {
      newInstance.collection = BiologicallyDerivedProductCollection.parse(json.collection);
    }
    if (json.processing) {
      newInstance.processing = json.processing.map((x) => BiologicallyDerivedProductProcessing.parse(x));
    }
    if (json.manipulation) {
      newInstance.manipulation = BiologicallyDerivedProductManipulation.parse(json.manipulation);
    }
    if (json.storage) {
      newInstance.storage = json.storage.map((x) => BiologicallyDerivedProductStorage.parse(x));
    }
    return newInstance;
  }

  public static isBiologicallyDerivedProduct(input?: unknown): input is BiologicallyDerivedProduct {
    const castInput = input as BiologicallyDerivedProduct;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "BiologicallyDerivedProduct";
  }

  public toJSON(): IBiologicallyDerivedProduct {
    const result: IBiologicallyDerivedProduct = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.productCategory) {
      result.productCategory = this.productCategory.value;
      result._productCategory = Extension.serializePrimitiveExtension(this.productCategory);
    }

    if (this.productCode) {
      result.productCode = this.productCode.toJSON();
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.request) {
      result.request = this.request.map((x) => x.toJSON());
    }

    if (this.quantity) {
      result.quantity = this.quantity.value;
      result._quantity = Extension.serializePrimitiveExtension(this.quantity);
    }

    if (this.parent) {
      result.parent = this.parent.map((x) => x.toJSON());
    }

    if (this.collection) {
      result.collection = this.collection.toJSON();
    }

    if (this.processing) {
      result.processing = this.processing.map((x) => x.toJSON());
    }

    if (this.manipulation) {
      result.manipulation = this.manipulation.toJSON();
    }

    if (this.storage) {
      result.storage = this.storage.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "BiologicallyDerivedProduct";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
