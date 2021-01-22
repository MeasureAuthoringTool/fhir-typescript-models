/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Annotation,
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
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
  FhirType
} from "../internal";

@FhirType("Task", "DomainResource")
export class Task extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Task";

  static readonly primaryCodePath: string | null = "code";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("PrimitiveCanonical")
  public instantiatesCanonical?: PrimitiveCanonical;

  @FhirField("PrimitiveUri")
  public instantiatesUri?: PrimitiveUri;

  @FhirList("Reference")
  public basedOn?: Array<Reference>;

  @FhirField("Identifier")
  public groupIdentifier?: Identifier;

  @FhirList("Reference")
  public partOf?: Array<Reference>;

  @FhirField("TaskStatus")
  public status?: TaskStatus;

  @FhirField("CodeableConcept")
  public statusReason?: CodeableConcept;

  @FhirField("CodeableConcept")
  public businessStatus?: CodeableConcept;

  @FhirField("TaskIntent")
  public intent?: TaskIntent;

  @FhirField("TaskPriority")
  public priority?: TaskPriority;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirField("Reference")
  public focus?: Reference;

  @FhirField("Reference")
  public for?: Reference;

  @FhirField("Reference")
  public encounter?: Reference;

  @FhirField("Period")
  public executionPeriod?: Period;

  @FhirField("PrimitiveDateTime")
  public authoredOn?: PrimitiveDateTime;

  @FhirField("PrimitiveDateTime")
  public lastModified?: PrimitiveDateTime;

  @FhirField("Reference")
  public requester?: Reference;

  @FhirList("CodeableConcept")
  public performerType?: Array<CodeableConcept>;

  @FhirField("Reference")
  public owner?: Reference;

  @FhirField("Reference")
  public location?: Reference;

  @FhirField("CodeableConcept")
  public reasonCode?: CodeableConcept;

  @FhirField("Reference")
  public reasonReference?: Reference;

  @FhirList("Reference")
  public insurance?: Array<Reference>;

  @FhirList("Annotation")
  public note?: Array<Annotation>;

  @FhirList("Reference")
  public relevantHistory?: Array<Reference>;

  @FhirField("TaskRestriction")
  public restriction?: TaskRestriction;

  @FhirList("TaskInput")
  public input?: Array<TaskInput>;

  @FhirList("TaskOutput")
  public output?: Array<TaskOutput>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.code;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: ITask,
    providedInstance: Task = new Task()
  ): Task {
    const newInstance: Task = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.instantiatesCanonical !== undefined) {
      newInstance.instantiatesCanonical = PrimitiveCanonical.parsePrimitive(json.instantiatesCanonical, json._instantiatesCanonical);
    }
    if (json.instantiatesUri !== undefined) {
      newInstance.instantiatesUri = PrimitiveUri.parsePrimitive(json.instantiatesUri, json._instantiatesUri);
    }
    if (json.basedOn !== undefined) {
      newInstance.basedOn = json.basedOn.map((x) => Reference.parse(x));
    }
    if (json.groupIdentifier !== undefined) {
      newInstance.groupIdentifier = Identifier.parse(json.groupIdentifier);
    }
    if (json.partOf !== undefined) {
      newInstance.partOf = json.partOf.map((x) => Reference.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = TaskStatus.parsePrimitive(json.status, json._status);
    }
    if (json.statusReason !== undefined) {
      newInstance.statusReason = CodeableConcept.parse(json.statusReason);
    }
    if (json.businessStatus !== undefined) {
      newInstance.businessStatus = CodeableConcept.parse(json.businessStatus);
    }
    if (json.intent !== undefined) {
      newInstance.intent = TaskIntent.parsePrimitive(json.intent, json._intent);
    }
    if (json.priority !== undefined) {
      newInstance.priority = TaskPriority.parsePrimitive(json.priority, json._priority);
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.focus !== undefined) {
      newInstance.focus = Reference.parse(json.focus);
    }
    if (json.for !== undefined) {
      newInstance.for = Reference.parse(json.for);
    }
    if (json.encounter !== undefined) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.executionPeriod !== undefined) {
      newInstance.executionPeriod = Period.parse(json.executionPeriod);
    }
    if (json.authoredOn !== undefined) {
      newInstance.authoredOn = PrimitiveDateTime.parsePrimitive(json.authoredOn, json._authoredOn);
    }
    if (json.lastModified !== undefined) {
      newInstance.lastModified = PrimitiveDateTime.parsePrimitive(json.lastModified, json._lastModified);
    }
    if (json.requester !== undefined) {
      newInstance.requester = Reference.parse(json.requester);
    }
    if (json.performerType !== undefined) {
      newInstance.performerType = json.performerType.map((x) => CodeableConcept.parse(x));
    }
    if (json.owner !== undefined) {
      newInstance.owner = Reference.parse(json.owner);
    }
    if (json.location !== undefined) {
      newInstance.location = Reference.parse(json.location);
    }
    if (json.reasonCode !== undefined) {
      newInstance.reasonCode = CodeableConcept.parse(json.reasonCode);
    }
    if (json.reasonReference !== undefined) {
      newInstance.reasonReference = Reference.parse(json.reasonReference);
    }
    if (json.insurance !== undefined) {
      newInstance.insurance = json.insurance.map((x) => Reference.parse(x));
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.relevantHistory !== undefined) {
      newInstance.relevantHistory = json.relevantHistory.map((x) => Reference.parse(x));
    }
    if (json.restriction !== undefined) {
      newInstance.restriction = TaskRestriction.parse(json.restriction);
    }
    if (json.input !== undefined) {
      newInstance.input = json.input.map((x) => TaskInput.parse(x));
    }
    if (json.output !== undefined) {
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

  public clone(): Task {
    return Task.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Task";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
