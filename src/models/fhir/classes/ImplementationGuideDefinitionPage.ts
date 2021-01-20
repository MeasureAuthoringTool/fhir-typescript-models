/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  GuidePageGeneration,
  IImplementationGuideDefinitionPage,
  PrimitiveString,
  PrimitiveUrl,
  Reference,
  FhirType
} from "../internal";

@FhirType("ImplementationGuideDefinitionPage", "BackboneElement")
export class ImplementationGuideDefinitionPage extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImplementationGuide.Definition.Page";

  static readonly primaryCodePath: string | null = null;

  @FhirChoice("PrimitiveUrl", "Reference")
  public name?: PrimitiveUrl | Reference;

  @FhirField("PrimitiveString")
  public title?: PrimitiveString;

  @FhirField("GuidePageGeneration")
  public generation?: GuidePageGeneration;

  @FhirList("ImplementationGuideDefinitionPage")
  public page?: Array<ImplementationGuideDefinitionPage>;

  public static parse(
    json: IImplementationGuideDefinitionPage,
    providedInstance: ImplementationGuideDefinitionPage = new ImplementationGuideDefinitionPage()
  ): ImplementationGuideDefinitionPage {
    const newInstance: ImplementationGuideDefinitionPage = BackboneElement.parse(json, providedInstance);
  
    if (json.nameUrl !== undefined) {
      newInstance.name = PrimitiveUrl.parsePrimitive(json.nameUrl, json._nameUrl);
    }
    if (json.nameReference !== undefined) {
      newInstance.name = Reference.parse(json.nameReference);
    }
    if (json.title !== undefined) {
      newInstance.title = PrimitiveString.parsePrimitive(json.title, json._title);
    }
    if (json.generation !== undefined) {
      newInstance.generation = GuidePageGeneration.parsePrimitive(json.generation, json._generation);
    }
    if (json.page !== undefined) {
      newInstance.page = json.page.map((x) => ImplementationGuideDefinitionPage.parse(x));
    }
    return newInstance;
  }

  public static isImplementationGuideDefinitionPage(input?: unknown): input is ImplementationGuideDefinitionPage {
    const castInput = input as ImplementationGuideDefinitionPage;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImplementationGuideDefinitionPage";
  }

  public toJSON(): IImplementationGuideDefinitionPage {
    const result: IImplementationGuideDefinitionPage = super.toJSON();

    if (this.name && PrimitiveUrl.isPrimitiveUrl(this.name)) {
      result.nameUrl = this.name.value;
      result._nameUrl = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.name && Reference.isReference(this.name)) {
      result.nameReference = this.name.toJSON();
    }

    if (this.title) {
      result.title = this.title.value;
      result._title = Extension.serializePrimitiveExtension(this.title);
    }

    if (this.generation) {
      result.generation = this.generation.value;
      result._generation = Extension.serializePrimitiveExtension(this.generation);
    }

    if (this.page) {
      result.page = this.page.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ImplementationGuideDefinitionPage {
    return ImplementationGuideDefinitionPage.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ImplementationGuideDefinitionPage";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
