/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  ISupplyRequest,
  Period,
  PrimitiveDateTime,
  Quantity,
  Reference,
  RequestPriority,
  SupplyRequestParameter,
  SupplyRequestStatus,
  Timing,
} from "../internal";

export class SupplyRequest extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SupplyRequest";

  public identifier?: Array<Identifier>;

  public status?: SupplyRequestStatus;

  public category?: CodeableConcept;

  public priority?: RequestPriority;

  public item?: CodeableConcept | Reference;

  public quantity?: Quantity;

  public parameter?: Array<SupplyRequestParameter>;

  public occurrence?: PrimitiveDateTime | Period | Timing;

  public authoredOn?: PrimitiveDateTime;

  public requester?: Reference;

  public supplier?: Array<Reference>;

  public reasonCode?: Array<CodeableConcept>;

  public reasonReference?: Array<Reference>;

  public deliverFrom?: Reference;

  public deliverTo?: Reference;

  public static parse(
    json: ISupplyRequest,
    providedInstance: SupplyRequest = new SupplyRequest()
  ): SupplyRequest {
    const newInstance: SupplyRequest = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status) {
      newInstance.status = SupplyRequestStatus.parsePrimitive(json.status, json._status);
    }
    if (json.category) {
      newInstance.category = CodeableConcept.parse(json.category);
    }
    if (json.priority) {
      newInstance.priority = RequestPriority.parsePrimitive(json.priority, json._priority);
    }
    if (json.itemCodeableConcept) {
      newInstance.item = CodeableConcept.parse(json.itemCodeableConcept);
    }
    if (json.itemReference) {
      newInstance.item = Reference.parse(json.itemReference);
    }
    if (json.quantity) {
      newInstance.quantity = Quantity.parse(json.quantity);
    }
    if (json.parameter) {
      newInstance.parameter = json.parameter.map((x) => SupplyRequestParameter.parse(x));
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
    if (json.authoredOn) {
      newInstance.authoredOn = PrimitiveDateTime.parsePrimitive(json.authoredOn, json._authoredOn);
    }
    if (json.requester) {
      newInstance.requester = Reference.parse(json.requester);
    }
    if (json.supplier) {
      newInstance.supplier = json.supplier.map((x) => Reference.parse(x));
    }
    if (json.reasonCode) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.deliverFrom) {
      newInstance.deliverFrom = Reference.parse(json.deliverFrom);
    }
    if (json.deliverTo) {
      newInstance.deliverTo = Reference.parse(json.deliverTo);
    }
    return newInstance;
  }

  public static isSupplyRequest(input?: unknown): input is SupplyRequest {
    const castInput = input as SupplyRequest;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SupplyRequest";
  }

  public toJSON(): ISupplyRequest {
    const result: ISupplyRequest = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.category) {
      result.category = this.category.toJSON();
    }

    if (this.priority) {
      result.priority = this.priority.value;
      result._priority = Extension.serializePrimitiveExtension(this.priority);
    }

    if (this.item && CodeableConcept.isCodeableConcept(this.item)) {
      result.itemCodeableConcept = this.item.toJSON();
    }

    if (this.item && Reference.isReference(this.item)) {
      result.itemReference = this.item.toJSON();
    }

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    if (this.parameter) {
      result.parameter = this.parameter.map((x) => x.toJSON());
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

    if (this.authoredOn) {
      result.authoredOn = this.authoredOn.value;
      result._authoredOn = Extension.serializePrimitiveExtension(this.authoredOn);
    }

    if (this.requester) {
      result.requester = this.requester.toJSON();
    }

    if (this.supplier) {
      result.supplier = this.supplier.map((x) => x.toJSON());
    }

    if (this.reasonCode) {
      result.reasonCode = this.reasonCode.map((x) => x.toJSON());
    }

    if (this.reasonReference) {
      result.reasonReference = this.reasonReference.map((x) => x.toJSON());
    }

    if (this.deliverFrom) {
      result.deliverFrom = this.deliverFrom.toJSON();
    }

    if (this.deliverTo) {
      result.deliverTo = this.deliverTo.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "SupplyRequest";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
