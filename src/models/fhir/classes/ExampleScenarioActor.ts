/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  ExampleScenarioActorType,
  Extension,
  FhirField,
  IExampleScenarioActor,
  PrimitiveMarkdown,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("ExampleScenarioActor", "BackboneElement")
export class ExampleScenarioActor extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExampleScenario.Actor";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public actorId?: PrimitiveString;

  @FhirField("ExampleScenarioActorType")
  public type?: ExampleScenarioActorType;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("PrimitiveMarkdown")
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
