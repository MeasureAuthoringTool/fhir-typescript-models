/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Element,
  IRange,
  SimpleQuantity,
  FieldMetadata
} from "../internal";

export class Range extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Range";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...Element.fieldInfo, {
      fieldName: "low",
      fieldType: [SimpleQuantity],
      isArray: false
    }, {
      fieldName: "high",
      fieldType: [SimpleQuantity],
      isArray: false
    }];
  }

  public low?: SimpleQuantity;

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
