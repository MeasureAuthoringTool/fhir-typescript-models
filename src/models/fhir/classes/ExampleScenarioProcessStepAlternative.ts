/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  ExampleScenarioProcessStep,
  Extension,
  FhirField,
  FhirList,
  IExampleScenarioProcessStepAlternative,
  PrimitiveMarkdown,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("ExampleScenarioProcessStepAlternative", "BackboneElement")
export class ExampleScenarioProcessStepAlternative extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExampleScenario.Process.Step.Alternative";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public title?: PrimitiveString;

  @FhirField("PrimitiveMarkdown")
  public description?: PrimitiveMarkdown;

  @FhirList("ExampleScenarioProcessStep")
  public step?: Array<ExampleScenarioProcessStep>;

  public static parse(
    json: IExampleScenarioProcessStepAlternative,
    providedInstance: ExampleScenarioProcessStepAlternative = new ExampleScenarioProcessStepAlternative()
  ): ExampleScenarioProcessStepAlternative {
    const newInstance: ExampleScenarioProcessStepAlternative = BackboneElement.parse(json, providedInstance);
  
    if (json.title !== undefined) {
      newInstance.title = PrimitiveString.parsePrimitive(json.title, json._title);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveMarkdown.parsePrimitive(json.description, json._description);
    }
    if (json.step !== undefined) {
      newInstance.step = json.step.map((x) => ExampleScenarioProcessStep.parse(x));
    }
    return newInstance;
  }

  public static isExampleScenarioProcessStepAlternative(input?: unknown): input is ExampleScenarioProcessStepAlternative {
    const castInput = input as ExampleScenarioProcessStepAlternative;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExampleScenarioProcessStepAlternative";
  }

  public toJSON(): IExampleScenarioProcessStepAlternative {
    const result: IExampleScenarioProcessStepAlternative = super.toJSON();

    if (this.title) {
      result.title = this.title.value;
      result._title = Extension.serializePrimitiveExtension(this.title);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.step) {
      result.step = this.step.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ExampleScenarioProcessStepAlternative {
    return ExampleScenarioProcessStepAlternative.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExampleScenarioProcessStepAlternative";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
