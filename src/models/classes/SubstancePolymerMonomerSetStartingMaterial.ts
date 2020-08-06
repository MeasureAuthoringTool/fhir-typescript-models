/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  ISubstancePolymerMonomerSetStartingMaterial,
  PrimitiveBoolean,
  SubstanceAmount,
} from "../internal";

export class SubstancePolymerMonomerSetStartingMaterial extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstancePolymer.MonomerSet.StartingMaterial";

  public material?: CodeableConcept;

  public type?: CodeableConcept;

  public isDefining?: PrimitiveBoolean;

  public amount?: SubstanceAmount;

  public static parse(
    json: ISubstancePolymerMonomerSetStartingMaterial,
    providedInstance: SubstancePolymerMonomerSetStartingMaterial = new SubstancePolymerMonomerSetStartingMaterial()
  ): SubstancePolymerMonomerSetStartingMaterial {
    const newInstance: SubstancePolymerMonomerSetStartingMaterial = BackboneElement.parse(json, providedInstance);
  
    if (json.material) {
      newInstance.material = CodeableConcept.parse(json.material);
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.isDefining) {
      newInstance.isDefining = PrimitiveBoolean.parsePrimitive(json.isDefining, json._isDefining);
    }
    if (json.amount) {
      newInstance.amount = SubstanceAmount.parse(json.amount);
    }
    return newInstance;
  }

  public static isSubstancePolymerMonomerSetStartingMaterial(input?: unknown): input is SubstancePolymerMonomerSetStartingMaterial {
    const castInput = input as SubstancePolymerMonomerSetStartingMaterial;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstancePolymerMonomerSetStartingMaterial";
  }

  public toJSON(): ISubstancePolymerMonomerSetStartingMaterial {
    const result: ISubstancePolymerMonomerSetStartingMaterial = super.toJSON();

    if (this.material) {
      result.material = this.material.toJSON();
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.isDefining) {
      result.isDefining = this.isDefining.value;
      result._isDefining = Extension.serializePrimitiveExtension(this.isDefining);
    }

    if (this.amount) {
      result.amount = this.amount.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "SubstancePolymerMonomerSetStartingMaterial";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
