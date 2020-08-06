/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IConditionStage,
  Reference,
} from "../internal";

export class ConditionStage extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Condition.Stage";

  public summary?: CodeableConcept;

  public assessment?: Array<Reference>;

  public type?: CodeableConcept;

  public static parse(
    json: IConditionStage,
    providedInstance: ConditionStage = new ConditionStage()
  ): ConditionStage {
    const newInstance: ConditionStage = BackboneElement.parse(json, providedInstance);
  
    if (json.summary) {
      newInstance.summary = CodeableConcept.parse(json.summary);
    }
    if (json.assessment) {
      newInstance.assessment = json.assessment.map((x) => Reference.parse(x));
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    return newInstance;
  }

  public static isConditionStage(input?: unknown): input is ConditionStage {
    const castInput = input as ConditionStage;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ConditionStage";
  }

  public toJSON(): IConditionStage {
    const result: IConditionStage = super.toJSON();

    if (this.summary) {
      result.summary = this.summary.toJSON();
    }

    if (this.assessment) {
      result.assessment = this.assessment.map((x) => x.toJSON());
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ConditionStage";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
