/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Duration,
  Extension,
  FhirChoice,
  FhirField,
  IGoalTarget,
  PrimitiveBoolean,
  PrimitiveDate,
  PrimitiveInteger,
  PrimitiveString,
  Quantity,
  Range,
  Ratio,
  FhirType
} from "../internal";

@FhirType("GoalTarget", "BackboneElement")
export class GoalTarget extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Goal.Target";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public measure?: CodeableConcept;

  @FhirChoice("Quantity", "Range", "CodeableConcept", "PrimitiveString", "PrimitiveBoolean", "PrimitiveInteger", "Ratio")
  public detail?: Quantity | Range | CodeableConcept | PrimitiveString | PrimitiveBoolean | PrimitiveInteger | Ratio;

  @FhirChoice("PrimitiveDate", "Duration")
  public due?: PrimitiveDate | Duration;

  public static parse(
    json: IGoalTarget,
    providedInstance: GoalTarget = new GoalTarget()
  ): GoalTarget {
    const newInstance: GoalTarget = BackboneElement.parse(json, providedInstance);
  
    if (json.measure !== undefined) {
      newInstance.measure = CodeableConcept.parse(json.measure);
    }
    if (json.detailQuantity !== undefined) {
      newInstance.detail = Quantity.parse(json.detailQuantity);
    }
    if (json.detailRange !== undefined) {
      newInstance.detail = Range.parse(json.detailRange);
    }
    if (json.detailCodeableConcept !== undefined) {
      newInstance.detail = CodeableConcept.parse(json.detailCodeableConcept);
    }
    if (json.detailString !== undefined) {
      newInstance.detail = PrimitiveString.parsePrimitive(json.detailString, json._detailString);
    }
    if (json.detailBoolean !== undefined) {
      newInstance.detail = PrimitiveBoolean.parsePrimitive(json.detailBoolean, json._detailBoolean);
    }
    if (json.detailInteger !== undefined) {
      newInstance.detail = PrimitiveInteger.parsePrimitive(json.detailInteger, json._detailInteger);
    }
    if (json.detailRatio !== undefined) {
      newInstance.detail = Ratio.parse(json.detailRatio);
    }
    if (json.dueDate !== undefined) {
      newInstance.due = PrimitiveDate.parsePrimitive(json.dueDate, json._dueDate);
    }
    if (json.dueDuration !== undefined) {
      newInstance.due = Duration.parse(json.dueDuration);
    }
    return newInstance;
  }

  public static isGoalTarget(input?: unknown): input is GoalTarget {
    const castInput = input as GoalTarget;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "GoalTarget";
  }

  public toJSON(): IGoalTarget {
    const result: IGoalTarget = super.toJSON();

    if (this.measure) {
      result.measure = this.measure.toJSON();
    }

    if (this.detail && Quantity.isQuantity(this.detail)) {
      result.detailQuantity = this.detail.toJSON();
    }

    if (this.detail && Range.isRange(this.detail)) {
      result.detailRange = this.detail.toJSON();
    }

    if (this.detail && CodeableConcept.isCodeableConcept(this.detail)) {
      result.detailCodeableConcept = this.detail.toJSON();
    }

    if (this.detail && PrimitiveString.isPrimitiveString(this.detail)) {
      result.detailString = this.detail.value;
      result._detailString = Extension.serializePrimitiveExtension(this.detail);
    }

    if (this.detail && PrimitiveBoolean.isPrimitiveBoolean(this.detail)) {
      result.detailBoolean = this.detail.value;
      result._detailBoolean = Extension.serializePrimitiveExtension(this.detail);
    }

    if (this.detail && PrimitiveInteger.isPrimitiveInteger(this.detail)) {
      result.detailInteger = this.detail.value;
      result._detailInteger = Extension.serializePrimitiveExtension(this.detail);
    }

    if (this.detail && Ratio.isRatio(this.detail)) {
      result.detailRatio = this.detail.toJSON();
    }

    if (this.due && PrimitiveDate.isPrimitiveDate(this.due)) {
      result.dueDate = this.due.value;
      result._dueDate = Extension.serializePrimitiveExtension(this.due);
    }

    if (this.due && Duration.isDuration(this.due)) {
      result.dueDuration = this.due.toJSON();
    }

    return result;
  }

  public clone(): GoalTarget {
    return GoalTarget.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "GoalTarget";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
