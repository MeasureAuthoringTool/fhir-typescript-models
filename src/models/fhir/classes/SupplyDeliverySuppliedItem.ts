/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirChoice,
  FhirField,
  ISupplyDeliverySuppliedItem,
  Reference,
  SimpleQuantity,
  FhirType
} from "../internal";

@FhirType("SupplyDeliverySuppliedItem", "BackboneElement")
export class SupplyDeliverySuppliedItem extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SupplyDelivery.SuppliedItem";

  static readonly primaryCodePath: string | null = null;

  @FhirField("SimpleQuantity")
  public quantity?: SimpleQuantity;

  @FhirChoice("CodeableConcept", "Reference")
  public item?: CodeableConcept | Reference;

  public static parse(
    json: ISupplyDeliverySuppliedItem,
    providedInstance: SupplyDeliverySuppliedItem = new SupplyDeliverySuppliedItem()
  ): SupplyDeliverySuppliedItem {
    const newInstance: SupplyDeliverySuppliedItem = BackboneElement.parse(json, providedInstance);
  
    if (json.quantity !== undefined) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    if (json.itemCodeableConcept !== undefined) {
      newInstance.item = CodeableConcept.parse(json.itemCodeableConcept);
    }
    if (json.itemReference !== undefined) {
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

  public clone(): SupplyDeliverySuppliedItem {
    return SupplyDeliverySuppliedItem.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SupplyDeliverySuppliedItem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
