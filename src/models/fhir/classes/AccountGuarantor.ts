/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IAccountGuarantor,
  Period,
  PrimitiveBoolean,
  Reference,
} from "../internal";

export class AccountGuarantor extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Account.Guarantor";

  public party?: Reference;

  public onHold?: PrimitiveBoolean;

  public period?: Period;

  public static parse(
    json: IAccountGuarantor,
    providedInstance: AccountGuarantor = new AccountGuarantor()
  ): AccountGuarantor {
    const newInstance: AccountGuarantor = BackboneElement.parse(json, providedInstance);
  
    if (json.party) {
      newInstance.party = Reference.parse(json.party);
    }
    if (json.onHold) {
      newInstance.onHold = PrimitiveBoolean.parsePrimitive(json.onHold, json._onHold);
    }
    if (json.period) {
      newInstance.period = Period.parse(json.period);
    }
    return newInstance;
  }

  public static isAccountGuarantor(input?: unknown): input is AccountGuarantor {
    const castInput = input as AccountGuarantor;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AccountGuarantor";
  }

  public toJSON(): IAccountGuarantor {
    const result: IAccountGuarantor = super.toJSON();

    if (this.party) {
      result.party = this.party.toJSON();
    }

    if (this.onHold) {
      result.onHold = this.onHold.value;
      result._onHold = Extension.serializePrimitiveExtension(this.onHold);
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "AccountGuarantor";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
