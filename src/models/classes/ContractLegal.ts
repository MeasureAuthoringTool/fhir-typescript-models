/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Attachment,
  BackboneElement,
  IContractLegal,
  Reference,
} from "../internal";

export class ContractLegal extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Contract.Legal";

  public content?: Attachment | Reference;

  public static parse(
    json: IContractLegal,
    providedInstance: ContractLegal = new ContractLegal()
  ): ContractLegal {
    const newInstance: ContractLegal = BackboneElement.parse(json, providedInstance);
  
    if (json.contentAttachment) {
      newInstance.content = Attachment.parse(json.contentAttachment);
    }
    if (json.contentReference) {
      newInstance.content = Reference.parse(json.contentReference);
    }
    return newInstance;
  }

  public static isContractLegal(input?: unknown): input is ContractLegal {
    const castInput = input as ContractLegal;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ContractLegal";
  }

  public toJSON(): IContractLegal {
    const result: IContractLegal = super.toJSON();

    if (this.content && Attachment.isAttachment(this.content)) {
      result.contentAttachment = this.content.toJSON();
    }

    if (this.content && Reference.isReference(this.content)) {
      result.contentReference = this.content.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ContractLegal";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
