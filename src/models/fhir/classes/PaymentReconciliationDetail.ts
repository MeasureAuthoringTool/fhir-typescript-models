/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  Identifier,
  IPaymentReconciliationDetail,
  Money,
  PrimitiveDate,
  Reference,
  FhirType
} from "../internal";

@FhirType("PaymentReconciliationDetail", "BackboneElement")
export class PaymentReconciliationDetail extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PaymentReconciliation.Detail";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Identifier")
  public identifier?: Identifier;

  @FhirField("Identifier")
  public predecessor?: Identifier;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("Reference")
  public request?: Reference;

  @FhirField("Reference")
  public submitter?: Reference;

  @FhirField("Reference")
  public response?: Reference;

  @FhirField("PrimitiveDate")
  public date?: PrimitiveDate;

  @FhirField("Reference")
  public responsible?: Reference;

  @FhirField("Reference")
  public payee?: Reference;

  @FhirField("Money")
  public amount?: Money;

  public static parse(
    json: IPaymentReconciliationDetail,
    providedInstance: PaymentReconciliationDetail = new PaymentReconciliationDetail()
  ): PaymentReconciliationDetail {
    const newInstance: PaymentReconciliationDetail = BackboneElement.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.predecessor !== undefined) {
      newInstance.predecessor = Identifier.parse(json.predecessor);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.request !== undefined) {
      newInstance.request = Reference.parse(json.request);
    }
    if (json.submitter !== undefined) {
      newInstance.submitter = Reference.parse(json.submitter);
    }
    if (json.response !== undefined) {
      newInstance.response = Reference.parse(json.response);
    }
    if (json.date !== undefined) {
      newInstance.date = PrimitiveDate.parsePrimitive(json.date, json._date);
    }
    if (json.responsible !== undefined) {
      newInstance.responsible = Reference.parse(json.responsible);
    }
    if (json.payee !== undefined) {
      newInstance.payee = Reference.parse(json.payee);
    }
    if (json.amount !== undefined) {
      newInstance.amount = Money.parse(json.amount);
    }
    return newInstance;
  }

  public static isPaymentReconciliationDetail(input?: unknown): input is PaymentReconciliationDetail {
    const castInput = input as PaymentReconciliationDetail;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PaymentReconciliationDetail";
  }

  public toJSON(): IPaymentReconciliationDetail {
    const result: IPaymentReconciliationDetail = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    if (this.predecessor) {
      result.predecessor = this.predecessor.toJSON();
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.request) {
      result.request = this.request.toJSON();
    }

    if (this.submitter) {
      result.submitter = this.submitter.toJSON();
    }

    if (this.response) {
      result.response = this.response.toJSON();
    }

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.responsible) {
      result.responsible = this.responsible.toJSON();
    }

    if (this.payee) {
      result.payee = this.payee.toJSON();
    }

    if (this.amount) {
      result.amount = this.amount.toJSON();
    }

    return result;
  }

  public clone(): PaymentReconciliationDetail {
    return PaymentReconciliationDetail.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "PaymentReconciliationDetail";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
