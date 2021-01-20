/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  IInvoiceParticipant,
  Reference,
  FhirType
} from "../internal";

@FhirType("InvoiceParticipant", "BackboneElement")
export class InvoiceParticipant extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Invoice.Participant";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public role?: CodeableConcept;

  @FhirField("Reference")
  public actor?: Reference;

  public static parse(
    json: IInvoiceParticipant,
    providedInstance: InvoiceParticipant = new InvoiceParticipant()
  ): InvoiceParticipant {
    const newInstance: InvoiceParticipant = BackboneElement.parse(json, providedInstance);
  
    if (json.role !== undefined) {
      newInstance.role = CodeableConcept.parse(json.role);
    }
    if (json.actor !== undefined) {
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

  public clone(): InvoiceParticipant {
    return InvoiceParticipant.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "InvoiceParticipant";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
