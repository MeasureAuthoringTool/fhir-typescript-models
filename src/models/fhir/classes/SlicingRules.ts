/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class SlicingRules extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SlicingRules";

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
  
  public getTypeName(): string {
    return "SlicingRules";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
