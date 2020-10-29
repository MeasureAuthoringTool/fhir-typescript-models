/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  IInvoice,
  InvoiceLineItem,
  InvoiceLineItemPriceComponent,
  InvoiceParticipant,
  InvoiceStatus,
  Money,
  PrimitiveDateTime,
  PrimitiveMarkdown,
  PrimitiveString,
  Reference,
  FieldMetadata
} from "../internal";

export class Invoice extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Invoice";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "status",
      fieldType: [InvoiceStatus],
      isArray: false
    }, {
      fieldName: "cancelledReason",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "type",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "subject",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "recipient",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "date",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "participant",
      fieldType: [InvoiceParticipant],
      isArray: true
    }, {
      fieldName: "issuer",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "account",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "lineItem",
      fieldType: [InvoiceLineItem],
      isArray: true
    }, {
      fieldName: "totalPriceComponent",
      fieldType: [InvoiceLineItemPriceComponent],
      isArray: true
    }, {
      fieldName: "totalNet",
      fieldType: [Money],
      isArray: false
    }, {
      fieldName: "totalGross",
      fieldType: [Money],
      isArray: false
    }, {
      fieldName: "paymentTerms",
      fieldType: [PrimitiveMarkdown],
      isArray: false
    }, {
      fieldName: "note",
      fieldType: [Annotation],
      isArray: true
    }];
  }

  public identifier?: Array<Identifier>;

  public status?: InvoiceStatus;

  public cancelledReason?: PrimitiveString;

  public type?: CodeableConcept;

  public subject?: Reference;

  public recipient?: Reference;

  public date?: PrimitiveDateTime;

  public participant?: Array<InvoiceParticipant>;

  public issuer?: Reference;

  public account?: Reference;

  public lineItem?: Array<InvoiceLineItem>;

  public totalPriceComponent?: Array<InvoiceLineItemPriceComponent>;

  public totalNet?: Money;

  public totalGross?: Money;

  public paymentTerms?: PrimitiveMarkdown;

  public note?: Array<Annotation>;

  public static parse(
    json: IInvoice,
    providedInstance: Invoice = new Invoice()
  ): Invoice {
    const newInstance: Invoice = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = InvoiceStatus.parsePrimitive(json.status, json._status);
    }
    if (json.cancelledReason !== undefined) {
      newInstance.cancelledReason = PrimitiveString.parsePrimitive(json.cancelledReason, json._cancelledReason);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.recipient !== undefined) {
      newInstance.recipient = Reference.parse(json.recipient);
    }
    if (json.date !== undefined) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.participant !== undefined) {
      newInstance.participant = json.participant.map((x) => InvoiceParticipant.parse(x));
    }
    if (json.issuer !== undefined) {
      newInstance.issuer = Reference.parse(json.issuer);
    }
    if (json.account !== undefined) {
      newInstance.account = Reference.parse(json.account);
    }
    if (json.lineItem !== undefined) {
      newInstance.lineItem = json.lineItem.map((x) => InvoiceLineItem.parse(x));
    }
    if (json.totalPriceComponent !== undefined) {
      newInstance.totalPriceComponent = json.totalPriceComponent.map((x) => InvoiceLineItemPriceComponent.parse(x));
    }
    if (json.totalNet !== undefined) {
      newInstance.totalNet = Money.parse(json.totalNet);
    }
    if (json.totalGross !== undefined) {
      newInstance.totalGross = Money.parse(json.totalGross);
    }
    if (json.paymentTerms !== undefined) {
      newInstance.paymentTerms = PrimitiveMarkdown.parsePrimitive(json.paymentTerms, json._paymentTerms);
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    return newInstance;
  }

  public static isInvoice(input?: unknown): input is Invoice {
    const castInput = input as Invoice;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Invoice";
  }

  public toJSON(): IInvoice {
    const result: IInvoice = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.cancelledReason) {
      result.cancelledReason = this.cancelledReason.value;
      result._cancelledReason = Extension.serializePrimitiveExtension(this.cancelledReason);
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.recipient) {
      result.recipient = this.recipient.toJSON();
    }

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.participant) {
      result.participant = this.participant.map((x) => x.toJSON());
    }

    if (this.issuer) {
      result.issuer = this.issuer.toJSON();
    }

    if (this.account) {
      result.account = this.account.toJSON();
    }

    if (this.lineItem) {
      result.lineItem = this.lineItem.map((x) => x.toJSON());
    }

    if (this.totalPriceComponent) {
      result.totalPriceComponent = this.totalPriceComponent.map((x) => x.toJSON());
    }

    if (this.totalNet) {
      result.totalNet = this.totalNet.toJSON();
    }

    if (this.totalGross) {
      result.totalGross = this.totalGross.toJSON();
    }

    if (this.paymentTerms) {
      result.paymentTerms = this.paymentTerms.value;
      result._paymentTerms = Extension.serializePrimitiveExtension(this.paymentTerms);
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): Invoice {
    return Invoice.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Invoice";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
