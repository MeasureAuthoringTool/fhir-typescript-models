/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("TestReportParticipantType", "PrimitiveCode")
export class TestReportParticipantType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestReportParticipantType";

  static readonly primaryCodePath: string | null = null;

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

  public clone(): TestReportParticipantType {
    const result = new TestReportParticipantType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "TestReportParticipantType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
