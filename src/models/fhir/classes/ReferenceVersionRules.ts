/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class ReferenceVersionRules extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ReferenceVersionRules";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ReferenceVersionRules = new ReferenceVersionRules()
  ): ReferenceVersionRules {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isReferenceVersionRules(input?: unknown): input is ReferenceVersionRules {
    const castInput = input as ReferenceVersionRules;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ReferenceVersionRules";
  }

  public clone(): ReferenceVersionRules {
    const result = new ReferenceVersionRules();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ReferenceVersionRules";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
