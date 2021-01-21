/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  Identifier,
  ISupplyDelivery,
  Period,
  PrimitiveDateTime,
  Reference,
  SupplyDeliveryStatus,
  SupplyDeliverySuppliedItem,
  Timing,
  FhirType
} from "../internal";

@FhirType("SupplyDelivery", "DomainResource")
export class SupplyDelivery extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SupplyDelivery";

  static readonly primaryCodePath: string | null = "type";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirList("Reference")
  public basedOn?: Array<Reference>;

  @FhirList("Reference")
  public partOf?: Array<Reference>;

  @FhirField("SupplyDeliveryStatus")
  public status?: SupplyDeliveryStatus;

  @FhirField("Reference")
  public patient?: Reference;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("SupplyDeliverySuppliedItem")
  public suppliedItem?: SupplyDeliverySuppliedItem;

  @FhirChoice("PrimitiveDateTime", "Period", "Timing")
  public occurrence?: PrimitiveDateTime | Period | Timing;

  @FhirField("Reference")
  public supplier?: Reference;

  @FhirField("Reference")
  public destination?: Reference;

  @FhirList("Reference")
  public receiver?: Array<Reference>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.type;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.type = primaryCode;
  }

  public static parse(
    json: ISupplyDelivery,
    providedInstance: SupplyDelivery = new SupplyDelivery()
  ): SupplyDelivery {
    const newInstance: SupplyDelivery = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.basedOn !== undefined) {
      newInstance.basedOn = json.basedOn.map((x) => Reference.parse(x));
    }
    if (json.partOf !== undefined) {
      newInstance.partOf = json.partOf.map((x) => Reference.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = SupplyDeliveryStatus.parsePrimitive(json.status, json._status);
    }
    if (json.patient !== undefined) {
      newInstance.patient = Reference.parse(json.patient);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.suppliedItem !== undefined) {
      newInstance.suppliedItem = SupplyDeliverySuppliedItem.parse(json.suppliedItem);
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
    if (json.supplier !== undefined) {
      newInstance.supplier = Reference.parse(json.supplier);
    }
    if (json.destination !== undefined) {
      newInstance.destination = Reference.parse(json.destination);
    }
    if (json.receiver !== undefined) {
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

  public clone(): SupplyDelivery {
    return SupplyDelivery.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SupplyDelivery";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
