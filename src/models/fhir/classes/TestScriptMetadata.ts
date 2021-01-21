/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  FhirList,
  ITestScriptMetadata,
  TestScriptMetadataCapability,
  TestScriptMetadataLink,
  FhirType
} from "../internal";

@FhirType("TestScriptMetadata", "BackboneElement")
export class TestScriptMetadata extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestScript.Metadata";

  static readonly primaryCodePath: string | null = null;

  @FhirList("TestScriptMetadataLink")
  public link?: Array<TestScriptMetadataLink>;

  @FhirList("TestScriptMetadataCapability")
  public capability?: Array<TestScriptMetadataCapability>;

  public static parse(
    json: ITestScriptMetadata,
    providedInstance: TestScriptMetadata = new TestScriptMetadata()
  ): TestScriptMetadata {
    const newInstance: TestScriptMetadata = BackboneElement.parse(json, providedInstance);
  
    if (json.link !== undefined) {
      newInstance.link = json.link.map((x) => TestScriptMetadataLink.parse(x));
    }
    if (json.capability !== undefined) {
      newInstance.capability = json.capability.map((x) => TestScriptMetadataCapability.parse(x));
    }
    return newInstance;
  }

  public static isTestScriptMetadata(input?: unknown): input is TestScriptMetadata {
    const castInput = input as TestScriptMetadata;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestScriptMetadata";
  }

  public toJSON(): ITestScriptMetadata {
    const result: ITestScriptMetadata = super.toJSON();

    if (this.link) {
      result.link = this.link.map((x) => x.toJSON());
    }

    if (this.capability) {
      result.capability = this.capability.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): TestScriptMetadata {
    return TestScriptMetadata.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TestScriptMetadata";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
