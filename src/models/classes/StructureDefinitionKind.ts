/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class StructureDefinitionKind extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureDefinitionKind";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: StructureDefinitionKind = new StructureDefinitionKind()
  ): StructureDefinitionKind {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isStructureDefinitionKind(input?: unknown): input is StructureDefinitionKind {
    const castInput = input as StructureDefinitionKind;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StructureDefinitionKind";
  }
  
  public getTypeName(): string {
    return "StructureDefinitionKind";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
