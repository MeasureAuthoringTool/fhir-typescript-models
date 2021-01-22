/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("EvidenceVariableType", "PrimitiveCode")
export class EvidenceVariableType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EvidenceVariableType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: EvidenceVariableType = new EvidenceVariableType()
  ): EvidenceVariableType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isEvidenceVariableType(input?: unknown): input is EvidenceVariableType {
    const castInput = input as EvidenceVariableType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EvidenceVariableType";
  }

  public clone(): EvidenceVariableType {
    const result = new EvidenceVariableType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "EvidenceVariableType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
