/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  ISubstanceSourceMaterialOrganismOrganismGeneral,
} from "../internal";

export class SubstanceSourceMaterialOrganismOrganismGeneral extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSourceMaterial.Organism.OrganismGeneral";

  public kingdom?: CodeableConcept;

  public phylum?: CodeableConcept;

  public class?: CodeableConcept;

  public order?: CodeableConcept;

  public static parse(
    json: ISubstanceSourceMaterialOrganismOrganismGeneral,
    providedInstance: SubstanceSourceMaterialOrganismOrganismGeneral = new SubstanceSourceMaterialOrganismOrganismGeneral()
  ): SubstanceSourceMaterialOrganismOrganismGeneral {
    const newInstance: SubstanceSourceMaterialOrganismOrganismGeneral = BackboneElement.parse(json, providedInstance);
  
    if (json.kingdom) {
      newInstance.kingdom = CodeableConcept.parse(json.kingdom);
    }
    if (json.phylum) {
      newInstance.phylum = CodeableConcept.parse(json.phylum);
    }
    if (json.class) {
      newInstance.class = CodeableConcept.parse(json.class);
    }
    if (json.order) {
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
  
  public getTypeName(): string {
    return "SubstanceSourceMaterialOrganismOrganismGeneral";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
