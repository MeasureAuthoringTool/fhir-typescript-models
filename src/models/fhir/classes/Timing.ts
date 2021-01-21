/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  FhirList,
  ITiming,
  PrimitiveDateTime,
  TimingRepeat,
  FhirType
} from "../internal";

@FhirType("Timing", "BackboneElement")
export class Timing extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Timing";

  static readonly primaryCodePath: string | null = "code";

  @FhirList("PrimitiveDateTime")
  public event?: Array<PrimitiveDateTime>;

  @FhirField("TimingRepeat")
  public repeat?: TimingRepeat;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  get primaryCode(): CodeableConcept | undefined {
    return this?.code;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: ITiming,
    providedInstance: Timing = new Timing()
  ): Timing {
    const newInstance: Timing = BackboneElement.parse(json, providedInstance);
  
    if (json.event !== undefined) {
      newInstance.event = json.event.map((x, i) => PrimitiveDateTime.parsePrimitive(x, json._event?.[i]));
    }
    if (json.repeat !== undefined) {
      newInstance.repeat = TimingRepeat.parse(json.repeat);
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    return newInstance;
  }

  public static isTiming(input?: unknown): input is Timing {
    const castInput = input as Timing;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Timing";
  }

  public toJSON(): ITiming {
    const result: ITiming = super.toJSON();

    if (this.event) {
      result.event = this.event.filter(x => !!x).map(x => x.value) as typeof result.event;
      result._event = Extension.serializePrimitiveExtensionArray(this.event);
    }

    if (this.repeat) {
      result.repeat = this.repeat.toJSON();
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    return result;
  }

  public clone(): Timing {
    return Timing.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Timing";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
