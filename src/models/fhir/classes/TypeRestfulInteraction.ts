/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class TypeRestfulInteraction extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TypeRestfulInteraction";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: TypeRestfulInteraction = new TypeRestfulInteraction()
  ): TypeRestfulInteraction {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isTypeRestfulInteraction(input?: unknown): input is TypeRestfulInteraction {
    const castInput = input as TypeRestfulInteraction;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TypeRestfulInteraction";
  }

  public clone(): TypeRestfulInteraction {
    const result = new TypeRestfulInteraction();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "TypeRestfulInteraction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
