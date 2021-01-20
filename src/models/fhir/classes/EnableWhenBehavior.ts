/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("EnableWhenBehavior", "PrimitiveCode")
export class EnableWhenBehavior extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EnableWhenBehavior";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: EnableWhenBehavior = new EnableWhenBehavior()
  ): EnableWhenBehavior {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isEnableWhenBehavior(input?: unknown): input is EnableWhenBehavior {
    const castInput = input as EnableWhenBehavior;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EnableWhenBehavior";
  }

  public clone(): EnableWhenBehavior {
    const result = new EnableWhenBehavior();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "EnableWhenBehavior";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
