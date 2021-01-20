/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  IInvoiceLineItem,
  InvoiceLineItemPriceComponent,
  PrimitivePositiveInt,
  Reference,
  FhirType
} from "../internal";

@FhirType("InvoiceLineItem", "BackboneElement")
export class InvoiceLineItem extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Invoice.LineItem";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitivePositiveInt")
  public sequence?: PrimitivePositiveInt;

  @FhirChoice("Reference", "CodeableConcept")
  public chargeItem?: Reference | CodeableConcept;

  @FhirList("InvoiceLineItemPriceComponent")
  public priceComponent?: Array<InvoiceLineItemPriceComponent>;

  public static parse(
    json: IInvoiceLineItem,
    providedInstance: InvoiceLineItem = new InvoiceLineItem()
  ): InvoiceLineItem {
    const newInstance: InvoiceLineItem = BackboneElement.parse(json, providedInstance);
  
    if (json.sequence !== undefined) {
      newInstance.sequence = PrimitivePositiveInt.parsePrimitive(json.sequence, json._sequence);
    }
    if (json.chargeItemReference !== undefined) {
      newInstance.chargeItem = Reference.parse(json.chargeItemReference);
    }
    if (json.chargeItemCodeableConcept !== undefined) {
      newInstance.chargeItem = CodeableConcept.parse(json.chargeItemCodeableConcept);
    }
    if (json.priceComponent !== undefined) {
      newInstance.priceComponent = json.priceComponent.map((x) => InvoiceLineItemPriceComponent.parse(x));
    }
    return newInstance;
  }

  public static isInvoiceLineItem(input?: unknown): input is InvoiceLineItem {
    const castInput = input as InvoiceLineItem;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "InvoiceLineItem";
  }

  public toJSON(): IInvoiceLineItem {
    const result: IInvoiceLineItem = super.toJSON();

    if (this.sequence) {
      result.sequence = this.sequence.value;
      result._sequence = Extension.serializePrimitiveExtension(this.sequence);
    }

    if (this.chargeItem && Reference.isReference(this.chargeItem)) {
      result.chargeItemReference = this.chargeItem.toJSON();
    }

    if (this.chargeItem && CodeableConcept.isCodeableConcept(this.chargeItem)) {
      result.chargeItemCodeableConcept = this.chargeItem.toJSON();
    }

    if (this.priceComponent) {
      result.priceComponent = this.priceComponent.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): InvoiceLineItem {
    return InvoiceLineItem.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "InvoiceLineItem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
