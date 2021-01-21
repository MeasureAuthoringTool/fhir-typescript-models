/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  IChargeItemPerformer,
  Reference,
  FhirType
} from "../internal";

@FhirType("ChargeItemPerformer", "BackboneElement")
export class ChargeItemPerformer extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ChargeItem.Performer";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public function?: CodeableConcept;

  @FhirField("Reference")
  public actor?: Reference;

  public static parse(
    json: IChargeItemPerformer,
    providedInstance: ChargeItemPerformer = new ChargeItemPerformer()
  ): ChargeItemPerformer {
    const newInstance: ChargeItemPerformer = BackboneElement.parse(json, providedInstance);
  
    if (json.function !== undefined) {
      newInstance.function = CodeableConcept.parse(json.function);
    }
    if (json.actor !== undefined) {
      newInstance.actor = Reference.parse(json.actor);
    }
    return newInstance;
  }

  public static isChargeItemPerformer(input?: unknown): input is ChargeItemPerformer {
    const castInput = input as ChargeItemPerformer;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ChargeItemPerformer";
  }

  public toJSON(): IChargeItemPerformer {
    const result: IChargeItemPerformer = super.toJSON();

    if (this.function) {
      result.function = this.function.toJSON();
    }

    if (this.actor) {
      result.actor = this.actor.toJSON();
    }

    return result;
  }

  public clone(): ChargeItemPerformer {
    return ChargeItemPerformer.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ChargeItemPerformer";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
