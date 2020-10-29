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
  FieldMetadata
} from "../internal";

export class AdverseEvent extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AdverseEvent";
  
  static readonly primaryCodePath: string | null = "event";

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: false
    }, {
      fieldName: "actuality",
      fieldType: [AdverseEventActuality],
      isArray: false
    }, {
      fieldName: "category",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "event",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "subject",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "encounter",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "date",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "detected",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "recordedDate",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "resultingCondition",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "location",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "seriousness",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "severity",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "outcome",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "recorder",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "contributor",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "suspectEntity",
      fieldType: [AdverseEventSuspectEntity],
      isArray: true
    }, {
      fieldName: "subjectMedicalHistory",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "referenceDocument",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "study",
      fieldType: [Reference],
      isArray: true
    }];
  }

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

  get primaryCode(): CodeableConcept | undefined {
    return this?.event;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.event = primaryCode;
  }

  public static parse(
    json: IAdverseEvent,
    providedInstance: AdverseEvent = new AdverseEvent()
  ): AdverseEvent {
    const newInstance: AdverseEvent = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.actuality !== undefined) {
      newInstance.actuality = AdverseEventActuality.parsePrimitive(json.actuality, json._actuality);
    }
    if (json.category !== undefined) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.event !== undefined) {
      newInstance.event = CodeableConcept.parse(json.event);
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.encounter !== undefined) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.date !== undefined) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.detected !== undefined) {
      newInstance.detected = PrimitiveDateTime.parsePrimitive(json.detected, json._detected);
    }
    if (json.recordedDate !== undefined) {
      newInstance.recordedDate = PrimitiveDateTime.parsePrimitive(json.recordedDate, json._recordedDate);
    }
    if (json.resultingCondition !== undefined) {
      newInstance.resultingCondition = json.resultingCondition.map((x) => Reference.parse(x));
    }
    if (json.location !== undefined) {
      newInstance.location = Reference.parse(json.location);
    }
    if (json.seriousness !== undefined) {
      newInstance.seriousness = CodeableConcept.parse(json.seriousness);
    }
    if (json.severity !== undefined) {
      newInstance.severity = CodeableConcept.parse(json.severity);
    }
    if (json.outcome !== undefined) {
      newInstance.outcome = CodeableConcept.parse(json.outcome);
    }
    if (json.recorder !== undefined) {
      newInstance.recorder = Reference.parse(json.recorder);
    }
    if (json.contributor !== undefined) {
      newInstance.contributor = json.contributor.map((x) => Reference.parse(x));
    }
    if (json.suspectEntity !== undefined) {
      newInstance.suspectEntity = json.suspectEntity.map((x) => AdverseEventSuspectEntity.parse(x));
    }
    if (json.subjectMedicalHistory !== undefined) {
      newInstance.subjectMedicalHistory = json.subjectMedicalHistory.map((x) => Reference.parse(x));
    }
    if (json.referenceDocument !== undefined) {
      newInstance.referenceDocument = json.referenceDocument.map((x) => Reference.parse(x));
    }
    if (json.study !== undefined) {
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

  public clone(): AdverseEvent {
    return AdverseEvent.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "AdverseEvent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
