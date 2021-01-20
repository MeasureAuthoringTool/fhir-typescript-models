/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  ActivityParticipantType,
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  IActivityDefinitionParticipant,
  FhirType
} from "../internal";

@FhirType("ActivityDefinitionParticipant", "BackboneElement")
export class ActivityDefinitionParticipant extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ActivityDefinition.Participant";

  static readonly primaryCodePath: string | null = null;

  @FhirField("ActivityParticipantType")
  public type?: ActivityParticipantType;

  @FhirField("CodeableConcept")
  public role?: CodeableConcept;

  public static parse(
    json: IActivityDefinitionParticipant,
    providedInstance: ActivityDefinitionParticipant = new ActivityDefinitionParticipant()
  ): ActivityDefinitionParticipant {
    const newInstance: ActivityDefinitionParticipant = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = ActivityParticipantType.parsePrimitive(json.type, json._type);
    }
    if (json.role !== undefined) {
      newInstance.role = CodeableConcept.parse(json.role);
    }
    return newInstance;
  }

  public static isActivityDefinitionParticipant(input?: unknown): input is ActivityDefinitionParticipant {
    const castInput = input as ActivityDefinitionParticipant;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ActivityDefinitionParticipant";
  }

  public toJSON(): IActivityDefinitionParticipant {
    const result: IActivityDefinitionParticipant = super.toJSON();

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.role) {
      result.role = this.role.toJSON();
    }

    return result;
  }

  public clone(): ActivityDefinitionParticipant {
    return ActivityDefinitionParticipant.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ActivityDefinitionParticipant";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
