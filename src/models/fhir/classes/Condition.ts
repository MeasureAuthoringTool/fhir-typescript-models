/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Age,
  Annotation,
  CodeableConcept,
  ConditionEvidence,
  ConditionStage,
  DomainResource,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  ICondition,
  Identifier,
  Period,
  PrimitiveDateTime,
  PrimitiveString,
  Range,
  Reference,
  FhirType
} from "../internal";

@FhirType("Condition", "DomainResource")
export class Condition extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Condition";

  static readonly primaryCodePath: string | null = "code";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("CodeableConcept")
  public clinicalStatus?: CodeableConcept;

  @FhirField("CodeableConcept")
  public verificationStatus?: CodeableConcept;

  @FhirList("CodeableConcept")
  public category?: Array<CodeableConcept>;

  @FhirField("CodeableConcept")
  public severity?: CodeableConcept;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirList("CodeableConcept")
  public bodySite?: Array<CodeableConcept>;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirField("Reference")
  public encounter?: Reference;

  @FhirChoice("PrimitiveDateTime", "Age", "Period", "Range", "PrimitiveString")
  public onset?: PrimitiveDateTime | Age | Period | Range | PrimitiveString;

  @FhirChoice("PrimitiveDateTime", "Age", "Period", "Range", "PrimitiveString")
  public abatement?: PrimitiveDateTime | Age | Period | Range | PrimitiveString;

  @FhirField("PrimitiveDateTime")
  public recordedDate?: PrimitiveDateTime;

  @FhirField("Reference")
  public recorder?: Reference;

  @FhirField("Reference")
  public asserter?: Reference;

  @FhirList("ConditionStage")
  public stage?: Array<ConditionStage>;

  @FhirList("ConditionEvidence")
  public evidence?: Array<ConditionEvidence>;

  @FhirList("Annotation")
  public note?: Array<Annotation>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.code;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: ICondition,
    providedInstance: Condition = new Condition()
  ): Condition {
    const newInstance: Condition = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.clinicalStatus !== undefined) {
      newInstance.clinicalStatus = CodeableConcept.parse(json.clinicalStatus);
    }
    if (json.verificationStatus !== undefined) {
      newInstance.verificationStatus = CodeableConcept.parse(json.verificationStatus);
    }
    if (json.category !== undefined) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.severity !== undefined) {
      newInstance.severity = CodeableConcept.parse(json.severity);
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.bodySite !== undefined) {
      newInstance.bodySite = json.bodySite.map((x) => CodeableConcept.parse(x));
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.encounter !== undefined) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.onsetDateTime !== undefined) {
      newInstance.onset = PrimitiveDateTime.parsePrimitive(json.onsetDateTime, json._onsetDateTime);
    }
    if (json.onsetAge !== undefined) {
      newInstance.onset = Age.parse(json.onsetAge);
    }
    if (json.onsetPeriod !== undefined) {
      newInstance.onset = Period.parse(json.onsetPeriod);
    }
    if (json.onsetRange !== undefined) {
      newInstance.onset = Range.parse(json.onsetRange);
    }
    if (json.onsetString !== undefined) {
      newInstance.onset = PrimitiveString.parsePrimitive(json.onsetString, json._onsetString);
    }
    if (json.abatementDateTime !== undefined) {
      newInstance.abatement = PrimitiveDateTime.parsePrimitive(json.abatementDateTime, json._abatementDateTime);
    }
    if (json.abatementAge !== undefined) {
      newInstance.abatement = Age.parse(json.abatementAge);
    }
    if (json.abatementPeriod !== undefined) {
      newInstance.abatement = Period.parse(json.abatementPeriod);
    }
    if (json.abatementRange !== undefined) {
      newInstance.abatement = Range.parse(json.abatementRange);
    }
    if (json.abatementString !== undefined) {
      newInstance.abatement = PrimitiveString.parsePrimitive(json.abatementString, json._abatementString);
    }
    if (json.recordedDate !== undefined) {
      newInstance.recordedDate = PrimitiveDateTime.parsePrimitive(json.recordedDate, json._recordedDate);
    }
    if (json.recorder !== undefined) {
      newInstance.recorder = Reference.parse(json.recorder);
    }
    if (json.asserter !== undefined) {
      newInstance.asserter = Reference.parse(json.asserter);
    }
    if (json.stage !== undefined) {
      newInstance.stage = json.stage.map((x) => ConditionStage.parse(x));
    }
    if (json.evidence !== undefined) {
      newInstance.evidence = json.evidence.map((x) => ConditionEvidence.parse(x));
    }
    if (json.note !== undefined) {
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

  public clone(): Condition {
    return Condition.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Condition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
