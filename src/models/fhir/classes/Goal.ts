/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  CodeableConcept,
  DomainResource,
  Extension,
  GoalLifecycleStatus,
  GoalTarget,
  Identifier,
  IGoal,
  PrimitiveDate,
  PrimitiveString,
  Reference,
} from "../internal";

export class Goal extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Goal";

  public identifier?: Array<Identifier>;

  public lifecycleStatus?: GoalLifecycleStatus;

  public achievementStatus?: CodeableConcept;

  public category?: Array<CodeableConcept>;

  public priority?: CodeableConcept;

  public description?: CodeableConcept;

  public subject?: Reference;

  public start?: PrimitiveDate | CodeableConcept;

  public target?: Array<GoalTarget>;

  public statusDate?: PrimitiveDate;

  public statusReason?: PrimitiveString;

  public expressedBy?: Reference;

  public addresses?: Array<Reference>;

  public note?: Array<Annotation>;

  public outcomeCode?: Array<CodeableConcept>;

  public outcomeReference?: Array<Reference>;

  public static parse(
    json: IGoal,
    providedInstance: Goal = new Goal()
  ): Goal {
    const newInstance: Goal = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.lifecycleStatus) {
      newInstance.lifecycleStatus = GoalLifecycleStatus.parsePrimitive(json.lifecycleStatus, json._lifecycleStatus);
    }
    if (json.achievementStatus) {
      newInstance.achievementStatus = CodeableConcept.parse(json.achievementStatus);
    }
    if (json.category) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.priority) {
      newInstance.priority = CodeableConcept.parse(json.priority);
    }
    if (json.description) {
      newInstance.description = CodeableConcept.parse(json.description);
    }
    if (json.subject) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.startDate) {
      newInstance.start = PrimitiveDate.parsePrimitive(json.startDate, json._startDate);
    }
    if (json.startCodeableConcept) {
      newInstance.start = CodeableConcept.parse(json.startCodeableConcept);
    }
    if (json.target) {
      newInstance.target = json.target.map((x) => GoalTarget.parse(x));
    }
    if (json.statusDate) {
      newInstance.statusDate = PrimitiveDate.parsePrimitive(json.statusDate, json._statusDate);
    }
    if (json.statusReason) {
      newInstance.statusReason = PrimitiveString.parsePrimitive(json.statusReason, json._statusReason);
    }
    if (json.expressedBy) {
      newInstance.expressedBy = Reference.parse(json.expressedBy);
    }
    if (json.addresses) {
      newInstance.addresses = json.addresses.map((x) => Reference.parse(x));
    }
    if (json.note) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.outcomeCode) {
      newInstance.outcomeCode = json.outcomeCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.outcomeReference) {
      newInstance.outcomeReference = json.outcomeReference.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isGoal(input?: unknown): input is Goal {
    const castInput = input as Goal;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Goal";
  }

  public toJSON(): IGoal {
    const result: IGoal = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.lifecycleStatus) {
      result.lifecycleStatus = this.lifecycleStatus.value;
      result._lifecycleStatus = Extension.serializePrimitiveExtension(this.lifecycleStatus);
    }

    if (this.achievementStatus) {
      result.achievementStatus = this.achievementStatus.toJSON();
    }

    if (this.category) {
      result.category = this.category.map((x) => x.toJSON());
    }

    if (this.priority) {
      result.priority = this.priority.toJSON();
    }

    if (this.description) {
      result.description = this.description.toJSON();
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.start && PrimitiveDate.isPrimitiveDate(this.start)) {
      result.startDate = this.start.value;
      result._startDate = Extension.serializePrimitiveExtension(this.start);
    }

    if (this.start && CodeableConcept.isCodeableConcept(this.start)) {
      result.startCodeableConcept = this.start.toJSON();
    }

    if (this.target) {
      result.target = this.target.map((x) => x.toJSON());
    }

    if (this.statusDate) {
      result.statusDate = this.statusDate.value;
      result._statusDate = Extension.serializePrimitiveExtension(this.statusDate);
    }

    if (this.statusReason) {
      result.statusReason = this.statusReason.value;
      result._statusReason = Extension.serializePrimitiveExtension(this.statusReason);
    }

    if (this.expressedBy) {
      result.expressedBy = this.expressedBy.toJSON();
    }

    if (this.addresses) {
      result.addresses = this.addresses.map((x) => x.toJSON());
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    if (this.outcomeCode) {
      result.outcomeCode = this.outcomeCode.map((x) => x.toJSON());
    }

    if (this.outcomeReference) {
      result.outcomeReference = this.outcomeReference.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "Goal";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
