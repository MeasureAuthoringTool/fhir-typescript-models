/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength,
  PrimitiveString,
  Ratio,
  FieldMetadata
} from "../internal";

export class MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductIngredient.SpecifiedSubstance.Strength.ReferenceStrength";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "substance",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "strength",
      fieldType: [Ratio],
      isArray: false
    }, {
      fieldName: "strengthLowLimit",
      fieldType: [Ratio],
      isArray: false
    }, {
      fieldName: "measurementPoint",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "country",
      fieldType: [CodeableConcept],
      isArray: true
    }];
  }

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
  
    if (json.substance !== undefined) {
      newInstance.substance = CodeableConcept.parse(json.substance);
    }
    if (json.strength !== undefined) {
      newInstance.strength = Ratio.parse(json.strength);
    }
    if (json.strengthLowLimit !== undefined) {
      newInstance.strengthLowLimit = Ratio.parse(json.strengthLowLimit);
    }
    if (json.measurementPoint !== undefined) {
      newInstance.measurementPoint = PrimitiveString.parsePrimitive(json.measurementPoint, json._measurementPoint);
    }
    if (json.country !== undefined) {
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

  public clone(): MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength {
    return MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
