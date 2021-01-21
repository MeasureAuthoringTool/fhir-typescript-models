/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  DomainResource,
  Extension,
  FhirField,
  FhirList,
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
  FhirType
} from "../internal";

@FhirType("TestReport", "DomainResource")
export class TestReport extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestReport";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Identifier")
  public identifier?: Identifier;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("TestReportStatus")
  public status?: TestReportStatus;

  @FhirField("Reference")
  public testScript?: Reference;

  @FhirField("TestReportResult")
  public result?: TestReportResult;

  @FhirField("PrimitiveDecimal")
  public score?: PrimitiveDecimal;

  @FhirField("PrimitiveString")
  public tester?: PrimitiveString;

  @FhirField("PrimitiveDateTime")
  public issued?: PrimitiveDateTime;

  @FhirList("TestReportParticipant")
  public participant?: Array<TestReportParticipant>;

  @FhirField("TestReportSetup")
  public setup?: TestReportSetup;

  @FhirList("TestReportTest")
  public test?: Array<TestReportTest>;

  @FhirField("TestReportTeardown")
  public teardown?: TestReportTeardown;

  public static parse(
    json: ITestReport,
    providedInstance: TestReport = new TestReport()
  ): TestReport {
    const newInstance: TestReport = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.status !== undefined) {
      newInstance.status = TestReportStatus.parsePrimitive(json.status, json._status);
    }
    if (json.testScript !== undefined) {
      newInstance.testScript = Reference.parse(json.testScript);
    }
    if (json.result !== undefined) {
      newInstance.result = TestReportResult.parsePrimitive(json.result, json._result);
    }
    if (json.score !== undefined) {
      newInstance.score = PrimitiveDecimal.parsePrimitive(json.score, json._score);
    }
    if (json.tester !== undefined) {
      newInstance.tester = PrimitiveString.parsePrimitive(json.tester, json._tester);
    }
    if (json.issued !== undefined) {
      newInstance.issued = PrimitiveDateTime.parsePrimitive(json.issued, json._issued);
    }
    if (json.participant !== undefined) {
      newInstance.participant = json.participant.map((x) => TestReportParticipant.parse(x));
    }
    if (json.setup !== undefined) {
      newInstance.setup = TestReportSetup.parse(json.setup);
    }
    if (json.test !== undefined) {
      newInstance.test = json.test.map((x) => TestReportTest.parse(x));
    }
    if (json.teardown !== undefined) {
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

  public clone(): TestReport {
    return TestReport.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TestReport";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
