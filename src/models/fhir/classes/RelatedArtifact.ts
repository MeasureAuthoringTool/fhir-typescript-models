/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Attachment,
  Element,
  Extension,
  FhirField,
  IRelatedArtifact,
  PrimitiveCanonical,
  PrimitiveMarkdown,
  PrimitiveString,
  PrimitiveUrl,
  RelatedArtifactType,
  FhirType
} from "../internal";

@FhirType("RelatedArtifact", "Element")
export class RelatedArtifact extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RelatedArtifact";

  static readonly primaryCodePath: string | null = null;

  @FhirField("RelatedArtifactType")
  public type?: RelatedArtifactType;

  @FhirField("PrimitiveString")
  public label?: PrimitiveString;

  @FhirField("PrimitiveString")
  public display?: PrimitiveString;

  @FhirField("PrimitiveMarkdown")
  public citation?: PrimitiveMarkdown;

  @FhirField("PrimitiveUrl")
  public url?: PrimitiveUrl;

  @FhirField("Attachment")
  public document?: Attachment;

  @FhirField("PrimitiveCanonical")
  public resource?: PrimitiveCanonical;

  public static parse(
    json: IRelatedArtifact,
    providedInstance: RelatedArtifact = new RelatedArtifact()
  ): RelatedArtifact {
    const newInstance: RelatedArtifact = Element.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = RelatedArtifactType.parsePrimitive(json.type, json._type);
    }
    if (json.label !== undefined) {
      newInstance.label = PrimitiveString.parsePrimitive(json.label, json._label);
    }
    if (json.display !== undefined) {
      newInstance.display = PrimitiveString.parsePrimitive(json.display, json._display);
    }
    if (json.citation !== undefined) {
      newInstance.citation = PrimitiveMarkdown.parsePrimitive(json.citation, json._citation);
    }
    if (json.url !== undefined) {
      newInstance.url = PrimitiveUrl.parsePrimitive(json.url, json._url);
    }
    if (json.document !== undefined) {
      newInstance.document = Attachment.parse(json.document);
    }
    if (json.resource !== undefined) {
      newInstance.resource = PrimitiveCanonical.parsePrimitive(json.resource, json._resource);
    }
    return newInstance;
  }

  public static isRelatedArtifact(input?: unknown): input is RelatedArtifact {
    const castInput = input as RelatedArtifact;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "RelatedArtifact";
  }

  public toJSON(): IRelatedArtifact {
    const result: IRelatedArtifact = super.toJSON();

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.label) {
      result.label = this.label.value;
      result._label = Extension.serializePrimitiveExtension(this.label);
    }

    if (this.display) {
      result.display = this.display.value;
      result._display = Extension.serializePrimitiveExtension(this.display);
    }

    if (this.citation) {
      result.citation = this.citation.value;
      result._citation = Extension.serializePrimitiveExtension(this.citation);
    }

    if (this.url) {
      result.url = this.url.value;
      result._url = Extension.serializePrimitiveExtension(this.url);
    }

    if (this.document) {
      result.document = this.document.toJSON();
    }

    if (this.resource) {
      result.resource = this.resource.value;
      result._resource = Extension.serializePrimitiveExtension(this.resource);
    }

    return result;
  }

  public clone(): RelatedArtifact {
    return RelatedArtifact.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "RelatedArtifact";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
