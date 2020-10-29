/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  IPaymentNotice,
  Money,
  PaymentNoticeStatus,
  PrimitiveDate,
  PrimitiveDateTime,
  Reference,
  FieldMetadata
} from "../internal";

export class PaymentNotice extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PaymentNotice";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "status",
      fieldType: [PaymentNoticeStatus],
      isArray: false
    }, {
      fieldName: "request",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "response",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "created",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "provider",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "payment",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "paymentDate",
      fieldType: [PrimitiveDate],
      isArray: false
    }, {
      fieldName: "payee",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "recipient",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "amount",
      fieldType: [Money],
      isArray: false
    }, {
      fieldName: "paymentStatus",
      fieldType: [CodeableConcept],
      isArray: false
    }];
  }

  public identifier?: Array<Identifier>;

  public status?: PaymentNoticeStatus;

  public request?: Reference;

  public response?: Reference;

  public created?: PrimitiveDateTime;

  public provider?: Reference;

  public payment?: Reference;

  public paymentDate?: PrimitiveDate;

  public payee?: Reference;

  public recipient?: Reference;

  public amount?: Money;

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
