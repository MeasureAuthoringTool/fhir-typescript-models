/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Identifier,
  ISubstanceSpecificationStructureIsotope,
  Quantity,
  SubstanceSpecificationStructureIsotopeMolecularWeight,
} from "../internal";

export class SubstanceSpecificationStructureIsotope extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSpecification.Structure.Isotope";

  public identifier?: Identifier;

  public name?: CodeableConcept;

  public substitution?: CodeableConcept;

  public halfLife?: Quantity;

  public molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight;

  public static parse(
    json: ISubstanceSpecificationStructureIsotope,
    providedInstance: SubstanceSpecificationStructureIsotope = new SubstanceSpecificationStructureIsotope()
  ): SubstanceSpecificationStructureIsotope {
    const newInstance: SubstanceSpecificationStructureIsotope = BackboneElement.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.name) {
      newInstance.name = CodeableConcept.parse(json.name);
    }
    if (json.substitution) {
      newInstance.substitution = CodeableConcept.parse(json.substitution);
    }
    if (json.halfLife) {
      newInstance.halfLife = Quantity.parse(json.halfLife);
    }
    if (json.molecularWeight) {
      newInstance.molecularWeight = SubstanceSpecificationStructureIsotopeMolecularWeight.parse(json.molecularWeight);
    }
    return newInstance;
  }

  public static isSubstanceSpecificationStructureIsotope(input?: unknown): input is SubstanceSpecificationStructureIsotope {
    const castInput = input as SubstanceSpecificationStructureIsotope;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceSpecificationStructureIsotope";
  }

  public toJSON(): ISubstanceSpecificationStructureIsotope {
    const result: ISubstanceSpecificationStructureIsotope = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    if (this.name) {
      result.name = this.name.toJSON();
    }

    if (this.substitution) {
      result.substitution = this.substitution.toJSON();
    }

    if (this.halfLife) {
      result.halfLife = this.halfLife.toJSON();
    }

    if (this.molecularWeight) {
      result.molecularWeight = this.molecularWeight.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "SubstanceSpecificationStructureIsotope";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
