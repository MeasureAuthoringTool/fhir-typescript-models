/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  CoverageCostToBeneficiaryException,
  ICoverageCostToBeneficiary,
  Money,
  SimpleQuantity,
} from "../internal";

export class CoverageCostToBeneficiary extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Coverage.CostToBeneficiary";

  public type?: CodeableConcept;

  public value?: SimpleQuantity | Money;

  public exception?: Array<CoverageCostToBeneficiaryException>;

  public static parse(
    json: ICoverageCostToBeneficiary,
    providedInstance: CoverageCostToBeneficiary = new CoverageCostToBeneficiary()
  ): CoverageCostToBeneficiary {
    const newInstance: CoverageCostToBeneficiary = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.valueSimpleQuantity !== undefined) {
      newInstance.value = SimpleQuantity.parse(json.valueSimpleQuantity);
    }
    if (json.valueMoney !== undefined) {
      newInstance.value = Money.parse(json.valueMoney);
    }
    if (json.exception !== undefined) {
      newInstance.exception = json.exception.map((x) => CoverageCostToBeneficiaryException.parse(x));
    }
    return newInstance;
  }

  public static isCoverageCostToBeneficiary(input?: unknown): input is CoverageCostToBeneficiary {
    const castInput = input as CoverageCostToBeneficiary;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CoverageCostToBeneficiary";
  }

  public toJSON(): ICoverageCostToBeneficiary {
    const result: ICoverageCostToBeneficiary = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.value && SimpleQuantity.isSimpleQuantity(this.value)) {
      result.valueSimpleQuantity = this.value.toJSON();
    }

    if (this.value && Money.isMoney(this.value)) {
      result.valueMoney = this.value.toJSON();
    }

    if (this.exception) {
      result.exception = this.exception.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): CoverageCostToBeneficiary {
    return CoverageCostToBeneficiary.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CoverageCostToBeneficiary";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
