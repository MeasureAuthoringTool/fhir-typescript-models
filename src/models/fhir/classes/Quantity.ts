/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Element,
  Extension,
  FhirField,
  IQuantity,
  PrimitiveCode,
  PrimitiveDecimal,
  PrimitiveString,
  PrimitiveUri,
  QuantityComparator,
  FhirType
} from "../internal";

@FhirType("Quantity", "Element")
export class Quantity extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Quantity";

  static readonly primaryCodePath: string | null = "code";

  @FhirField("PrimitiveDecimal")
  public value?: PrimitiveDecimal;

  @FhirField("QuantityComparator")
  public comparator?: QuantityComparator;

  @FhirField("PrimitiveString")
  public unit?: PrimitiveString;

  @FhirField("PrimitiveUri")
  public system?: PrimitiveUri;

  @FhirField("PrimitiveCode")
  public code?: PrimitiveCode;

  get primaryCode(): PrimitiveCode | undefined {
    return this?.code;
  }

  set primaryCode(primaryCode: PrimitiveCode | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: IQuantity,
    providedInstance: Quantity = new Quantity()
  ): Quantity {
    const newInstance: Quantity = Element.parse(json, providedInstance);
  
    if (json.value !== undefined) {
      newInstance.value = PrimitiveDecimal.parsePrimitive(json.value, json._value);
    }
    if (json.comparator !== undefined) {
      newInstance.comparator = QuantityComparator.parsePrimitive(json.comparator, json._comparator);
    }
    if (json.unit !== undefined) {
      newInstance.unit = PrimitiveString.parsePrimitive(json.unit, json._unit);
    }
    if (json.system !== undefined) {
      newInstance.system = PrimitiveUri.parsePrimitive(json.system, json._system);
    }
    if (json.code !== undefined) {
      newInstance.code = PrimitiveCode.parsePrimitive(json.code, json._code);
    }
    return newInstance;
  }

  public static isQuantity(input?: unknown): input is Quantity {
    const castInput = input as Quantity;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Quantity";
  }

  public toJSON(): IQuantity {
    const result: IQuantity = super.toJSON();

    if (this.value) {
      result.value = this.value.value;
      result._value = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.comparator) {
      result.comparator = this.comparator.value;
      result._comparator = Extension.serializePrimitiveExtension(this.comparator);
    }

    if (this.unit) {
      result.unit = this.unit.value;
      result._unit = Extension.serializePrimitiveExtension(this.unit);
    }

    if (this.system) {
      result.system = this.system.value;
      result._system = Extension.serializePrimitiveExtension(this.system);
    }

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    return result;
  }

  public clone(): Quantity {
    return Quantity.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Quantity";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
