/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Identifier,
  IMedicinalProductPackagedPackageItem,
  ProdCharacteristic,
  ProductShelfLife,
  Quantity,
  Reference,
} from "../internal";

export class MedicinalProductPackagedPackageItem extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductPackaged.PackageItem";

  public identifier?: Array<Identifier>;

  public type?: CodeableConcept;

  public quantity?: Quantity;

  public material?: Array<CodeableConcept>;

  public alternateMaterial?: Array<CodeableConcept>;

  public device?: Array<Reference>;

  public manufacturedItem?: Array<Reference>;

  public packageItem?: Array<MedicinalProductPackagedPackageItem>;

  public physicalCharacteristics?: ProdCharacteristic;

  public otherCharacteristics?: Array<CodeableConcept>;

  public shelfLifeStorage?: Array<ProductShelfLife>;

  public manufacturer?: Array<Reference>;

  public static parse(
    json: IMedicinalProductPackagedPackageItem,
    providedInstance: MedicinalProductPackagedPackageItem = new MedicinalProductPackagedPackageItem()
  ): MedicinalProductPackagedPackageItem {
    const newInstance: MedicinalProductPackagedPackageItem = BackboneElement.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.quantity) {
      newInstance.quantity = Quantity.parse(json.quantity);
    }
    if (json.material) {
      newInstance.material = json.material.map((x) => CodeableConcept.parse(x));
    }
    if (json.alternateMaterial) {
      newInstance.alternateMaterial = json.alternateMaterial.map((x) => CodeableConcept.parse(x));
    }
    if (json.device) {
      newInstance.device = json.device.map((x) => Reference.parse(x));
    }
    if (json.manufacturedItem) {
      newInstance.manufacturedItem = json.manufacturedItem.map((x) => Reference.parse(x));
    }
    if (json.packageItem) {
      newInstance.packageItem = json.packageItem.map((x) => MedicinalProductPackagedPackageItem.parse(x));
    }
    if (json.physicalCharacteristics) {
      newInstance.physicalCharacteristics = ProdCharacteristic.parse(json.physicalCharacteristics);
    }
    if (json.otherCharacteristics) {
      newInstance.otherCharacteristics = json.otherCharacteristics.map((x) => CodeableConcept.parse(x));
    }
    if (json.shelfLifeStorage) {
      newInstance.shelfLifeStorage = json.shelfLifeStorage.map((x) => ProductShelfLife.parse(x));
    }
    if (json.manufacturer) {
      newInstance.manufacturer = json.manufacturer.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isMedicinalProductPackagedPackageItem(input?: unknown): input is MedicinalProductPackagedPackageItem {
    const castInput = input as MedicinalProductPackagedPackageItem;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductPackagedPackageItem";
  }

  public toJSON(): IMedicinalProductPackagedPackageItem {
    const result: IMedicinalProductPackagedPackageItem = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    if (this.material) {
      result.material = this.material.map((x) => x.toJSON());
    }

    if (this.alternateMaterial) {
      result.alternateMaterial = this.alternateMaterial.map((x) => x.toJSON());
    }

    if (this.device) {
      result.device = this.device.map((x) => x.toJSON());
    }

    if (this.manufacturedItem) {
      result.manufacturedItem = this.manufacturedItem.map((x) => x.toJSON());
    }

    if (this.packageItem) {
      result.packageItem = this.packageItem.map((x) => x.toJSON());
    }

    if (this.physicalCharacteristics) {
      result.physicalCharacteristics = this.physicalCharacteristics.toJSON();
    }

    if (this.otherCharacteristics) {
      result.otherCharacteristics = this.otherCharacteristics.map((x) => x.toJSON());
    }

    if (this.shelfLifeStorage) {
      result.shelfLifeStorage = this.shelfLifeStorage.map((x) => x.toJSON());
    }

    if (this.manufacturer) {
      result.manufacturer = this.manufacturer.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MedicinalProductPackagedPackageItem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
