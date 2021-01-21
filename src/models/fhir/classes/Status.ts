/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("Status", "PrimitiveCode")
export class Status extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Status";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: Status = new Status()
  ): Status {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isStatus(input?: unknown): input is Status {
    const castInput = input as Status;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Status";
  }

  public clone(): Status {
    const result = new Status();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "Status";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
