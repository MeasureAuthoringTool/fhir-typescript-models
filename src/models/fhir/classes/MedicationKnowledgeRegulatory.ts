/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  FhirField,
  FhirList,
  IMedicationKnowledgeRegulatory,
  MedicationKnowledgeRegulatoryMaxDispense,
  MedicationKnowledgeRegulatorySchedule,
  MedicationKnowledgeRegulatorySubstitution,
  Reference,
  FhirType
} from "../internal";

@FhirType("MedicationKnowledgeRegulatory", "BackboneElement")
export class MedicationKnowledgeRegulatory extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledge.Regulatory";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Reference")
  public regulatoryAuthority?: Reference;

  @FhirList("MedicationKnowledgeRegulatorySubstitution")
  public substitution?: Array<MedicationKnowledgeRegulatorySubstitution>;

  @FhirList("MedicationKnowledgeRegulatorySchedule")
  public schedule?: Array<MedicationKnowledgeRegulatorySchedule>;

  @FhirField("MedicationKnowledgeRegulatoryMaxDispense")
  public maxDispense?: MedicationKnowledgeRegulatoryMaxDispense;

  public static parse(
    json: IMedicationKnowledgeRegulatory,
    providedInstance: MedicationKnowledgeRegulatory = new MedicationKnowledgeRegulatory()
  ): MedicationKnowledgeRegulatory {
    const newInstance: MedicationKnowledgeRegulatory = BackboneElement.parse(json, providedInstance);
  
    if (json.regulatoryAuthority !== undefined) {
      newInstance.regulatoryAuthority = Reference.parse(json.regulatoryAuthority);
    }
    if (json.substitution !== undefined) {
      newInstance.substitution = json.substitution.map((x) => MedicationKnowledgeRegulatorySubstitution.parse(x));
    }
    if (json.schedule !== undefined) {
      newInstance.schedule = json.schedule.map((x) => MedicationKnowledgeRegulatorySchedule.parse(x));
    }
    if (json.maxDispense !== undefined) {
      newInstance.maxDispense = MedicationKnowledgeRegulatoryMaxDispense.parse(json.maxDispense);
    }
    return newInstance;
  }

  public static isMedicationKnowledgeRegulatory(input?: unknown): input is MedicationKnowledgeRegulatory {
    const castInput = input as MedicationKnowledgeRegulatory;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationKnowledgeRegulatory";
  }

  public toJSON(): IMedicationKnowledgeRegulatory {
    const result: IMedicationKnowledgeRegulatory = super.toJSON();

    if (this.regulatoryAuthority) {
      result.regulatoryAuthority = this.regulatoryAuthority.toJSON();
    }

    if (this.substitution) {
      result.substitution = this.substitution.map((x) => x.toJSON());
    }

    if (this.schedule) {
      result.schedule = this.schedule.map((x) => x.toJSON());
    }

    if (this.maxDispense) {
      result.maxDispense = this.maxDispense.toJSON();
    }

    return result;
  }

  public clone(): MedicationKnowledgeRegulatory {
    return MedicationKnowledgeRegulatory.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationKnowledgeRegulatory";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
