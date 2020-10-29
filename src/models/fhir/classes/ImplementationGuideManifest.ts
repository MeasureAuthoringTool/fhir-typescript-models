/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IImplementationGuideManifest,
  ImplementationGuideManifestPage,
  ImplementationGuideManifestResource,
  PrimitiveString,
  PrimitiveUrl,
  FieldMetadata
} from "../internal";

export class ImplementationGuideManifest extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImplementationGuide.Manifest";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "rendering",
      fieldType: [PrimitiveUrl],
      isArray: false
    }, {
      fieldName: "resource",
      fieldType: [ImplementationGuideManifestResource],
      isArray: true
    }, {
      fieldName: "page",
      fieldType: [ImplementationGuideManifestPage],
      isArray: true
    }, {
      fieldName: "image",
      fieldType: [PrimitiveString],
      isArray: true
    }, {
      fieldName: "other",
      fieldType: [PrimitiveString],
      isArray: true
    }];
  }

  public rendering?: PrimitiveUrl;

  public resource?: Array<ImplementationGuideManifestResource>;

  public page?: Array<ImplementationGuideManifestPage>;

  public image?: Array<PrimitiveString>;

  public other?: Array<PrimitiveString>;

  public static parse(
    json: IImplementationGuideManifest,
    providedInstance: ImplementationGuideManifest = new ImplementationGuideManifest()
  ): ImplementationGuideManifest {
    const newInstance: ImplementationGuideManifest = BackboneElement.parse(json, providedInstance);
  
    if (json.rendering !== undefined) {
      newInstance.rendering = PrimitiveUrl.parsePrimitive(json.rendering, json._rendering);
    }
    if (json.resource !== undefined) {
      newInstance.resource = json.resource.map((x) => ImplementationGuideManifestResource.parse(x));
    }
    if (json.page !== undefined) {
      newInstance.page = json.page.map((x) => ImplementationGuideManifestPage.parse(x));
    }
    if (json.image !== undefined) {
      newInstance.image = json.image.map((x, i) => {
        const ext = json._image && json._image[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.other !== undefined) {
      newInstance.other = json.other.map((x, i) => {
        const ext = json._other && json._other[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    return newInstance;
  }

  public static isImplementationGuideManifest(input?: unknown): input is ImplementationGuideManifest {
    const castInput = input as ImplementationGuideManifest;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImplementationGuideManifest";
  }

  public toJSON(): IImplementationGuideManifest {
    const result: IImplementationGuideManifest = super.toJSON();

    if (this.rendering) {
      result.rendering = this.rendering.value;
      result._rendering = Extension.serializePrimitiveExtension(this.rendering);
    }

    if (this.resource) {
      result.resource = this.resource.map((x) => x.toJSON());
    }

    if (this.page) {
      result.page = this.page.map((x) => x.toJSON());
    }

    if (this.image) {
      result.image = this.image.filter(x => !!x).map(x => x.value) as typeof result.image;
      result._image = Extension.serializePrimitiveExtensionArray(this.image);
    }

    if (this.other) {
      result.other = this.other.filter(x => !!x).map(x => x.value) as typeof result.other;
      result._other = Extension.serializePrimitiveExtensionArray(this.other);
    }

    return result;
  }

  public clone(): ImplementationGuideManifest {
    return ImplementationGuideManifest.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ImplementationGuideManifest";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
