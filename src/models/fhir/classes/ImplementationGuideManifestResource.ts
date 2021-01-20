/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirChoice,
  FhirField,
  IImplementationGuideManifestResource,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveUrl,
  Reference,
  FhirType
} from "../internal";

@FhirType("ImplementationGuideManifestResource", "BackboneElement")
export class ImplementationGuideManifestResource extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImplementationGuide.Manifest.Resource";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Reference")
  public reference?: Reference;

  @FhirChoice("PrimitiveBoolean", "PrimitiveCanonical")
  public example?: PrimitiveBoolean | PrimitiveCanonical;

  @FhirField("PrimitiveUrl")
  public relativePath?: PrimitiveUrl;

  public static parse(
    json: IImplementationGuideManifestResource,
    providedInstance: ImplementationGuideManifestResource = new ImplementationGuideManifestResource()
  ): ImplementationGuideManifestResource {
    const newInstance: ImplementationGuideManifestResource = BackboneElement.parse(json, providedInstance);
  
    if (json.reference !== undefined) {
      newInstance.reference = Reference.parse(json.reference);
    }
    if (json.exampleBoolean !== undefined) {
      newInstance.example = PrimitiveBoolean.parsePrimitive(json.exampleBoolean, json._exampleBoolean);
    }
    if (json.exampleCanonical !== undefined) {
      newInstance.example = PrimitiveCanonical.parsePrimitive(json.exampleCanonical, json._exampleCanonical);
    }
    if (json.relativePath !== undefined) {
      newInstance.relativePath = PrimitiveUrl.parsePrimitive(json.relativePath, json._relativePath);
    }
    return newInstance;
  }

  public static isImplementationGuideManifestResource(input?: unknown): input is ImplementationGuideManifestResource {
    const castInput = input as ImplementationGuideManifestResource;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImplementationGuideManifestResource";
  }

  public toJSON(): IImplementationGuideManifestResource {
    const result: IImplementationGuideManifestResource = super.toJSON();

    if (this.reference) {
      result.reference = this.reference.toJSON();
    }

    if (this.example && PrimitiveBoolean.isPrimitiveBoolean(this.example)) {
      result.exampleBoolean = this.example.value;
      result._exampleBoolean = Extension.serializePrimitiveExtension(this.example);
    }

    if (this.example && PrimitiveCanonical.isPrimitiveCanonical(this.example)) {
      result.exampleCanonical = this.example.value;
      result._exampleCanonical = Extension.serializePrimitiveExtension(this.example);
    }

    if (this.relativePath) {
      result.relativePath = this.relativePath.value;
      result._relativePath = Extension.serializePrimitiveExtension(this.relativePath);
    }

    return result;
  }

  public clone(): ImplementationGuideManifestResource {
    return ImplementationGuideManifestResource.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ImplementationGuideManifestResource";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
