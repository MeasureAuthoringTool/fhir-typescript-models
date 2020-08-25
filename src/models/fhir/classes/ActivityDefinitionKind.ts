/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class ActivityDefinitionKind extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ActivityDefinitionKind";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ActivityDefinitionKind = new ActivityDefinitionKind()
  ): ActivityDefinitionKind {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isActivityDefinitionKind(input?: unknown): input is ActivityDefinitionKind {
    const castInput = input as ActivityDefinitionKind;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ActivityDefinitionKind";
  }
  
  public getTypeName(): string {
    return "ActivityDefinitionKind";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
