/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Attachment,
  BackboneElement,
  FhirChoice,
  IContractRule,
  Reference,
  FhirType
} from "../internal";

@FhirType("ContractRule", "BackboneElement")
export class ContractRule extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Contract.Rule";

  static readonly primaryCodePath: string | null = null;

  @FhirChoice("Attachment", "Reference")
  public content?: Attachment | Reference;

  public static parse(
    json: IContractRule,
    providedInstance: ContractRule = new ContractRule()
  ): ContractRule {
    const newInstance: ContractRule = BackboneElement.parse(json, providedInstance);
  
    if (json.contentAttachment !== undefined) {
      newInstance.content = Attachment.parse(json.contentAttachment);
    }
    if (json.contentReference !== undefined) {
      newInstance.content = Reference.parse(json.contentReference);
    }
    return newInstance;
  }

  public static isContractRule(input?: unknown): input is ContractRule {
    const castInput = input as ContractRule;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ContractRule";
  }

  public toJSON(): IContractRule {
    const result: IContractRule = super.toJSON();

    if (this.content && Attachment.isAttachment(this.content)) {
      result.contentAttachment = this.content.toJSON();
    }

    if (this.content && Reference.isReference(this.content)) {
      result.contentReference = this.content.toJSON();
    }

    return result;
  }

  public clone(): ContractRule {
    return ContractRule.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ContractRule";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
