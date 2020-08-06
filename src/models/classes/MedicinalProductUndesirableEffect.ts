/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  IMedicinalProductUndesirableEffect,
  Population,
  Reference,
} from "../internal";

export class MedicinalProductUndesirableEffect extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductUndesirableEffect";

  public subject?: Array<Reference>;

  public symptomConditionEffect?: CodeableConcept;

  public classification?: CodeableConcept;

  public frequencyOfOccurrence?: CodeableConcept;

  public population?: Array<Population>;

  public static parse(
    json: IMedicinalProductUndesirableEffect,
    providedInstance: MedicinalProductUndesirableEffect = new MedicinalProductUndesirableEffect()
  ): MedicinalProductUndesirableEffect {
    const newInstance: MedicinalProductUndesirableEffect = DomainResource.parse(json, providedInstance);
  
    if (json.subject) {
      newInstance.subject = json.subject.map((x) => Reference.parse(x));
    }
    if (json.symptomConditionEffect) {
      newInstance.symptomConditionEffect = CodeableConcept.parse(json.symptomConditionEffect);
    }
    if (json.classification) {
      newInstance.classification = CodeableConcept.parse(json.classification);
    }
    if (json.frequencyOfOccurrence) {
      newInstance.frequencyOfOccurrence = CodeableConcept.parse(json.frequencyOfOccurrence);
    }
    if (json.population) {
      newInstance.population = json.population.map((x) => Population.parse(x));
    }
    return newInstance;
  }

  public static isMedicinalProductUndesirableEffect(input?: unknown): input is MedicinalProductUndesirableEffect {
    const castInput = input as MedicinalProductUndesirableEffect;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductUndesirableEffect";
  }

  public toJSON(): IMedicinalProductUndesirableEffect {
    const result: IMedicinalProductUndesirableEffect = super.toJSON();

    if (this.subject) {
      result.subject = this.subject.map((x) => x.toJSON());
    }

    if (this.symptomConditionEffect) {
      result.symptomConditionEffect = this.symptomConditionEffect.toJSON();
    }

    if (this.classification) {
      result.classification = this.classification.toJSON();
    }

    if (this.frequencyOfOccurrence) {
      result.frequencyOfOccurrence = this.frequencyOfOccurrence.toJSON();
    }

    if (this.population) {
      result.population = this.population.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MedicinalProductUndesirableEffect";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
