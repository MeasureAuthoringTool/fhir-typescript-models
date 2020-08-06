/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  AssertionDirectionType,
  AssertionOperatorType,
  AssertionResponseTypes,
  BackboneElement,
  Extension,
  FHIRDefinedType,
  ITestScriptSetupActionAssert,
  MimeType,
  PrimitiveBoolean,
  PrimitiveId,
  PrimitiveString,
  TestScriptRequestMethodCode,
} from "../internal";

export class TestScriptSetupActionAssert extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestScript.Setup.Action.Assert";

  public label?: PrimitiveString;

  public description?: PrimitiveString;

  public direction?: AssertionDirectionType;

  public compareToSourceId?: PrimitiveString;

  public compareToSourceExpression?: PrimitiveString;

  public compareToSourcePath?: PrimitiveString;

  public contentType?: MimeType;

  public expression?: PrimitiveString;

  public headerField?: PrimitiveString;

  public minimumId?: PrimitiveString;

  public navigationLinks?: PrimitiveBoolean;

  public operator?: AssertionOperatorType;

  public path?: PrimitiveString;

  public requestMethod?: TestScriptRequestMethodCode;

  public requestURL?: PrimitiveString;

  public resource?: FHIRDefinedType;

  public response?: AssertionResponseTypes;

  public responseCode?: PrimitiveString;

  public sourceId?: PrimitiveId;

  public validateProfileId?: PrimitiveId;

  public value?: PrimitiveString;

  public warningOnly?: PrimitiveBoolean;

  public static parse(
    json: ITestScriptSetupActionAssert,
    providedInstance: TestScriptSetupActionAssert = new TestScriptSetupActionAssert()
  ): TestScriptSetupActionAssert {
    const newInstance: TestScriptSetupActionAssert = BackboneElement.parse(json, providedInstance);
  
    if (json.label) {
      newInstance.label = PrimitiveString.parsePrimitive(json.label, json._label);
    }
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.direction) {
      newInstance.direction = AssertionDirectionType.parsePrimitive(json.direction, json._direction);
    }
    if (json.compareToSourceId) {
      newInstance.compareToSourceId = PrimitiveString.parsePrimitive(json.compareToSourceId, json._compareToSourceId);
    }
    if (json.compareToSourceExpression) {
      newInstance.compareToSourceExpression = PrimitiveString.parsePrimitive(json.compareToSourceExpression, json._compareToSourceExpression);
    }
    if (json.compareToSourcePath) {
      newInstance.compareToSourcePath = PrimitiveString.parsePrimitive(json.compareToSourcePath, json._compareToSourcePath);
    }
    if (json.contentType) {
      newInstance.contentType = MimeType.parsePrimitive(json.contentType, json._contentType);
    }
    if (json.expression) {
      newInstance.expression = PrimitiveString.parsePrimitive(json.expression, json._expression);
    }
    if (json.headerField) {
      newInstance.headerField = PrimitiveString.parsePrimitive(json.headerField, json._headerField);
    }
    if (json.minimumId) {
      newInstance.minimumId = PrimitiveString.parsePrimitive(json.minimumId, json._minimumId);
    }
    if (json.navigationLinks) {
      newInstance.navigationLinks = PrimitiveBoolean.parsePrimitive(json.navigationLinks, json._navigationLinks);
    }
    if (json.operator) {
      newInstance.operator = AssertionOperatorType.parsePrimitive(json.operator, json._operator);
    }
    if (json.path) {
      newInstance.path = PrimitiveString.parsePrimitive(json.path, json._path);
    }
    if (json.requestMethod) {
      newInstance.requestMethod = TestScriptRequestMethodCode.parsePrimitive(json.requestMethod, json._requestMethod);
    }
    if (json.requestURL) {
      newInstance.requestURL = PrimitiveString.parsePrimitive(json.requestURL, json._requestURL);
    }
    if (json.resource) {
      newInstance.resource = FHIRDefinedType.parsePrimitive(json.resource, json._resource);
    }
    if (json.response) {
      newInstance.response = AssertionResponseTypes.parsePrimitive(json.response, json._response);
    }
    if (json.responseCode) {
      newInstance.responseCode = PrimitiveString.parsePrimitive(json.responseCode, json._responseCode);
    }
    if (json.sourceId) {
      newInstance.sourceId = PrimitiveId.parsePrimitive(json.sourceId, json._sourceId);
    }
    if (json.validateProfileId) {
      newInstance.validateProfileId = PrimitiveId.parsePrimitive(json.validateProfileId, json._validateProfileId);
    }
    if (json.value) {
      newInstance.value = PrimitiveString.parsePrimitive(json.value, json._value);
    }
    if (json.warningOnly) {
      newInstance.warningOnly = PrimitiveBoolean.parsePrimitive(json.warningOnly, json._warningOnly);
    }
    return newInstance;
  }

  public static isTestScriptSetupActionAssert(input?: unknown): input is TestScriptSetupActionAssert {
    const castInput = input as TestScriptSetupActionAssert;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestScriptSetupActionAssert";
  }

  public toJSON(): ITestScriptSetupActionAssert {
    const result: ITestScriptSetupActionAssert = super.toJSON();

    if (this.label) {
      result.label = this.label.value;
      result._label = Extension.serializePrimitiveExtension(this.label);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.direction) {
      result.direction = this.direction.value;
      result._direction = Extension.serializePrimitiveExtension(this.direction);
    }

    if (this.compareToSourceId) {
      result.compareToSourceId = this.compareToSourceId.value;
      result._compareToSourceId = Extension.serializePrimitiveExtension(this.compareToSourceId);
    }

    if (this.compareToSourceExpression) {
      result.compareToSourceExpression = this.compareToSourceExpression.value;
      result._compareToSourceExpression = Extension.serializePrimitiveExtension(this.compareToSourceExpression);
    }

    if (this.compareToSourcePath) {
      result.compareToSourcePath = this.compareToSourcePath.value;
      result._compareToSourcePath = Extension.serializePrimitiveExtension(this.compareToSourcePath);
    }

    if (this.contentType) {
      result.contentType = this.contentType.value;
      result._contentType = Extension.serializePrimitiveExtension(this.contentType);
    }

    if (this.expression) {
      result.expression = this.expression.value;
      result._expression = Extension.serializePrimitiveExtension(this.expression);
    }

    if (this.headerField) {
      result.headerField = this.headerField.value;
      result._headerField = Extension.serializePrimitiveExtension(this.headerField);
    }

    if (this.minimumId) {
      result.minimumId = this.minimumId.value;
      result._minimumId = Extension.serializePrimitiveExtension(this.minimumId);
    }

    if (this.navigationLinks) {
      result.navigationLinks = this.navigationLinks.value;
      result._navigationLinks = Extension.serializePrimitiveExtension(this.navigationLinks);
    }

    if (this.operator) {
      result.operator = this.operator.value;
      result._operator = Extension.serializePrimitiveExtension(this.operator);
    }

    if (this.path) {
      result.path = this.path.value;
      result._path = Extension.serializePrimitiveExtension(this.path);
    }

    if (this.requestMethod) {
      result.requestMethod = this.requestMethod.value;
      result._requestMethod = Extension.serializePrimitiveExtension(this.requestMethod);
    }

    if (this.requestURL) {
      result.requestURL = this.requestURL.value;
      result._requestURL = Extension.serializePrimitiveExtension(this.requestURL);
    }

    if (this.resource) {
      result.resource = this.resource.value;
      result._resource = Extension.serializePrimitiveExtension(this.resource);
    }

    if (this.response) {
      result.response = this.response.value;
      result._response = Extension.serializePrimitiveExtension(this.response);
    }

    if (this.responseCode) {
      result.responseCode = this.responseCode.value;
      result._responseCode = Extension.serializePrimitiveExtension(this.responseCode);
    }

    if (this.sourceId) {
      result.sourceId = this.sourceId.value;
      result._sourceId = Extension.serializePrimitiveExtension(this.sourceId);
    }

    if (this.validateProfileId) {
      result.validateProfileId = this.validateProfileId.value;
      result._validateProfileId = Extension.serializePrimitiveExtension(this.validateProfileId);
    }

    if (this.value) {
      result.value = this.value.value;
      result._value = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.warningOnly) {
      result.warningOnly = this.warningOnly.value;
      result._warningOnly = Extension.serializePrimitiveExtension(this.warningOnly);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "TestScriptSetupActionAssert";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
