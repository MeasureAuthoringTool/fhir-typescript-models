/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  FhirList,
  ISubstanceSpecificationStructure,
  PrimitiveString,
  Reference,
  SubstanceSpecificationStructureIsotope,
  SubstanceSpecificationStructureIsotopeMolecularWeight,
  SubstanceSpecificationStructureRepresentation,
  FhirType
} from "../internal";

@FhirType("SubstanceSpecificationStructure", "BackboneElement")
export class SubstanceSpecificationStructure extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSpecification.Structure";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public stereochemistry?: CodeableConcept;

  @FhirField("CodeableConcept")
  public opticalActivity?: CodeableConcept;

  @FhirField("PrimitiveString")
  public molecularFormula?: PrimitiveString;

  @FhirField("PrimitiveString")
  public molecularFormulaByMoiety?: PrimitiveString;

  @FhirList("SubstanceSpecificationStructureIsotope")
  public isotope?: Array<SubstanceSpecificationStructureIsotope>;

  @FhirField("SubstanceSpecificationStructureIsotopeMolecularWeight")
  public molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight;

  @FhirList("Reference")
  public source?: Array<Reference>;

  @FhirList("SubstanceSpecificationStructureRepresentation")
  public representation?: Array<SubstanceSpecificationStructureRepresentation>;

  public static parse(
    json: ISubstanceSpecificationStructure,
    providedInstance: SubstanceSpecificationStructure = new SubstanceSpecificationStructure()
  ): SubstanceSpecificationStructure {
    const newInstance: SubstanceSpecificationStructure = BackboneElement.parse(json, providedInstance);
  
    if (json.stereochemistry !== undefined) {
      newInstance.stereochemistry = CodeableConcept.parse(json.stereochemistry);
    }
    if (json.opticalActivity !== undefined) {
      newInstance.opticalActivity = CodeableConcept.parse(json.opticalActivity);
    }
    if (json.molecularFormula !== undefined) {
      newInstance.molecularFormula = PrimitiveString.parsePrimitive(json.molecularFormula, json._molecularFormula);
    }
    if (json.molecularFormulaByMoiety !== undefined) {
      newInstance.molecularFormulaByMoiety = PrimitiveString.parsePrimitive(json.molecularFormulaByMoiety, json._molecularFormulaByMoiety);
    }
    if (json.isotope !== undefined) {
      newInstance.isotope = json.isotope.map((x) => SubstanceSpecificationStructureIsotope.parse(x));
    }
    if (json.molecularWeight !== undefined) {
      newInstance.molecularWeight = SubstanceSpecificationStructureIsotopeMolecularWeight.parse(json.molecularWeight);
    }
    if (json.source !== undefined) {
      newInstance.source = json.source.map((x) => Reference.parse(x));
    }
    if (json.representation !== undefined) {
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

  public clone(): SubstanceSpecificationStructure {
    return SubstanceSpecificationStructure.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceSpecificationStructure";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
