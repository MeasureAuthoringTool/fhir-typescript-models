/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  FhirField,
  FhirList,
  IMedicinalProductIndication,
  MedicinalProductIndicationOtherTherapy,
  Population,
  Quantity,
  Reference,
  FhirType
} from "../internal";

@FhirType("MedicinalProductIndication", "DomainResource")
export class MedicinalProductIndication extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductIndication";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Reference")
  public subject?: Array<Reference>;

  @FhirField("CodeableConcept")
  public diseaseSymptomProcedure?: CodeableConcept;

  @FhirField("CodeableConcept")
  public diseaseStatus?: CodeableConcept;

  @FhirList("CodeableConcept")
  public comorbidity?: Array<CodeableConcept>;

  @FhirField("CodeableConcept")
  public intendedEffect?: CodeableConcept;

  @FhirField("Quantity")
  public duration?: Quantity;

  @FhirList("MedicinalProductIndicationOtherTherapy")
  public otherTherapy?: Array<MedicinalProductIndicationOtherTherapy>;

  @FhirList("Reference")
  public undesirableEffect?: Array<Reference>;

  @FhirList("Population")
  public population?: Array<Population>;

  public static parse(
    json: IMedicinalProductIndication,
    providedInstance: MedicinalProductIndication = new MedicinalProductIndication()
  ): MedicinalProductIndication {
    const newInstance: MedicinalProductIndication = DomainResource.parse(json, providedInstance);
  
    if (json.subject !== undefined) {
      newInstance.subject = json.subject.map((x) => Reference.parse(x));
    }
    if (json.diseaseSymptomProcedure !== undefined) {
      newInstance.diseaseSymptomProcedure = CodeableConcept.parse(json.diseaseSymptomProcedure);
    }
    if (json.diseaseStatus !== undefined) {
      newInstance.diseaseStatus = CodeableConcept.parse(json.diseaseStatus);
    }
    if (json.comorbidity !== undefined) {
      newInstance.comorbidity = json.comorbidity.map((x) => CodeableConcept.parse(x));
    }
    if (json.intendedEffect !== undefined) {
      newInstance.intendedEffect = CodeableConcept.parse(json.intendedEffect);
    }
    if (json.duration !== undefined) {
      newInstance.duration = Quantity.parse(json.duration);
    }
    if (json.otherTherapy !== undefined) {
      newInstance.otherTherapy = json.otherTherapy.map((x) => MedicinalProductIndicationOtherTherapy.parse(x));
    }
    if (json.undesirableEffect !== undefined) {
      newInstance.undesirableEffect = json.undesirableEffect.map((x) => Reference.parse(x));
    }
    if (json.population !== undefined) {
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

  public clone(): MedicinalProductIndication {
    return MedicinalProductIndication.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductIndication";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
