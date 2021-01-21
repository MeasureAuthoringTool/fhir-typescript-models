/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  ITestScriptVariable,
  PrimitiveId,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("TestScriptVariable", "BackboneElement")
export class TestScriptVariable extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestScript.Variable";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("PrimitiveString")
  public defaultValue?: PrimitiveString;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirField("PrimitiveString")
  public expression?: PrimitiveString;

  @FhirField("PrimitiveString")
  public headerField?: PrimitiveString;

  @FhirField("PrimitiveString")
  public hint?: PrimitiveString;

  @FhirField("PrimitiveString")
  public path?: PrimitiveString;

  @FhirField("PrimitiveId")
  public sourceId?: PrimitiveId;

  public static parse(
    json: ITestScriptVariable,
    providedInstance: TestScriptVariable = new TestScriptVariable()
  ): TestScriptVariable {
    const newInstance: TestScriptVariable = BackboneElement.parse(json, providedInstance);
  
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.defaultValue !== undefined) {
      newInstance.defaultValue = PrimitiveString.parsePrimitive(json.defaultValue, json._defaultValue);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.expression !== undefined) {
      newInstance.expression = PrimitiveString.parsePrimitive(json.expression, json._expression);
    }
    if (json.headerField !== undefined) {
      newInstance.headerField = PrimitiveString.parsePrimitive(json.headerField, json._headerField);
    }
    if (json.hint !== undefined) {
      newInstance.hint = PrimitiveString.parsePrimitive(json.hint, json._hint);
    }
    if (json.path !== undefined) {
      newInstance.path = PrimitiveString.parsePrimitive(json.path, json._path);
    }
    if (json.sourceId !== undefined) {
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

  public clone(): TestScriptVariable {
    return TestScriptVariable.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TestScriptVariable";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
