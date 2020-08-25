/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  ISupplyDeliverySuppliedItem,
  Reference,
  SimpleQuantity,
} from "../internal";

export class SupplyDeliverySuppliedItem extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SupplyDelivery.SuppliedItem";

  public quantity?: SimpleQuantity;

  public item?: CodeableConcept | Reference;

  public static parse(
    json: ISupplyDeliverySuppliedItem,
    providedInstance: SupplyDeliverySuppliedItem = new SupplyDeliverySuppliedItem()
  ): SupplyDeliverySuppliedItem {
    const newInstance: SupplyDeliverySuppliedItem = BackboneElement.parse(json, providedInstance);
  
    if (json.quantity) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    if (json.itemCodeableConcept) {
      newInstance.item = CodeableConcept.parse(json.itemCodeableConcept);
    }
    if (json.itemReference) {
      newInstance.item = Reference.parse(json.itemReference);
    }
    return newInstance;
  }

  public static isSupplyDeliverySuppliedItem(input?: unknown): input is SupplyDeliverySuppliedItem {
    const castInput = input as SupplyDeliverySuppliedItem;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SupplyDeliverySuppliedItem";
  }

  public toJSON(): ISupplyDeliverySuppliedItem {
    const result: ISupplyDeliverySuppliedItem = super.toJSON();

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    if (this.item && CodeableConcept.isCodeableConcept(this.item)) {
      result.itemCodeableConcept = this.item.toJSON();
    }

    if (this.item && Reference.isReference(this.item)) {
      result.itemReference = this.item.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "SupplyDeliverySuppliedItem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
