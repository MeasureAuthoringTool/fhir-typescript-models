/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  ExampleScenarioActorType,
  Extension,
  IExampleScenarioActor,
  PrimitiveMarkdown,
  PrimitiveString,
  FieldMetadata
} from "../internal";

export class ExampleScenarioActor extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExampleScenario.Actor";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "actorId",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "type",
      fieldType: [ExampleScenarioActorType],
      isArray: false
    }, {
      fieldName: "name",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "description",
      fieldType: [PrimitiveMarkdown],
      isArray: false
    }];
  }

  public actorId?: PrimitiveString;

  public type?: ExampleScenarioActorType;

  public name?: PrimitiveString;

  public description?: PrimitiveMarkdown;

  public static parse(
    json: IExampleScenarioActor,
    providedInstance: ExampleScenarioActor = new ExampleScenarioActor()
  ): ExampleScenarioActor {
    const newInstance: ExampleScenarioActor = BackboneElement.parse(json, providedInstance);
  
    if (json.actorId !== undefined) {
      newInstance.actorId = PrimitiveString.parsePrimitive(json.actorId, json._actorId);
    }
    if (json.type !== undefined) {
      newInstance.type = ExampleScenarioActorType.parsePrimitive(json.type, json._type);
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveMarkdown.parsePrimitive(json.description, json._description);
    }
    return newInstance;
  }

  public static isExampleScenarioActor(input?: unknown): input is ExampleScenarioActor {
    const castInput = input as ExampleScenarioActor;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExampleScenarioActor";
  }

  public toJSON(): IExampleScenarioActor {
    const result: IExampleScenarioActor = super.toJSON();

    if (this.actorId) {
      result.actorId = this.actorId.value;
      result._actorId = Extension.serializePrimitiveExtension(this.actorId);
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    return result;
  }

  public clone(): ExampleScenarioActor {
    return ExampleScenarioActor.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExampleScenarioActor";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
