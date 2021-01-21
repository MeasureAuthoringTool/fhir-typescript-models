/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  AssertionDirectionType,
  AssertionOperatorType,
  AssertionResponseTypes,
  BackboneElement,
  Extension,
  FHIRDefinedType,
  FhirField,
  ITestScriptSetupActionAssert,
  MimeType,
  PrimitiveBoolean,
  PrimitiveId,
  PrimitiveString,
  TestScriptRequestMethodCode,
  FhirType
} from "../internal";

@FhirType("TestScriptSetupActionAssert", "BackboneElement")
export class TestScriptSetupActionAssert extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestScript.Setup.Action.Assert";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public label?: PrimitiveString;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirField("AssertionDirectionType")
  public direction?: AssertionDirectionType;

  @FhirField("PrimitiveString")
  public compareToSourceId?: PrimitiveString;

  @FhirField("PrimitiveString")
  public compareToSourceExpression?: PrimitiveString;

  @FhirField("PrimitiveString")
  public compareToSourcePath?: PrimitiveString;

  @FhirField("MimeType")
  public contentType?: MimeType;

  @FhirField("PrimitiveString")
  public expression?: PrimitiveString;

  @FhirField("PrimitiveString")
  public headerField?: PrimitiveString;

  @FhirField("PrimitiveString")
  public minimumId?: PrimitiveString;

  @FhirField("PrimitiveBoolean")
  public navigationLinks?: PrimitiveBoolean;

  @FhirField("AssertionOperatorType")
  public operator?: AssertionOperatorType;

  @FhirField("PrimitiveString")
  public path?: PrimitiveString;

  @FhirField("TestScriptRequestMethodCode")
  public requestMethod?: TestScriptRequestMethodCode;

  @FhirField("PrimitiveString")
  public requestURL?: PrimitiveString;

  @FhirField("FHIRDefinedType")
  public resource?: FHIRDefinedType;

  @FhirField("AssertionResponseTypes")
  public response?: AssertionResponseTypes;

  @FhirField("PrimitiveString")
  public responseCode?: PrimitiveString;

  @FhirField("PrimitiveId")
  public sourceId?: PrimitiveId;

  @FhirField("PrimitiveId")
  public validateProfileId?: PrimitiveId;

  @FhirField("PrimitiveString")
  public value?: PrimitiveString;

  @FhirField("PrimitiveBoolean")
  public warningOnly?: PrimitiveBoolean;

  public static parse(
    json: ITestScriptSetupActionAssert,
    providedInstance: TestScriptSetupActionAssert = new TestScriptSetupActionAssert()
  ): TestScriptSetupActionAssert {
    const newInstance: TestScriptSetupActionAssert = BackboneElement.parse(json, providedInstance);
  
    if (json.label !== undefined) {
      newInstance.label = PrimitiveString.parsePrimitive(json.label, json._label);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.direction !== undefined) {
      newInstance.direction = AssertionDirectionType.parsePrimitive(json.direction, json._direction);
    }
    if (json.compareToSourceId !== undefined) {
      newInstance.compareToSourceId = PrimitiveString.parsePrimitive(json.compareToSourceId, json._compareToSourceId);
    }
    if (json.compareToSourceExpression !== undefined) {
      newInstance.compareToSourceExpression = PrimitiveString.parsePrimitive(json.compareToSourceExpression, json._compareToSourceExpression);
    }
    if (json.compareToSourcePath !== undefined) {
      newInstance.compareToSourcePath = PrimitiveString.parsePrimitive(json.compareToSourcePath, json._compareToSourcePath);
    }
    if (json.contentType !== undefined) {
      newInstance.contentType = MimeType.parsePrimitive(json.contentType, json._contentType);
    }
    if (json.expression !== undefined) {
      newInstance.expression = PrimitiveString.parsePrimitive(json.expression, json._expression);
    }
    if (json.headerField !== undefined) {
      newInstance.headerField = PrimitiveString.parsePrimitive(json.headerField, json._headerField);
    }
    if (json.minimumId !== undefined) {
      newInstance.minimumId = PrimitiveString.parsePrimitive(json.minimumId, json._minimumId);
    }
    if (json.navigationLinks !== undefined) {
      newInstance.navigationLinks = PrimitiveBoolean.parsePrimitive(json.navigationLinks, json._navigationLinks);
    }
    if (json.operator !== undefined) {
      newInstance.operator = AssertionOperatorType.parsePrimitive(json.operator, json._operator);
    }
    if (json.path !== undefined) {
      newInstance.path = PrimitiveString.parsePrimitive(json.path, json._path);
    }
    if (json.requestMethod !== undefined) {
      newInstance.requestMethod = TestScriptRequestMethodCode.parsePrimitive(json.requestMethod, json._requestMethod);
    }
    if (json.requestURL !== undefined) {
      newInstance.requestURL = PrimitiveString.parsePrimitive(json.requestURL, json._requestURL);
    }
    if (json.resource !== undefined) {
      newInstance.resource = FHIRDefinedType.parsePrimitive(json.resource, json._resource);
    }
    if (json.response !== undefined) {
      newInstance.response = AssertionResponseTypes.parsePrimitive(json.response, json._response);
    }
    if (json.responseCode !== undefined) {
      newInstance.responseCode = PrimitiveString.parsePrimitive(json.responseCode, json._responseCode);
    }
    if (json.sourceId !== undefined) {
      newInstance.sourceId = PrimitiveId.parsePrimitive(json.sourceId, json._sourceId);
    }
    if (json.validateProfileId !== undefined) {
      newInstance.validateProfileId = PrimitiveId.parsePrimitive(json.validateProfileId, json._validateProfileId);
    }
    if (json.value !== undefined) {
      newInstance.value = PrimitiveString.parsePrimitive(json.value, json._value);
    }
    if (json.warningOnly !== undefined) {
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

  public clone(): TestScriptSetupActionAssert {
    return TestScriptSetupActionAssert.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TestScriptSetupActionAssert";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
