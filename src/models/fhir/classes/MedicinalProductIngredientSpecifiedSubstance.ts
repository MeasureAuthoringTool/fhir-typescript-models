/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  FhirList,
  IMedicinalProductIngredientSpecifiedSubstance,
  MedicinalProductIngredientSpecifiedSubstanceStrength,
  FhirType
} from "../internal";

@FhirType("MedicinalProductIngredientSpecifiedSubstance", "BackboneElement")
export class MedicinalProductIngredientSpecifiedSubstance extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductIngredient.SpecifiedSubstance";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirField("CodeableConcept")
  public group?: CodeableConcept;

  @FhirField("CodeableConcept")
  public confidentiality?: CodeableConcept;

  @FhirList("MedicinalProductIngredientSpecifiedSubstanceStrength")
  public strength?: Array<MedicinalProductIngredientSpecifiedSubstanceStrength>;

  public static parse(
    json: IMedicinalProductIngredientSpecifiedSubstance,
    providedInstance: MedicinalProductIngredientSpecifiedSubstance = new MedicinalProductIngredientSpecifiedSubstance()
  ): MedicinalProductIngredientSpecifiedSubstance {
    const newInstance: MedicinalProductIngredientSpecifiedSubstance = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.group !== undefined) {
      newInstance.group = CodeableConcept.parse(json.group);
    }
    if (json.confidentiality !== undefined) {
      newInstance.confidentiality = CodeableConcept.parse(json.confidentiality);
    }
    if (json.strength !== undefined) {
      newInstance.strength = json.strength.map((x) => MedicinalProductIngredientSpecifiedSubstanceStrength.parse(x));
    }
    return newInstance;
  }

  public static isMedicinalProductIngredientSpecifiedSubstance(input?: unknown): input is MedicinalProductIngredientSpecifiedSubstance {
    const castInput = input as MedicinalProductIngredientSpecifiedSubstance;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductIngredientSpecifiedSubstance";
  }

  public toJSON(): IMedicinalProductIngredientSpecifiedSubstance {
    const result: IMedicinalProductIngredientSpecifiedSubstance = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.group) {
      result.group = this.group.toJSON();
    }

    if (this.confidentiality) {
      result.confidentiality = this.confidentiality.toJSON();
    }

    if (this.strength) {
      result.strength = this.strength.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MedicinalProductIngredientSpecifiedSubstance {
    return MedicinalProductIngredientSpecifiedSubstance.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductIngredientSpecifiedSubstance";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
