/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  ITestScriptSetupActionOperationRequestHeader,
  PrimitiveString,
} from "../internal";

export class TestScriptSetupActionOperationRequestHeader extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestScript.Setup.Action.Operation.RequestHeader";

  public field?: PrimitiveString;

  public value?: PrimitiveString;

  public static parse(
    json: ITestScriptSetupActionOperationRequestHeader,
    providedInstance: TestScriptSetupActionOperationRequestHeader = new TestScriptSetupActionOperationRequestHeader()
  ): TestScriptSetupActionOperationRequestHeader {
    const newInstance: TestScriptSetupActionOperationRequestHeader = BackboneElement.parse(json, providedInstance);
  
    if (json.field) {
      newInstance.field = PrimitiveString.parsePrimitive(json.field, json._field);
    }
    if (json.value) {
      newInstance.value = PrimitiveString.parsePrimitive(json.value, json._value);
    }
    return newInstance;
  }

  public static isTestScriptSetupActionOperationRequestHeader(input?: unknown): input is TestScriptSetupActionOperationRequestHeader {
    const castInput = input as TestScriptSetupActionOperationRequestHeader;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestScriptSetupActionOperationRequestHeader";
  }

  public toJSON(): ITestScriptSetupActionOperationRequestHeader {
    const result: ITestScriptSetupActionOperationRequestHeader = super.toJSON();

    if (this.field) {
      result.field = this.field.value;
      result._field = Extension.serializePrimitiveExtension(this.field);
    }

    if (this.value) {
      result.value = this.value.value;
      result._value = Extension.serializePrimitiveExtension(this.value);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "TestScriptSetupActionOperationRequestHeader";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
