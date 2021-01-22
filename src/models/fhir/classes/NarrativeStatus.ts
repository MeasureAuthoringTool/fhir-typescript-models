/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("NarrativeStatus", "PrimitiveCode")
export class NarrativeStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "NarrativeStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: NarrativeStatus = new NarrativeStatus()
  ): NarrativeStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isNarrativeStatus(input?: unknown): input is NarrativeStatus {
    const castInput = input as NarrativeStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "NarrativeStatus";
  }

  public clone(): NarrativeStatus {
    const result = new NarrativeStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "NarrativeStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
