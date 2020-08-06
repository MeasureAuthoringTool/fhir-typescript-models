/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IResearchStudyArm,
  PrimitiveString,
} from "../internal";

export class ResearchStudyArm extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ResearchStudy.Arm";

  public name?: PrimitiveString;

  public type?: CodeableConcept;

  public description?: PrimitiveString;

  public static parse(
    json: IResearchStudyArm,
    providedInstance: ResearchStudyArm = new ResearchStudyArm()
  ): ResearchStudyArm {
    const newInstance: ResearchStudyArm = BackboneElement.parse(json, providedInstance);
  
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    return newInstance;
  }

  public static isResearchStudyArm(input?: unknown): input is ResearchStudyArm {
    const castInput = input as ResearchStudyArm;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ResearchStudyArm";
  }

  public toJSON(): IResearchStudyArm {
    const result: IResearchStudyArm = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ResearchStudyArm";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
