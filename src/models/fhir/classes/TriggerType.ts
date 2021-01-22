/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("TriggerType", "PrimitiveCode")
export class TriggerType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TriggerType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: TriggerType = new TriggerType()
  ): TriggerType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isTriggerType(input?: unknown): input is TriggerType {
    const castInput = input as TriggerType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TriggerType";
  }

  public clone(): TriggerType {
    const result = new TriggerType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "TriggerType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
