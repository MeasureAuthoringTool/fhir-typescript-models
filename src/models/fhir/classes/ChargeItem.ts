/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  ChargeItemPerformer,
  ChargeItemStatus,
  CodeableConcept,
  DomainResource,
  Extension,
  IChargeItem,
  Identifier,
  Money,
  Period,
  PrimitiveCanonical,
  PrimitiveDateTime,
  PrimitiveDecimal,
  PrimitiveString,
  PrimitiveUri,
  Quantity,
  Reference,
  Timing,
} from "../internal";

export class ChargeItem extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ChargeItem";

  public identifier?: Array<Identifier>;

  public definitionUri?: Array<PrimitiveUri>;

  public definitionCanonical?: Array<PrimitiveCanonical>;

  public status?: ChargeItemStatus;

  public partOf?: Array<Reference>;

  public code?: CodeableConcept;

  public subject?: Reference;

  public context?: Reference;

  public occurrence?: PrimitiveDateTime | Period | Timing;

  public performer?: Array<ChargeItemPerformer>;

  public performingOrganization?: Reference;

  public requestingOrganization?: Reference;

  public costCenter?: Reference;

  public quantity?: Quantity;

  public bodysite?: Array<CodeableConcept>;

  public factorOverride?: PrimitiveDecimal;

  public priceOverride?: Money;

  public overrideReason?: PrimitiveString;

  public enterer?: Reference;

  public enteredDate?: PrimitiveDateTime;

  public reason?: Array<CodeableConcept>;

  public service?: Array<Reference>;

  public product?: Reference | CodeableConcept;

  public account?: Array<Reference>;

  public note?: Array<Annotation>;

  public supportingInformation?: Array<Reference>;

  public static parse(
    json: IChargeItem,
    providedInstance: ChargeItem = new ChargeItem()
  ): ChargeItem {
    const newInstance: ChargeItem = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.definitionUri) {
      newInstance.definitionUri = json.definitionUri.map((x, i) => {
        const ext = json._definitionUri && json._definitionUri[i];
        return PrimitiveUri.parsePrimitive(x, ext);
      });
    }
    if (json.definitionCanonical) {
      newInstance.definitionCanonical = json.definitionCanonical.map((x, i) => {
        const ext = json._definitionCanonical && json._definitionCanonical[i];
        return PrimitiveCanonical.parsePrimitive(x, ext);
      });
    }
    if (json.status) {
      newInstance.status = ChargeItemStatus.parsePrimitive(json.status, json._status);
    }
    if (json.partOf) {
      newInstance.partOf = json.partOf.map((x) => Reference.parse(x));
    }
    if (json.code) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.subject) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.context) {
      newInstance.context = Reference.parse(json.context);
    }
    if (json.occurrenceDateTime) {
      newInstance.occurrence = PrimitiveDateTime.parsePrimitive(json.occurrenceDateTime, json._occurrenceDateTime);
    }
    if (json.occurrencePeriod) {
      newInstance.occurrence = Period.parse(json.occurrencePeriod);
    }
    if (json.occurrenceTiming) {
      newInstance.occurrence = Timing.parse(json.occurrenceTiming);
    }
    if (json.performer) {
      newInstance.performer = json.performer.map((x) => ChargeItemPerformer.parse(x));
    }
    if (json.performingOrganization) {
      newInstance.performingOrganization = Reference.parse(json.performingOrganization);
    }
    if (json.requestingOrganization) {
      newInstance.requestingOrganization = Reference.parse(json.requestingOrganization);
    }
    if (json.costCenter) {
      newInstance.costCenter = Reference.parse(json.costCenter);
    }
    if (json.quantity) {
      newInstance.quantity = Quantity.parse(json.quantity);
    }
    if (json.bodysite) {
      newInstance.bodysite = json.bodysite.map((x) => CodeableConcept.parse(x));
    }
    if (json.factorOverride) {
      newInstance.factorOverride = PrimitiveDecimal.parsePrimitive(json.factorOverride, json._factorOverride);
    }
    if (json.priceOverride) {
      newInstance.priceOverride = Money.parse(json.priceOverride);
    }
    if (json.overrideReason) {
      newInstance.overrideReason = PrimitiveString.parsePrimitive(json.overrideReason, json._overrideReason);
    }
    if (json.enterer) {
      newInstance.enterer = Reference.parse(json.enterer);
    }
    if (json.enteredDate) {
      newInstance.enteredDate = PrimitiveDateTime.parsePrimitive(json.enteredDate, json._enteredDate);
    }
    if (json.reason) {
      newInstance.reason = json.reason.map((x) => CodeableConcept.parse(x));
    }
    if (json.service) {
      newInstance.service = json.service.map((x) => Reference.parse(x));
    }
    if (json.productReference) {
      newInstance.product = Reference.parse(json.productReference);
    }
    if (json.productCodeableConcept) {
      newInstance.product = CodeableConcept.parse(json.productCodeableConcept);
    }
    if (json.account) {
      newInstance.account = json.account.map((x) => Reference.parse(x));
    }
    if (json.note) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.supportingInformation) {
      newInstance.supportingInformation = json.supportingInformation.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isChargeItem(input?: unknown): input is ChargeItem {
    const castInput = input as ChargeItem;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ChargeItem";
  }

  public toJSON(): IChargeItem {
    const result: IChargeItem = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.definitionUri) {
      result.definitionUri = this.definitionUri.filter(x => !!x).map(x => x.value) as typeof result.definitionUri;
      result._definitionUri = Extension.serializePrimitiveExtensionArray(this.definitionUri);
    }

    if (this.definitionCanonical) {
      result.definitionCanonical = this.definitionCanonical.filter(x => !!x).map(x => x.value) as typeof result.definitionCanonical;
      result._definitionCanonical = Extension.serializePrimitiveExtensionArray(this.definitionCanonical);
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.partOf) {
      result.partOf = this.partOf.map((x) => x.toJSON());
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.context) {
      result.context = this.context.toJSON();
    }

    if (this.occurrence && PrimitiveDateTime.isPrimitiveDateTime(this.occurrence)) {
      result.occurrenceDateTime = this.occurrence.value;
      result._occurrenceDateTime = Extension.serializePrimitiveExtension(this.occurrence);
    }

    if (this.occurrence && Period.isPeriod(this.occurrence)) {
      result.occurrencePeriod = this.occurrence.toJSON();
    }

    if (this.occurrence && Timing.isTiming(this.occurrence)) {
      result.occurrenceTiming = this.occurrence.toJSON();
    }

    if (this.performer) {
      result.performer = this.performer.map((x) => x.toJSON());
    }

    if (this.performingOrganization) {
      result.performingOrganization = this.performingOrganization.toJSON();
    }

    if (this.requestingOrganization) {
      result.requestingOrganization = this.requestingOrganization.toJSON();
    }

    if (this.costCenter) {
      result.costCenter = this.costCenter.toJSON();
    }

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    if (this.bodysite) {
      result.bodysite = this.bodysite.map((x) => x.toJSON());
    }

    if (this.factorOverride) {
      result.factorOverride = this.factorOverride.value;
      result._factorOverride = Extension.serializePrimitiveExtension(this.factorOverride);
    }

    if (this.priceOverride) {
      result.priceOverride = this.priceOverride.toJSON();
    }

    if (this.overrideReason) {
      result.overrideReason = this.overrideReason.value;
      result._overrideReason = Extension.serializePrimitiveExtension(this.overrideReason);
    }

    if (this.enterer) {
      result.enterer = this.enterer.toJSON();
    }

    if (this.enteredDate) {
      result.enteredDate = this.enteredDate.value;
      result._enteredDate = Extension.serializePrimitiveExtension(this.enteredDate);
    }

    if (this.reason) {
      result.reason = this.reason.map((x) => x.toJSON());
    }

    if (this.service) {
      result.service = this.service.map((x) => x.toJSON());
    }

    if (this.product && Reference.isReference(this.product)) {
      result.productReference = this.product.toJSON();
    }

    if (this.product && CodeableConcept.isCodeableConcept(this.product)) {
      result.productCodeableConcept = this.product.toJSON();
    }

    if (this.account) {
      result.account = this.account.map((x) => x.toJSON());
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    if (this.supportingInformation) {
      result.supportingInformation = this.supportingInformation.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ChargeItem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
