/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IMedicinalProductIngredientSubstance,
  MedicinalProductIngredientSpecifiedSubstanceStrength,
  FieldMetadata
} from "../internal";

export class MedicinalProductIngredientSubstance extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductIngredient.Substance";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "code",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "strength",
      fieldType: [MedicinalProductIngredientSpecifiedSubstanceStrength],
      isArray: true
    }];
  }

  public code?: CodeableConcept;

  public strength?: Array<MedicinalProductIngredientSpecifiedSubstanceStrength>;

  public static parse(
    json: IMedicinalProductIngredientSubstance,
    providedInstance: MedicinalProductIngredientSubstance = new MedicinalProductIngredientSubstance()
  ): MedicinalProductIngredientSubstance {
    const newInstance: MedicinalProductIngredientSubstance = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.strength !== undefined) {
      newInstance.strength = json.strength.map((x) => MedicinalProductIngredientSpecifiedSubstanceStrength.parse(x));
    }
    return newInstance;
  }

  public static isMedicinalProductIngredientSubstance(input?: unknown): input is MedicinalProductIngredientSubstance {
    const castInput = input as MedicinalProductIngredientSubstance;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductIngredientSubstance";
  }

  public toJSON(): IMedicinalProductIngredientSubstance {
    const result: IMedicinalProductIngredientSubstance = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.strength) {
      result.strength = this.strength.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MedicinalProductIngredientSubstance {
    return MedicinalProductIngredientSubstance.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductIngredientSubstance";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
