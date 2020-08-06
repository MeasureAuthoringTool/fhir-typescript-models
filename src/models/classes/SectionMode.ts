/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class SectionMode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SectionMode";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: SectionMode = new SectionMode()
  ): SectionMode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isSectionMode(input?: unknown): input is SectionMode {
    const castInput = input as SectionMode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SectionMode";
  }
  
  public getTypeName(): string {
    return "SectionMode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
