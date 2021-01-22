/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  ISubstancePolymerMonomerSetStartingMaterial,
  PrimitiveBoolean,
  SubstanceAmount,
  FhirType
} from "../internal";

@FhirType("SubstancePolymerMonomerSetStartingMaterial", "BackboneElement")
export class SubstancePolymerMonomerSetStartingMaterial extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstancePolymer.MonomerSet.StartingMaterial";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public material?: CodeableConcept;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("PrimitiveBoolean")
  public isDefining?: PrimitiveBoolean;

  @FhirField("SubstanceAmount")
  public amount?: SubstanceAmount;

  public static parse(
    json: ISubstancePolymerMonomerSetStartingMaterial,
    providedInstance: SubstancePolymerMonomerSetStartingMaterial = new SubstancePolymerMonomerSetStartingMaterial()
  ): SubstancePolymerMonomerSetStartingMaterial {
    const newInstance: SubstancePolymerMonomerSetStartingMaterial = BackboneElement.parse(json, providedInstance);
  
    if (json.material !== undefined) {
      newInstance.material = CodeableConcept.parse(json.material);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.isDefining !== undefined) {
      newInstance.isDefining = PrimitiveBoolean.parsePrimitive(json.isDefining, json._isDefining);
    }
    if (json.amount !== undefined) {
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

  public clone(): SubstancePolymerMonomerSetStartingMaterial {
    return SubstancePolymerMonomerSetStartingMaterial.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstancePolymerMonomerSetStartingMaterial";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
