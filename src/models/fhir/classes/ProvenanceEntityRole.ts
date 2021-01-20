/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ProvenanceEntityRole", "PrimitiveCode")
export class ProvenanceEntityRole extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ProvenanceEntityRole";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ProvenanceEntityRole = new ProvenanceEntityRole()
  ): ProvenanceEntityRole {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isProvenanceEntityRole(input?: unknown): input is ProvenanceEntityRole {
    const castInput = input as ProvenanceEntityRole;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ProvenanceEntityRole";
  }

  public clone(): ProvenanceEntityRole {
    const result = new ProvenanceEntityRole();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ProvenanceEntityRole";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
