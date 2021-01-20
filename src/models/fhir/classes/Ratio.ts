/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Element,
  FhirField,
  IRatio,
  Quantity,
  FhirType
} from "../internal";

@FhirType("Ratio", "Element")
export class Ratio extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Ratio";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Quantity")
  public numerator?: Quantity;

  @FhirField("Quantity")
  public denominator?: Quantity;

  public static parse(
    json: IRatio,
    providedInstance: Ratio = new Ratio()
  ): Ratio {
    const newInstance: Ratio = Element.parse(json, providedInstance);
  
    if (json.numerator !== undefined) {
      newInstance.numerator = Quantity.parse(json.numerator);
    }
    if (json.denominator !== undefined) {
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

  public clone(): Ratio {
    return Ratio.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Ratio";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
