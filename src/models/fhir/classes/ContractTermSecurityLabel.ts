/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Coding,
  Extension,
  IContractTermSecurityLabel,
  PrimitiveUnsignedInt,
  FieldMetadata
} from "../internal";

export class ContractTermSecurityLabel extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Contract.Term.SecurityLabel";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "number",
      fieldType: [PrimitiveUnsignedInt],
      isArray: true
    }, {
      fieldName: "classification",
      fieldType: [Coding],
      isArray: false
    }, {
      fieldName: "category",
      fieldType: [Coding],
      isArray: true
    }, {
      fieldName: "control",
      fieldType: [Coding],
      isArray: true
    }];
  }

  public number?: Array<PrimitiveUnsignedInt>;

  public classification?: Coding;

  public category?: Array<Coding>;

  public control?: Array<Coding>;

  public static parse(
    json: IContractTermSecurityLabel,
    providedInstance: ContractTermSecurityLabel = new ContractTermSecurityLabel()
  ): ContractTermSecurityLabel {
    const newInstance: ContractTermSecurityLabel = BackboneElement.parse(json, providedInstance);
  
    if (json.number !== undefined) {
      newInstance.number = json.number.map((x, i) => {
        const ext = json._number && json._number[i];
        return PrimitiveUnsignedInt.parsePrimitive(x, ext);
      });
    }
    if (json.classification !== undefined) {
      newInstance.classification = Coding.parse(json.classification);
    }
    if (json.category !== undefined) {
      newInstance.category = json.category.map((x) => Coding.parse(x));
    }
    if (json.control !== undefined) {
      newInstance.control = json.control.map((x) => Coding.parse(x));
    }
    return newInstance;
  }

  public static isContractTermSecurityLabel(input?: unknown): input is ContractTermSecurityLabel {
    const castInput = input as ContractTermSecurityLabel;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ContractTermSecurityLabel";
  }

  public toJSON(): IContractTermSecurityLabel {
    const result: IContractTermSecurityLabel = super.toJSON();

    if (this.number) {
      result.number = this.number.filter(x => !!x).map(x => x.value) as typeof result.number;
      result._number = Extension.serializePrimitiveExtensionArray(this.number);
    }

    if (this.classification) {
      result.classification = this.classification.toJSON();
    }

    if (this.category) {
      result.category = this.category.map((x) => x.toJSON());
    }

    if (this.control) {
      result.control = this.control.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ContractTermSecurityLabel {
    return ContractTermSecurityLabel.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ContractTermSecurityLabel";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
