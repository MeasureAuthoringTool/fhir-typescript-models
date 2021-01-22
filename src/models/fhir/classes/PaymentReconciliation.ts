/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
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
  FhirType
} from "../internal";

@FhirType("PaymentReconciliation", "DomainResource")
export class PaymentReconciliation extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PaymentReconciliation";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("PaymentReconciliationStatus")
  public status?: PaymentReconciliationStatus;

  @FhirField("Period")
  public period?: Period;

  @FhirField("PrimitiveDateTime")
  public created?: PrimitiveDateTime;

  @FhirField("Reference")
  public paymentIssuer?: Reference;

  @FhirField("Reference")
  public request?: Reference;

  @FhirField("Reference")
  public requestor?: Reference;

  @FhirField("RemittanceOutcome")
  public outcome?: RemittanceOutcome;

  @FhirField("PrimitiveString")
  public disposition?: PrimitiveString;

  @FhirField("PrimitiveDate")
  public paymentDate?: PrimitiveDate;

  @FhirField("Money")
  public paymentAmount?: Money;

  @FhirField("Identifier")
  public paymentIdentifier?: Identifier;

  @FhirList("PaymentReconciliationDetail")
  public detail?: Array<PaymentReconciliationDetail>;

  @FhirField("CodeableConcept")
  public formCode?: CodeableConcept;

  @FhirList("PaymentReconciliationProcessNote")
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
