/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("OperationKind", "PrimitiveCode")
export class OperationKind extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "OperationKind";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: OperationKind = new OperationKind()
  ): OperationKind {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isOperationKind(input?: unknown): input is OperationKind {
    const castInput = input as OperationKind;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "OperationKind";
  }

  public clone(): OperationKind {
    const result = new OperationKind();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "OperationKind";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
