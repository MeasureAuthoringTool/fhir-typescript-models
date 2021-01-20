/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Coding,
  FhirField,
  FhirList,
  IContractSigner,
  Reference,
  Signature,
  FhirType
} from "../internal";

@FhirType("ContractSigner", "BackboneElement")
export class ContractSigner extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Contract.Signer";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Coding")
  public type?: Coding;

  @FhirField("Reference")
  public party?: Reference;

  @FhirList("Signature")
  public signature?: Array<Signature>;

  public static parse(
    json: IContractSigner,
    providedInstance: ContractSigner = new ContractSigner()
  ): ContractSigner {
    const newInstance: ContractSigner = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = Coding.parse(json.type);
    }
    if (json.party !== undefined) {
      newInstance.party = Reference.parse(json.party);
    }
    if (json.signature !== undefined) {
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

  public clone(): ContractSigner {
    return ContractSigner.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ContractSigner";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
