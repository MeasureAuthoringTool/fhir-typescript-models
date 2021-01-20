/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  FhirList,
  IObservationReferenceRange,
  PrimitiveString,
  Range,
  SimpleQuantity,
  FhirType
} from "../internal";

@FhirType("ObservationReferenceRange", "BackboneElement")
export class ObservationReferenceRange extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Observation.ReferenceRange";

  static readonly primaryCodePath: string | null = null;

  @FhirField("SimpleQuantity")
  public low?: SimpleQuantity;

  @FhirField("SimpleQuantity")
  public high?: SimpleQuantity;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirList("CodeableConcept")
  public appliesTo?: Array<CodeableConcept>;

  @FhirField("Range")
  public age?: Range;

  @FhirField("PrimitiveString")
  public text?: PrimitiveString;

  public static parse(
    json: IObservationReferenceRange,
    providedInstance: ObservationReferenceRange = new ObservationReferenceRange()
  ): ObservationReferenceRange {
    const newInstance: ObservationReferenceRange = BackboneElement.parse(json, providedInstance);
  
    if (json.low !== undefined) {
      newInstance.low = SimpleQuantity.parse(json.low);
    }
    if (json.high !== undefined) {
      newInstance.high = SimpleQuantity.parse(json.high);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.appliesTo !== undefined) {
      newInstance.appliesTo = json.appliesTo.map((x) => CodeableConcept.parse(x));
    }
    if (json.age !== undefined) {
      newInstance.age = Range.parse(json.age);
    }
    if (json.text !== undefined) {
      newInstance.text = PrimitiveString.parsePrimitive(json.text, json._text);
    }
    return newInstance;
  }

  public static isObservationReferenceRange(input?: unknown): input is ObservationReferenceRange {
    const castInput = input as ObservationReferenceRange;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ObservationReferenceRange";
  }

  public toJSON(): IObservationReferenceRange {
    const result: IObservationReferenceRange = super.toJSON();

    if (this.low) {
      result.low = this.low.toJSON();
    }

    if (this.high) {
      result.high = this.high.toJSON();
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.appliesTo) {
      result.appliesTo = this.appliesTo.map((x) => x.toJSON());
    }

    if (this.age) {
      result.age = this.age.toJSON();
    }

    if (this.text) {
      result.text = this.text.value;
      result._text = Extension.serializePrimitiveExtension(this.text);
    }

    return result;
  }

  public clone(): ObservationReferenceRange {
    return ObservationReferenceRange.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ObservationReferenceRange";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
