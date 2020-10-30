/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Attachment,
  BackboneElement,
  IContractLegal,
  Reference,
  FieldMetadata
} from "../internal";

export class ContractLegal extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Contract.Legal";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "content",
      fieldType: [Attachment, Reference],
      isArray: false
    }];
  }

  public content?: Attachment | Reference;

  public static parse(
    json: IContractLegal,
    providedInstance: ContractLegal = new ContractLegal()
  ): ContractLegal {
    const newInstance: ContractLegal = BackboneElement.parse(json, providedInstance);
  
    if (json.contentAttachment !== undefined) {
      newInstance.content = Attachment.parse(json.contentAttachment);
    }
    if (json.contentReference !== undefined) {
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

  public clone(): ContractLegal {
    return ContractLegal.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ContractLegal";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
