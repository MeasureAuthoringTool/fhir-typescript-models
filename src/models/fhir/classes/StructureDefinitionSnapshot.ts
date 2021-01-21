/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  ElementDefinition,
  FhirList,
  IStructureDefinitionSnapshot,
  FhirType
} from "../internal";

@FhirType("StructureDefinitionSnapshot", "BackboneElement")
export class StructureDefinitionSnapshot extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureDefinition.Snapshot";

  static readonly primaryCodePath: string | null = null;

  @FhirList("ElementDefinition")
  public element?: Array<ElementDefinition>;

  public static parse(
    json: IStructureDefinitionSnapshot,
    providedInstance: StructureDefinitionSnapshot = new StructureDefinitionSnapshot()
  ): StructureDefinitionSnapshot {
    const newInstance: StructureDefinitionSnapshot = BackboneElement.parse(json, providedInstance);
  
    if (json.element !== undefined) {
      newInstance.element = json.element.map((x) => ElementDefinition.parse(x));
    }
    return newInstance;
  }

  public static isStructureDefinitionSnapshot(input?: unknown): input is StructureDefinitionSnapshot {
    const castInput = input as StructureDefinitionSnapshot;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StructureDefinitionSnapshot";
  }

  public toJSON(): IStructureDefinitionSnapshot {
    const result: IStructureDefinitionSnapshot = super.toJSON();

    if (this.element) {
      result.element = this.element.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): StructureDefinitionSnapshot {
    return StructureDefinitionSnapshot.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "StructureDefinitionSnapshot";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
