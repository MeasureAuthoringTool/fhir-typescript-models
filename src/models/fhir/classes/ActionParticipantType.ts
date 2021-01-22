/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ActionParticipantType", "PrimitiveCode")
export class ActionParticipantType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ActionParticipantType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ActionParticipantType = new ActionParticipantType()
  ): ActionParticipantType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isActionParticipantType(input?: unknown): input is ActionParticipantType {
    const castInput = input as ActionParticipantType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ActionParticipantType";
  }

  public clone(): ActionParticipantType {
    const result = new ActionParticipantType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ActionParticipantType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
