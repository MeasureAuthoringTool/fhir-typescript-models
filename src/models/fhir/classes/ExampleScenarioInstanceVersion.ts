/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IExampleScenarioInstanceVersion,
  PrimitiveMarkdown,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("ExampleScenarioInstanceVersion", "BackboneElement")
export class ExampleScenarioInstanceVersion extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExampleScenario.Instance.Version";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public versionId?: PrimitiveString;

  @FhirField("PrimitiveMarkdown")
  public description?: PrimitiveMarkdown;

  public static parse(
    json: IExampleScenarioInstanceVersion,
    providedInstance: ExampleScenarioInstanceVersion = new ExampleScenarioInstanceVersion()
  ): ExampleScenarioInstanceVersion {
    const newInstance: ExampleScenarioInstanceVersion = BackboneElement.parse(json, providedInstance);
  
    if (json.versionId !== undefined) {
      newInstance.versionId = PrimitiveString.parsePrimitive(json.versionId, json._versionId);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveMarkdown.parsePrimitive(json.description, json._description);
    }
    return newInstance;
  }

  public static isExampleScenarioInstanceVersion(input?: unknown): input is ExampleScenarioInstanceVersion {
    const castInput = input as ExampleScenarioInstanceVersion;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExampleScenarioInstanceVersion";
  }

  public toJSON(): IExampleScenarioInstanceVersion {
    const result: IExampleScenarioInstanceVersion = super.toJSON();

    if (this.versionId) {
      result.versionId = this.versionId.value;
      result._versionId = Extension.serializePrimitiveExtension(this.versionId);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    return result;
  }

  public clone(): ExampleScenarioInstanceVersion {
    return ExampleScenarioInstanceVersion.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExampleScenarioInstanceVersion";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
