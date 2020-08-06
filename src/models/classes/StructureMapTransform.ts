/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class StructureMapTransform extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureMapTransform";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: StructureMapTransform = new StructureMapTransform()
  ): StructureMapTransform {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isStructureMapTransform(input?: unknown): input is StructureMapTransform {
    const castInput = input as StructureMapTransform;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StructureMapTransform";
  }
  
  public getTypeName(): string {
    return "StructureMapTransform";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
