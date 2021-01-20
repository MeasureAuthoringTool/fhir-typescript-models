/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  IImmunizationPerformer,
  Reference,
  FhirType
} from "../internal";

@FhirType("ImmunizationPerformer", "BackboneElement")
export class ImmunizationPerformer extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Immunization.Performer";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public function?: CodeableConcept;

  @FhirField("Reference")
  public actor?: Reference;

  public static parse(
    json: IImmunizationPerformer,
    providedInstance: ImmunizationPerformer = new ImmunizationPerformer()
  ): ImmunizationPerformer {
    const newInstance: ImmunizationPerformer = BackboneElement.parse(json, providedInstance);
  
    if (json.function !== undefined) {
      newInstance.function = CodeableConcept.parse(json.function);
    }
    if (json.actor !== undefined) {
      newInstance.actor = Reference.parse(json.actor);
    }
    return newInstance;
  }

  public static isImmunizationPerformer(input?: unknown): input is ImmunizationPerformer {
    const castInput = input as ImmunizationPerformer;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImmunizationPerformer";
  }

  public toJSON(): IImmunizationPerformer {
    const result: IImmunizationPerformer = super.toJSON();

    if (this.function) {
      result.function = this.function.toJSON();
    }

    if (this.actor) {
      result.actor = this.actor.toJSON();
    }

    return result;
  }

  public clone(): ImmunizationPerformer {
    return ImmunizationPerformer.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ImmunizationPerformer";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
