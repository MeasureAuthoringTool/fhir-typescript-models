/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  AdverseEventActuality,
  AdverseEventSuspectEntity,
  CodeableConcept,
  DomainResource,
  Extension,
  IAdverseEvent,
  Identifier,
  PrimitiveDateTime,
  Reference,
} from "../internal";

export class AdverseEvent extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AdverseEvent";

  public identifier?: Identifier;

  public actuality?: AdverseEventActuality;

  public category?: Array<CodeableConcept>;

  public event?: CodeableConcept;

  public subject?: Reference;

  public encounter?: Reference;

  public date?: PrimitiveDateTime;

  public detected?: PrimitiveDateTime;

  public recordedDate?: PrimitiveDateTime;

  public resultingCondition?: Array<Reference>;

  public location?: Reference;

  public seriousness?: CodeableConcept;

  public severity?: CodeableConcept;

  public outcome?: CodeableConcept;

  public recorder?: Reference;

  public contributor?: Array<Reference>;

  public suspectEntity?: Array<AdverseEventSuspectEntity>;

  public subjectMedicalHistory?: Array<Reference>;

  public referenceDocument?: Array<Reference>;

  public study?: Array<Reference>;

  public static parse(
    json: IAdverseEvent,
    providedInstance: AdverseEvent = new AdverseEvent()
  ): AdverseEvent {
    const newInstance: AdverseEvent = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.actuality) {
      newInstance.actuality = AdverseEventActuality.parsePrimitive(json.actuality, json._actuality);
    }
    if (json.category) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.event) {
      newInstance.event = CodeableConcept.parse(json.event);
    }
    if (json.subject) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.encounter) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.date) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.detected) {
      newInstance.detected = PrimitiveDateTime.parsePrimitive(json.detected, json._detected);
    }
    if (json.recordedDate) {
      newInstance.recordedDate = PrimitiveDateTime.parsePrimitive(json.recordedDate, json._recordedDate);
    }
    if (json.resultingCondition) {
      newInstance.resultingCondition = json.resultingCondition.map((x) => Reference.parse(x));
    }
    if (json.location) {
      newInstance.location = Reference.parse(json.location);
    }
    if (json.seriousness) {
      newInstance.seriousness = CodeableConcept.parse(json.seriousness);
    }
    if (json.severity) {
      newInstance.severity = CodeableConcept.parse(json.severity);
    }
    if (json.outcome) {
      newInstance.outcome = CodeableConcept.parse(json.outcome);
    }
    if (json.recorder) {
      newInstance.recorder = Reference.parse(json.recorder);
    }
    if (json.contributor) {
      newInstance.contributor = json.contributor.map((x) => Reference.parse(x));
    }
    if (json.suspectEntity) {
      newInstance.suspectEntity = json.suspectEntity.map((x) => AdverseEventSuspectEntity.parse(x));
    }
    if (json.subjectMedicalHistory) {
      newInstance.subjectMedicalHistory = json.subjectMedicalHistory.map((x) => Reference.parse(x));
    }
    if (json.referenceDocument) {
      newInstance.referenceDocument = json.referenceDocument.map((x) => Reference.parse(x));
    }
    if (json.study) {
      newInstance.study = json.study.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isAdverseEvent(input?: unknown): input is AdverseEvent {
    const castInput = input as AdverseEvent;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AdverseEvent";
  }

  public toJSON(): IAdverseEvent {
    const result: IAdverseEvent = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    if (this.actuality) {
      result.actuality = this.actuality.value;
      result._actuality = Extension.serializePrimitiveExtension(this.actuality);
    }

    if (this.category) {
      result.category = this.category.map((x) => x.toJSON());
    }

    if (this.event) {
      result.event = this.event.toJSON();
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.encounter) {
      result.encounter = this.encounter.toJSON();
    }

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.detected) {
      result.detected = this.detected.value;
      result._detected = Extension.serializePrimitiveExtension(this.detected);
    }

    if (this.recordedDate) {
      result.recordedDate = this.recordedDate.value;
      result._recordedDate = Extension.serializePrimitiveExtension(this.recordedDate);
    }

    if (this.resultingCondition) {
      result.resultingCondition = this.resultingCondition.map((x) => x.toJSON());
    }

    if (this.location) {
      result.location = this.location.toJSON();
    }

    if (this.seriousness) {
      result.seriousness = this.seriousness.toJSON();
    }

    if (this.severity) {
      result.severity = this.severity.toJSON();
    }

    if (this.outcome) {
      result.outcome = this.outcome.toJSON();
    }

    if (this.recorder) {
      result.recorder = this.recorder.toJSON();
    }

    if (this.contributor) {
      result.contributor = this.contributor.map((x) => x.toJSON());
    }

    if (this.suspectEntity) {
      result.suspectEntity = this.suspectEntity.map((x) => x.toJSON());
    }

    if (this.subjectMedicalHistory) {
      result.subjectMedicalHistory = this.subjectMedicalHistory.map((x) => x.toJSON());
    }

    if (this.referenceDocument) {
      result.referenceDocument = this.referenceDocument.map((x) => x.toJSON());
    }

    if (this.study) {
      result.study = this.study.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "AdverseEvent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
