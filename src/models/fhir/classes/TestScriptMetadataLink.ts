/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  ITestScriptMetadataLink,
  PrimitiveString,
  PrimitiveUri,
} from "../internal";

export class TestScriptMetadataLink extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestScript.Metadata.Link";

  public url?: PrimitiveUri;

  public description?: PrimitiveString;

  public static parse(
    json: ITestScriptMetadataLink,
    providedInstance: TestScriptMetadataLink = new TestScriptMetadataLink()
  ): TestScriptMetadataLink {
    const newInstance: TestScriptMetadataLink = BackboneElement.parse(json, providedInstance);
  
    if (json.url) {
      newInstance.url = PrimitiveUri.parsePrimitive(json.url, json._url);
    }
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    return newInstance;
  }

  public static isTestScriptMetadataLink(input?: unknown): input is TestScriptMetadataLink {
    const castInput = input as TestScriptMetadataLink;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestScriptMetadataLink";
  }

  public toJSON(): ITestScriptMetadataLink {
    const result: ITestScriptMetadataLink = super.toJSON();

    if (this.url) {
      result.url = this.url.value;
      result._url = Extension.serializePrimitiveExtension(this.url);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "TestScriptMetadataLink";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
