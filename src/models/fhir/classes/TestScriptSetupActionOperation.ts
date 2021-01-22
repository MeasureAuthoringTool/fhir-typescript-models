/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Coding,
  Extension,
  FHIRDefinedType,
  FhirField,
  FhirList,
  ITestScriptSetupActionOperation,
  MimeType,
  PrimitiveBoolean,
  PrimitiveId,
  PrimitiveInteger,
  PrimitiveString,
  TestScriptRequestMethodCode,
  TestScriptSetupActionOperationRequestHeader,
  FhirType
} from "../internal";

@FhirType("TestScriptSetupActionOperation", "BackboneElement")
export class TestScriptSetupActionOperation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestScript.Setup.Action.Operation";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Coding")
  public type?: Coding;

  @FhirField("FHIRDefinedType")
  public resource?: FHIRDefinedType;

  @FhirField("PrimitiveString")
  public label?: PrimitiveString;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirField("MimeType")
  public accept?: MimeType;

  @FhirField("MimeType")
  public contentType?: MimeType;

  @FhirField("PrimitiveInteger")
  public destination?: PrimitiveInteger;

  @FhirField("PrimitiveBoolean")
  public encodeRequestUrl?: PrimitiveBoolean;

  @FhirField("TestScriptRequestMethodCode")
  public method?: TestScriptRequestMethodCode;

  @FhirField("PrimitiveInteger")
  public origin?: PrimitiveInteger;

  @FhirField("PrimitiveString")
  public params?: PrimitiveString;

  @FhirList("TestScriptSetupActionOperationRequestHeader")
  public requestHeader?: Array<TestScriptSetupActionOperationRequestHeader>;

  @FhirField("PrimitiveId")
  public requestId?: PrimitiveId;

  @FhirField("PrimitiveId")
  public responseId?: PrimitiveId;

  @FhirField("PrimitiveId")
  public sourceId?: PrimitiveId;

  @FhirField("PrimitiveId")
  public targetId?: PrimitiveId;

  @FhirField("PrimitiveString")
  public url?: PrimitiveString;

  public static parse(
    json: ITestScriptSetupActionOperation,
    providedInstance: TestScriptSetupActionOperation = new TestScriptSetupActionOperation()
  ): TestScriptSetupActionOperation {
    const newInstance: TestScriptSetupActionOperation = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = Coding.parse(json.type);
    }
    if (json.resource !== undefined) {
      newInstance.resource = FHIRDefinedType.parsePrimitive(json.resource, json._resource);
    }
    if (json.label !== undefined) {
      newInstance.label = PrimitiveString.parsePrimitive(json.label, json._label);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.accept !== undefined) {
      newInstance.accept = MimeType.parsePrimitive(json.accept, json._accept);
    }
    if (json.contentType !== undefined) {
      newInstance.contentType = MimeType.parsePrimitive(json.contentType, json._contentType);
    }
    if (json.destination !== undefined) {
      newInstance.destination = PrimitiveInteger.parsePrimitive(json.destination, json._destination);
    }
    if (json.encodeRequestUrl !== undefined) {
      newInstance.encodeRequestUrl = PrimitiveBoolean.parsePrimitive(json.encodeRequestUrl, json._encodeRequestUrl);
    }
    if (json.method !== undefined) {
      newInstance.method = TestScriptRequestMethodCode.parsePrimitive(json.method, json._method);
    }
    if (json.origin !== undefined) {
      newInstance.origin = PrimitiveInteger.parsePrimitive(json.origin, json._origin);
    }
    if (json.params !== undefined) {
      newInstance.params = PrimitiveString.parsePrimitive(json.params, json._params);
    }
    if (json.requestHeader !== undefined) {
      newInstance.requestHeader = json.requestHeader.map((x) => TestScriptSetupActionOperationRequestHeader.parse(x));
    }
    if (json.requestId !== undefined) {
      newInstance.requestId = PrimitiveId.parsePrimitive(json.requestId, json._requestId);
    }
    if (json.responseId !== undefined) {
      newInstance.responseId = PrimitiveId.parsePrimitive(json.responseId, json._responseId);
    }
    if (json.sourceId !== undefined) {
      newInstance.sourceId = PrimitiveId.parsePrimitive(json.sourceId, json._sourceId);
    }
    if (json.targetId !== undefined) {
      newInstance.targetId = PrimitiveId.parsePrimitive(json.targetId, json._targetId);
    }
    if (json.url !== undefined) {
      newInstance.url = PrimitiveString.parsePrimitive(json.url, json._url);
    }
    return newInstance;
  }

  public static isTestScriptSetupActionOperation(input?: unknown): input is TestScriptSetupActionOperation {
    const castInput = input as TestScriptSetupActionOperation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestScriptSetupActionOperation";
  }

  public toJSON(): ITestScriptSetupActionOperation {
    const result: ITestScriptSetupActionOperation = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.resource) {
      result.resource = this.resource.value;
      result._resource = Extension.serializePrimitiveExtension(this.resource);
    }

    if (this.label) {
      result.label = this.label.value;
      result._label = Extension.serializePrimitiveExtension(this.label);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.accept) {
      result.accept = this.accept.value;
      result._accept = Extension.serializePrimitiveExtension(this.accept);
    }

    if (this.contentType) {
      result.contentType = this.contentType.value;
      result._contentType = Extension.serializePrimitiveExtension(this.contentType);
    }

    if (this.destination) {
      result.destination = this.destination.value;
      result._destination = Extension.serializePrimitiveExtension(this.destination);
    }

    if (this.encodeRequestUrl) {
      result.encodeRequestUrl = this.encodeRequestUrl.value;
      result._encodeRequestUrl = Extension.serializePrimitiveExtension(this.encodeRequestUrl);
    }

    if (this.method) {
      result.method = this.method.value;
      result._method = Extension.serializePrimitiveExtension(this.method);
    }

    if (this.origin) {
      result.origin = this.origin.value;
      result._origin = Extension.serializePrimitiveExtension(this.origin);
    }

    if (this.params) {
      result.params = this.params.value;
      result._params = Extension.serializePrimitiveExtension(this.params);
    }

    if (this.requestHeader) {
      result.requestHeader = this.requestHeader.map((x) => x.toJSON());
    }

    if (this.requestId) {
      result.requestId = this.requestId.value;
      result._requestId = Extension.serializePrimitiveExtension(this.requestId);
    }

    if (this.responseId) {
      result.responseId = this.responseId.value;
      result._responseId = Extension.serializePrimitiveExtension(this.responseId);
    }

    if (this.sourceId) {
      result.sourceId = this.sourceId.value;
      result._sourceId = Extension.serializePrimitiveExtension(this.sourceId);
    }

    if (this.targetId) {
      result.targetId = this.targetId.value;
      result._targetId = Extension.serializePrimitiveExtension(this.targetId);
    }

    if (this.url) {
      result.url = this.url.value;
      result._url = Extension.serializePrimitiveExtension(this.url);
    }

    return result;
  }

  public clone(): TestScriptSetupActionOperation {
    return TestScriptSetupActionOperation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TestScriptSetupActionOperation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
