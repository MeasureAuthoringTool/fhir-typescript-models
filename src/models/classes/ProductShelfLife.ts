/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Identifier,
  IProductShelfLife,
  Quantity,
} from "../internal";

export class ProductShelfLife extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ProductShelfLife";

  public identifier?: Identifier;

  public type?: CodeableConcept;

  public period?: Quantity;

  public specialPrecautionsForStorage?: Array<CodeableConcept>;

  public static parse(
    json: IProductShelfLife,
    providedInstance: ProductShelfLife = new ProductShelfLife()
  ): ProductShelfLife {
    const newInstance: ProductShelfLife = BackboneElement.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.period) {
      newInstance.period = Quantity.parse(json.period);
    }
    if (json.specialPrecautionsForStorage) {
      newInstance.specialPrecautionsForStorage = json.specialPrecautionsForStorage.map((x) => CodeableConcept.parse(x));
    }
    return newInstance;
  }

  public static isProductShelfLife(input?: unknown): input is ProductShelfLife {
    const castInput = input as ProductShelfLife;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ProductShelfLife";
  }

  public toJSON(): IProductShelfLife {
    const result: IProductShelfLife = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.specialPrecautionsForStorage) {
      result.specialPrecautionsForStorage = this.specialPrecautionsForStorage.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ProductShelfLife";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
