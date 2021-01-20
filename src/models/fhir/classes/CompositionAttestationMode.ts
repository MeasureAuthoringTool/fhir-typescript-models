/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("CompositionAttestationMode", "PrimitiveCode")
export class CompositionAttestationMode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CompositionAttestationMode";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: CompositionAttestationMode = new CompositionAttestationMode()
  ): CompositionAttestationMode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isCompositionAttestationMode(input?: unknown): input is CompositionAttestationMode {
    const castInput = input as CompositionAttestationMode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CompositionAttestationMode";
  }

  public clone(): CompositionAttestationMode {
    const result = new CompositionAttestationMode();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "CompositionAttestationMode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
