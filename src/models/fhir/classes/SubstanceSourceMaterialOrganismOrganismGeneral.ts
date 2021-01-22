/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  ISubstanceSourceMaterialOrganismOrganismGeneral,
  FhirType
} from "../internal";

@FhirType("SubstanceSourceMaterialOrganismOrganismGeneral", "BackboneElement")
export class SubstanceSourceMaterialOrganismOrganismGeneral extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSourceMaterial.Organism.OrganismGeneral";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public kingdom?: CodeableConcept;

  @FhirField("CodeableConcept")
  public phylum?: CodeableConcept;

  @FhirField("CodeableConcept")
  public class?: CodeableConcept;

  @FhirField("CodeableConcept")
  public order?: CodeableConcept;

  public static parse(
    json: ISubstanceSourceMaterialOrganismOrganismGeneral,
    providedInstance: SubstanceSourceMaterialOrganismOrganismGeneral = new SubstanceSourceMaterialOrganismOrganismGeneral()
  ): SubstanceSourceMaterialOrganismOrganismGeneral {
    const newInstance: SubstanceSourceMaterialOrganismOrganismGeneral = BackboneElement.parse(json, providedInstance);
  
    if (json.kingdom !== undefined) {
      newInstance.kingdom = CodeableConcept.parse(json.kingdom);
    }
    if (json.phylum !== undefined) {
      newInstance.phylum = CodeableConcept.parse(json.phylum);
    }
    if (json.class !== undefined) {
      newInstance.class = CodeableConcept.parse(json.class);
    }
    if (json.order !== undefined) {
      newInstance.order = CodeableConcept.parse(json.order);
    }
    return newInstance;
  }

  public static isSubstanceSourceMaterialOrganismOrganismGeneral(input?: unknown): input is SubstanceSourceMaterialOrganismOrganismGeneral {
    const castInput = input as SubstanceSourceMaterialOrganismOrganismGeneral;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceSourceMaterialOrganismOrganismGeneral";
  }

  public toJSON(): ISubstanceSourceMaterialOrganismOrganismGeneral {
    const result: ISubstanceSourceMaterialOrganismOrganismGeneral = super.toJSON();

    if (this.kingdom) {
      result.kingdom = this.kingdom.toJSON();
    }

    if (this.phylum) {
      result.phylum = this.phylum.toJSON();
    }

    if (this.class) {
      result.class = this.class.toJSON();
    }

    if (this.order) {
      result.order = this.order.toJSON();
    }

    return result;
  }

  public clone(): SubstanceSourceMaterialOrganismOrganismGeneral {
    return SubstanceSourceMaterialOrganismOrganismGeneral.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceSourceMaterialOrganismOrganismGeneral";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
