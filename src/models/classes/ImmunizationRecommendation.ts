/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  DomainResource,
  Extension,
  Identifier,
  IImmunizationRecommendation,
  ImmunizationRecommendationRecommendation,
  PrimitiveDateTime,
  Reference,
} from "../internal";

export class ImmunizationRecommendation extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImmunizationRecommendation";

  public identifier?: Array<Identifier>;

  public patient?: Reference;

  public date?: PrimitiveDateTime;

  public authority?: Reference;

  public recommendation?: Array<ImmunizationRecommendationRecommendation>;

  public static parse(
    json: IImmunizationRecommendation,
    providedInstance: ImmunizationRecommendation = new ImmunizationRecommendation()
  ): ImmunizationRecommendation {
    const newInstance: ImmunizationRecommendation = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.patient) {
      newInstance.patient = Reference.parse(json.patient);
    }
    if (json.date) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.authority) {
      newInstance.authority = Reference.parse(json.authority);
    }
    if (json.recommendation) {
      newInstance.recommendation = json.recommendation.map((x) => ImmunizationRecommendationRecommendation.parse(x));
    }
    return newInstance;
  }

  public static isImmunizationRecommendation(input?: unknown): input is ImmunizationRecommendation {
    const castInput = input as ImmunizationRecommendation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImmunizationRecommendation";
  }

  public toJSON(): IImmunizationRecommendation {
    const result: IImmunizationRecommendation = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.patient) {
      result.patient = this.patient.toJSON();
    }

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.authority) {
      result.authority = this.authority.toJSON();
    }

    if (this.recommendation) {
      result.recommendation = this.recommendation.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ImmunizationRecommendation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
