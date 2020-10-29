/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  IMedicinalProductContraindication,
  MedicinalProductContraindicationOtherTherapy,
  Population,
  Reference,
  FieldMetadata
} from "../internal";

export class MedicinalProductContraindication extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductContraindication";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "subject",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "disease",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "diseaseStatus",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "comorbidity",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "therapeuticIndication",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "otherTherapy",
      fieldType: [MedicinalProductContraindicationOtherTherapy],
      isArray: true
    }, {
      fieldName: "population",
      fieldType: [Population],
      isArray: true
    }];
  }

  public subject?: Array<Reference>;

  public disease?: CodeableConcept;

  public diseaseStatus?: CodeableConcept;

  public comorbidity?: Array<CodeableConcept>;

  public therapeuticIndication?: Array<Reference>;

  public otherTherapy?: Array<MedicinalProductContraindicationOtherTherapy>;

  public population?: Array<Population>;

  public static parse(
    json: IMedicinalProductContraindication,
    providedInstance: MedicinalProductContraindication = new MedicinalProductContraindication()
  ): MedicinalProductContraindication {
    const newInstance: MedicinalProductContraindication = DomainResource.parse(json, providedInstance);
  
    if (json.subject !== undefined) {
      newInstance.subject = json.subject.map((x) => Reference.parse(x));
    }
    if (json.disease !== undefined) {
      newInstance.disease = CodeableConcept.parse(json.disease);
    }
    if (json.diseaseStatus !== undefined) {
      newInstance.diseaseStatus = CodeableConcept.parse(json.diseaseStatus);
    }
    if (json.comorbidity !== undefined) {
      newInstance.comorbidity = json.comorbidity.map((x) => CodeableConcept.parse(x));
    }
    if (json.therapeuticIndication !== undefined) {
      newInstance.therapeuticIndication = json.therapeuticIndication.map((x) => Reference.parse(x));
    }
    if (json.otherTherapy !== undefined) {
      newInstance.otherTherapy = json.otherTherapy.map((x) => MedicinalProductContraindicationOtherTherapy.parse(x));
    }
    if (json.population !== undefined) {
      newInstance.population = json.population.map((x) => Population.parse(x));
    }
    return newInstance;
  }

  public static isMedicinalProductContraindication(input?: unknown): input is MedicinalProductContraindication {
    const castInput = input as MedicinalProductContraindication;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductContraindication";
  }

  public toJSON(): IMedicinalProductContraindication {
    const result: IMedicinalProductContraindication = super.toJSON();

    if (this.subject) {
      result.subject = this.subject.map((x) => x.toJSON());
    }

    if (this.disease) {
      result.disease = this.disease.toJSON();
    }

    if (this.diseaseStatus) {
      result.diseaseStatus = this.diseaseStatus.toJSON();
    }

    if (this.comorbidity) {
      result.comorbidity = this.comorbidity.map((x) => x.toJSON());
    }

    if (this.therapeuticIndication) {
      result.therapeuticIndication = this.therapeuticIndication.map((x) => x.toJSON());
    }

    if (this.otherTherapy) {
      result.otherTherapy = this.otherTherapy.map((x) => x.toJSON());
    }

    if (this.population) {
      result.population = this.population.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MedicinalProductContraindication {
    return MedicinalProductContraindication.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductContraindication";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
