/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  FhirField,
  FhirList,
  IMedicinalProductUndesirableEffect,
  Population,
  Reference,
  FhirType
} from "../internal";

@FhirType("MedicinalProductUndesirableEffect", "DomainResource")
export class MedicinalProductUndesirableEffect extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductUndesirableEffect";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Reference")
  public subject?: Array<Reference>;

  @FhirField("CodeableConcept")
  public symptomConditionEffect?: CodeableConcept;

  @FhirField("CodeableConcept")
  public classification?: CodeableConcept;

  @FhirField("CodeableConcept")
  public frequencyOfOccurrence?: CodeableConcept;

  @FhirList("Population")
  public population?: Array<Population>;

  public static parse(
    json: IMedicinalProductUndesirableEffect,
    providedInstance: MedicinalProductUndesirableEffect = new MedicinalProductUndesirableEffect()
  ): MedicinalProductUndesirableEffect {
    const newInstance: MedicinalProductUndesirableEffect = DomainResource.parse(json, providedInstance);
  
    if (json.subject !== undefined) {
      newInstance.subject = json.subject.map((x) => Reference.parse(x));
    }
    if (json.symptomConditionEffect !== undefined) {
      newInstance.symptomConditionEffect = CodeableConcept.parse(json.symptomConditionEffect);
    }
    if (json.classification !== undefined) {
      newInstance.classification = CodeableConcept.parse(json.classification);
    }
    if (json.frequencyOfOccurrence !== undefined) {
      newInstance.frequencyOfOccurrence = CodeableConcept.parse(json.frequencyOfOccurrence);
    }
    if (json.population !== undefined) {
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

  public clone(): MedicinalProductUndesirableEffect {
    return MedicinalProductUndesirableEffect.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductUndesirableEffect";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
