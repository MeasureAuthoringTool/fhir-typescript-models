/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("SlicingRules", "PrimitiveCode")
export class SlicingRules extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SlicingRules";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: SlicingRules = new SlicingRules()
  ): SlicingRules {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isSlicingRules(input?: unknown): input is SlicingRules {
    const castInput = input as SlicingRules;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SlicingRules";
  }

  public clone(): SlicingRules {
    const result = new SlicingRules();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "SlicingRules";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
