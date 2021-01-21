/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("GroupMeasure", "PrimitiveCode")
export class GroupMeasure extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "GroupMeasure";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: GroupMeasure = new GroupMeasure()
  ): GroupMeasure {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isGroupMeasure(input?: unknown): input is GroupMeasure {
    const castInput = input as GroupMeasure;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "GroupMeasure";
  }

  public clone(): GroupMeasure {
    const result = new GroupMeasure();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "GroupMeasure";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
