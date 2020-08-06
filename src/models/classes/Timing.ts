/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  ITiming,
  PrimitiveDateTime,
  TimingRepeat,
} from "../internal";

export class Timing extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Timing";

  public event?: Array<PrimitiveDateTime>;

  public repeat?: TimingRepeat;

  public code?: CodeableConcept;

  public static parse(
    json: ITiming,
    providedInstance: Timing = new Timing()
  ): Timing {
    const newInstance: Timing = BackboneElement.parse(json, providedInstance);
  
    if (json.event) {
      newInstance.event = json.event.map((x, i) => {
        const ext = json._event && json._event[i];
        return PrimitiveDateTime.parsePrimitive(x, ext);
      });
    }
    if (json.repeat) {
      newInstance.repeat = TimingRepeat.parse(json.repeat);
    }
    if (json.code) {
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
  
  public getTypeName(): string {
    return "Timing";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
