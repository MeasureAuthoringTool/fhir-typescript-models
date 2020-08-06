/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class SequenceType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SequenceType";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: SequenceType = new SequenceType()
  ): SequenceType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isSequenceType(input?: unknown): input is SequenceType {
    const castInput = input as SequenceType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SequenceType";
  }
  
  public getTypeName(): string {
    return "SequenceType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
