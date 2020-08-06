/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class CommunicationPriority extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CommunicationPriority";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: CommunicationPriority = new CommunicationPriority()
  ): CommunicationPriority {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isCommunicationPriority(input?: unknown): input is CommunicationPriority {
    const castInput = input as CommunicationPriority;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CommunicationPriority";
  }
  
  public getTypeName(): string {
    return "CommunicationPriority";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
