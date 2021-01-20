/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Element,
  Extension,
  FhirField,
  ISampledData,
  PrimitiveDecimal,
  PrimitivePositiveInt,
  PrimitiveString,
  SimpleQuantity,
  FhirType
} from "../internal";

@FhirType("SampledData", "Element")
export class SampledData extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SampledData";

  static readonly primaryCodePath: string | null = null;

  @FhirField("SimpleQuantity")
  public origin?: SimpleQuantity;

  @FhirField("PrimitiveDecimal")
  public period?: PrimitiveDecimal;

  @FhirField("PrimitiveDecimal")
  public factor?: PrimitiveDecimal;

  @FhirField("PrimitiveDecimal")
  public lowerLimit?: PrimitiveDecimal;

  @FhirField("PrimitiveDecimal")
  public upperLimit?: PrimitiveDecimal;

  @FhirField("PrimitivePositiveInt")
  public dimensions?: PrimitivePositiveInt;

  @FhirField("PrimitiveString")
  public data?: PrimitiveString;

  public static parse(
    json: ISampledData,
    providedInstance: SampledData = new SampledData()
  ): SampledData {
    const newInstance: SampledData = Element.parse(json, providedInstance);
  
    if (json.origin !== undefined) {
      newInstance.origin = SimpleQuantity.parse(json.origin);
    }
    if (json.period !== undefined) {
      newInstance.period = PrimitiveDecimal.parsePrimitive(json.period, json._period);
    }
    if (json.factor !== undefined) {
      newInstance.factor = PrimitiveDecimal.parsePrimitive(json.factor, json._factor);
    }
    if (json.lowerLimit !== undefined) {
      newInstance.lowerLimit = PrimitiveDecimal.parsePrimitive(json.lowerLimit, json._lowerLimit);
    }
    if (json.upperLimit !== undefined) {
      newInstance.upperLimit = PrimitiveDecimal.parsePrimitive(json.upperLimit, json._upperLimit);
    }
    if (json.dimensions !== undefined) {
      newInstance.dimensions = PrimitivePositiveInt.parsePrimitive(json.dimensions, json._dimensions);
    }
    if (json.data !== undefined) {
      newInstance.data = PrimitiveString.parsePrimitive(json.data, json._data);
    }
    return newInstance;
  }

  public static isSampledData(input?: unknown): input is SampledData {
    const castInput = input as SampledData;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SampledData";
  }

  public toJSON(): ISampledData {
    const result: ISampledData = super.toJSON();

    if (this.origin) {
      result.origin = this.origin.toJSON();
    }

    if (this.period) {
      result.period = this.period.value;
      result._period = Extension.serializePrimitiveExtension(this.period);
    }

    if (this.factor) {
      result.factor = this.factor.value;
      result._factor = Extension.serializePrimitiveExtension(this.factor);
    }

    if (this.lowerLimit) {
      result.lowerLimit = this.lowerLimit.value;
      result._lowerLimit = Extension.serializePrimitiveExtension(this.lowerLimit);
    }

    if (this.upperLimit) {
      result.upperLimit = this.upperLimit.value;
      result._upperLimit = Extension.serializePrimitiveExtension(this.upperLimit);
    }

    if (this.dimensions) {
      result.dimensions = this.dimensions.value;
      result._dimensions = Extension.serializePrimitiveExtension(this.dimensions);
    }

    if (this.data) {
      result.data = this.data.value;
      result._data = Extension.serializePrimitiveExtension(this.data);
    }

    return result;
  }

  public clone(): SampledData {
    return SampledData.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SampledData";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
