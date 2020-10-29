/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IMedicationDispensePerformer,
  Reference,
  FieldMetadata
} from "../internal";

export class MedicationDispensePerformer extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationDispense.Performer";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "function",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "actor",
      fieldType: [Reference],
      isArray: false
    }];
  }

  public function?: CodeableConcept;

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
