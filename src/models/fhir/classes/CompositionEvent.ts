/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  FhirList,
  ICompositionEvent,
  Period,
  Reference,
  FhirType
} from "../internal";

@FhirType("CompositionEvent", "BackboneElement")
export class CompositionEvent extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Composition.Event";

  static readonly primaryCodePath: string | null = null;

  @FhirList("CodeableConcept")
  public code?: Array<CodeableConcept>;

  @FhirField("Period")
  public period?: Period;

  @FhirList("Reference")
  public detail?: Array<Reference>;

  public static parse(
    json: ICompositionEvent,
    providedInstance: CompositionEvent = new CompositionEvent()
  ): CompositionEvent {
    const newInstance: CompositionEvent = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = json.code.map((x) => CodeableConcept.parse(x));
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.detail !== undefined) {
      newInstance.detail = json.detail.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isCompositionEvent(input?: unknown): input is CompositionEvent {
    const castInput = input as CompositionEvent;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CompositionEvent";
  }

  public toJSON(): ICompositionEvent {
    const result: ICompositionEvent = super.toJSON();

    if (this.code) {
      result.code = this.code.map((x) => x.toJSON());
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.detail) {
      result.detail = this.detail.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): CompositionEvent {
    return CompositionEvent.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CompositionEvent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
