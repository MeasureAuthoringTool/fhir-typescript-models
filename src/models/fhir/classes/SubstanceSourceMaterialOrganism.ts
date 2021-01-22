/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  FhirList,
  ISubstanceSourceMaterialOrganism,
  PrimitiveString,
  SubstanceSourceMaterialOrganismAuthor,
  SubstanceSourceMaterialOrganismHybrid,
  SubstanceSourceMaterialOrganismOrganismGeneral,
  FhirType
} from "../internal";

@FhirType("SubstanceSourceMaterialOrganism", "BackboneElement")
export class SubstanceSourceMaterialOrganism extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSourceMaterial.Organism";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public family?: CodeableConcept;

  @FhirField("CodeableConcept")
  public genus?: CodeableConcept;

  @FhirField("CodeableConcept")
  public species?: CodeableConcept;

  @FhirField("CodeableConcept")
  public intraspecificType?: CodeableConcept;

  @FhirField("PrimitiveString")
  public intraspecificDescription?: PrimitiveString;

  @FhirList("SubstanceSourceMaterialOrganismAuthor")
  public author?: Array<SubstanceSourceMaterialOrganismAuthor>;

  @FhirField("SubstanceSourceMaterialOrganismHybrid")
  public hybrid?: SubstanceSourceMaterialOrganismHybrid;

  @FhirField("SubstanceSourceMaterialOrganismOrganismGeneral")
  public organismGeneral?: SubstanceSourceMaterialOrganismOrganismGeneral;

  public static parse(
    json: ISubstanceSourceMaterialOrganism,
    providedInstance: SubstanceSourceMaterialOrganism = new SubstanceSourceMaterialOrganism()
  ): SubstanceSourceMaterialOrganism {
    const newInstance: SubstanceSourceMaterialOrganism = BackboneElement.parse(json, providedInstance);
  
    if (json.family !== undefined) {
      newInstance.family = CodeableConcept.parse(json.family);
    }
    if (json.genus !== undefined) {
      newInstance.genus = CodeableConcept.parse(json.genus);
    }
    if (json.species !== undefined) {
      newInstance.species = CodeableConcept.parse(json.species);
    }
    if (json.intraspecificType !== undefined) {
      newInstance.intraspecificType = CodeableConcept.parse(json.intraspecificType);
    }
    if (json.intraspecificDescription !== undefined) {
      newInstance.intraspecificDescription = PrimitiveString.parsePrimitive(json.intraspecificDescription, json._intraspecificDescription);
    }
    if (json.author !== undefined) {
      newInstance.author = json.author.map((x) => SubstanceSourceMaterialOrganismAuthor.parse(x));
    }
    if (json.hybrid !== undefined) {
      newInstance.hybrid = SubstanceSourceMaterialOrganismHybrid.parse(json.hybrid);
    }
    if (json.organismGeneral !== undefined) {
      newInstance.organismGeneral = SubstanceSourceMaterialOrganismOrganismGeneral.parse(json.organismGeneral);
    }
    return newInstance;
  }

  public static isSubstanceSourceMaterialOrganism(input?: unknown): input is SubstanceSourceMaterialOrganism {
    const castInput = input as SubstanceSourceMaterialOrganism;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceSourceMaterialOrganism";
  }

  public toJSON(): ISubstanceSourceMaterialOrganism {
    const result: ISubstanceSourceMaterialOrganism = super.toJSON();

    if (this.family) {
      result.family = this.family.toJSON();
    }

    if (this.genus) {
      result.genus = this.genus.toJSON();
    }

    if (this.species) {
      result.species = this.species.toJSON();
    }

    if (this.intraspecificType) {
      result.intraspecificType = this.intraspecificType.toJSON();
    }

    if (this.intraspecificDescription) {
      result.intraspecificDescription = this.intraspecificDescription.value;
      result._intraspecificDescription = Extension.serializePrimitiveExtension(this.intraspecificDescription);
    }

    if (this.author) {
      result.author = this.author.map((x) => x.toJSON());
    }

    if (this.hybrid) {
      result.hybrid = this.hybrid.toJSON();
    }

    if (this.organismGeneral) {
      result.organismGeneral = this.organismGeneral.toJSON();
    }

    return result;
  }

  public clone(): SubstanceSourceMaterialOrganism {
    return SubstanceSourceMaterialOrganism.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceSourceMaterialOrganism";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
