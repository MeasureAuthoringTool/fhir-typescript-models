/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IResearchStudyObjective,
  PrimitiveString,
} from "../internal";

export class ResearchStudyObjective extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ResearchStudy.Objective";

  public name?: PrimitiveString;

  public type?: CodeableConcept;

  public static parse(
    json: IResearchStudyObjective,
    providedInstance: ResearchStudyObjective = new ResearchStudyObjective()
  ): ResearchStudyObjective {
    const newInstance: ResearchStudyObjective = BackboneElement.parse(json, providedInstance);
  
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    return newInstance;
  }

  public static isResearchStudyObjective(input?: unknown): input is ResearchStudyObjective {
    const castInput = input as ResearchStudyObjective;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ResearchStudyObjective";
  }

  public toJSON(): IResearchStudyObjective {
    const result: IResearchStudyObjective = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ResearchStudyObjective";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
