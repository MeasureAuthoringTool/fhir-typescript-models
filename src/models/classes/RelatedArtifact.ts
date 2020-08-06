/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Attachment,
  Element,
  Extension,
  IRelatedArtifact,
  PrimitiveCanonical,
  PrimitiveMarkdown,
  PrimitiveString,
  PrimitiveUrl,
  RelatedArtifactType,
} from "../internal";

export class RelatedArtifact extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RelatedArtifact";

  public type?: RelatedArtifactType;

  public label?: PrimitiveString;

  public display?: PrimitiveString;

  public citation?: PrimitiveMarkdown;

  public url?: PrimitiveUrl;

  public document?: Attachment;

  public resource?: PrimitiveCanonical;

  public static parse(
    json: IRelatedArtifact,
    providedInstance: RelatedArtifact = new RelatedArtifact()
  ): RelatedArtifact {
    const newInstance: RelatedArtifact = Element.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = RelatedArtifactType.parsePrimitive(json.type, json._type);
    }
    if (json.label) {
      newInstance.label = PrimitiveString.parsePrimitive(json.label, json._label);
    }
    if (json.display) {
      newInstance.display = PrimitiveString.parsePrimitive(json.display, json._display);
    }
    if (json.citation) {
      newInstance.citation = PrimitiveMarkdown.parsePrimitive(json.citation, json._citation);
    }
    if (json.url) {
      newInstance.url = PrimitiveUrl.parsePrimitive(json.url, json._url);
    }
    if (json.document) {
      newInstance.document = Attachment.parse(json.document);
    }
    if (json.resource) {
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
  
  public getTypeName(): string {
    return "RelatedArtifact";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
