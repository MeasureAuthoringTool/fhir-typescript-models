/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IProcedurePerformer,
  Reference,
} from "../internal";

export class ProcedurePerformer extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Procedure.Performer";

  public function?: CodeableConcept;

  public actor?: Reference;

  public onBehalfOf?: Reference;

  public static parse(
    json: IProcedurePerformer,
    providedInstance: ProcedurePerformer = new ProcedurePerformer()
  ): ProcedurePerformer {
    const newInstance: ProcedurePerformer = BackboneElement.parse(json, providedInstance);
  
    if (json.function) {
      newInstance.function = CodeableConcept.parse(json.function);
    }
    if (json.actor) {
      newInstance.actor = Reference.parse(json.actor);
    }
    if (json.onBehalfOf) {
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
  
  public getTypeName(): string {
    return "ProcedurePerformer";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
