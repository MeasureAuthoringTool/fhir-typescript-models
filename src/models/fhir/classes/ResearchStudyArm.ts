/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  IResearchStudyArm,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("ResearchStudyArm", "BackboneElement")
export class ResearchStudyArm extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ResearchStudy.Arm";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  public static parse(
    json: IResearchStudyArm,
    providedInstance: ResearchStudyArm = new ResearchStudyArm()
  ): ResearchStudyArm {
    const newInstance: ResearchStudyArm = BackboneElement.parse(json, providedInstance);
  
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.description !== undefined) {
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

  public clone(): ResearchStudyArm {
    return ResearchStudyArm.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ResearchStudyArm";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
