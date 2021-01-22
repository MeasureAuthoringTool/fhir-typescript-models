/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  FhirList,
  IPlanDefinitionGoal,
  PlanDefinitionGoalTarget,
  RelatedArtifact,
  FhirType
} from "../internal";

@FhirType("PlanDefinitionGoal", "BackboneElement")
export class PlanDefinitionGoal extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PlanDefinition.Goal";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public category?: CodeableConcept;

  @FhirField("CodeableConcept")
  public description?: CodeableConcept;

  @FhirField("CodeableConcept")
  public priority?: CodeableConcept;

  @FhirField("CodeableConcept")
  public start?: CodeableConcept;

  @FhirList("CodeableConcept")
  public addresses?: Array<CodeableConcept>;

  @FhirList("RelatedArtifact")
  public documentation?: Array<RelatedArtifact>;

  @FhirList("PlanDefinitionGoalTarget")
  public target?: Array<PlanDefinitionGoalTarget>;

  public static parse(
    json: IPlanDefinitionGoal,
    providedInstance: PlanDefinitionGoal = new PlanDefinitionGoal()
  ): PlanDefinitionGoal {
    const newInstance: PlanDefinitionGoal = BackboneElement.parse(json, providedInstance);
  
    if (json.category !== undefined) {
      newInstance.category = CodeableConcept.parse(json.category);
    }
    if (json.description !== undefined) {
      newInstance.description = CodeableConcept.parse(json.description);
    }
    if (json.priority !== undefined) {
      newInstance.priority = CodeableConcept.parse(json.priority);
    }
    if (json.start !== undefined) {
      newInstance.start = CodeableConcept.parse(json.start);
    }
    if (json.addresses !== undefined) {
      newInstance.addresses = json.addresses.map((x) => CodeableConcept.parse(x));
    }
    if (json.documentation !== undefined) {
      newInstance.documentation = json.documentation.map((x) => RelatedArtifact.parse(x));
    }
    if (json.target !== undefined) {
      newInstance.target = json.target.map((x) => PlanDefinitionGoalTarget.parse(x));
    }
    return newInstance;
  }

  public static isPlanDefinitionGoal(input?: unknown): input is PlanDefinitionGoal {
    const castInput = input as PlanDefinitionGoal;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PlanDefinitionGoal";
  }

  public toJSON(): IPlanDefinitionGoal {
    const result: IPlanDefinitionGoal = super.toJSON();

    if (this.category) {
      result.category = this.category.toJSON();
    }

    if (this.description) {
      result.description = this.description.toJSON();
    }

    if (this.priority) {
      result.priority = this.priority.toJSON();
    }

    if (this.start) {
      result.start = this.start.toJSON();
    }

    if (this.addresses) {
      result.addresses = this.addresses.map((x) => x.toJSON());
    }

    if (this.documentation) {
      result.documentation = this.documentation.map((x) => x.toJSON());
    }

    if (this.target) {
      result.target = this.target.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): PlanDefinitionGoal {
    return PlanDefinitionGoal.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "PlanDefinitionGoal";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
