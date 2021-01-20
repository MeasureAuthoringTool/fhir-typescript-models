/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Annotation,
  ChargeItemPerformer,
  ChargeItemStatus,
  CodeableConcept,
  DomainResource,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
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
  FhirType
} from "../internal";

@FhirType("ChargeItem", "DomainResource")
export class ChargeItem extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ChargeItem";

  static readonly primaryCodePath: string | null = "code";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirList("PrimitiveUri")
  public definitionUri?: Array<PrimitiveUri>;

  @FhirList("PrimitiveCanonical")
  public definitionCanonical?: Array<PrimitiveCanonical>;

  @FhirField("ChargeItemStatus")
  public status?: ChargeItemStatus;

  @FhirList("Reference")
  public partOf?: Array<Reference>;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirField("Reference")
  public context?: Reference;

  @FhirChoice("PrimitiveDateTime", "Period", "Timing")
  public occurrence?: PrimitiveDateTime | Period | Timing;

  @FhirList("ChargeItemPerformer")
  public performer?: Array<ChargeItemPerformer>;

  @FhirField("Reference")
  public performingOrganization?: Reference;

  @FhirField("Reference")
  public requestingOrganization?: Reference;

  @FhirField("Reference")
  public costCenter?: Reference;

  @FhirField("Quantity")
  public quantity?: Quantity;

  @FhirList("CodeableConcept")
  public bodysite?: Array<CodeableConcept>;

  @FhirField("PrimitiveDecimal")
  public factorOverride?: PrimitiveDecimal;

  @FhirField("Money")
  public priceOverride?: Money;

  @FhirField("PrimitiveString")
  public overrideReason?: PrimitiveString;

  @FhirField("Reference")
  public enterer?: Reference;

  @FhirField("PrimitiveDateTime")
  public enteredDate?: PrimitiveDateTime;

  @FhirList("CodeableConcept")
  public reason?: Array<CodeableConcept>;

  @FhirList("Reference")
  public service?: Array<Reference>;

  @FhirChoice("Reference", "CodeableConcept")
  public product?: Reference | CodeableConcept;

  @FhirList("Reference")
  public account?: Array<Reference>;

  @FhirList("Annotation")
  public note?: Array<Annotation>;

  @FhirList("Reference")
  public supportingInformation?: Array<Reference>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.code;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: IChargeItem,
    providedInstance: ChargeItem = new ChargeItem()
  ): ChargeItem {
    const newInstance: ChargeItem = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.definitionUri !== undefined) {
      newInstance.definitionUri = json.definitionUri.map((x, i) => PrimitiveUri.parsePrimitive(x, json._definitionUri?.[i]));
    }
    if (json.definitionCanonical !== undefined) {
      newInstance.definitionCanonical = json.definitionCanonical.map((x, i) => PrimitiveCanonical.parsePrimitive(x, json._definitionCanonical?.[i]));
    }
    if (json.status !== undefined) {
      newInstance.status = ChargeItemStatus.parsePrimitive(json.status, json._status);
    }
    if (json.partOf !== undefined) {
      newInstance.partOf = json.partOf.map((x) => Reference.parse(x));
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.context !== undefined) {
      newInstance.context = Reference.parse(json.context);
    }
    if (json.occurrenceDateTime !== undefined) {
      newInstance.occurrence = PrimitiveDateTime.parsePrimitive(json.occurrenceDateTime, json._occurrenceDateTime);
    }
    if (json.occurrencePeriod !== undefined) {
      newInstance.occurrence = Period.parse(json.occurrencePeriod);
    }
    if (json.occurrenceTiming !== undefined) {
      newInstance.occurrence = Timing.parse(json.occurrenceTiming);
    }
    if (json.performer !== undefined) {
      newInstance.performer = json.performer.map((x) => ChargeItemPerformer.parse(x));
    }
    if (json.performingOrganization !== undefined) {
      newInstance.performingOrganization = Reference.parse(json.performingOrganization);
    }
    if (json.requestingOrganization !== undefined) {
      newInstance.requestingOrganization = Reference.parse(json.requestingOrganization);
    }
    if (json.costCenter !== undefined) {
      newInstance.costCenter = Reference.parse(json.costCenter);
    }
    if (json.quantity !== undefined) {
      newInstance.quantity = Quantity.parse(json.quantity);
    }
    if (json.bodysite !== undefined) {
      newInstance.bodysite = json.bodysite.map((x) => CodeableConcept.parse(x));
    }
    if (json.factorOverride !== undefined) {
      newInstance.factorOverride = PrimitiveDecimal.parsePrimitive(json.factorOverride, json._factorOverride);
    }
    if (json.priceOverride !== undefined) {
      newInstance.priceOverride = Money.parse(json.priceOverride);
    }
    if (json.overrideReason !== undefined) {
      newInstance.overrideReason = PrimitiveString.parsePrimitive(json.overrideReason, json._overrideReason);
    }
    if (json.enterer !== undefined) {
      newInstance.enterer = Reference.parse(json.enterer);
    }
    if (json.enteredDate !== undefined) {
      newInstance.enteredDate = PrimitiveDateTime.parsePrimitive(json.enteredDate, json._enteredDate);
    }
    if (json.reason !== undefined) {
      newInstance.reason = json.reason.map((x) => CodeableConcept.parse(x));
    }
    if (json.service !== undefined) {
      newInstance.service = json.service.map((x) => Reference.parse(x));
    }
    if (json.productReference !== undefined) {
      newInstance.product = Reference.parse(json.productReference);
    }
    if (json.productCodeableConcept !== undefined) {
      newInstance.product = CodeableConcept.parse(json.productCodeableConcept);
    }
    if (json.account !== undefined) {
      newInstance.account = json.account.map((x) => Reference.parse(x));
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.supportingInformation !== undefined) {
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

  public clone(): ChargeItem {
    return ChargeItem.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ChargeItem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
