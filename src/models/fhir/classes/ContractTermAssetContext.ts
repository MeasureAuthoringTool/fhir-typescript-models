/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IContractTermAssetContext,
  PrimitiveString,
  Reference,
} from "../internal";

export class ContractTermAssetContext extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Contract.Term.Asset.Context";
  
  static readonly primaryCodePath: string | null = null;

  public reference?: Reference;

  public code?: Array<CodeableConcept>;

  public text?: PrimitiveString;

  public static parse(
    json: IContractTermAssetContext,
    providedInstance: ContractTermAssetContext = new ContractTermAssetContext()
  ): ContractTermAssetContext {
    const newInstance: ContractTermAssetContext = BackboneElement.parse(json, providedInstance);
  
    if (json.reference !== undefined) {
      newInstance.reference = Reference.parse(json.reference);
    }
    if (json.code !== undefined) {
      newInstance.code = json.code.map((x) => CodeableConcept.parse(x));
    }
    if (json.text !== undefined) {
      newInstance.text = PrimitiveString.parsePrimitive(json.text, json._text);
    }
    return newInstance;
  }

  public static isContractTermAssetContext(input?: unknown): input is ContractTermAssetContext {
    const castInput = input as ContractTermAssetContext;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ContractTermAssetContext";
  }

  public toJSON(): IContractTermAssetContext {
    const result: IContractTermAssetContext = super.toJSON();

    if (this.reference) {
      result.reference = this.reference.toJSON();
    }

    if (this.code) {
      result.code = this.code.map((x) => x.toJSON());
    }

    if (this.text) {
      result.text = this.text.value;
      result._text = Extension.serializePrimitiveExtension(this.text);
    }

    return result;
  }

  public clone(): ContractTermAssetContext {
    return ContractTermAssetContext.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ContractTermAssetContext";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
