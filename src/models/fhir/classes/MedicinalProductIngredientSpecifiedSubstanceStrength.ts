/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IMedicinalProductIngredientSpecifiedSubstanceStrength,
  MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength,
  PrimitiveString,
  Ratio,
} from "../internal";

export class MedicinalProductIngredientSpecifiedSubstanceStrength extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductIngredient.SpecifiedSubstance.Strength";

  public presentation?: Ratio;

  public presentationLowLimit?: Ratio;

  public concentration?: Ratio;

  public concentrationLowLimit?: Ratio;

  public measurementPoint?: PrimitiveString;

  public country?: Array<CodeableConcept>;

  public referenceStrength?: Array<MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength>;

  public static parse(
    json: IMedicinalProductIngredientSpecifiedSubstanceStrength,
    providedInstance: MedicinalProductIngredientSpecifiedSubstanceStrength = new MedicinalProductIngredientSpecifiedSubstanceStrength()
  ): MedicinalProductIngredientSpecifiedSubstanceStrength {
    const newInstance: MedicinalProductIngredientSpecifiedSubstanceStrength = BackboneElement.parse(json, providedInstance);
  
    if (json.presentation) {
      newInstance.presentation = Ratio.parse(json.presentation);
    }
    if (json.presentationLowLimit) {
      newInstance.presentationLowLimit = Ratio.parse(json.presentationLowLimit);
    }
    if (json.concentration) {
      newInstance.concentration = Ratio.parse(json.concentration);
    }
    if (json.concentrationLowLimit) {
      newInstance.concentrationLowLimit = Ratio.parse(json.concentrationLowLimit);
    }
    if (json.measurementPoint) {
      newInstance.measurementPoint = PrimitiveString.parsePrimitive(json.measurementPoint, json._measurementPoint);
    }
    if (json.country) {
      newInstance.country = json.country.map((x) => CodeableConcept.parse(x));
    }
    if (json.referenceStrength) {
      newInstance.referenceStrength = json.referenceStrength.map((x) => MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength.parse(x));
    }
    return newInstance;
  }

  public static isMedicinalProductIngredientSpecifiedSubstanceStrength(input?: unknown): input is MedicinalProductIngredientSpecifiedSubstanceStrength {
    const castInput = input as MedicinalProductIngredientSpecifiedSubstanceStrength;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductIngredientSpecifiedSubstanceStrength";
  }

  public toJSON(): IMedicinalProductIngredientSpecifiedSubstanceStrength {
    const result: IMedicinalProductIngredientSpecifiedSubstanceStrength = super.toJSON();

    if (this.presentation) {
      result.presentation = this.presentation.toJSON();
    }

    if (this.presentationLowLimit) {
      result.presentationLowLimit = this.presentationLowLimit.toJSON();
    }

    if (this.concentration) {
      result.concentration = this.concentration.toJSON();
    }

    if (this.concentrationLowLimit) {
      result.concentrationLowLimit = this.concentrationLowLimit.toJSON();
    }

    if (this.measurementPoint) {
      result.measurementPoint = this.measurementPoint.value;
      result._measurementPoint = Extension.serializePrimitiveExtension(this.measurementPoint);
    }

    if (this.country) {
      result.country = this.country.map((x) => x.toJSON());
    }

    if (this.referenceStrength) {
      result.referenceStrength = this.referenceStrength.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MedicinalProductIngredientSpecifiedSubstanceStrength";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
