/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Annotation,
  CodeableConcept,
  DomainResource,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  GoalLifecycleStatus,
  GoalTarget,
  Identifier,
  IGoal,
  PrimitiveDate,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("Goal", "DomainResource")
export class Goal extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Goal";

  static readonly primaryCodePath: string | null = "category";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("GoalLifecycleStatus")
  public lifecycleStatus?: GoalLifecycleStatus;

  @FhirField("CodeableConcept")
  public achievementStatus?: CodeableConcept;

  @FhirList("CodeableConcept")
  public category?: Array<CodeableConcept>;

  @FhirField("CodeableConcept")
  public priority?: CodeableConcept;

  @FhirField("CodeableConcept")
  public description?: CodeableConcept;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirChoice("PrimitiveDate", "CodeableConcept")
  public start?: PrimitiveDate | CodeableConcept;

  @FhirList("GoalTarget")
  public target?: Array<GoalTarget>;

  @FhirField("PrimitiveDate")
  public statusDate?: PrimitiveDate;

  @FhirField("PrimitiveString")
  public statusReason?: PrimitiveString;

  @FhirField("Reference")
  public expressedBy?: Reference;

  @FhirList("Reference")
  public addresses?: Array<Reference>;

  @FhirList("Annotation")
  public note?: Array<Annotation>;

  @FhirList("CodeableConcept")
  public outcomeCode?: Array<CodeableConcept>;

  @FhirList("Reference")
  public outcomeReference?: Array<Reference>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.category?.[0];
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.category = primaryCode ? [primaryCode] : [];
  }

  public static parse(
    json: IGoal,
    providedInstance: Goal = new Goal()
  ): Goal {
    const newInstance: Goal = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.lifecycleStatus !== undefined) {
      newInstance.lifecycleStatus = GoalLifecycleStatus.parsePrimitive(json.lifecycleStatus, json._lifecycleStatus);
    }
    if (json.achievementStatus !== undefined) {
      newInstance.achievementStatus = CodeableConcept.parse(json.achievementStatus);
    }
    if (json.category !== undefined) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.priority !== undefined) {
      newInstance.priority = CodeableConcept.parse(json.priority);
    }
    if (json.description !== undefined) {
      newInstance.description = CodeableConcept.parse(json.description);
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.startDate !== undefined) {
      newInstance.start = PrimitiveDate.parsePrimitive(json.startDate, json._startDate);
    }
    if (json.startCodeableConcept !== undefined) {
      newInstance.start = CodeableConcept.parse(json.startCodeableConcept);
    }
    if (json.target !== undefined) {
      newInstance.target = json.target.map((x) => GoalTarget.parse(x));
    }
    if (json.statusDate !== undefined) {
      newInstance.statusDate = PrimitiveDate.parsePrimitive(json.statusDate, json._statusDate);
    }
    if (json.statusReason !== undefined) {
      newInstance.statusReason = PrimitiveString.parsePrimitive(json.statusReason, json._statusReason);
    }
    if (json.expressedBy !== undefined) {
      newInstance.expressedBy = Reference.parse(json.expressedBy);
    }
    if (json.addresses !== undefined) {
      newInstance.addresses = json.addresses.map((x) => Reference.parse(x));
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.outcomeCode !== undefined) {
      newInstance.outcomeCode = json.outcomeCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.outcomeReference !== undefined) {
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

  public clone(): Goal {
    return Goal.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Goal";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
