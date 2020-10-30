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
  FieldMetadata
} from "../internal";

export class Observation extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Observation";
  
  static readonly primaryCodePath: string | null = "code";

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "basedOn",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "partOf",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "status",
      fieldType: [ObservationStatus],
      isArray: false
    }, {
      fieldName: "category",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "code",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "subject",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "focus",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "encounter",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "effective",
      fieldType: [PrimitiveDateTime, Period, Timing, PrimitiveInstant],
      isArray: false
    }, {
      fieldName: "issued",
      fieldType: [PrimitiveInstant],
      isArray: false
    }, {
      fieldName: "performer",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "value",
      fieldType: [Quantity, CodeableConcept, PrimitiveString, PrimitiveBoolean, PrimitiveInteger, Range, Ratio, SampledData, PrimitiveTime, PrimitiveDateTime, Period],
      isArray: false
    }, {
      fieldName: "dataAbsentReason",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "interpretation",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "note",
      fieldType: [Annotation],
      isArray: true
    }, {
      fieldName: "bodySite",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "method",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "specimen",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "device",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "referenceRange",
      fieldType: [ObservationReferenceRange],
      isArray: true
    }, {
      fieldName: "hasMember",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "derivedFrom",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "component",
      fieldType: [ObservationComponent],
      isArray: true
    }];
  }

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

  get primaryCode(): CodeableConcept | undefined {
    return this?.code;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: IObservation,
    providedInstance: Observation = new Observation()
  ): Observation {
    const newInstance: Observation = DomainResource.parse(json, providedInstance);
  
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
      newInstance.status = ObservationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.category !== undefined) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.focus !== undefined) {
      newInstance.focus = json.focus.map((x) => Reference.parse(x));
    }
    if (json.encounter !== undefined) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.effectiveDateTime !== undefined) {
      newInstance.effective = PrimitiveDateTime.parsePrimitive(json.effectiveDateTime, json._effectiveDateTime);
    }
    if (json.effectivePeriod !== undefined) {
      newInstance.effective = Period.parse(json.effectivePeriod);
    }
    if (json.effectiveTiming !== undefined) {
      newInstance.effective = Timing.parse(json.effectiveTiming);
    }
    if (json.effectiveInstant !== undefined) {
      newInstance.effective = PrimitiveInstant.parsePrimitive(json.effectiveInstant, json._effectiveInstant);
    }
    if (json.issued !== undefined) {
      newInstance.issued = PrimitiveInstant.parsePrimitive(json.issued, json._issued);
    }
    if (json.performer !== undefined) {
      newInstance.performer = json.performer.map((x) => Reference.parse(x));
    }
    if (json.valueQuantity !== undefined) {
      newInstance.value = Quantity.parse(json.valueQuantity);
    }
    if (json.valueCodeableConcept !== undefined) {
      newInstance.value = CodeableConcept.parse(json.valueCodeableConcept);
    }
    if (json.valueString !== undefined) {
      newInstance.value = PrimitiveString.parsePrimitive(json.valueString, json._valueString);
    }
    if (json.valueBoolean !== undefined) {
      newInstance.value = PrimitiveBoolean.parsePrimitive(json.valueBoolean, json._valueBoolean);
    }
    if (json.valueInteger !== undefined) {
      newInstance.value = PrimitiveInteger.parsePrimitive(json.valueInteger, json._valueInteger);
    }
    if (json.valueRange !== undefined) {
      newInstance.value = Range.parse(json.valueRange);
    }
    if (json.valueRatio !== undefined) {
      newInstance.value = Ratio.parse(json.valueRatio);
    }
    if (json.valueSampledData !== undefined) {
      newInstance.value = SampledData.parse(json.valueSampledData);
    }
    if (json.valueTime !== undefined) {
      newInstance.value = PrimitiveTime.parsePrimitive(json.valueTime, json._valueTime);
    }
    if (json.valueDateTime !== undefined) {
      newInstance.value = PrimitiveDateTime.parsePrimitive(json.valueDateTime, json._valueDateTime);
    }
    if (json.valuePeriod !== undefined) {
      newInstance.value = Period.parse(json.valuePeriod);
    }
    if (json.dataAbsentReason !== undefined) {
      newInstance.dataAbsentReason = CodeableConcept.parse(json.dataAbsentReason);
    }
    if (json.interpretation !== undefined) {
      newInstance.interpretation = json.interpretation.map((x) => CodeableConcept.parse(x));
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.bodySite !== undefined) {
      newInstance.bodySite = CodeableConcept.parse(json.bodySite);
    }
    if (json.method !== undefined) {
      newInstance.method = CodeableConcept.parse(json.method);
    }
    if (json.specimen !== undefined) {
      newInstance.specimen = Reference.parse(json.specimen);
    }
    if (json.device !== undefined) {
      newInstance.device = Reference.parse(json.device);
    }
    if (json.referenceRange !== undefined) {
      newInstance.referenceRange = json.referenceRange.map((x) => ObservationReferenceRange.parse(x));
    }
    if (json.hasMember !== undefined) {
      newInstance.hasMember = json.hasMember.map((x) => Reference.parse(x));
    }
    if (json.derivedFrom !== undefined) {
      newInstance.derivedFrom = json.derivedFrom.map((x) => Reference.parse(x));
    }
    if (json.component !== undefined) {
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

  public clone(): Observation {
    return Observation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Observation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
