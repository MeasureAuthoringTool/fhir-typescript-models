/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ConditionalDeleteStatus", "PrimitiveCode")
export class ConditionalDeleteStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ConditionalDeleteStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ConditionalDeleteStatus = new ConditionalDeleteStatus()
  ): ConditionalDeleteStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isConditionalDeleteStatus(input?: unknown): input is ConditionalDeleteStatus {
    const castInput = input as ConditionalDeleteStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ConditionalDeleteStatus";
  }

  public clone(): ConditionalDeleteStatus {
    const result = new ConditionalDeleteStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ConditionalDeleteStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
