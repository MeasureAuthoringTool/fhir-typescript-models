/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IExampleScenarioInstanceContainedInstance,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("ExampleScenarioInstanceContainedInstance", "BackboneElement")
export class ExampleScenarioInstanceContainedInstance extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExampleScenario.Instance.ContainedInstance";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public resourceId?: PrimitiveString;

  @FhirField("PrimitiveString")
  public versionId?: PrimitiveString;

  public static parse(
    json: IExampleScenarioInstanceContainedInstance,
    providedInstance: ExampleScenarioInstanceContainedInstance = new ExampleScenarioInstanceContainedInstance()
  ): ExampleScenarioInstanceContainedInstance {
    const newInstance: ExampleScenarioInstanceContainedInstance = BackboneElement.parse(json, providedInstance);
  
    if (json.resourceId !== undefined) {
      newInstance.resourceId = PrimitiveString.parsePrimitive(json.resourceId, json._resourceId);
    }
    if (json.versionId !== undefined) {
      newInstance.versionId = PrimitiveString.parsePrimitive(json.versionId, json._versionId);
    }
    return newInstance;
  }

  public static isExampleScenarioInstanceContainedInstance(input?: unknown): input is ExampleScenarioInstanceContainedInstance {
    const castInput = input as ExampleScenarioInstanceContainedInstance;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExampleScenarioInstanceContainedInstance";
  }

  public toJSON(): IExampleScenarioInstanceContainedInstance {
    const result: IExampleScenarioInstanceContainedInstance = super.toJSON();

    if (this.resourceId) {
      result.resourceId = this.resourceId.value;
      result._resourceId = Extension.serializePrimitiveExtension(this.resourceId);
    }

    if (this.versionId) {
      result.versionId = this.versionId.value;
      result._versionId = Extension.serializePrimitiveExtension(this.versionId);
    }

    return result;
  }

  public clone(): ExampleScenarioInstanceContainedInstance {
    return ExampleScenarioInstanceContainedInstance.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExampleScenarioInstanceContainedInstance";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
