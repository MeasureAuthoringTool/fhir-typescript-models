/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  ITestReportParticipant,
  PrimitiveString,
  PrimitiveUri,
  TestReportParticipantType,
} from "../internal";

export class TestReportParticipant extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestReport.Participant";

  public type?: TestReportParticipantType;

  public uri?: PrimitiveUri;

  public display?: PrimitiveString;

  public static parse(
    json: ITestReportParticipant,
    providedInstance: TestReportParticipant = new TestReportParticipant()
  ): TestReportParticipant {
    const newInstance: TestReportParticipant = BackboneElement.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = TestReportParticipantType.parsePrimitive(json.type, json._type);
    }
    if (json.uri) {
      newInstance.uri = PrimitiveUri.parsePrimitive(json.uri, json._uri);
    }
    if (json.display) {
      newInstance.display = PrimitiveString.parsePrimitive(json.display, json._display);
    }
    return newInstance;
  }

  public static isTestReportParticipant(input?: unknown): input is TestReportParticipant {
    const castInput = input as TestReportParticipant;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestReportParticipant";
  }

  public toJSON(): ITestReportParticipant {
    const result: ITestReportParticipant = super.toJSON();

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.uri) {
      result.uri = this.uri.value;
      result._uri = Extension.serializePrimitiveExtension(this.uri);
    }

    if (this.display) {
      result.display = this.display.value;
      result._display = Extension.serializePrimitiveExtension(this.display);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "TestReportParticipant";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
