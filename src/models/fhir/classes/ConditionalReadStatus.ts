/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ConditionalReadStatus", "PrimitiveCode")
export class ConditionalReadStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ConditionalReadStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ConditionalReadStatus = new ConditionalReadStatus()
  ): ConditionalReadStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isConditionalReadStatus(input?: unknown): input is ConditionalReadStatus {
    const castInput = input as ConditionalReadStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ConditionalReadStatus";
  }

  public clone(): ConditionalReadStatus {
    const result = new ConditionalReadStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ConditionalReadStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
