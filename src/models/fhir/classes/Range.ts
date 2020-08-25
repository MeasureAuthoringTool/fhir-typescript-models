/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Element,
  IRange,
  SimpleQuantity,
} from "../internal";

export class Range extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Range";

  public low?: SimpleQuantity;

  public high?: SimpleQuantity;

  public static parse(
    json: IRange,
    providedInstance: Range = new Range()
  ): Range {
    const newInstance: Range = Element.parse(json, providedInstance);
  
    if (json.low) {
      newInstance.low = SimpleQuantity.parse(json.low);
    }
    if (json.high) {
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
  
  public getTypeName(): string {
    return "Range";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
