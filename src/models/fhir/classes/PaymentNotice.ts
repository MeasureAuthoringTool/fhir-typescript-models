/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  Identifier,
  IPaymentNotice,
  Money,
  PaymentNoticeStatus,
  PrimitiveDate,
  PrimitiveDateTime,
  Reference,
  FhirType
} from "../internal";

@FhirType("PaymentNotice", "DomainResource")
export class PaymentNotice extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PaymentNotice";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("PaymentNoticeStatus")
  public status?: PaymentNoticeStatus;

  @FhirField("Reference")
  public request?: Reference;

  @FhirField("Reference")
  public response?: Reference;

  @FhirField("PrimitiveDateTime")
  public created?: PrimitiveDateTime;

  @FhirField("Reference")
  public provider?: Reference;

  @FhirField("Reference")
  public payment?: Reference;

  @FhirField("PrimitiveDate")
  public paymentDate?: PrimitiveDate;

  @FhirField("Reference")
  public payee?: Reference;

  @FhirField("Reference")
  public recipient?: Reference;

  @FhirField("Money")
  public amount?: Money;

  @FhirField("CodeableConcept")
  public paymentStatus?: CodeableConcept;

  public static parse(
    json: IPaymentNotice,
    providedInstance: PaymentNotice = new PaymentNotice()
  ): PaymentNotice {
    const newInstance: PaymentNotice = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = PaymentNoticeStatus.parsePrimitive(json.status, json._status);
    }
    if (json.request !== undefined) {
      newInstance.request = Reference.parse(json.request);
    }
    if (json.response !== undefined) {
      newInstance.response = Reference.parse(json.response);
    }
    if (json.created !== undefined) {
      newInstance.created = PrimitiveDateTime.parsePrimitive(json.created, json._created);
    }
    if (json.provider !== undefined) {
      newInstance.provider = Reference.parse(json.provider);
    }
    if (json.payment !== undefined) {
      newInstance.payment = Reference.parse(json.payment);
    }
    if (json.paymentDate !== undefined) {
      newInstance.paymentDate = PrimitiveDate.parsePrimitive(json.paymentDate, json._paymentDate);
    }
    if (json.payee !== undefined) {
      newInstance.payee = Reference.parse(json.payee);
    }
    if (json.recipient !== undefined) {
      newInstance.recipient = Reference.parse(json.recipient);
    }
    if (json.amount !== undefined) {
      newInstance.amount = Money.parse(json.amount);
    }
    if (json.paymentStatus !== undefined) {
      newInstance.paymentStatus = CodeableConcept.parse(json.paymentStatus);
    }
    return newInstance;
  }

  public static isPaymentNotice(input?: unknown): input is PaymentNotice {
    const castInput = input as PaymentNotice;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PaymentNotice";
  }

  public toJSON(): IPaymentNotice {
    const result: IPaymentNotice = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.request) {
      result.request = this.request.toJSON();
    }

    if (this.response) {
      result.response = this.response.toJSON();
    }

    if (this.created) {
      result.created = this.created.value;
      result._created = Extension.serializePrimitiveExtension(this.created);
    }

    if (this.provider) {
      result.provider = this.provider.toJSON();
    }

    if (this.payment) {
      result.payment = this.payment.toJSON();
    }

    if (this.paymentDate) {
      result.paymentDate = this.paymentDate.value;
      result._paymentDate = Extension.serializePrimitiveExtension(this.paymentDate);
    }

    if (this.payee) {
      result.payee = this.payee.toJSON();
    }

    if (this.recipient) {
      result.recipient = this.recipient.toJSON();
    }

    if (this.amount) {
      result.amount = this.amount.toJSON();
    }

    if (this.paymentStatus) {
      result.paymentStatus = this.paymentStatus.toJSON();
    }

    return result;
  }

  public clone(): PaymentNotice {
    return PaymentNotice.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "PaymentNotice";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
