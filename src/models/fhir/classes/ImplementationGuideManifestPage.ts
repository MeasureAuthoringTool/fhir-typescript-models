/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IImplementationGuideManifestPage,
  PrimitiveString,
  FieldMetadata
} from "../internal";

export class ImplementationGuideManifestPage extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImplementationGuide.Manifest.Page";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "name",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "title",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "anchor",
      fieldType: [PrimitiveString],
      isArray: true
    }];
  }

  public name?: PrimitiveString;

  public title?: PrimitiveString;

  public anchor?: Array<PrimitiveString>;

  public static parse(
    json: IImplementationGuideManifestPage,
    providedInstance: ImplementationGuideManifestPage = new ImplementationGuideManifestPage()
  ): ImplementationGuideManifestPage {
    const newInstance: ImplementationGuideManifestPage = BackboneElement.parse(json, providedInstance);
  
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.title !== undefined) {
      newInstance.title = PrimitiveString.parsePrimitive(json.title, json._title);
    }
    if (json.anchor !== undefined) {
      newInstance.anchor = json.anchor.map((x, i) => {
        const ext = json._anchor && json._anchor[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    return newInstance;
  }

  public static isImplementationGuideManifestPage(input?: unknown): input is ImplementationGuideManifestPage {
    const castInput = input as ImplementationGuideManifestPage;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImplementationGuideManifestPage";
  }

  public toJSON(): IImplementationGuideManifestPage {
    const result: IImplementationGuideManifestPage = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.title) {
      result.title = this.title.value;
      result._title = Extension.serializePrimitiveExtension(this.title);
    }

    if (this.anchor) {
      result.anchor = this.anchor.filter(x => !!x).map(x => x.value) as typeof result.anchor;
      result._anchor = Extension.serializePrimitiveExtensionArray(this.anchor);
    }

    return result;
  }

  public clone(): ImplementationGuideManifestPage {
    return ImplementationGuideManifestPage.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ImplementationGuideManifestPage";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
