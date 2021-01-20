/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  ExampleScenarioProcessStep,
  Extension,
  FhirField,
  FhirList,
  IExampleScenarioProcess,
  PrimitiveMarkdown,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("ExampleScenarioProcess", "BackboneElement")
export class ExampleScenarioProcess extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExampleScenario.Process";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public title?: PrimitiveString;

  @FhirField("PrimitiveMarkdown")
  public description?: PrimitiveMarkdown;

  @FhirField("PrimitiveMarkdown")
  public preConditions?: PrimitiveMarkdown;

  @FhirField("PrimitiveMarkdown")
  public postConditions?: PrimitiveMarkdown;

  @FhirList("ExampleScenarioProcessStep")
  public step?: Array<ExampleScenarioProcessStep>;

  public static parse(
    json: IExampleScenarioProcess,
    providedInstance: ExampleScenarioProcess = new ExampleScenarioProcess()
  ): ExampleScenarioProcess {
    const newInstance: ExampleScenarioProcess = BackboneElement.parse(json, providedInstance);
  
    if (json.title !== undefined) {
      newInstance.title = PrimitiveString.parsePrimitive(json.title, json._title);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveMarkdown.parsePrimitive(json.description, json._description);
    }
    if (json.preConditions !== undefined) {
      newInstance.preConditions = PrimitiveMarkdown.parsePrimitive(json.preConditions, json._preConditions);
    }
    if (json.postConditions !== undefined) {
      newInstance.postConditions = PrimitiveMarkdown.parsePrimitive(json.postConditions, json._postConditions);
    }
    if (json.step !== undefined) {
      newInstance.step = json.step.map((x) => ExampleScenarioProcessStep.parse(x));
    }
    return newInstance;
  }

  public static isExampleScenarioProcess(input?: unknown): input is ExampleScenarioProcess {
    const castInput = input as ExampleScenarioProcess;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExampleScenarioProcess";
  }

  public toJSON(): IExampleScenarioProcess {
    const result: IExampleScenarioProcess = super.toJSON();

    if (this.title) {
      result.title = this.title.value;
      result._title = Extension.serializePrimitiveExtension(this.title);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.preConditions) {
      result.preConditions = this.preConditions.value;
      result._preConditions = Extension.serializePrimitiveExtension(this.preConditions);
    }

    if (this.postConditions) {
      result.postConditions = this.postConditions.value;
      result._postConditions = Extension.serializePrimitiveExtension(this.postConditions);
    }

    if (this.step) {
      result.step = this.step.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ExampleScenarioProcess {
    return ExampleScenarioProcess.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExampleScenarioProcess";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
