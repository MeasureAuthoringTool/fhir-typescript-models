/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  ISupplyDelivery,
  Period,
  PrimitiveDateTime,
  Reference,
  SupplyDeliveryStatus,
  SupplyDeliverySuppliedItem,
  Timing,
} from "../internal";

export class SupplyDelivery extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SupplyDelivery";

  public identifier?: Array<Identifier>;

  public basedOn?: Array<Reference>;

  public partOf?: Array<Reference>;

  public status?: SupplyDeliveryStatus;

  public patient?: Reference;

  public type?: CodeableConcept;

  public suppliedItem?: SupplyDeliverySuppliedItem;

  public occurrence?: PrimitiveDateTime | Period | Timing;

  public supplier?: Reference;

  public destination?: Reference;

  public receiver?: Array<Reference>;

  public static parse(
    json: ISupplyDelivery,
    providedInstance: SupplyDelivery = new SupplyDelivery()
  ): SupplyDelivery {
    const newInstance: SupplyDelivery = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.basedOn) {
      newInstance.basedOn = json.basedOn.map((x) => Reference.parse(x));
    }
    if (json.partOf) {
      newInstance.partOf = json.partOf.map((x) => Reference.parse(x));
    }
    if (json.status) {
      newInstance.status = SupplyDeliveryStatus.parsePrimitive(json.status, json._status);
    }
    if (json.patient) {
      newInstance.patient = Reference.parse(json.patient);
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.suppliedItem) {
      newInstance.suppliedItem = SupplyDeliverySuppliedItem.parse(json.suppliedItem);
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
    if (json.supplier) {
      newInstance.supplier = Reference.parse(json.supplier);
    }
    if (json.destination) {
      newInstance.destination = Reference.parse(json.destination);
    }
    if (json.receiver) {
      newInstance.receiver = json.receiver.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isSupplyDelivery(input?: unknown): input is SupplyDelivery {
    const castInput = input as SupplyDelivery;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SupplyDelivery";
  }

  public toJSON(): ISupplyDelivery {
    const result: ISupplyDelivery = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.basedOn) {
      result.basedOn = this.basedOn.map((x) => x.toJSON());
    }

    if (this.partOf) {
      result.partOf = this.partOf.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.patient) {
      result.patient = this.patient.toJSON();
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.suppliedItem) {
      result.suppliedItem = this.suppliedItem.toJSON();
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

    if (this.supplier) {
      result.supplier = this.supplier.toJSON();
    }

    if (this.destination) {
      result.destination = this.destination.toJSON();
    }

    if (this.receiver) {
      result.receiver = this.receiver.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "SupplyDelivery";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
