/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IContractTermOfferParty,
  Reference,
} from "../internal";

export class ContractTermOfferParty extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Contract.Term.Offer.Party";

  public reference?: Array<Reference>;

  public role?: CodeableConcept;

  public static parse(
    json: IContractTermOfferParty,
    providedInstance: ContractTermOfferParty = new ContractTermOfferParty()
  ): ContractTermOfferParty {
    const newInstance: ContractTermOfferParty = BackboneElement.parse(json, providedInstance);
  
    if (json.reference) {
      newInstance.reference = json.reference.map((x) => Reference.parse(x));
    }
    if (json.role) {
      newInstance.role = CodeableConcept.parse(json.role);
    }
    return newInstance;
  }

  public static isContractTermOfferParty(input?: unknown): input is ContractTermOfferParty {
    const castInput = input as ContractTermOfferParty;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ContractTermOfferParty";
  }

  public toJSON(): IContractTermOfferParty {
    const result: IContractTermOfferParty = super.toJSON();

    if (this.reference) {
      result.reference = this.reference.map((x) => x.toJSON());
    }

    if (this.role) {
      result.role = this.role.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ContractTermOfferParty";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
