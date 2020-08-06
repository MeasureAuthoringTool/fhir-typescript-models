/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength,
  PrimitiveString,
  Ratio,
} from "../internal";

export class MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductIngredient.SpecifiedSubstance.Strength.ReferenceStrength";

  public substance?: CodeableConcept;

  public strength?: Ratio;

  public strengthLowLimit?: Ratio;

  public measurementPoint?: PrimitiveString;

  public country?: Array<CodeableConcept>;

  public static parse(
    json: IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength,
    providedInstance: MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength = new MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength()
  ): MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength {
    const newInstance: MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength = BackboneElement.parse(json, providedInstance);
  
    if (json.substance) {
      newInstance.substance = CodeableConcept.parse(json.substance);
    }
    if (json.strength) {
      newInstance.strength = Ratio.parse(json.strength);
    }
    if (json.strengthLowLimit) {
      newInstance.strengthLowLimit = Ratio.parse(json.strengthLowLimit);
    }
    if (json.measurementPoint) {
      newInstance.measurementPoint = PrimitiveString.parsePrimitive(json.measurementPoint, json._measurementPoint);
    }
    if (json.country) {
      newInstance.country = json.country.map((x) => CodeableConcept.parse(x));
    }
    return newInstance;
  }

  public static isMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength(input?: unknown): input is MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength {
    const castInput = input as MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength";
  }

  public toJSON(): IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength {
    const result: IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength = super.toJSON();

    if (this.substance) {
      result.substance = this.substance.toJSON();
    }

    if (this.strength) {
      result.strength = this.strength.toJSON();
    }

    if (this.strengthLowLimit) {
      result.strengthLowLimit = this.strengthLowLimit.toJSON();
    }

    if (this.measurementPoint) {
      result.measurementPoint = this.measurementPoint.value;
      result._measurementPoint = Extension.serializePrimitiveExtension(this.measurementPoint);
    }

    if (this.country) {
      result.country = this.country.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
