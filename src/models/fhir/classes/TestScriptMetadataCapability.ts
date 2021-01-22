/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  FhirList,
  ITestScriptMetadataCapability,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveInteger,
  PrimitiveString,
  PrimitiveUri,
  FhirType
} from "../internal";

@FhirType("TestScriptMetadataCapability", "BackboneElement")
export class TestScriptMetadataCapability extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestScript.Metadata.Capability";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveBoolean")
  public required?: PrimitiveBoolean;

  @FhirField("PrimitiveBoolean")
  public validated?: PrimitiveBoolean;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirList("PrimitiveInteger")
  public origin?: Array<PrimitiveInteger>;

  @FhirField("PrimitiveInteger")
  public destination?: PrimitiveInteger;

  @FhirList("PrimitiveUri")
  public link?: Array<PrimitiveUri>;

  @FhirField("PrimitiveCanonical")
  public capabilities?: PrimitiveCanonical;

  public static parse(
    json: ITestScriptMetadataCapability,
    providedInstance: TestScriptMetadataCapability = new TestScriptMetadataCapability()
  ): TestScriptMetadataCapability {
    const newInstance: TestScriptMetadataCapability = BackboneElement.parse(json, providedInstance);
  
    if (json.required !== undefined) {
      newInstance.required = PrimitiveBoolean.parsePrimitive(json.required, json._required);
    }
    if (json.validated !== undefined) {
      newInstance.validated = PrimitiveBoolean.parsePrimitive(json.validated, json._validated);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.origin !== undefined) {
      newInstance.origin = json.origin.map((x, i) => PrimitiveInteger.parsePrimitive(x, json._origin?.[i]));
    }
    if (json.destination !== undefined) {
      newInstance.destination = PrimitiveInteger.parsePrimitive(json.destination, json._destination);
    }
    if (json.link !== undefined) {
      newInstance.link = json.link.map((x, i) => PrimitiveUri.parsePrimitive(x, json._link?.[i]));
    }
    if (json.capabilities !== undefined) {
      newInstance.capabilities = PrimitiveCanonical.parsePrimitive(json.capabilities, json._capabilities);
    }
    return newInstance;
  }

  public static isTestScriptMetadataCapability(input?: unknown): input is TestScriptMetadataCapability {
    const castInput = input as TestScriptMetadataCapability;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestScriptMetadataCapability";
  }

  public toJSON(): ITestScriptMetadataCapability {
    const result: ITestScriptMetadataCapability = super.toJSON();

    if (this.required) {
      result.required = this.required.value;
      result._required = Extension.serializePrimitiveExtension(this.required);
    }

    if (this.validated) {
      result.validated = this.validated.value;
      result._validated = Extension.serializePrimitiveExtension(this.validated);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.origin) {
      result.origin = this.origin.filter(x => !!x).map(x => x.value) as typeof result.origin;
      result._origin = Extension.serializePrimitiveExtensionArray(this.origin);
    }

    if (this.destination) {
      result.destination = this.destination.value;
      result._destination = Extension.serializePrimitiveExtension(this.destination);
    }

    if (this.link) {
      result.link = this.link.filter(x => !!x).map(x => x.value) as typeof result.link;
      result._link = Extension.serializePrimitiveExtensionArray(this.link);
    }

    if (this.capabilities) {
      result.capabilities = this.capabilities.value;
      result._capabilities = Extension.serializePrimitiveExtension(this.capabilities);
    }

    return result;
  }

  public clone(): TestScriptMetadataCapability {
    return TestScriptMetadataCapability.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TestScriptMetadataCapability";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
