/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Attachment,
  BackboneElement,
  IContractFriendly,
  Reference,
} from "../internal";

export class ContractFriendly extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Contract.Friendly";

  public content?: Attachment | Reference;

  public static parse(
    json: IContractFriendly,
    providedInstance: ContractFriendly = new ContractFriendly()
  ): ContractFriendly {
    const newInstance: ContractFriendly = BackboneElement.parse(json, providedInstance);
  
    if (json.contentAttachment) {
      newInstance.content = Attachment.parse(json.contentAttachment);
    }
    if (json.contentReference) {
      newInstance.content = Reference.parse(json.contentReference);
    }
    return newInstance;
  }

  public static isContractFriendly(input?: unknown): input is ContractFriendly {
    const castInput = input as ContractFriendly;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ContractFriendly";
  }

  public toJSON(): IContractFriendly {
    const result: IContractFriendly = super.toJSON();

    if (this.content && Attachment.isAttachment(this.content)) {
      result.contentAttachment = this.content.toJSON();
    }

    if (this.content && Reference.isReference(this.content)) {
      result.contentReference = this.content.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ContractFriendly";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
