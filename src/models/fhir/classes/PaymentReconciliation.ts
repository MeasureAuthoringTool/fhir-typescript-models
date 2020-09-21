/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  IPaymentReconciliation,
  Money,
  PaymentReconciliationDetail,
  PaymentReconciliationProcessNote,
  PaymentReconciliationStatus,
  Period,
  PrimitiveDate,
  PrimitiveDateTime,
  PrimitiveString,
  Reference,
  RemittanceOutcome,
} from "../internal";

export class PaymentReconciliation extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PaymentReconciliation";
  
  static readonly primaryCodePath: string | null = null;

  public identifier?: Array<Identifier>;

  public status?: PaymentReconciliationStatus;

  public period?: Period;

  public created?: PrimitiveDateTime;

  public paymentIssuer?: Reference;

  public request?: Reference;

  public requestor?: Reference;

  public outcome?: RemittanceOutcome;

  public disposition?: PrimitiveString;

  public paymentDate?: PrimitiveDate;

  public paymentAmount?: Money;

  public paymentIdentifier?: Identifier;

  public detail?: Array<PaymentReconciliationDetail>;

  public formCode?: CodeableConcept;

  public processNote?: Array<PaymentReconciliationProcessNote>;

  public static parse(
    json: IPaymentReconciliation,
    providedInstance: PaymentReconciliation = new PaymentReconciliation()
  ): PaymentReconciliation {
    const newInstance: PaymentReconciliation = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = PaymentReconciliationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.created !== undefined) {
      newInstance.created = PrimitiveDateTime.parsePrimitive(json.created, json._created);
    }
    if (json.paymentIssuer !== undefined) {
      newInstance.paymentIssuer = Reference.parse(json.paymentIssuer);
    }
    if (json.request !== undefined) {
      newInstance.request = Reference.parse(json.request);
    }
    if (json.requestor !== undefined) {
      newInstance.requestor = Reference.parse(json.requestor);
    }
    if (json.outcome !== undefined) {
      newInstance.outcome = RemittanceOutcome.parsePrimitive(json.outcome, json._outcome);
    }
    if (json.disposition !== undefined) {
      newInstance.disposition = PrimitiveString.parsePrimitive(json.disposition, json._disposition);
    }
    if (json.paymentDate !== undefined) {
      newInstance.paymentDate = PrimitiveDate.parsePrimitive(json.paymentDate, json._paymentDate);
    }
    if (json.paymentAmount !== undefined) {
      newInstance.paymentAmount = Money.parse(json.paymentAmount);
    }
    if (json.paymentIdentifier !== undefined) {
      newInstance.paymentIdentifier = Identifier.parse(json.paymentIdentifier);
    }
    if (json.detail !== undefined) {
      newInstance.detail = json.detail.map((x) => PaymentReconciliationDetail.parse(x));
    }
    if (json.formCode !== undefined) {
      newInstance.formCode = CodeableConcept.parse(json.formCode);
    }
    if (json.processNote !== undefined) {
      newInstance.processNote = json.processNote.map((x) => PaymentReconciliationProcessNote.parse(x));
    }
    return newInstance;
  }

  public static isPaymentReconciliation(input?: unknown): input is PaymentReconciliation {
    const castInput = input as PaymentReconciliation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PaymentReconciliation";
  }

  public toJSON(): IPaymentReconciliation {
    const result: IPaymentReconciliation = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.created) {
      result.created = this.created.value;
      result._created = Extension.serializePrimitiveExtension(this.created);
    }

    if (this.paymentIssuer) {
      result.paymentIssuer = this.paymentIssuer.toJSON();
    }

    if (this.request) {
      result.request = this.request.toJSON();
    }

    if (this.requestor) {
      result.requestor = this.requestor.toJSON();
    }

    if (this.outcome) {
      result.outcome = this.outcome.value;
      result._outcome = Extension.serializePrimitiveExtension(this.outcome);
    }

    if (this.disposition) {
      result.disposition = this.disposition.value;
      result._disposition = Extension.serializePrimitiveExtension(this.disposition);
    }

    if (this.paymentDate) {
      result.paymentDate = this.paymentDate.value;
      result._paymentDate = Extension.serializePrimitiveExtension(this.paymentDate);
    }

    if (this.paymentAmount) {
      result.paymentAmount = this.paymentAmount.toJSON();
    }

    if (this.paymentIdentifier) {
      result.paymentIdentifier = this.paymentIdentifier.toJSON();
    }

    if (this.detail) {
      result.detail = this.detail.map((x) => x.toJSON());
    }

    if (this.formCode) {
      result.formCode = this.formCode.toJSON();
    }

    if (this.processNote) {
      result.processNote = this.processNote.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): PaymentReconciliation {
    return PaymentReconciliation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "PaymentReconciliation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
