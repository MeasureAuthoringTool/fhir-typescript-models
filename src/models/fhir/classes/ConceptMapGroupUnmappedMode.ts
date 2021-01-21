/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ConceptMapGroupUnmappedMode", "PrimitiveCode")
export class ConceptMapGroupUnmappedMode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ConceptMapGroupUnmappedMode";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ConceptMapGroupUnmappedMode = new ConceptMapGroupUnmappedMode()
  ): ConceptMapGroupUnmappedMode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isConceptMapGroupUnmappedMode(input?: unknown): input is ConceptMapGroupUnmappedMode {
    const castInput = input as ConceptMapGroupUnmappedMode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ConceptMapGroupUnmappedMode";
  }

  public clone(): ConceptMapGroupUnmappedMode {
    const result = new ConceptMapGroupUnmappedMode();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ConceptMapGroupUnmappedMode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
