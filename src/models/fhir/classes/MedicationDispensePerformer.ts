/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  IMedicationDispensePerformer,
  Reference,
  FhirType
} from "../internal";

@FhirType("MedicationDispensePerformer", "BackboneElement")
export class MedicationDispensePerformer extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationDispense.Performer";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public function?: CodeableConcept;

  @FhirField("Reference")
  public actor?: Reference;

  public static parse(
    json: IMedicationDispensePerformer,
    providedInstance: MedicationDispensePerformer = new MedicationDispensePerformer()
  ): MedicationDispensePerformer {
    const newInstance: MedicationDispensePerformer = BackboneElement.parse(json, providedInstance);
  
    if (json.function !== undefined) {
      newInstance.function = CodeableConcept.parse(json.function);
    }
    if (json.actor !== undefined) {
      newInstance.actor = Reference.parse(json.actor);
    }
    return newInstance;
  }

  public static isMedicationDispensePerformer(input?: unknown): input is MedicationDispensePerformer {
    const castInput = input as MedicationDispensePerformer;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationDispensePerformer";
  }

  public toJSON(): IMedicationDispensePerformer {
    const result: IMedicationDispensePerformer = super.toJSON();

    if (this.function) {
      result.function = this.function.toJSON();
    }

    if (this.actor) {
      result.actor = this.actor.toJSON();
    }

    return result;
  }

  public clone(): MedicationDispensePerformer {
    return MedicationDispensePerformer.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationDispensePerformer";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
