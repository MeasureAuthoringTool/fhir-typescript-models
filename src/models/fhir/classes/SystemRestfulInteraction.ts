/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("SystemRestfulInteraction", "PrimitiveCode")
export class SystemRestfulInteraction extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SystemRestfulInteraction";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: SystemRestfulInteraction = new SystemRestfulInteraction()
  ): SystemRestfulInteraction {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isSystemRestfulInteraction(input?: unknown): input is SystemRestfulInteraction {
    const castInput = input as SystemRestfulInteraction;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SystemRestfulInteraction";
  }

  public clone(): SystemRestfulInteraction {
    const result = new SystemRestfulInteraction();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "SystemRestfulInteraction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
