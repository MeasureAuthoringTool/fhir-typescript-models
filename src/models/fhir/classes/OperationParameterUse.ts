/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class OperationParameterUse extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "OperationParameterUse";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: OperationParameterUse = new OperationParameterUse()
  ): OperationParameterUse {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isOperationParameterUse(input?: unknown): input is OperationParameterUse {
    const castInput = input as OperationParameterUse;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "OperationParameterUse";
  }

  public clone(): OperationParameterUse {
    const result = new OperationParameterUse();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "OperationParameterUse";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
