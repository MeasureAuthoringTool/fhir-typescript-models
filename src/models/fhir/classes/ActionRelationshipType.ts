/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ActionRelationshipType", "PrimitiveCode")
export class ActionRelationshipType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ActionRelationshipType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ActionRelationshipType = new ActionRelationshipType()
  ): ActionRelationshipType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isActionRelationshipType(input?: unknown): input is ActionRelationshipType {
    const castInput = input as ActionRelationshipType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ActionRelationshipType";
  }

  public clone(): ActionRelationshipType {
    const result = new ActionRelationshipType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ActionRelationshipType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
