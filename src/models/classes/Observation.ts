/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  IObservation,
  ObservationComponent,
  ObservationReferenceRange,
  ObservationStatus,
  Period,
  PrimitiveBoolean,
  PrimitiveDateTime,
  PrimitiveInstant,
  PrimitiveInteger,
  PrimitiveString,
  PrimitiveTime,
  Quantity,
  Range,
  Ratio,
  Reference,
  SampledData,
  Timing,
} from "../internal";

export class Observation extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Observation";

  public identifier?: Array<Identifier>;

  public basedOn?: Array<Reference>;

  public partOf?: Array<Reference>;

  public status?: ObservationStatus;

  public category?: Array<CodeableConcept>;

  public code?: CodeableConcept;

  public subject?: Reference;

  public focus?: Array<Reference>;

  public encounter?: Reference;

  public effective?: PrimitiveDateTime | Period | Timing | PrimitiveInstant;

  public issued?: PrimitiveInstant;

  public performer?: Array<Reference>;

  public value?: Quantity | CodeableConcept | PrimitiveString | PrimitiveBoolean | PrimitiveInteger | Range | Ratio | SampledData | PrimitiveTime | PrimitiveDateTime | Period;

  public dataAbsentReason?: CodeableConcept;

  public interpretation?: Array<CodeableConcept>;

  public note?: Array<Annotation>;

  public bodySite?: CodeableConcept;

  public method?: CodeableConcept;

  public specimen?: Reference;

  public device?: Reference;

  public referenceRange?: Array<ObservationReferenceRange>;

  public hasMember?: Array<Reference>;

  public derivedFrom?: Array<Reference>;

  public component?: Array<ObservationComponent>;

  public static parse(
    json: IObservation,
    providedInstance: Observation = new Observation()
  ): Observation {
    const newInstance: Observation = DomainResource.parse(json, providedInstance);
  
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
      newInstance.status = ObservationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.category) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.code) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.subject) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.focus) {
      newInstance.focus = json.focus.map((x) => Reference.parse(x));
    }
    if (json.encounter) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.effectiveDateTime) {
      newInstance.effective = PrimitiveDateTime.parsePrimitive(json.effectiveDateTime, json._effectiveDateTime);
    }
    if (json.effectivePeriod) {
      newInstance.effective = Period.parse(json.effectivePeriod);
    }
    if (json.effectiveTiming) {
      newInstance.effective = Timing.parse(json.effectiveTiming);
    }
    if (json.effectiveInstant) {
      newInstance.effective = PrimitiveInstant.parsePrimitive(json.effectiveInstant, json._effectiveInstant);
    }
    if (json.issued) {
      newInstance.issued = PrimitiveInstant.parsePrimitive(json.issued, json._issued);
    }
    if (json.performer) {
      newInstance.performer = json.performer.map((x) => Reference.parse(x));
    }
    if (json.valueQuantity) {
      newInstance.value = Quantity.parse(json.valueQuantity);
    }
    if (json.valueCodeableConcept) {
      newInstance.value = CodeableConcept.parse(json.valueCodeableConcept);
    }
    if (json.valueString) {
      newInstance.value = PrimitiveString.parsePrimitive(json.valueString, json._valueString);
    }
    if (json.valueBoolean) {
      newInstance.value = PrimitiveBoolean.parsePrimitive(json.valueBoolean, json._valueBoolean);
    }
    if (json.valueInteger) {
      newInstance.value = PrimitiveInteger.parsePrimitive(json.valueInteger, json._valueInteger);
    }
    if (json.valueRange) {
      newInstance.value = Range.parse(json.valueRange);
    }
    if (json.valueRatio) {
      newInstance.value = Ratio.parse(json.valueRatio);
    }
    if (json.valueSampledData) {
      newInstance.value = SampledData.parse(json.valueSampledData);
    }
    if (json.valueTime) {
      newInstance.value = PrimitiveTime.parsePrimitive(json.valueTime, json._valueTime);
    }
    if (json.valueDateTime) {
      newInstance.value = PrimitiveDateTime.parsePrimitive(json.valueDateTime, json._valueDateTime);
    }
    if (json.valuePeriod) {
      newInstance.value = Period.parse(json.valuePeriod);
    }
    if (json.dataAbsentReason) {
      newInstance.dataAbsentReason = CodeableConcept.parse(json.dataAbsentReason);
    }
    if (json.interpretation) {
      newInstance.interpretation = json.interpretation.map((x) => CodeableConcept.parse(x));
    }
    if (json.note) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.bodySite) {
      newInstance.bodySite = CodeableConcept.parse(json.bodySite);
    }
    if (json.method) {
      newInstance.method = CodeableConcept.parse(json.method);
    }
    if (json.specimen) {
      newInstance.specimen = Reference.parse(json.specimen);
    }
    if (json.device) {
      newInstance.device = Reference.parse(json.device);
    }
    if (json.referenceRange) {
      newInstance.referenceRange = json.referenceRange.map((x) => ObservationReferenceRange.parse(x));
    }
    if (json.hasMember) {
      newInstance.hasMember = json.hasMember.map((x) => Reference.parse(x));
    }
    if (json.derivedFrom) {
      newInstance.derivedFrom = json.derivedFrom.map((x) => Reference.parse(x));
    }
    if (json.component) {
      newInstance.component = json.component.map((x) => ObservationComponent.parse(x));
    }
    return newInstance;
  }

  public static isObservation(input?: unknown): input is Observation {
    const castInput = input as Observation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Observation";
  }

  public toJSON(): IObservation {
    const result: IObservation = super.toJSON();

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

    if (this.category) {
      result.category = this.category.map((x) => x.toJSON());
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.focus) {
      result.focus = this.focus.map((x) => x.toJSON());
    }

    if (this.encounter) {
      result.encounter = this.encounter.toJSON();
    }

    if (this.effective && PrimitiveDateTime.isPrimitiveDateTime(this.effective)) {
      result.effectiveDateTime = this.effective.value;
      result._effectiveDateTime = Extension.serializePrimitiveExtension(this.effective);
    }

    if (this.effective && Period.isPeriod(this.effective)) {
      result.effectivePeriod = this.effective.toJSON();
    }

    if (this.effective && Timing.isTiming(this.effective)) {
      result.effectiveTiming = this.effective.toJSON();
    }

    if (this.effective && PrimitiveInstant.isPrimitiveInstant(this.effective)) {
      result.effectiveInstant = this.effective.value;
      result._effectiveInstant = Extension.serializePrimitiveExtension(this.effective);
    }

    if (this.issued) {
      result.issued = this.issued.value;
      result._issued = Extension.serializePrimitiveExtension(this.issued);
    }

    if (this.performer) {
      result.performer = this.performer.map((x) => x.toJSON());
    }

    if (this.value && Quantity.isQuantity(this.value)) {
      result.valueQuantity = this.value.toJSON();
    }

    if (this.value && CodeableConcept.isCodeableConcept(this.value)) {
      result.valueCodeableConcept = this.value.toJSON();
    }

    if (this.value && PrimitiveString.isPrimitiveString(this.value)) {
      result.valueString = this.value.value;
      result._valueString = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveBoolean.isPrimitiveBoolean(this.value)) {
      result.valueBoolean = this.value.value;
      result._valueBoolean = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveInteger.isPrimitiveInteger(this.value)) {
      result.valueInteger = this.value.value;
      result._valueInteger = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && Range.isRange(this.value)) {
      result.valueRange = this.value.toJSON();
    }

    if (this.value && Ratio.isRatio(this.value)) {
      result.valueRatio = this.value.toJSON();
    }

    if (this.value && SampledData.isSampledData(this.value)) {
      result.valueSampledData = this.value.toJSON();
    }

    if (this.value && PrimitiveTime.isPrimitiveTime(this.value)) {
      result.valueTime = this.value.value;
      result._valueTime = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveDateTime.isPrimitiveDateTime(this.value)) {
      result.valueDateTime = this.value.value;
      result._valueDateTime = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && Period.isPeriod(this.value)) {
      result.valuePeriod = this.value.toJSON();
    }

    if (this.dataAbsentReason) {
      result.dataAbsentReason = this.dataAbsentReason.toJSON();
    }

    if (this.interpretation) {
      result.interpretation = this.interpretation.map((x) => x.toJSON());
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    if (this.bodySite) {
      result.bodySite = this.bodySite.toJSON();
    }

    if (this.method) {
      result.method = this.method.toJSON();
    }

    if (this.specimen) {
      result.specimen = this.specimen.toJSON();
    }

    if (this.device) {
      result.device = this.device.toJSON();
    }

    if (this.referenceRange) {
      result.referenceRange = this.referenceRange.map((x) => x.toJSON());
    }

    if (this.hasMember) {
      result.hasMember = this.hasMember.map((x) => x.toJSON());
    }

    if (this.derivedFrom) {
      result.derivedFrom = this.derivedFrom.map((x) => x.toJSON());
    }

    if (this.component) {
      result.component = this.component.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "Observation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
