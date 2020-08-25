/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Age,
  AllergyIntoleranceCategory,
  AllergyIntoleranceCriticality,
  AllergyIntoleranceReaction,
  AllergyIntoleranceType,
  Annotation,
  CodeableConcept,
  DomainResource,
  Extension,
  IAllergyIntolerance,
  Identifier,
  Period,
  PrimitiveDateTime,
  PrimitiveString,
  Range,
  Reference,
} from "../internal";

export class AllergyIntolerance extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AllergyIntolerance";

  public identifier?: Array<Identifier>;

  public clinicalStatus?: CodeableConcept;

  public verificationStatus?: CodeableConcept;

  public type?: AllergyIntoleranceType;

  public category?: Array<AllergyIntoleranceCategory>;

  public criticality?: AllergyIntoleranceCriticality;

  public code?: CodeableConcept;

  public patient?: Reference;

  public encounter?: Reference;

  public onset?: PrimitiveDateTime | Age | Period | Range | PrimitiveString;

  public recordedDate?: PrimitiveDateTime;

  public recorder?: Reference;

  public asserter?: Reference;

  public lastOccurrence?: PrimitiveDateTime;

  public note?: Array<Annotation>;

  public reaction?: Array<AllergyIntoleranceReaction>;

  public static parse(
    json: IAllergyIntolerance,
    providedInstance: AllergyIntolerance = new AllergyIntolerance()
  ): AllergyIntolerance {
    const newInstance: AllergyIntolerance = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.clinicalStatus) {
      newInstance.clinicalStatus = CodeableConcept.parse(json.clinicalStatus);
    }
    if (json.verificationStatus) {
      newInstance.verificationStatus = CodeableConcept.parse(json.verificationStatus);
    }
    if (json.type) {
      newInstance.type = AllergyIntoleranceType.parsePrimitive(json.type, json._type);
    }
    if (json.category) {
      newInstance.category = json.category.map((x, i) => {
        const ext = json._category && json._category[i];
        return AllergyIntoleranceCategory.parsePrimitive(x, ext);
      });
    }
    if (json.criticality) {
      newInstance.criticality = AllergyIntoleranceCriticality.parsePrimitive(json.criticality, json._criticality);
    }
    if (json.code) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.patient) {
      newInstance.patient = Reference.parse(json.patient);
    }
    if (json.encounter) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.onsetDateTime) {
      newInstance.onset = PrimitiveDateTime.parsePrimitive(json.onsetDateTime, json._onsetDateTime);
    }
    if (json.onsetAge) {
      newInstance.onset = Age.parse(json.onsetAge);
    }
    if (json.onsetPeriod) {
      newInstance.onset = Period.parse(json.onsetPeriod);
    }
    if (json.onsetRange) {
      newInstance.onset = Range.parse(json.onsetRange);
    }
    if (json.onsetString) {
      newInstance.onset = PrimitiveString.parsePrimitive(json.onsetString, json._onsetString);
    }
    if (json.recordedDate) {
      newInstance.recordedDate = PrimitiveDateTime.parsePrimitive(json.recordedDate, json._recordedDate);
    }
    if (json.recorder) {
      newInstance.recorder = Reference.parse(json.recorder);
    }
    if (json.asserter) {
      newInstance.asserter = Reference.parse(json.asserter);
    }
    if (json.lastOccurrence) {
      newInstance.lastOccurrence = PrimitiveDateTime.parsePrimitive(json.lastOccurrence, json._lastOccurrence);
    }
    if (json.note) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.reaction) {
      newInstance.reaction = json.reaction.map((x) => AllergyIntoleranceReaction.parse(x));
    }
    return newInstance;
  }

  public static isAllergyIntolerance(input?: unknown): input is AllergyIntolerance {
    const castInput = input as AllergyIntolerance;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AllergyIntolerance";
  }

  public toJSON(): IAllergyIntolerance {
    const result: IAllergyIntolerance = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.clinicalStatus) {
      result.clinicalStatus = this.clinicalStatus.toJSON();
    }

    if (this.verificationStatus) {
      result.verificationStatus = this.verificationStatus.toJSON();
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.category) {
      result.category = this.category.filter(x => !!x).map(x => x.value) as typeof result.category;
      result._category = Extension.serializePrimitiveExtensionArray(this.category);
    }

    if (this.criticality) {
      result.criticality = this.criticality.value;
      result._criticality = Extension.serializePrimitiveExtension(this.criticality);
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.patient) {
      result.patient = this.patient.toJSON();
    }

    if (this.encounter) {
      result.encounter = this.encounter.toJSON();
    }

    if (this.onset && PrimitiveDateTime.isPrimitiveDateTime(this.onset)) {
      result.onsetDateTime = this.onset.value;
      result._onsetDateTime = Extension.serializePrimitiveExtension(this.onset);
    }

    if (this.onset && Age.isAge(this.onset)) {
      result.onsetAge = this.onset.toJSON();
    }

    if (this.onset && Period.isPeriod(this.onset)) {
      result.onsetPeriod = this.onset.toJSON();
    }

    if (this.onset && Range.isRange(this.onset)) {
      result.onsetRange = this.onset.toJSON();
    }

    if (this.onset && PrimitiveString.isPrimitiveString(this.onset)) {
      result.onsetString = this.onset.value;
      result._onsetString = Extension.serializePrimitiveExtension(this.onset);
    }

    if (this.recordedDate) {
      result.recordedDate = this.recordedDate.value;
      result._recordedDate = Extension.serializePrimitiveExtension(this.recordedDate);
    }

    if (this.recorder) {
      result.recorder = this.recorder.toJSON();
    }

    if (this.asserter) {
      result.asserter = this.asserter.toJSON();
    }

    if (this.lastOccurrence) {
      result.lastOccurrence = this.lastOccurrence.value;
      result._lastOccurrence = Extension.serializePrimitiveExtension(this.lastOccurrence);
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    if (this.reaction) {
      result.reaction = this.reaction.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "AllergyIntolerance";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
