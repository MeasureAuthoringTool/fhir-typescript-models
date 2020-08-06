/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class ConstraintSeverity extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ConstraintSeverity";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ConstraintSeverity = new ConstraintSeverity()
  ): ConstraintSeverity {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isConstraintSeverity(input?: unknown): input is ConstraintSeverity {
    const castInput = input as ConstraintSeverity;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ConstraintSeverity";
  }
  
  public getTypeName(): string {
    return "ConstraintSeverity";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
