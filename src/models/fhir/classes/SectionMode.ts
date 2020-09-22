/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class SectionMode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SectionMode";
  
  static readonly primaryCodePath: string | null = null;

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

  public clone(): SectionMode {
    const result = new SectionMode();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "SectionMode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
