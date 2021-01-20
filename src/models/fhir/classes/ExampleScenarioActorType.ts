/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ExampleScenarioActorType", "PrimitiveCode")
export class ExampleScenarioActorType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExampleScenarioActorType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ExampleScenarioActorType = new ExampleScenarioActorType()
  ): ExampleScenarioActorType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isExampleScenarioActorType(input?: unknown): input is ExampleScenarioActorType {
    const castInput = input as ExampleScenarioActorType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExampleScenarioActorType";
  }

  public clone(): ExampleScenarioActorType {
    const result = new ExampleScenarioActorType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ExampleScenarioActorType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
