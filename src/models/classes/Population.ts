/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IPopulation,
  Range,
} from "../internal";

export class Population extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Population";

  public age?: Range | CodeableConcept;

  public gender?: CodeableConcept;

  public race?: CodeableConcept;

  public physiologicalCondition?: CodeableConcept;

  public static parse(
    json: IPopulation,
    providedInstance: Population = new Population()
  ): Population {
    const newInstance: Population = BackboneElement.parse(json, providedInstance);
  
    if (json.ageRange) {
      newInstance.age = Range.parse(json.ageRange);
    }
    if (json.ageCodeableConcept) {
      newInstance.age = CodeableConcept.parse(json.ageCodeableConcept);
    }
    if (json.gender) {
      newInstance.gender = CodeableConcept.parse(json.gender);
    }
    if (json.race) {
      newInstance.race = CodeableConcept.parse(json.race);
    }
    if (json.physiologicalCondition) {
      newInstance.physiologicalCondition = CodeableConcept.parse(json.physiologicalCondition);
    }
    return newInstance;
  }

  public static isPopulation(input?: unknown): input is Population {
    const castInput = input as Population;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Population";
  }

  public toJSON(): IPopulation {
    const result: IPopulation = super.toJSON();

    if (this.age && Range.isRange(this.age)) {
      result.ageRange = this.age.toJSON();
    }

    if (this.age && CodeableConcept.isCodeableConcept(this.age)) {
      result.ageCodeableConcept = this.age.toJSON();
    }

    if (this.gender) {
      result.gender = this.gender.toJSON();
    }

    if (this.race) {
      result.race = this.race.toJSON();
    }

    if (this.physiologicalCondition) {
      result.physiologicalCondition = this.physiologicalCondition.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "Population";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
