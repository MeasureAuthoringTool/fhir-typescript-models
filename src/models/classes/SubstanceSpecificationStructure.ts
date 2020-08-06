/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  ISubstanceSpecificationStructure,
  PrimitiveString,
  Reference,
  SubstanceSpecificationStructureIsotope,
  SubstanceSpecificationStructureIsotopeMolecularWeight,
  SubstanceSpecificationStructureRepresentation,
} from "../internal";

export class SubstanceSpecificationStructure extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSpecification.Structure";

  public stereochemistry?: CodeableConcept;

  public opticalActivity?: CodeableConcept;

  public molecularFormula?: PrimitiveString;

  public molecularFormulaByMoiety?: PrimitiveString;

  public isotope?: Array<SubstanceSpecificationStructureIsotope>;

  public molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight;

  public source?: Array<Reference>;

  public representation?: Array<SubstanceSpecificationStructureRepresentation>;

  public static parse(
    json: ISubstanceSpecificationStructure,
    providedInstance: SubstanceSpecificationStructure = new SubstanceSpecificationStructure()
  ): SubstanceSpecificationStructure {
    const newInstance: SubstanceSpecificationStructure = BackboneElement.parse(json, providedInstance);
  
    if (json.stereochemistry) {
      newInstance.stereochemistry = CodeableConcept.parse(json.stereochemistry);
    }
    if (json.opticalActivity) {
      newInstance.opticalActivity = CodeableConcept.parse(json.opticalActivity);
    }
    if (json.molecularFormula) {
      newInstance.molecularFormula = PrimitiveString.parsePrimitive(json.molecularFormula, json._molecularFormula);
    }
    if (json.molecularFormulaByMoiety) {
      newInstance.molecularFormulaByMoiety = PrimitiveString.parsePrimitive(json.molecularFormulaByMoiety, json._molecularFormulaByMoiety);
    }
    if (json.isotope) {
      newInstance.isotope = json.isotope.map((x) => SubstanceSpecificationStructureIsotope.parse(x));
    }
    if (json.molecularWeight) {
      newInstance.molecularWeight = SubstanceSpecificationStructureIsotopeMolecularWeight.parse(json.molecularWeight);
    }
    if (json.source) {
      newInstance.source = json.source.map((x) => Reference.parse(x));
    }
    if (json.representation) {
      newInstance.representation = json.representation.map((x) => SubstanceSpecificationStructureRepresentation.parse(x));
    }
    return newInstance;
  }

  public static isSubstanceSpecificationStructure(input?: unknown): input is SubstanceSpecificationStructure {
    const castInput = input as SubstanceSpecificationStructure;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceSpecificationStructure";
  }

  public toJSON(): ISubstanceSpecificationStructure {
    const result: ISubstanceSpecificationStructure = super.toJSON();

    if (this.stereochemistry) {
      result.stereochemistry = this.stereochemistry.toJSON();
    }

    if (this.opticalActivity) {
      result.opticalActivity = this.opticalActivity.toJSON();
    }

    if (this.molecularFormula) {
      result.molecularFormula = this.molecularFormula.value;
      result._molecularFormula = Extension.serializePrimitiveExtension(this.molecularFormula);
    }

    if (this.molecularFormulaByMoiety) {
      result.molecularFormulaByMoiety = this.molecularFormulaByMoiety.value;
      result._molecularFormulaByMoiety = Extension.serializePrimitiveExtension(this.molecularFormulaByMoiety);
    }

    if (this.isotope) {
      result.isotope = this.isotope.map((x) => x.toJSON());
    }

    if (this.molecularWeight) {
      result.molecularWeight = this.molecularWeight.toJSON();
    }

    if (this.source) {
      result.source = this.source.map((x) => x.toJSON());
    }

    if (this.representation) {
      result.representation = this.representation.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "SubstanceSpecificationStructure";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
