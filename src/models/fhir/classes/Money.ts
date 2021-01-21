/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CurrencyCode,
  Element,
  Extension,
  FhirField,
  IMoney,
  PrimitiveDecimal,
  FhirType
} from "../internal";

@FhirType("Money", "Element")
export class Money extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Money";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveDecimal")
  public value?: PrimitiveDecimal;

  @FhirField("CurrencyCode")
  public currency?: CurrencyCode;

  public static parse(
    json: IMoney,
    providedInstance: Money = new Money()
  ): Money {
    const newInstance: Money = Element.parse(json, providedInstance);
  
    if (json.value !== undefined) {
      newInstance.value = PrimitiveDecimal.parsePrimitive(json.value, json._value);
    }
    if (json.currency !== undefined) {
      newInstance.currency = CurrencyCode.parsePrimitive(json.currency, json._currency);
    }
    return newInstance;
  }

  public static isMoney(input?: unknown): input is Money {
    const castInput = input as Money;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Money";
  }

  public toJSON(): IMoney {
    const result: IMoney = super.toJSON();

    if (this.value) {
      result.value = this.value.value;
      result._value = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.currency) {
      result.currency = this.currency.value;
      result._currency = Extension.serializePrimitiveExtension(this.currency);
    }

    return result;
  }

  public clone(): Money {
    return Money.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Money";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
