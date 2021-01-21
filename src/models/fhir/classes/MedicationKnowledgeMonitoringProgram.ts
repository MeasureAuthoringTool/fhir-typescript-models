/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  IMedicationKnowledgeMonitoringProgram,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("MedicationKnowledgeMonitoringProgram", "BackboneElement")
export class MedicationKnowledgeMonitoringProgram extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledge.MonitoringProgram";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  public static parse(
    json: IMedicationKnowledgeMonitoringProgram,
    providedInstance: MedicationKnowledgeMonitoringProgram = new MedicationKnowledgeMonitoringProgram()
  ): MedicationKnowledgeMonitoringProgram {
    const newInstance: MedicationKnowledgeMonitoringProgram = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    return newInstance;
  }

  public static isMedicationKnowledgeMonitoringProgram(input?: unknown): input is MedicationKnowledgeMonitoringProgram {
    const castInput = input as MedicationKnowledgeMonitoringProgram;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationKnowledgeMonitoringProgram";
  }

  public toJSON(): IMedicationKnowledgeMonitoringProgram {
    const result: IMedicationKnowledgeMonitoringProgram = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    return result;
  }

  public clone(): MedicationKnowledgeMonitoringProgram {
    return MedicationKnowledgeMonitoringProgram.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationKnowledgeMonitoringProgram";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
