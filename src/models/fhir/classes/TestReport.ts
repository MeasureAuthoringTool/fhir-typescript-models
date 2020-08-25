/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  DomainResource,
  Extension,
  Identifier,
  ITestReport,
  PrimitiveDateTime,
  PrimitiveDecimal,
  PrimitiveString,
  Reference,
  TestReportParticipant,
  TestReportResult,
  TestReportSetup,
  TestReportStatus,
  TestReportTeardown,
  TestReportTest,
} from "../internal";

export class TestReport extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestReport";

  public identifier?: Identifier;

  public name?: PrimitiveString;

  public status?: TestReportStatus;

  public testScript?: Reference;

  public result?: TestReportResult;

  public score?: PrimitiveDecimal;

  public tester?: PrimitiveString;

  public issued?: PrimitiveDateTime;

  public participant?: Array<TestReportParticipant>;

  public setup?: TestReportSetup;

  public test?: Array<TestReportTest>;

  public teardown?: TestReportTeardown;

  public static parse(
    json: ITestReport,
    providedInstance: TestReport = new TestReport()
  ): TestReport {
    const newInstance: TestReport = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.status) {
      newInstance.status = TestReportStatus.parsePrimitive(json.status, json._status);
    }
    if (json.testScript) {
      newInstance.testScript = Reference.parse(json.testScript);
    }
    if (json.result) {
      newInstance.result = TestReportResult.parsePrimitive(json.result, json._result);
    }
    if (json.score) {
      newInstance.score = PrimitiveDecimal.parsePrimitive(json.score, json._score);
    }
    if (json.tester) {
      newInstance.tester = PrimitiveString.parsePrimitive(json.tester, json._tester);
    }
    if (json.issued) {
      newInstance.issued = PrimitiveDateTime.parsePrimitive(json.issued, json._issued);
    }
    if (json.participant) {
      newInstance.participant = json.participant.map((x) => TestReportParticipant.parse(x));
    }
    if (json.setup) {
      newInstance.setup = TestReportSetup.parse(json.setup);
    }
    if (json.test) {
      newInstance.test = json.test.map((x) => TestReportTest.parse(x));
    }
    if (json.teardown) {
      newInstance.teardown = TestReportTeardown.parse(json.teardown);
    }
    return newInstance;
  }

  public static isTestReport(input?: unknown): input is TestReport {
    const castInput = input as TestReport;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestReport";
  }

  public toJSON(): ITestReport {
    const result: ITestReport = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.testScript) {
      result.testScript = this.testScript.toJSON();
    }

    if (this.result) {
      result.result = this.result.value;
      result._result = Extension.serializePrimitiveExtension(this.result);
    }

    if (this.score) {
      result.score = this.score.value;
      result._score = Extension.serializePrimitiveExtension(this.score);
    }

    if (this.tester) {
      result.tester = this.tester.value;
      result._tester = Extension.serializePrimitiveExtension(this.tester);
    }

    if (this.issued) {
      result.issued = this.issued.value;
      result._issued = Extension.serializePrimitiveExtension(this.issued);
    }

    if (this.participant) {
      result.participant = this.participant.map((x) => x.toJSON());
    }

    if (this.setup) {
      result.setup = this.setup.toJSON();
    }

    if (this.test) {
      result.test = this.test.map((x) => x.toJSON());
    }

    if (this.teardown) {
      result.teardown = this.teardown.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "TestReport";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
