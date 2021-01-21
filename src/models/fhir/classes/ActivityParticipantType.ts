/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ActivityParticipantType", "PrimitiveCode")
export class ActivityParticipantType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ActivityParticipantType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ActivityParticipantType = new ActivityParticipantType()
  ): ActivityParticipantType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isActivityParticipantType(input?: unknown): input is ActivityParticipantType {
    const castInput = input as ActivityParticipantType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ActivityParticipantType";
  }

  public clone(): ActivityParticipantType {
    const result = new ActivityParticipantType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ActivityParticipantType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
