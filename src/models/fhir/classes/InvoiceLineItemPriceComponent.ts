/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  IInvoiceLineItemPriceComponent,
  InvoicePriceComponentType,
  Money,
  PrimitiveDecimal,
  FhirType
} from "../internal";

@FhirType("InvoiceLineItemPriceComponent", "BackboneElement")
export class InvoiceLineItemPriceComponent extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Invoice.LineItem.PriceComponent";

  static readonly primaryCodePath: string | null = null;

  @FhirField("InvoicePriceComponentType")
  public type?: InvoicePriceComponentType;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirField("PrimitiveDecimal")
  public factor?: PrimitiveDecimal;

  @FhirField("Money")
  public amount?: Money;

  public static parse(
    json: IInvoiceLineItemPriceComponent,
    providedInstance: InvoiceLineItemPriceComponent = new InvoiceLineItemPriceComponent()
  ): InvoiceLineItemPriceComponent {
    const newInstance: InvoiceLineItemPriceComponent = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = InvoicePriceComponentType.parsePrimitive(json.type, json._type);
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.factor !== undefined) {
      newInstance.factor = PrimitiveDecimal.parsePrimitive(json.factor, json._factor);
    }
    if (json.amount !== undefined) {
      newInstance.amount = Money.parse(json.amount);
    }
    return newInstance;
  }

  public static isInvoiceLineItemPriceComponent(input?: unknown): input is InvoiceLineItemPriceComponent {
    const castInput = input as InvoiceLineItemPriceComponent;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "InvoiceLineItemPriceComponent";
  }

  public toJSON(): IInvoiceLineItemPriceComponent {
    const result: IInvoiceLineItemPriceComponent = super.toJSON();

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.factor) {
      result.factor = this.factor.value;
      result._factor = Extension.serializePrimitiveExtension(this.factor);
    }

    if (this.amount) {
      result.amount = this.amount.toJSON();
    }

    return result;
  }

  public clone(): InvoiceLineItemPriceComponent {
    return InvoiceLineItemPriceComponent.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "InvoiceLineItemPriceComponent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
