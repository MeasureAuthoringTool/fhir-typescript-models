/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class ActionRelationshipType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ActionRelationshipType";

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
  
  public getTypeName(): string {
    return "ActionRelationshipType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
