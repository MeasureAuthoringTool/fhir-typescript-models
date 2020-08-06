/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  IRiskAssessment,
  Period,
  PrimitiveDateTime,
  PrimitiveString,
  Reference,
  RiskAssessmentPrediction,
  RiskAssessmentStatus,
} from "../internal";

export class RiskAssessment extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RiskAssessment";

  public identifier?: Array<Identifier>;

  public basedOn?: Reference;

  public parent?: Reference;

  public status?: RiskAssessmentStatus;

  public method?: CodeableConcept;

  public code?: CodeableConcept;

  public subject?: Reference;

  public encounter?: Reference;

  public occurrence?: PrimitiveDateTime | Period;

  public condition?: Reference;

  public performer?: Reference;

  public reasonCode?: Array<CodeableConcept>;

  public reasonReference?: Array<Reference>;

  public basis?: Array<Reference>;

  public prediction?: Array<RiskAssessmentPrediction>;

  public mitigation?: PrimitiveString;

  public note?: Array<Annotation>;

  public static parse(
    json: IRiskAssessment,
    providedInstance: RiskAssessment = new RiskAssessment()
  ): RiskAssessment {
    const newInstance: RiskAssessment = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.basedOn) {
      newInstance.basedOn = Reference.parse(json.basedOn);
    }
    if (json.parent) {
      newInstance.parent = Reference.parse(json.parent);
    }
    if (json.status) {
      newInstance.status = RiskAssessmentStatus.parsePrimitive(json.status, json._status);
    }
    if (json.method) {
      newInstance.method = CodeableConcept.parse(json.method);
    }
    if (json.code) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.subject) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.encounter) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.occurrenceDateTime) {
      newInstance.occurrence = PrimitiveDateTime.parsePrimitive(json.occurrenceDateTime, json._occurrenceDateTime);
    }
    if (json.occurrencePeriod) {
      newInstance.occurrence = Period.parse(json.occurrencePeriod);
    }
    if (json.condition) {
      newInstance.condition = Reference.parse(json.condition);
    }
    if (json.performer) {
      newInstance.performer = Reference.parse(json.performer);
    }
    if (json.reasonCode) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.basis) {
      newInstance.basis = json.basis.map((x) => Reference.parse(x));
    }
    if (json.prediction) {
      newInstance.prediction = json.prediction.map((x) => RiskAssessmentPrediction.parse(x));
    }
    if (json.mitigation) {
      newInstance.mitigation = PrimitiveString.parsePrimitive(json.mitigation, json._mitigation);
    }
    if (json.note) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    return newInstance;
  }

  public static isRiskAssessment(input?: unknown): input is RiskAssessment {
    const castInput = input as RiskAssessment;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "RiskAssessment";
  }

  public toJSON(): IRiskAssessment {
    const result: IRiskAssessment = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.basedOn) {
      result.basedOn = this.basedOn.toJSON();
    }

    if (this.parent) {
      result.parent = this.parent.toJSON();
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.method) {
      result.method = this.method.toJSON();
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.encounter) {
      result.encounter = this.encounter.toJSON();
    }

    if (this.occurrence && PrimitiveDateTime.isPrimitiveDateTime(this.occurrence)) {
      result.occurrenceDateTime = this.occurrence.value;
      result._occurrenceDateTime = Extension.serializePrimitiveExtension(this.occurrence);
    }

    if (this.occurrence && Period.isPeriod(this.occurrence)) {
      result.occurrencePeriod = this.occurrence.toJSON();
    }

    if (this.condition) {
      result.condition = this.condition.toJSON();
    }

    if (this.performer) {
      result.performer = this.performer.toJSON();
    }

    if (this.reasonCode) {
      result.reasonCode = this.reasonCode.map((x) => x.toJSON());
    }

    if (this.reasonReference) {
      result.reasonReference = this.reasonReference.map((x) => x.toJSON());
    }

    if (this.basis) {
      result.basis = this.basis.map((x) => x.toJSON());
    }

    if (this.prediction) {
      result.prediction = this.prediction.map((x) => x.toJSON());
    }

    if (this.mitigation) {
      result.mitigation = this.mitigation.value;
      result._mitigation = Extension.serializePrimitiveExtension(this.mitigation);
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "RiskAssessment";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
