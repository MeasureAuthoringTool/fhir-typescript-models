/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  ExampleScenarioProcess,
  ExampleScenarioProcessStepAlternative,
  ExampleScenarioProcessStepOperation,
  Extension,
  IExampleScenarioProcessStep,
  PrimitiveBoolean,
  FieldMetadata
} from "../internal";

export class ExampleScenarioProcessStep extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExampleScenario.Process.Step";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "process",
      fieldType: [ExampleScenarioProcess],
      isArray: true
    }, {
      fieldName: "pause",
      fieldType: [PrimitiveBoolean],
      isArray: false
    }, {
      fieldName: "operation",
      fieldType: [ExampleScenarioProcessStepOperation],
      isArray: false
    }, {
      fieldName: "alternative",
      fieldType: [ExampleScenarioProcessStepAlternative],
      isArray: true
    }];
  }

  public process?: Array<ExampleScenarioProcess>;

  public pause?: PrimitiveBoolean;

  public operation?: ExampleScenarioProcessStepOperation;

  public alternative?: Array<ExampleScenarioProcessStepAlternative>;

  public static parse(
    json: IExampleScenarioProcessStep,
    providedInstance: ExampleScenarioProcessStep = new ExampleScenarioProcessStep()
  ): ExampleScenarioProcessStep {
    const newInstance: ExampleScenarioProcessStep = BackboneElement.parse(json, providedInstance);
  
    if (json.process !== undefined) {
      newInstance.process = json.process.map((x) => ExampleScenarioProcess.parse(x));
    }
    if (json.pause !== undefined) {
      newInstance.pause = PrimitiveBoolean.parsePrimitive(json.pause, json._pause);
    }
    if (json.operation !== undefined) {
      newInstance.operation = ExampleScenarioProcessStepOperation.parse(json.operation);
    }
    if (json.alternative !== undefined) {
      newInstance.alternative = json.alternative.map((x) => ExampleScenarioProcessStepAlternative.parse(x));
    }
    return newInstance;
  }

  public static isExampleScenarioProcessStep(input?: unknown): input is ExampleScenarioProcessStep {
    const castInput = input as ExampleScenarioProcessStep;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExampleScenarioProcessStep";
  }

  public toJSON(): IExampleScenarioProcessStep {
    const result: IExampleScenarioProcessStep = super.toJSON();

    if (this.process) {
      result.process = this.process.map((x) => x.toJSON());
    }

    if (this.pause) {
      result.pause = this.pause.value;
      result._pause = Extension.serializePrimitiveExtension(this.pause);
    }

    if (this.operation) {
      result.operation = this.operation.toJSON();
    }

    if (this.alternative) {
      result.alternative = this.alternative.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ExampleScenarioProcessStep {
    return ExampleScenarioProcessStep.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExampleScenarioProcessStep";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
