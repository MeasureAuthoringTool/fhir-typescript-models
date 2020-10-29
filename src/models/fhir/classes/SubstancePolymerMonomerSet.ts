/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  ISubstancePolymerMonomerSet,
  SubstancePolymerMonomerSetStartingMaterial,
  FieldMetadata
} from "../internal";

export class SubstancePolymerMonomerSet extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstancePolymer.MonomerSet";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "ratioType",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "startingMaterial",
      fieldType: [SubstancePolymerMonomerSetStartingMaterial],
      isArray: true
    }];
  }

  public ratioType?: CodeableConcept;

  public startingMaterial?: Array<SubstancePolymerMonomerSetStartingMaterial>;

  public static parse(
    json: ISubstancePolymerMonomerSet,
    providedInstance: SubstancePolymerMonomerSet = new SubstancePolymerMonomerSet()
  ): SubstancePolymerMonomerSet {
    const newInstance: SubstancePolymerMonomerSet = BackboneElement.parse(json, providedInstance);
  
    if (json.ratioType !== undefined) {
      newInstance.ratioType = CodeableConcept.parse(json.ratioType);
    }
    if (json.startingMaterial !== undefined) {
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

  public clone(): SubstancePolymerMonomerSet {
    return SubstancePolymerMonomerSet.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstancePolymerMonomerSet";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
