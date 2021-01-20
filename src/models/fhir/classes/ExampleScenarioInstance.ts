/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  ExampleScenarioInstanceContainedInstance,
  ExampleScenarioInstanceVersion,
  Extension,
  FhirField,
  FhirList,
  FHIRResourceType,
  IExampleScenarioInstance,
  PrimitiveMarkdown,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("ExampleScenarioInstance", "BackboneElement")
export class ExampleScenarioInstance extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExampleScenario.Instance";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public resourceId?: PrimitiveString;

  @FhirField("FHIRResourceType")
  public resourceType?: FHIRResourceType;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("PrimitiveMarkdown")
  public description?: PrimitiveMarkdown;

  @FhirList("ExampleScenarioInstanceVersion")
  public version?: Array<ExampleScenarioInstanceVersion>;

  @FhirList("ExampleScenarioInstanceContainedInstance")
  public containedInstance?: Array<ExampleScenarioInstanceContainedInstance>;

  public static parse(
    json: IExampleScenarioInstance,
    providedInstance: ExampleScenarioInstance = new ExampleScenarioInstance()
  ): ExampleScenarioInstance {
    const newInstance: ExampleScenarioInstance = BackboneElement.parse(json, providedInstance);
  
    if (json.resourceId !== undefined) {
      newInstance.resourceId = PrimitiveString.parsePrimitive(json.resourceId, json._resourceId);
    }
    if (json.resourceType !== undefined) {
      newInstance.resourceType = FHIRResourceType.parsePrimitive(json.resourceType, json._resourceType);
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveMarkdown.parsePrimitive(json.description, json._description);
    }
    if (json.version !== undefined) {
      newInstance.version = json.version.map((x) => ExampleScenarioInstanceVersion.parse(x));
    }
    if (json.containedInstance !== undefined) {
      newInstance.containedInstance = json.containedInstance.map((x) => ExampleScenarioInstanceContainedInstance.parse(x));
    }
    return newInstance;
  }

  public static isExampleScenarioInstance(input?: unknown): input is ExampleScenarioInstance {
    const castInput = input as ExampleScenarioInstance;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExampleScenarioInstance";
  }

  public toJSON(): IExampleScenarioInstance {
    const result: IExampleScenarioInstance = super.toJSON();

    if (this.resourceId) {
      result.resourceId = this.resourceId.value;
      result._resourceId = Extension.serializePrimitiveExtension(this.resourceId);
    }

    if (this.resourceType) {
      result.resourceType = this.resourceType.value;
      result._resourceType = Extension.serializePrimitiveExtension(this.resourceType);
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.version) {
      result.version = this.version.map((x) => x.toJSON());
    }

    if (this.containedInstance) {
      result.containedInstance = this.containedInstance.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ExampleScenarioInstance {
    return ExampleScenarioInstance.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExampleScenarioInstance";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
