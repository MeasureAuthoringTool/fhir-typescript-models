/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IAccountGuarantor,
  Period,
  PrimitiveBoolean,
  Reference,
  FhirType
} from "../internal";

@FhirType("AccountGuarantor", "BackboneElement")
export class AccountGuarantor extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Account.Guarantor";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Reference")
  public party?: Reference;

  @FhirField("PrimitiveBoolean")
  public onHold?: PrimitiveBoolean;

  @FhirField("Period")
  public period?: Period;

  public static parse(
    json: IAccountGuarantor,
    providedInstance: AccountGuarantor = new AccountGuarantor()
  ): AccountGuarantor {
    const newInstance: AccountGuarantor = BackboneElement.parse(json, providedInstance);
  
    if (json.party !== undefined) {
      newInstance.party = Reference.parse(json.party);
    }
    if (json.onHold !== undefined) {
      newInstance.onHold = PrimitiveBoolean.parsePrimitive(json.onHold, json._onHold);
    }
    if (json.period !== undefined) {
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

  public clone(): AccountGuarantor {
    return AccountGuarantor.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "AccountGuarantor";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
