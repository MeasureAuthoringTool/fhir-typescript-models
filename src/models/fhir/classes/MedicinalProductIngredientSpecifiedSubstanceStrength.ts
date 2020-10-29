/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IMedicinalProductIngredientSpecifiedSubstanceStrength,
  MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength,
  PrimitiveString,
  Ratio,
  FieldMetadata
} from "../internal";

export class MedicinalProductIngredientSpecifiedSubstanceStrength extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductIngredient.SpecifiedSubstance.Strength";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "presentation",
      fieldType: [Ratio],
      isArray: false
    }, {
      fieldName: "presentationLowLimit",
      fieldType: [Ratio],
      isArray: false
    }, {
      fieldName: "concentration",
      fieldType: [Ratio],
      isArray: false
    }, {
      fieldName: "concentrationLowLimit",
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
    }, {
      fieldName: "referenceStrength",
      fieldType: [MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength],
      isArray: true
    }];
  }

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
  
    if (json.presentation !== undefined) {
      newInstance.presentation = Ratio.parse(json.presentation);
    }
    if (json.presentationLowLimit !== undefined) {
      newInstance.presentationLowLimit = Ratio.parse(json.presentationLowLimit);
    }
    if (json.concentration !== undefined) {
      newInstance.concentration = Ratio.parse(json.concentration);
    }
    if (json.concentrationLowLimit !== undefined) {
      newInstance.concentrationLowLimit = Ratio.parse(json.concentrationLowLimit);
    }
    if (json.measurementPoint !== undefined) {
      newInstance.measurementPoint = PrimitiveString.parsePrimitive(json.measurementPoint, json._measurementPoint);
    }
    if (json.country !== undefined) {
      newInstance.country = json.country.map((x) => CodeableConcept.parse(x));
    }
    if (json.referenceStrength !== undefined) {
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

  public clone(): MedicinalProductIngredientSpecifiedSubstanceStrength {
    return MedicinalProductIngredientSpecifiedSubstanceStrength.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductIngredientSpecifiedSubstanceStrength";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
