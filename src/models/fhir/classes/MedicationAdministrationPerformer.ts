/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  IMedicationAdministrationPerformer,
  Reference,
  FhirType
} from "../internal";

@FhirType("MedicationAdministrationPerformer", "BackboneElement")
export class MedicationAdministrationPerformer extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationAdministration.Performer";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public function?: CodeableConcept;

  @FhirField("Reference")
  public actor?: Reference;

  public static parse(
    json: IMedicationAdministrationPerformer,
    providedInstance: MedicationAdministrationPerformer = new MedicationAdministrationPerformer()
  ): MedicationAdministrationPerformer {
    const newInstance: MedicationAdministrationPerformer = BackboneElement.parse(json, providedInstance);
  
    if (json.function !== undefined) {
      newInstance.function = CodeableConcept.parse(json.function);
    }
    if (json.actor !== undefined) {
      newInstance.actor = Reference.parse(json.actor);
    }
    return newInstance;
  }

  public static isMedicationAdministrationPerformer(input?: unknown): input is MedicationAdministrationPerformer {
    const castInput = input as MedicationAdministrationPerformer;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationAdministrationPerformer";
  }

  public toJSON(): IMedicationAdministrationPerformer {
    const result: IMedicationAdministrationPerformer = super.toJSON();

    if (this.function) {
      result.function = this.function.toJSON();
    }

    if (this.actor) {
      result.actor = this.actor.toJSON();
    }

    return result;
  }

  public clone(): MedicationAdministrationPerformer {
    return MedicationAdministrationPerformer.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationAdministrationPerformer";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
