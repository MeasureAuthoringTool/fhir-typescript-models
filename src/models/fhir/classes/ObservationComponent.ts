/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  IObservationComponent,
  ObservationReferenceRange,
  Period,
  PrimitiveBoolean,
  PrimitiveDateTime,
  PrimitiveInteger,
  PrimitiveString,
  PrimitiveTime,
  Quantity,
  Range,
  Ratio,
  SampledData,
  FhirType
} from "../internal";

@FhirType("ObservationComponent", "BackboneElement")
export class ObservationComponent extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Observation.Component";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirChoice("Quantity", "CodeableConcept", "PrimitiveString", "PrimitiveBoolean", "PrimitiveInteger", "Range", "Ratio", "SampledData", "PrimitiveTime", "PrimitiveDateTime", "Period")
  public value?: Quantity | CodeableConcept | PrimitiveString | PrimitiveBoolean | PrimitiveInteger | Range | Ratio | SampledData | PrimitiveTime | PrimitiveDateTime | Period;

  @FhirField("CodeableConcept")
  public dataAbsentReason?: CodeableConcept;

  @FhirList("CodeableConcept")
  public interpretation?: Array<CodeableConcept>;

  @FhirList("ObservationReferenceRange")
  public referenceRange?: Array<ObservationReferenceRange>;

  public static parse(
    json: IObservationComponent,
    providedInstance: ObservationComponent = new ObservationComponent()
  ): ObservationComponent {
    const newInstance: ObservationComponent = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
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
    if (json.referenceRange !== undefined) {
      newInstance.referenceRange = json.referenceRange.map((x) => ObservationReferenceRange.parse(x));
    }
    return newInstance;
  }

  public static isObservationComponent(input?: unknown): input is ObservationComponent {
    const castInput = input as ObservationComponent;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ObservationComponent";
  }

  public toJSON(): IObservationComponent {
    const result: IObservationComponent = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
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

    if (this.referenceRange) {
      result.referenceRange = this.referenceRange.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ObservationComponent {
    return ObservationComponent.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ObservationComponent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
