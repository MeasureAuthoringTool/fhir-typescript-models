/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ConsentState", "PrimitiveCode")
export class ConsentState extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ConsentState";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ConsentState = new ConsentState()
  ): ConsentState {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isConsentState(input?: unknown): input is ConsentState {
    const castInput = input as ConsentState;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ConsentState";
  }

  public clone(): ConsentState {
    const result = new ConsentState();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ConsentState";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
