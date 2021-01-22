/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Duration,
  FhirChoice,
  FhirField,
  IPlanDefinitionGoalTarget,
  Quantity,
  Range,
  FhirType
} from "../internal";

@FhirType("PlanDefinitionGoalTarget", "BackboneElement")
export class PlanDefinitionGoalTarget extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PlanDefinition.Goal.Target";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public measure?: CodeableConcept;

  @FhirChoice("Quantity", "Range", "CodeableConcept")
  public detail?: Quantity | Range | CodeableConcept;

  @FhirField("Duration")
  public due?: Duration;

  public static parse(
    json: IPlanDefinitionGoalTarget,
    providedInstance: PlanDefinitionGoalTarget = new PlanDefinitionGoalTarget()
  ): PlanDefinitionGoalTarget {
    const newInstance: PlanDefinitionGoalTarget = BackboneElement.parse(json, providedInstance);
  
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
    if (json.due !== undefined) {
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

  public clone(): PlanDefinitionGoalTarget {
    return PlanDefinitionGoalTarget.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "PlanDefinitionGoalTarget";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
