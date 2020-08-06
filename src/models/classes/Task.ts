/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  ITask,
  Period,
  PrimitiveCanonical,
  PrimitiveDateTime,
  PrimitiveString,
  PrimitiveUri,
  Reference,
  TaskInput,
  TaskIntent,
  TaskOutput,
  TaskPriority,
  TaskRestriction,
  TaskStatus,
} from "../internal";

export class Task extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Task";

  public identifier?: Array<Identifier>;

  public instantiatesCanonical?: PrimitiveCanonical;

  public instantiatesUri?: PrimitiveUri;

  public basedOn?: Array<Reference>;

  public groupIdentifier?: Identifier;

  public partOf?: Array<Reference>;

  public status?: TaskStatus;

  public statusReason?: CodeableConcept;

  public businessStatus?: CodeableConcept;

  public intent?: TaskIntent;

  public priority?: TaskPriority;

  public code?: CodeableConcept;

  public description?: PrimitiveString;

  public focus?: Reference;

  public for?: Reference;

  public encounter?: Reference;

  public executionPeriod?: Period;

  public authoredOn?: PrimitiveDateTime;

  public lastModified?: PrimitiveDateTime;

  public requester?: Reference;

  public performerType?: Array<CodeableConcept>;

  public owner?: Reference;

  public location?: Reference;

  public reasonCode?: CodeableConcept;

  public reasonReference?: Reference;

  public insurance?: Array<Reference>;

  public note?: Array<Annotation>;

  public relevantHistory?: Array<Reference>;

  public restriction?: TaskRestriction;

  public input?: Array<TaskInput>;

  public output?: Array<TaskOutput>;

  public static parse(
    json: ITask,
    providedInstance: Task = new Task()
  ): Task {
    const newInstance: Task = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.instantiatesCanonical) {
      newInstance.instantiatesCanonical = PrimitiveCanonical.parsePrimitive(json.instantiatesCanonical, json._instantiatesCanonical);
    }
    if (json.instantiatesUri) {
      newInstance.instantiatesUri = PrimitiveUri.parsePrimitive(json.instantiatesUri, json._instantiatesUri);
    }
    if (json.basedOn) {
      newInstance.basedOn = json.basedOn.map((x) => Reference.parse(x));
    }
    if (json.groupIdentifier) {
      newInstance.groupIdentifier = Identifier.parse(json.groupIdentifier);
    }
    if (json.partOf) {
      newInstance.partOf = json.partOf.map((x) => Reference.parse(x));
    }
    if (json.status) {
      newInstance.status = TaskStatus.parsePrimitive(json.status, json._status);
    }
    if (json.statusReason) {
      newInstance.statusReason = CodeableConcept.parse(json.statusReason);
    }
    if (json.businessStatus) {
      newInstance.businessStatus = CodeableConcept.parse(json.businessStatus);
    }
    if (json.intent) {
      newInstance.intent = TaskIntent.parsePrimitive(json.intent, json._intent);
    }
    if (json.priority) {
      newInstance.priority = TaskPriority.parsePrimitive(json.priority, json._priority);
    }
    if (json.code) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.focus) {
      newInstance.focus = Reference.parse(json.focus);
    }
    if (json.for) {
      newInstance.for = Reference.parse(json.for);
    }
    if (json.encounter) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.executionPeriod) {
      newInstance.executionPeriod = Period.parse(json.executionPeriod);
    }
    if (json.authoredOn) {
      newInstance.authoredOn = PrimitiveDateTime.parsePrimitive(json.authoredOn, json._authoredOn);
    }
    if (json.lastModified) {
      newInstance.lastModified = PrimitiveDateTime.parsePrimitive(json.lastModified, json._lastModified);
    }
    if (json.requester) {
      newInstance.requester = Reference.parse(json.requester);
    }
    if (json.performerType) {
      newInstance.performerType = json.performerType.map((x) => CodeableConcept.parse(x));
    }
    if (json.owner) {
      newInstance.owner = Reference.parse(json.owner);
    }
    if (json.location) {
      newInstance.location = Reference.parse(json.location);
    }
    if (json.reasonCode) {
      newInstance.reasonCode = CodeableConcept.parse(json.reasonCode);
    }
    if (json.reasonReference) {
      newInstance.reasonReference = Reference.parse(json.reasonReference);
    }
    if (json.insurance) {
      newInstance.insurance = json.insurance.map((x) => Reference.parse(x));
    }
    if (json.note) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.relevantHistory) {
      newInstance.relevantHistory = json.relevantHistory.map((x) => Reference.parse(x));
    }
    if (json.restriction) {
      newInstance.restriction = TaskRestriction.parse(json.restriction);
    }
    if (json.input) {
      newInstance.input = json.input.map((x) => TaskInput.parse(x));
    }
    if (json.output) {
      newInstance.output = json.output.map((x) => TaskOutput.parse(x));
    }
    return newInstance;
  }

  public static isTask(input?: unknown): input is Task {
    const castInput = input as Task;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Task";
  }

  public toJSON(): ITask {
    const result: ITask = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.instantiatesCanonical) {
      result.instantiatesCanonical = this.instantiatesCanonical.value;
      result._instantiatesCanonical = Extension.serializePrimitiveExtension(this.instantiatesCanonical);
    }

    if (this.instantiatesUri) {
      result.instantiatesUri = this.instantiatesUri.value;
      result._instantiatesUri = Extension.serializePrimitiveExtension(this.instantiatesUri);
    }

    if (this.basedOn) {
      result.basedOn = this.basedOn.map((x) => x.toJSON());
    }

    if (this.groupIdentifier) {
      result.groupIdentifier = this.groupIdentifier.toJSON();
    }

    if (this.partOf) {
      result.partOf = this.partOf.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.statusReason) {
      result.statusReason = this.statusReason.toJSON();
    }

    if (this.businessStatus) {
      result.businessStatus = this.businessStatus.toJSON();
    }

    if (this.intent) {
      result.intent = this.intent.value;
      result._intent = Extension.serializePrimitiveExtension(this.intent);
    }

    if (this.priority) {
      result.priority = this.priority.value;
      result._priority = Extension.serializePrimitiveExtension(this.priority);
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.focus) {
      result.focus = this.focus.toJSON();
    }

    if (this.for) {
      result.for = this.for.toJSON();
    }

    if (this.encounter) {
      result.encounter = this.encounter.toJSON();
    }

    if (this.executionPeriod) {
      result.executionPeriod = this.executionPeriod.toJSON();
    }

    if (this.authoredOn) {
      result.authoredOn = this.authoredOn.value;
      result._authoredOn = Extension.serializePrimitiveExtension(this.authoredOn);
    }

    if (this.lastModified) {
      result.lastModified = this.lastModified.value;
      result._lastModified = Extension.serializePrimitiveExtension(this.lastModified);
    }

    if (this.requester) {
      result.requester = this.requester.toJSON();
    }

    if (this.performerType) {
      result.performerType = this.performerType.map((x) => x.toJSON());
    }

    if (this.owner) {
      result.owner = this.owner.toJSON();
    }

    if (this.location) {
      result.location = this.location.toJSON();
    }

    if (this.reasonCode) {
      result.reasonCode = this.reasonCode.toJSON();
    }

    if (this.reasonReference) {
      result.reasonReference = this.reasonReference.toJSON();
    }

    if (this.insurance) {
      result.insurance = this.insurance.map((x) => x.toJSON());
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    if (this.relevantHistory) {
      result.relevantHistory = this.relevantHistory.map((x) => x.toJSON());
    }

    if (this.restriction) {
      result.restriction = this.restriction.toJSON();
    }

    if (this.input) {
      result.input = this.input.map((x) => x.toJSON());
    }

    if (this.output) {
      result.output = this.output.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "Task";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
