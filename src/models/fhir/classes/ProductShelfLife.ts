/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Identifier,
  IProductShelfLife,
  Quantity,
  FieldMetadata
} from "../internal";

export class ProductShelfLife extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ProductShelfLife";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: false
    }, {
      fieldName: "type",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "period",
      fieldType: [Quantity],
      isArray: false
    }, {
      fieldName: "specialPrecautionsForStorage",
      fieldType: [CodeableConcept],
      isArray: true
    }];
  }

  public identifier?: Identifier;

  public type?: CodeableConcept;

  public period?: Quantity;

  public specialPrecautionsForStorage?: Array<CodeableConcept>;

  public static parse(
    json: IProductShelfLife,
    providedInstance: ProductShelfLife = new ProductShelfLife()
  ): ProductShelfLife {
    const newInstance: ProductShelfLife = BackboneElement.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.period !== undefined) {
      newInstance.period = Quantity.parse(json.period);
    }
    if (json.specialPrecautionsForStorage !== undefined) {
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

  public clone(): ProductShelfLife {
    return ProductShelfLife.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ProductShelfLife";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
