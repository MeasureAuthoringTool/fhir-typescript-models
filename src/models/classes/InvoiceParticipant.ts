/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IInvoiceParticipant,
  Reference,
} from "../internal";

export class InvoiceParticipant extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Invoice.Participant";

  public role?: CodeableConcept;

  public actor?: Reference;

  public static parse(
    json: IInvoiceParticipant,
    providedInstance: InvoiceParticipant = new InvoiceParticipant()
  ): InvoiceParticipant {
    const newInstance: InvoiceParticipant = BackboneElement.parse(json, providedInstance);
  
    if (json.role) {
      newInstance.role = CodeableConcept.parse(json.role);
    }
    if (json.actor) {
      newInstance.actor = Reference.parse(json.actor);
    }
    return newInstance;
  }

  public static isInvoiceParticipant(input?: unknown): input is InvoiceParticipant {
    const castInput = input as InvoiceParticipant;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "InvoiceParticipant";
  }

  public toJSON(): IInvoiceParticipant {
    const result: IInvoiceParticipant = super.toJSON();

    if (this.role) {
      result.role = this.role.toJSON();
    }

    if (this.actor) {
      result.actor = this.actor.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "InvoiceParticipant";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
