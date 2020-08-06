/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  AuditEventAction,
  AuditEventAgent,
  AuditEventEntity,
  AuditEventOutcome,
  AuditEventSource,
  CodeableConcept,
  Coding,
  DomainResource,
  Extension,
  IAuditEvent,
  Period,
  PrimitiveInstant,
  PrimitiveString,
} from "../internal";

export class AuditEvent extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AuditEvent";

  public type?: Coding;

  public subtype?: Array<Coding>;

  public action?: AuditEventAction;

  public period?: Period;

  public recorded?: PrimitiveInstant;

  public outcome?: AuditEventOutcome;

  public outcomeDesc?: PrimitiveString;

  public purposeOfEvent?: Array<CodeableConcept>;

  public agent?: Array<AuditEventAgent>;

  public source?: AuditEventSource;

  public entity?: Array<AuditEventEntity>;

  public static parse(
    json: IAuditEvent,
    providedInstance: AuditEvent = new AuditEvent()
  ): AuditEvent {
    const newInstance: AuditEvent = DomainResource.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = Coding.parse(json.type);
    }
    if (json.subtype) {
      newInstance.subtype = json.subtype.map((x) => Coding.parse(x));
    }
    if (json.action) {
      newInstance.action = AuditEventAction.parsePrimitive(json.action, json._action);
    }
    if (json.period) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.recorded) {
      newInstance.recorded = PrimitiveInstant.parsePrimitive(json.recorded, json._recorded);
    }
    if (json.outcome) {
      newInstance.outcome = AuditEventOutcome.parsePrimitive(json.outcome, json._outcome);
    }
    if (json.outcomeDesc) {
      newInstance.outcomeDesc = PrimitiveString.parsePrimitive(json.outcomeDesc, json._outcomeDesc);
    }
    if (json.purposeOfEvent) {
      newInstance.purposeOfEvent = json.purposeOfEvent.map((x) => CodeableConcept.parse(x));
    }
    if (json.agent) {
      newInstance.agent = json.agent.map((x) => AuditEventAgent.parse(x));
    }
    if (json.source) {
      newInstance.source = AuditEventSource.parse(json.source);
    }
    if (json.entity) {
      newInstance.entity = json.entity.map((x) => AuditEventEntity.parse(x));
    }
    return newInstance;
  }

  public static isAuditEvent(input?: unknown): input is AuditEvent {
    const castInput = input as AuditEvent;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AuditEvent";
  }

  public toJSON(): IAuditEvent {
    const result: IAuditEvent = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.subtype) {
      result.subtype = this.subtype.map((x) => x.toJSON());
    }

    if (this.action) {
      result.action = this.action.value;
      result._action = Extension.serializePrimitiveExtension(this.action);
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.recorded) {
      result.recorded = this.recorded.value;
      result._recorded = Extension.serializePrimitiveExtension(this.recorded);
    }

    if (this.outcome) {
      result.outcome = this.outcome.value;
      result._outcome = Extension.serializePrimitiveExtension(this.outcome);
    }

    if (this.outcomeDesc) {
      result.outcomeDesc = this.outcomeDesc.value;
      result._outcomeDesc = Extension.serializePrimitiveExtension(this.outcomeDesc);
    }

    if (this.purposeOfEvent) {
      result.purposeOfEvent = this.purposeOfEvent.map((x) => x.toJSON());
    }

    if (this.agent) {
      result.agent = this.agent.map((x) => x.toJSON());
    }

    if (this.source) {
      result.source = this.source.toJSON();
    }

    if (this.entity) {
      result.entity = this.entity.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "AuditEvent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
