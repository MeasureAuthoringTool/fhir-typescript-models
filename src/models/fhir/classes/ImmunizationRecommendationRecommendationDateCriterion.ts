/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IImmunizationRecommendationRecommendationDateCriterion,
  PrimitiveDateTime,
  FieldMetadata
} from "../internal";

export class ImmunizationRecommendationRecommendationDateCriterion extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImmunizationRecommendation.Recommendation.DateCriterion";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "code",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "value",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }];
  }

  public code?: CodeableConcept;

  public value?: PrimitiveDateTime;

  public static parse(
    json: IImmunizationRecommendationRecommendationDateCriterion,
    providedInstance: ImmunizationRecommendationRecommendationDateCriterion = new ImmunizationRecommendationRecommendationDateCriterion()
  ): ImmunizationRecommendationRecommendationDateCriterion {
    const newInstance: ImmunizationRecommendationRecommendationDateCriterion = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.value !== undefined) {
      newInstance.value = PrimitiveDateTime.parsePrimitive(json.value, json._value);
    }
    return newInstance;
  }

  public static isImmunizationRecommendationRecommendationDateCriterion(input?: unknown): input is ImmunizationRecommendationRecommendationDateCriterion {
    const castInput = input as ImmunizationRecommendationRecommendationDateCriterion;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImmunizationRecommendationRecommendationDateCriterion";
  }

  public toJSON(): IImmunizationRecommendationRecommendationDateCriterion {
    const result: IImmunizationRecommendationRecommendationDateCriterion = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.value) {
      result.value = this.value.value;
      result._value = Extension.serializePrimitiveExtension(this.value);
    }

    return result;
  }

  public clone(): ImmunizationRecommendationRecommendationDateCriterion {
    return ImmunizationRecommendationRecommendationDateCriterion.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ImmunizationRecommendationRecommendationDateCriterion";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
