/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Duration,
  FhirField,
  FhirList,
  IMedicationKnowledgeKinetics,
  SimpleQuantity,
  FhirType
} from "../internal";

@FhirType("MedicationKnowledgeKinetics", "BackboneElement")
export class MedicationKnowledgeKinetics extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledge.Kinetics";

  static readonly primaryCodePath: string | null = null;

  @FhirList("SimpleQuantity")
  public areaUnderCurve?: Array<SimpleQuantity>;

  @FhirList("SimpleQuantity")
  public lethalDose50?: Array<SimpleQuantity>;

  @FhirField("Duration")
  public halfLifePeriod?: Duration;

  public static parse(
    json: IMedicationKnowledgeKinetics,
    providedInstance: MedicationKnowledgeKinetics = new MedicationKnowledgeKinetics()
  ): MedicationKnowledgeKinetics {
    const newInstance: MedicationKnowledgeKinetics = BackboneElement.parse(json, providedInstance);
  
    if (json.areaUnderCurve !== undefined) {
      newInstance.areaUnderCurve = json.areaUnderCurve.map((x) => SimpleQuantity.parse(x));
    }
    if (json.lethalDose50 !== undefined) {
      newInstance.lethalDose50 = json.lethalDose50.map((x) => SimpleQuantity.parse(x));
    }
    if (json.halfLifePeriod !== undefined) {
      newInstance.halfLifePeriod = Duration.parse(json.halfLifePeriod);
    }
    return newInstance;
  }

  public static isMedicationKnowledgeKinetics(input?: unknown): input is MedicationKnowledgeKinetics {
    const castInput = input as MedicationKnowledgeKinetics;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationKnowledgeKinetics";
  }

  public toJSON(): IMedicationKnowledgeKinetics {
    const result: IMedicationKnowledgeKinetics = super.toJSON();

    if (this.areaUnderCurve) {
      result.areaUnderCurve = this.areaUnderCurve.map((x) => x.toJSON());
    }

    if (this.lethalDose50) {
      result.lethalDose50 = this.lethalDose50.map((x) => x.toJSON());
    }

    if (this.halfLifePeriod) {
      result.halfLifePeriod = this.halfLifePeriod.toJSON();
    }

    return result;
  }

  public clone(): MedicationKnowledgeKinetics {
    return MedicationKnowledgeKinetics.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationKnowledgeKinetics";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
