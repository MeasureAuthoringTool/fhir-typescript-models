/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Coding,
  Extension,
  FhirField,
  FhirList,
  IContractTermSecurityLabel,
  PrimitiveUnsignedInt,
  FhirType
} from "../internal";

@FhirType("ContractTermSecurityLabel", "BackboneElement")
export class ContractTermSecurityLabel extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Contract.Term.SecurityLabel";

  static readonly primaryCodePath: string | null = null;

  @FhirList("PrimitiveUnsignedInt")
  public number?: Array<PrimitiveUnsignedInt>;

  @FhirField("Coding")
  public classification?: Coding;

  @FhirList("Coding")
  public category?: Array<Coding>;

  @FhirList("Coding")
  public control?: Array<Coding>;

  public static parse(
    json: IContractTermSecurityLabel,
    providedInstance: ContractTermSecurityLabel = new ContractTermSecurityLabel()
  ): ContractTermSecurityLabel {
    const newInstance: ContractTermSecurityLabel = BackboneElement.parse(json, providedInstance);
  
    if (json.number !== undefined) {
      newInstance.number = json.number.map((x, i) => PrimitiveUnsignedInt.parsePrimitive(x, json._number?.[i]));
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
