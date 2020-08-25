/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Duration,
  IPlanDefinitionGoalTarget,
  Quantity,
  Range,
} from "../internal";

export class PlanDefinitionGoalTarget extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PlanDefinition.Goal.Target";

  public measure?: CodeableConcept;

  public detail?: Quantity | Range | CodeableConcept;

  public due?: Duration;

  public static parse(
    json: IPlanDefinitionGoalTarget,
    providedInstance: PlanDefinitionGoalTarget = new PlanDefinitionGoalTarget()
  ): PlanDefinitionGoalTarget {
    const newInstance: PlanDefinitionGoalTarget = BackboneElement.parse(json, providedInstance);
  
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
    if (json.due) {
      newInstance.due = Duration.parse(json.due);
    }
    return newInstance;
  }

  public static isPlanDefinitionGoalTarget(input?: unknown): input is PlanDefinitionGoalTarget {
    const castInput = input as PlanDefinitionGoalTarget;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PlanDefinitionGoalTarget";
  }

  public toJSON(): IPlanDefinitionGoalTarget {
    const result: IPlanDefinitionGoalTarget = super.toJSON();

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

    if (this.due) {
      result.due = this.due.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "PlanDefinitionGoalTarget";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
