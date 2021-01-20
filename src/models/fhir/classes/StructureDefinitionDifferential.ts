/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  ElementDefinition,
  FhirList,
  IStructureDefinitionDifferential,
  FhirType
} from "../internal";

@FhirType("StructureDefinitionDifferential", "BackboneElement")
export class StructureDefinitionDifferential extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureDefinition.Differential";

  static readonly primaryCodePath: string | null = null;

  @FhirList("ElementDefinition")
  public element?: Array<ElementDefinition>;

  public static parse(
    json: IStructureDefinitionDifferential,
    providedInstance: StructureDefinitionDifferential = new StructureDefinitionDifferential()
  ): StructureDefinitionDifferential {
    const newInstance: StructureDefinitionDifferential = BackboneElement.parse(json, providedInstance);
  
    if (json.element !== undefined) {
      newInstance.element = json.element.map((x) => ElementDefinition.parse(x));
    }
    return newInstance;
  }

  public static isStructureDefinitionDifferential(input?: unknown): input is StructureDefinitionDifferential {
    const castInput = input as StructureDefinitionDifferential;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StructureDefinitionDifferential";
  }

  public toJSON(): IStructureDefinitionDifferential {
    const result: IStructureDefinitionDifferential = super.toJSON();

    if (this.element) {
      result.element = this.element.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): StructureDefinitionDifferential {
    return StructureDefinitionDifferential.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "StructureDefinitionDifferential";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
