/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Element,
  FhirField,
  IRange,
  SimpleQuantity,
  FhirType
} from "../internal";

@FhirType("Range", "Element")
export class Range extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Range";

  static readonly primaryCodePath: string | null = null;

  @FhirField("SimpleQuantity")
  public low?: SimpleQuantity;

  @FhirField("SimpleQuantity")
  public high?: SimpleQuantity;

  public static parse(
    json: IRange,
    providedInstance: Range = new Range()
  ): Range {
    const newInstance: Range = Element.parse(json, providedInstance);
  
    if (json.low !== undefined) {
      newInstance.low = SimpleQuantity.parse(json.low);
    }
    if (json.high !== undefined) {
      newInstance.high = SimpleQuantity.parse(json.high);
    }
    return newInstance;
  }

  public static isRange(input?: unknown): input is Range {
    const castInput = input as Range;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Range";
  }

  public toJSON(): IRange {
    const result: IRange = super.toJSON();

    if (this.low) {
      result.low = this.low.toJSON();
    }

    if (this.high) {
      result.high = this.high.toJSON();
    }

    return result;
  }

  public clone(): Range {
    return Range.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Range";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
