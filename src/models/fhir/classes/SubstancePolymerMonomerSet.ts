/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  ISubstancePolymerMonomerSet,
  SubstancePolymerMonomerSetStartingMaterial,
} from "../internal";

export class SubstancePolymerMonomerSet extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstancePolymer.MonomerSet";

  public ratioType?: CodeableConcept;

  public startingMaterial?: Array<SubstancePolymerMonomerSetStartingMaterial>;

  public static parse(
    json: ISubstancePolymerMonomerSet,
    providedInstance: SubstancePolymerMonomerSet = new SubstancePolymerMonomerSet()
  ): SubstancePolymerMonomerSet {
    const newInstance: SubstancePolymerMonomerSet = BackboneElement.parse(json, providedInstance);
  
    if (json.ratioType) {
      newInstance.ratioType = CodeableConcept.parse(json.ratioType);
    }
    if (json.startingMaterial) {
      newInstance.startingMaterial = json.startingMaterial.map((x) => SubstancePolymerMonomerSetStartingMaterial.parse(x));
    }
    return newInstance;
  }

  public static isSubstancePolymerMonomerSet(input?: unknown): input is SubstancePolymerMonomerSet {
    const castInput = input as SubstancePolymerMonomerSet;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstancePolymerMonomerSet";
  }

  public toJSON(): ISubstancePolymerMonomerSet {
    const result: ISubstancePolymerMonomerSet = super.toJSON();

    if (this.ratioType) {
      result.ratioType = this.ratioType.toJSON();
    }

    if (this.startingMaterial) {
      result.startingMaterial = this.startingMaterial.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "SubstancePolymerMonomerSet";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
