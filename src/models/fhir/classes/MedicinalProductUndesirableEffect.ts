/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  IMedicinalProductUndesirableEffect,
  Population,
  Reference,
  FieldMetadata
} from "../internal";

export class MedicinalProductUndesirableEffect extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductUndesirableEffect";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "subject",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "symptomConditionEffect",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "classification",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "frequencyOfOccurrence",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "population",
      fieldType: [Population],
      isArray: true
    }];
  }

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
