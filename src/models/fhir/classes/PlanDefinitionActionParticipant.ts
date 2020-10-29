/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  ActionParticipantType,
  BackboneElement,
  CodeableConcept,
  Extension,
  IPlanDefinitionActionParticipant,
  FieldMetadata
} from "../internal";

export class PlanDefinitionActionParticipant extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PlanDefinition.Action.Participant";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "type",
      fieldType: [ActionParticipantType],
      isArray: false
    }, {
      fieldName: "role",
      fieldType: [CodeableConcept],
      isArray: false
    }];
  }

  public type?: ActionParticipantType;

  public role?: CodeableConcept;

  public static parse(
    json: IPlanDefinitionActionParticipant,
    providedInstance: PlanDefinitionActionParticipant = new PlanDefinitionActionParticipant()
  ): PlanDefinitionActionParticipant {
    const newInstance: PlanDefinitionActionParticipant = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = ActionParticipantType.parsePrimitive(json.type, json._type);
    }
    if (json.role !== undefined) {
      newInstance.role = CodeableConcept.parse(json.role);
    }
    return newInstance;
  }

  public static isPlanDefinitionActionParticipant(input?: unknown): input is PlanDefinitionActionParticipant {
    const castInput = input as PlanDefinitionActionParticipant;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PlanDefinitionActionParticipant";
  }

  public toJSON(): IPlanDefinitionActionParticipant {
    const result: IPlanDefinitionActionParticipant = super.toJSON();

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.role) {
      result.role = this.role.toJSON();
    }

    return result;
  }

  public clone(): PlanDefinitionActionParticipant {
    return PlanDefinitionActionParticipant.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "PlanDefinitionActionParticipant";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
