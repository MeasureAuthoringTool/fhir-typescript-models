/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  IMedicinalProductIndication,
  MedicinalProductIndicationOtherTherapy,
  Population,
  Quantity,
  Reference,
} from "../internal";

export class MedicinalProductIndication extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductIndication";

  public subject?: Array<Reference>;

  public diseaseSymptomProcedure?: CodeableConcept;

  public diseaseStatus?: CodeableConcept;

  public comorbidity?: Array<CodeableConcept>;

  public intendedEffect?: CodeableConcept;

  public duration?: Quantity;

  public otherTherapy?: Array<MedicinalProductIndicationOtherTherapy>;

  public undesirableEffect?: Array<Reference>;

  public population?: Array<Population>;

  public static parse(
    json: IMedicinalProductIndication,
    providedInstance: MedicinalProductIndication = new MedicinalProductIndication()
  ): MedicinalProductIndication {
    const newInstance: MedicinalProductIndication = DomainResource.parse(json, providedInstance);
  
    if (json.subject) {
      newInstance.subject = json.subject.map((x) => Reference.parse(x));
    }
    if (json.diseaseSymptomProcedure) {
      newInstance.diseaseSymptomProcedure = CodeableConcept.parse(json.diseaseSymptomProcedure);
    }
    if (json.diseaseStatus) {
      newInstance.diseaseStatus = CodeableConcept.parse(json.diseaseStatus);
    }
    if (json.comorbidity) {
      newInstance.comorbidity = json.comorbidity.map((x) => CodeableConcept.parse(x));
    }
    if (json.intendedEffect) {
      newInstance.intendedEffect = CodeableConcept.parse(json.intendedEffect);
    }
    if (json.duration) {
      newInstance.duration = Quantity.parse(json.duration);
    }
    if (json.otherTherapy) {
      newInstance.otherTherapy = json.otherTherapy.map((x) => MedicinalProductIndicationOtherTherapy.parse(x));
    }
    if (json.undesirableEffect) {
      newInstance.undesirableEffect = json.undesirableEffect.map((x) => Reference.parse(x));
    }
    if (json.population) {
      newInstance.population = json.population.map((x) => Population.parse(x));
    }
    return newInstance;
  }

  public static isMedicinalProductIndication(input?: unknown): input is MedicinalProductIndication {
    const castInput = input as MedicinalProductIndication;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductIndication";
  }

  public toJSON(): IMedicinalProductIndication {
    const result: IMedicinalProductIndication = super.toJSON();

    if (this.subject) {
      result.subject = this.subject.map((x) => x.toJSON());
    }

    if (this.diseaseSymptomProcedure) {
      result.diseaseSymptomProcedure = this.diseaseSymptomProcedure.toJSON();
    }

    if (this.diseaseStatus) {
      result.diseaseStatus = this.diseaseStatus.toJSON();
    }

    if (this.comorbidity) {
      result.comorbidity = this.comorbidity.map((x) => x.toJSON());
    }

    if (this.intendedEffect) {
      result.intendedEffect = this.intendedEffect.toJSON();
    }

    if (this.duration) {
      result.duration = this.duration.toJSON();
    }

    if (this.otherTherapy) {
      result.otherTherapy = this.otherTherapy.map((x) => x.toJSON());
    }

    if (this.undesirableEffect) {
      result.undesirableEffect = this.undesirableEffect.map((x) => x.toJSON());
    }

    if (this.population) {
      result.population = this.population.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MedicinalProductIndication";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
