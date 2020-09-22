/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  IImplementationGuideDefinition,
  ImplementationGuideDefinitionGrouping,
  ImplementationGuideDefinitionPage,
  ImplementationGuideDefinitionParameter,
  ImplementationGuideDefinitionResource,
  ImplementationGuideDefinitionTemplate,
} from "../internal";

export class ImplementationGuideDefinition extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImplementationGuide.Definition";
  
  static readonly primaryCodePath: string | null = null;

  public grouping?: Array<ImplementationGuideDefinitionGrouping>;

  public resource?: Array<ImplementationGuideDefinitionResource>;

  public page?: ImplementationGuideDefinitionPage;

  public parameter?: Array<ImplementationGuideDefinitionParameter>;

  public template?: Array<ImplementationGuideDefinitionTemplate>;

  public static parse(
    json: IImplementationGuideDefinition,
    providedInstance: ImplementationGuideDefinition = new ImplementationGuideDefinition()
  ): ImplementationGuideDefinition {
    const newInstance: ImplementationGuideDefinition = BackboneElement.parse(json, providedInstance);
  
    if (json.grouping !== undefined) {
      newInstance.grouping = json.grouping.map((x) => ImplementationGuideDefinitionGrouping.parse(x));
    }
    if (json.resource !== undefined) {
      newInstance.resource = json.resource.map((x) => ImplementationGuideDefinitionResource.parse(x));
    }
    if (json.page !== undefined) {
      newInstance.page = ImplementationGuideDefinitionPage.parse(json.page);
    }
    if (json.parameter !== undefined) {
      newInstance.parameter = json.parameter.map((x) => ImplementationGuideDefinitionParameter.parse(x));
    }
    if (json.template !== undefined) {
      newInstance.template = json.template.map((x) => ImplementationGuideDefinitionTemplate.parse(x));
    }
    return newInstance;
  }

  public static isImplementationGuideDefinition(input?: unknown): input is ImplementationGuideDefinition {
    const castInput = input as ImplementationGuideDefinition;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImplementationGuideDefinition";
  }

  public toJSON(): IImplementationGuideDefinition {
    const result: IImplementationGuideDefinition = super.toJSON();

    if (this.grouping) {
      result.grouping = this.grouping.map((x) => x.toJSON());
    }

    if (this.resource) {
      result.resource = this.resource.map((x) => x.toJSON());
    }

    if (this.page) {
      result.page = this.page.toJSON();
    }

    if (this.parameter) {
      result.parameter = this.parameter.map((x) => x.toJSON());
    }

    if (this.template) {
      result.template = this.template.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ImplementationGuideDefinition {
    return ImplementationGuideDefinition.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ImplementationGuideDefinition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
