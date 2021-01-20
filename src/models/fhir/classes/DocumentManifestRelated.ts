/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  FhirField,
  Identifier,
  IDocumentManifestRelated,
  Reference,
  FhirType
} from "../internal";

@FhirType("DocumentManifestRelated", "BackboneElement")
export class DocumentManifestRelated extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DocumentManifest.Related";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Identifier")
  public identifier?: Identifier;

  @FhirField("Reference")
  public ref?: Reference;

  public static parse(
    json: IDocumentManifestRelated,
    providedInstance: DocumentManifestRelated = new DocumentManifestRelated()
  ): DocumentManifestRelated {
    const newInstance: DocumentManifestRelated = BackboneElement.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.ref !== undefined) {
      newInstance.ref = Reference.parse(json.ref);
    }
    return newInstance;
  }

  public static isDocumentManifestRelated(input?: unknown): input is DocumentManifestRelated {
    const castInput = input as DocumentManifestRelated;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DocumentManifestRelated";
  }

  public toJSON(): IDocumentManifestRelated {
    const result: IDocumentManifestRelated = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    if (this.ref) {
      result.ref = this.ref.toJSON();
    }

    return result;
  }

  public clone(): DocumentManifestRelated {
    return DocumentManifestRelated.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DocumentManifestRelated";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
