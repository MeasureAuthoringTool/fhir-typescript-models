/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class TestReportParticipantType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestReportParticipantType";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: TestReportParticipantType = new TestReportParticipantType()
  ): TestReportParticipantType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isTestReportParticipantType(input?: unknown): input is TestReportParticipantType {
    const castInput = input as TestReportParticipantType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestReportParticipantType";
  }
  
  public getTypeName(): string {
    return "TestReportParticipantType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
