/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  ISubstanceSpecificationStructureIsotopeMolecularWeight,
  Quantity,
  FhirType
} from "../internal";

@FhirType("SubstanceSpecificationStructureIsotopeMolecularWeight", "BackboneElement")
export class SubstanceSpecificationStructureIsotopeMolecularWeight extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSpecification.Structure.Isotope.MolecularWeight";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public method?: CodeableConcept;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("Quantity")
  public amount?: Quantity;

  public static parse(
    json: ISubstanceSpecificationStructureIsotopeMolecularWeight,
    providedInstance: SubstanceSpecificationStructureIsotopeMolecularWeight = new SubstanceSpecificationStructureIsotopeMolecularWeight()
  ): SubstanceSpecificationStructureIsotopeMolecularWeight {
    const newInstance: SubstanceSpecificationStructureIsotopeMolecularWeight = BackboneElement.parse(json, providedInstance);
  
    if (json.method !== undefined) {
      newInstance.method = CodeableConcept.parse(json.method);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.amount !== undefined) {
      newInstance.amount = Quantity.parse(json.amount);
    }
    return newInstance;
  }

  public static isSubstanceSpecificationStructureIsotopeMolecularWeight(input?: unknown): input is SubstanceSpecificationStructureIsotopeMolecularWeight {
    const castInput = input as SubstanceSpecificationStructureIsotopeMolecularWeight;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceSpecificationStructureIsotopeMolecularWeight";
  }

  public toJSON(): ISubstanceSpecificationStructureIsotopeMolecularWeight {
    const result: ISubstanceSpecificationStructureIsotopeMolecularWeight = super.toJSON();

    if (this.method) {
      result.method = this.method.toJSON();
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.amount) {
      result.amount = this.amount.toJSON();
    }

    return result;
  }

  public clone(): SubstanceSpecificationStructureIsotopeMolecularWeight {
    return SubstanceSpecificationStructureIsotopeMolecularWeight.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceSpecificationStructureIsotopeMolecularWeight";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
