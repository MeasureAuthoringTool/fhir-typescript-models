/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  IProcedurePerformer,
  Reference,
  FhirType
} from "../internal";

@FhirType("ProcedurePerformer", "BackboneElement")
export class ProcedurePerformer extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Procedure.Performer";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public function?: CodeableConcept;

  @FhirField("Reference")
  public actor?: Reference;

  @FhirField("Reference")
  public onBehalfOf?: Reference;

  public static parse(
    json: IProcedurePerformer,
    providedInstance: ProcedurePerformer = new ProcedurePerformer()
  ): ProcedurePerformer {
    const newInstance: ProcedurePerformer = BackboneElement.parse(json, providedInstance);
  
    if (json.function !== undefined) {
      newInstance.function = CodeableConcept.parse(json.function);
    }
    if (json.actor !== undefined) {
      newInstance.actor = Reference.parse(json.actor);
    }
    if (json.onBehalfOf !== undefined) {
      newInstance.onBehalfOf = Reference.parse(json.onBehalfOf);
    }
    return newInstance;
  }

  public static isProcedurePerformer(input?: unknown): input is ProcedurePerformer {
    const castInput = input as ProcedurePerformer;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ProcedurePerformer";
  }

  public toJSON(): IProcedurePerformer {
    const result: IProcedurePerformer = super.toJSON();

    if (this.function) {
      result.function = this.function.toJSON();
    }

    if (this.actor) {
      result.actor = this.actor.toJSON();
    }

    if (this.onBehalfOf) {
      result.onBehalfOf = this.onBehalfOf.toJSON();
    }

    return result;
  }

  public clone(): ProcedurePerformer {
    return ProcedurePerformer.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ProcedurePerformer";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
