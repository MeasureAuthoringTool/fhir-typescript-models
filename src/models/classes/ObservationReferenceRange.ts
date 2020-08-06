/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IObservationReferenceRange,
  PrimitiveString,
  Range,
  SimpleQuantity,
} from "../internal";

export class ObservationReferenceRange extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Observation.ReferenceRange";

  public low?: SimpleQuantity;

  public high?: SimpleQuantity;

  public type?: CodeableConcept;

  public appliesTo?: Array<CodeableConcept>;

  public age?: Range;

  public text?: PrimitiveString;

  public static parse(
    json: IObservationReferenceRange,
    providedInstance: ObservationReferenceRange = new ObservationReferenceRange()
  ): ObservationReferenceRange {
    const newInstance: ObservationReferenceRange = BackboneElement.parse(json, providedInstance);
  
    if (json.low) {
      newInstance.low = SimpleQuantity.parse(json.low);
    }
    if (json.high) {
      newInstance.high = SimpleQuantity.parse(json.high);
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.appliesTo) {
      newInstance.appliesTo = json.appliesTo.map((x) => CodeableConcept.parse(x));
    }
    if (json.age) {
      newInstance.age = Range.parse(json.age);
    }
    if (json.text) {
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
  
  public getTypeName(): string {
    return "ObservationReferenceRange";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
