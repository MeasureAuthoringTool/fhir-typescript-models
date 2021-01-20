/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Element,
  Extension,
  FhirField,
  IPeriod,
  PrimitiveDateTime,
  FhirType
} from "../internal";

@FhirType("Period", "Element")
export class Period extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Period";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveDateTime")
  public start?: PrimitiveDateTime;

  @FhirField("PrimitiveDateTime")
  public end?: PrimitiveDateTime;

  public static parse(
    json: IPeriod,
    providedInstance: Period = new Period()
  ): Period {
    const newInstance: Period = Element.parse(json, providedInstance);
  
    if (json.start !== undefined) {
      newInstance.start = PrimitiveDateTime.parsePrimitive(json.start, json._start);
    }
    if (json.end !== undefined) {
      newInstance.end = PrimitiveDateTime.parsePrimitive(json.end, json._end);
    }
    return newInstance;
  }

  public static isPeriod(input?: unknown): input is Period {
    const castInput = input as Period;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Period";
  }

  public toJSON(): IPeriod {
    const result: IPeriod = super.toJSON();

    if (this.start) {
      result.start = this.start.value;
      result._start = Extension.serializePrimitiveExtension(this.start);
    }

    if (this.end) {
      result.end = this.end.value;
      result._end = Extension.serializePrimitiveExtension(this.end);
    }

    return result;
  }

  public clone(): Period {
    return Period.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Period";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
