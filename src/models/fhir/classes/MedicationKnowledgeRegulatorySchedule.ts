/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  IMedicationKnowledgeRegulatorySchedule,
  FhirType
} from "../internal";

@FhirType("MedicationKnowledgeRegulatorySchedule", "BackboneElement")
export class MedicationKnowledgeRegulatorySchedule extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledge.Regulatory.Schedule";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public schedule?: CodeableConcept;

  public static parse(
    json: IMedicationKnowledgeRegulatorySchedule,
    providedInstance: MedicationKnowledgeRegulatorySchedule = new MedicationKnowledgeRegulatorySchedule()
  ): MedicationKnowledgeRegulatorySchedule {
    const newInstance: MedicationKnowledgeRegulatorySchedule = BackboneElement.parse(json, providedInstance);
  
    if (json.schedule !== undefined) {
      newInstance.schedule = CodeableConcept.parse(json.schedule);
    }
    return newInstance;
  }

  public static isMedicationKnowledgeRegulatorySchedule(input?: unknown): input is MedicationKnowledgeRegulatorySchedule {
    const castInput = input as MedicationKnowledgeRegulatorySchedule;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationKnowledgeRegulatorySchedule";
  }

  public toJSON(): IMedicationKnowledgeRegulatorySchedule {
    const result: IMedicationKnowledgeRegulatorySchedule = super.toJSON();

    if (this.schedule) {
      result.schedule = this.schedule.toJSON();
    }

    return result;
  }

  public clone(): MedicationKnowledgeRegulatorySchedule {
    return MedicationKnowledgeRegulatorySchedule.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationKnowledgeRegulatorySchedule";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
