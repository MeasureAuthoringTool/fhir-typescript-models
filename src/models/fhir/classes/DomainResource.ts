/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Extension,
  FhirField,
  FhirList,
  IDomainResource,
  Narrative,
  Resource,
  FhirType
} from "../internal";

@FhirType("DomainResource", "Resource")
export class DomainResource extends Resource {
  static readonly baseType: string = "FHIR.Resource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DomainResource";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Narrative")
  public text?: Narrative;

  @FhirList("Resource")
  public contained?: Array<Resource>;

  @FhirList("Extension")
  public extension?: Array<Extension>;

  @FhirList("Extension")
  public modifierExtension?: Array<Extension>;

  public static parse(
    json: IDomainResource,
    providedInstance: DomainResource = new DomainResource()
  ): DomainResource {
    const newInstance: DomainResource = Resource.parse(json, providedInstance);
  
    if (json.text !== undefined) {
      newInstance.text = Narrative.parse(json.text);
    }
    if (json.contained !== undefined) {
      newInstance.contained = json.contained.map((x) => Resource.parse(x));
    }
    if (json.extension !== undefined) {
      newInstance.extension = json.extension.map((x) => Extension.parse(x));
    }
    if (json.modifierExtension !== undefined) {
      newInstance.modifierExtension = json.modifierExtension.map((x) => Extension.parse(x));
    }
    return newInstance;
  }

  public static isDomainResource(input?: unknown): input is DomainResource {
    const castInput = input as DomainResource;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DomainResource";
  }

  public toJSON(): IDomainResource {
    const result: IDomainResource = super.toJSON();

    if (this.text) {
      result.text = this.text.toJSON();
    }

    if (this.contained) {
      result.contained = this.contained.map((x) => x.toJSON());
    }

    if (this.extension) {
      result.extension = this.extension.map((x) => x.toJSON());
    }

    if (this.modifierExtension) {
      result.modifierExtension = this.modifierExtension.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): DomainResource {
    return DomainResource.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DomainResource";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
