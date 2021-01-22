/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("GroupType", "PrimitiveCode")
export class GroupType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "GroupType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: GroupType = new GroupType()
  ): GroupType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isGroupType(input?: unknown): input is GroupType {
    const castInput = input as GroupType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "GroupType";
  }

  public clone(): GroupType {
    const result = new GroupType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "GroupType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
