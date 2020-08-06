/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IPaymentReconciliationProcessNote,
  NoteType,
  PrimitiveString,
} from "../internal";

export class PaymentReconciliationProcessNote extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PaymentReconciliation.ProcessNote";

  public type?: NoteType;

  public text?: PrimitiveString;

  public static parse(
    json: IPaymentReconciliationProcessNote,
    providedInstance: PaymentReconciliationProcessNote = new PaymentReconciliationProcessNote()
  ): PaymentReconciliationProcessNote {
    const newInstance: PaymentReconciliationProcessNote = BackboneElement.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = NoteType.parsePrimitive(json.type, json._type);
    }
    if (json.text) {
      newInstance.text = PrimitiveString.parsePrimitive(json.text, json._text);
    }
    return newInstance;
  }

  public static isPaymentReconciliationProcessNote(input?: unknown): input is PaymentReconciliationProcessNote {
    const castInput = input as PaymentReconciliationProcessNote;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PaymentReconciliationProcessNote";
  }

  public toJSON(): IPaymentReconciliationProcessNote {
    const result: IPaymentReconciliationProcessNote = super.toJSON();

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.text) {
      result.text = this.text.value;
      result._text = Extension.serializePrimitiveExtension(this.text);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "PaymentReconciliationProcessNote";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
