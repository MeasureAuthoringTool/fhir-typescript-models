/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Element,
  IRatio,
  Quantity,
} from "../internal";

export class Ratio extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Ratio";

  public numerator?: Quantity;

  public denominator?: Quantity;

  public static parse(
    json: IRatio,
    providedInstance: Ratio = new Ratio()
  ): Ratio {
    const newInstance: Ratio = Element.parse(json, providedInstance);
  
    if (json.numerator) {
      newInstance.numerator = Quantity.parse(json.numerator);
    }
    if (json.denominator) {
      newInstance.denominator = Quantity.parse(json.denominator);
    }
    return newInstance;
  }

  public static isRatio(input?: unknown): input is Ratio {
    const castInput = input as Ratio;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Ratio";
  }

  public toJSON(): IRatio {
    const result: IRatio = super.toJSON();

    if (this.numerator) {
      result.numerator = this.numerator.toJSON();
    }

    if (this.denominator) {
      result.denominator = this.denominator.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "Ratio";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
