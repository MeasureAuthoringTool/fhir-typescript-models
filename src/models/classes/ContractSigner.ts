/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Coding,
  IContractSigner,
  Reference,
  Signature,
} from "../internal";

export class ContractSigner extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Contract.Signer";

  public type?: Coding;

  public party?: Reference;

  public signature?: Array<Signature>;

  public static parse(
    json: IContractSigner,
    providedInstance: ContractSigner = new ContractSigner()
  ): ContractSigner {
    const newInstance: ContractSigner = BackboneElement.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = Coding.parse(json.type);
    }
    if (json.party) {
      newInstance.party = Reference.parse(json.party);
    }
    if (json.signature) {
      newInstance.signature = json.signature.map((x) => Signature.parse(x));
    }
    return newInstance;
  }

  public static isContractSigner(input?: unknown): input is ContractSigner {
    const castInput = input as ContractSigner;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ContractSigner";
  }

  public toJSON(): IContractSigner {
    const result: IContractSigner = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.party) {
      result.party = this.party.toJSON();
    }

    if (this.signature) {
      result.signature = this.signature.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ContractSigner";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
