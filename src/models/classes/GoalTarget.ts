/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Duration,
  Extension,
  IGoalTarget,
  PrimitiveBoolean,
  PrimitiveDate,
  PrimitiveInteger,
  PrimitiveString,
  Quantity,
  Range,
  Ratio,
} from "../internal";

export class GoalTarget extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Goal.Target";

  public measure?: CodeableConcept;

  public detail?: Quantity | Range | CodeableConcept | PrimitiveString | PrimitiveBoolean | PrimitiveInteger | Ratio;

  public due?: PrimitiveDate | Duration;

  public static parse(
    json: IGoalTarget,
    providedInstance: GoalTarget = new GoalTarget()
  ): GoalTarget {
    const newInstance: GoalTarget = BackboneElement.parse(json, providedInstance);
  
    if (json.measure) {
      newInstance.measure = CodeableConcept.parse(json.measure);
    }
    if (json.detailQuantity) {
      newInstance.detail = Quantity.parse(json.detailQuantity);
    }
    if (json.detailRange) {
      newInstance.detail = Range.parse(json.detailRange);
    }
    if (json.detailCodeableConcept) {
      newInstance.detail = CodeableConcept.parse(json.detailCodeableConcept);
    }
    if (json.detailString) {
      newInstance.detail = PrimitiveString.parsePrimitive(json.detailString, json._detailString);
    }
    if (json.detailBoolean) {
      newInstance.detail = PrimitiveBoolean.parsePrimitive(json.detailBoolean, json._detailBoolean);
    }
    if (json.detailInteger) {
      newInstance.detail = PrimitiveInteger.parsePrimitive(json.detailInteger, json._detailInteger);
    }
    if (json.detailRatio) {
      newInstance.detail = Ratio.parse(json.detailRatio);
    }
    if (json.dueDate) {
      newInstance.due = PrimitiveDate.parsePrimitive(json.dueDate, json._dueDate);
    }
    if (json.dueDuration) {
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
  
  public getTypeName(): string {
    return "GoalTarget";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
