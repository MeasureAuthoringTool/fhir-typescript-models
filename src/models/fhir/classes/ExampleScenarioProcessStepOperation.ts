/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  ExampleScenarioInstanceContainedInstance,
  Extension,
  IExampleScenarioProcessStepOperation,
  PrimitiveBoolean,
  PrimitiveMarkdown,
  PrimitiveString,
  FieldMetadata
} from "../internal";

export class ExampleScenarioProcessStepOperation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExampleScenario.Process.Step.Operation";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "number",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "type",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "name",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "initiator",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "receiver",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "description",
      fieldType: [PrimitiveMarkdown],
      isArray: false
    }, {
      fieldName: "initiatorActive",
      fieldType: [PrimitiveBoolean],
      isArray: false
    }, {
      fieldName: "receiverActive",
      fieldType: [PrimitiveBoolean],
      isArray: false
    }, {
      fieldName: "request",
      fieldType: [ExampleScenarioInstanceContainedInstance],
      isArray: false
    }, {
      fieldName: "response",
      fieldType: [ExampleScenarioInstanceContainedInstance],
      isArray: false
    }];
  }

  public number?: PrimitiveString;

  public type?: PrimitiveString;

  public name?: PrimitiveString;

  public initiator?: PrimitiveString;

  public receiver?: PrimitiveString;

  public description?: PrimitiveMarkdown;

  public initiatorActive?: PrimitiveBoolean;

  public receiverActive?: PrimitiveBoolean;

  public request?: ExampleScenarioInstanceContainedInstance;

  public response?: ExampleScenarioInstanceContainedInstance;

  public static parse(
    json: IExampleScenarioProcessStepOperation,
    providedInstance: ExampleScenarioProcessStepOperation = new ExampleScenarioProcessStepOperation()
  ): ExampleScenarioProcessStepOperation {
    const newInstance: ExampleScenarioProcessStepOperation = BackboneElement.parse(json, providedInstance);
  
    if (json.number !== undefined) {
      newInstance.number = PrimitiveString.parsePrimitive(json.number, json._number);
    }
    if (json.type !== undefined) {
      newInstance.type = PrimitiveString.parsePrimitive(json.type, json._type);
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.initiator !== undefined) {
      newInstance.initiator = PrimitiveString.parsePrimitive(json.initiator, json._initiator);
    }
    if (json.receiver !== undefined) {
      newInstance.receiver = PrimitiveString.parsePrimitive(json.receiver, json._receiver);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveMarkdown.parsePrimitive(json.description, json._description);
    }
    if (json.initiatorActive !== undefined) {
      newInstance.initiatorActive = PrimitiveBoolean.parsePrimitive(json.initiatorActive, json._initiatorActive);
    }
    if (json.receiverActive !== undefined) {
      newInstance.receiverActive = PrimitiveBoolean.parsePrimitive(json.receiverActive, json._receiverActive);
    }
    if (json.request !== undefined) {
      newInstance.request = ExampleScenarioInstanceContainedInstance.parse(json.request);
    }
    if (json.response !== undefined) {
      newInstance.response = ExampleScenarioInstanceContainedInstance.parse(json.response);
    }
    return newInstance;
  }

  public static isExampleScenarioProcessStepOperation(input?: unknown): input is ExampleScenarioProcessStepOperation {
    const castInput = input as ExampleScenarioProcessStepOperation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExampleScenarioProcessStepOperation";
  }

  public toJSON(): IExampleScenarioProcessStepOperation {
    const result: IExampleScenarioProcessStepOperation = super.toJSON();

    if (this.number) {
      result.number = this.number.value;
      result._number = Extension.serializePrimitiveExtension(this.number);
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.initiator) {
      result.initiator = this.initiator.value;
      result._initiator = Extension.serializePrimitiveExtension(this.initiator);
    }

    if (this.receiver) {
      result.receiver = this.receiver.value;
      result._receiver = Extension.serializePrimitiveExtension(this.receiver);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.initiatorActive) {
      result.initiatorActive = this.initiatorActive.value;
      result._initiatorActive = Extension.serializePrimitiveExtension(this.initiatorActive);
    }

    if (this.receiverActive) {
      result.receiverActive = this.receiverActive.value;
      result._receiverActive = Extension.serializePrimitiveExtension(this.receiverActive);
    }

    if (this.request) {
      result.request = this.request.toJSON();
    }

    if (this.response) {
      result.response = this.response.toJSON();
    }

    return result;
  }

  public clone(): ExampleScenarioProcessStepOperation {
    return ExampleScenarioProcessStepOperation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExampleScenarioProcessStepOperation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
