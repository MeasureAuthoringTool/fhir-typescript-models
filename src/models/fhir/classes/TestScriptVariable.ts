/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  ITestScriptVariable,
  PrimitiveId,
  PrimitiveString,
} from "../internal";

export class TestScriptVariable extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestScript.Variable";

  public name?: PrimitiveString;

  public defaultValue?: PrimitiveString;

  public description?: PrimitiveString;

  public expression?: PrimitiveString;

  public headerField?: PrimitiveString;

  public hint?: PrimitiveString;

  public path?: PrimitiveString;

  public sourceId?: PrimitiveId;

  public static parse(
    json: ITestScriptVariable,
    providedInstance: TestScriptVariable = new TestScriptVariable()
  ): TestScriptVariable {
    const newInstance: TestScriptVariable = BackboneElement.parse(json, providedInstance);
  
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.defaultValue) {
      newInstance.defaultValue = PrimitiveString.parsePrimitive(json.defaultValue, json._defaultValue);
    }
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.expression) {
      newInstance.expression = PrimitiveString.parsePrimitive(json.expression, json._expression);
    }
    if (json.headerField) {
      newInstance.headerField = PrimitiveString.parsePrimitive(json.headerField, json._headerField);
    }
    if (json.hint) {
      newInstance.hint = PrimitiveString.parsePrimitive(json.hint, json._hint);
    }
    if (json.path) {
      newInstance.path = PrimitiveString.parsePrimitive(json.path, json._path);
    }
    if (json.sourceId) {
      newInstance.sourceId = PrimitiveId.parsePrimitive(json.sourceId, json._sourceId);
    }
    return newInstance;
  }

  public static isTestScriptVariable(input?: unknown): input is TestScriptVariable {
    const castInput = input as TestScriptVariable;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestScriptVariable";
  }

  public toJSON(): ITestScriptVariable {
    const result: ITestScriptVariable = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.defaultValue) {
      result.defaultValue = this.defaultValue.value;
      result._defaultValue = Extension.serializePrimitiveExtension(this.defaultValue);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.expression) {
      result.expression = this.expression.value;
      result._expression = Extension.serializePrimitiveExtension(this.expression);
    }

    if (this.headerField) {
      result.headerField = this.headerField.value;
      result._headerField = Extension.serializePrimitiveExtension(this.headerField);
    }

    if (this.hint) {
      result.hint = this.hint.value;
      result._hint = Extension.serializePrimitiveExtension(this.hint);
    }

    if (this.path) {
      result.path = this.path.value;
      result._path = Extension.serializePrimitiveExtension(this.path);
    }

    if (this.sourceId) {
      result.sourceId = this.sourceId.value;
      result._sourceId = Extension.serializePrimitiveExtension(this.sourceId);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "TestScriptVariable";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
