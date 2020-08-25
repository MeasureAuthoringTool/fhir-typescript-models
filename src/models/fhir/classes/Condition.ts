/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Age,
  Annotation,
  CodeableConcept,
  ConditionEvidence,
  ConditionStage,
  DomainResource,
  Extension,
  ICondition,
  Identifier,
  Period,
  PrimitiveDateTime,
  PrimitiveString,
  Range,
  Reference,
} from "../internal";

export class Condition extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Condition";

  public identifier?: Array<Identifier>;

  public clinicalStatus?: CodeableConcept;

  public verificationStatus?: CodeableConcept;

  public category?: Array<CodeableConcept>;

  public severity?: CodeableConcept;

  public code?: CodeableConcept;

  public bodySite?: Array<CodeableConcept>;

  public subject?: Reference;

  public encounter?: Reference;

  public onset?: PrimitiveDateTime | Age | Period | Range | PrimitiveString;

  public abatement?: PrimitiveDateTime | Age | Period | Range | PrimitiveString;

  public recordedDate?: PrimitiveDateTime;

  public recorder?: Reference;

  public asserter?: Reference;

  public stage?: Array<ConditionStage>;

  public evidence?: Array<ConditionEvidence>;

  public note?: Array<Annotation>;

  public static parse(
    json: ICondition,
    providedInstance: Condition = new Condition()
  ): Condition {
    const newInstance: Condition = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.clinicalStatus) {
      newInstance.clinicalStatus = CodeableConcept.parse(json.clinicalStatus);
    }
    if (json.verificationStatus) {
      newInstance.verificationStatus = CodeableConcept.parse(json.verificationStatus);
    }
    if (json.category) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.severity) {
      newInstance.severity = CodeableConcept.parse(json.severity);
    }
    if (json.code) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.bodySite) {
      newInstance.bodySite = json.bodySite.map((x) => CodeableConcept.parse(x));
    }
    if (json.subject) {
      newInstance.subject = Reference.parse(json.subject);
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
    if (json.abatementDateTime) {
      newInstance.abatement = PrimitiveDateTime.parsePrimitive(json.abatementDateTime, json._abatementDateTime);
    }
    if (json.abatementAge) {
      newInstance.abatement = Age.parse(json.abatementAge);
    }
    if (json.abatementPeriod) {
      newInstance.abatement = Period.parse(json.abatementPeriod);
    }
    if (json.abatementRange) {
      newInstance.abatement = Range.parse(json.abatementRange);
    }
    if (json.abatementString) {
      newInstance.abatement = PrimitiveString.parsePrimitive(json.abatementString, json._abatementString);
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
    if (json.stage) {
      newInstance.stage = json.stage.map((x) => ConditionStage.parse(x));
    }
    if (json.evidence) {
      newInstance.evidence = json.evidence.map((x) => ConditionEvidence.parse(x));
    }
    if (json.note) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    return newInstance;
  }

  public static isCondition(input?: unknown): input is Condition {
    const castInput = input as Condition;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Condition";
  }

  public toJSON(): ICondition {
    const result: ICondition = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.clinicalStatus) {
      result.clinicalStatus = this.clinicalStatus.toJSON();
    }

    if (this.verificationStatus) {
      result.verificationStatus = this.verificationStatus.toJSON();
    }

    if (this.category) {
      result.category = this.category.map((x) => x.toJSON());
    }

    if (this.severity) {
      result.severity = this.severity.toJSON();
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.bodySite) {
      result.bodySite = this.bodySite.map((x) => x.toJSON());
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
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

    if (this.abatement && PrimitiveDateTime.isPrimitiveDateTime(this.abatement)) {
      result.abatementDateTime = this.abatement.value;
      result._abatementDateTime = Extension.serializePrimitiveExtension(this.abatement);
    }

    if (this.abatement && Age.isAge(this.abatement)) {
      result.abatementAge = this.abatement.toJSON();
    }

    if (this.abatement && Period.isPeriod(this.abatement)) {
      result.abatementPeriod = this.abatement.toJSON();
    }

    if (this.abatement && Range.isRange(this.abatement)) {
      result.abatementRange = this.abatement.toJSON();
    }

    if (this.abatement && PrimitiveString.isPrimitiveString(this.abatement)) {
      result.abatementString = this.abatement.value;
      result._abatementString = Extension.serializePrimitiveExtension(this.abatement);
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

    if (this.stage) {
      result.stage = this.stage.map((x) => x.toJSON());
    }

    if (this.evidence) {
      result.evidence = this.evidence.map((x) => x.toJSON());
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "Condition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
