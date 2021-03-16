/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  CoverageCostToBeneficiaryException,
  FhirChoice,
  FhirField,
  FhirList,
  ICoverageCostToBeneficiary,
  Money,
  SimpleQuantity,
  FhirType
} from "../internal";

@FhirType("CoverageCostToBeneficiary", "BackboneElement")
export class CoverageCostToBeneficiary extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Coverage.CostToBeneficiary";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirChoice("SimpleQuantity", "Money")
  public value?: SimpleQuantity | Money;

  @FhirList("CoverageCostToBeneficiaryException")
  public exception?: Array<CoverageCostToBeneficiaryException>;

  public static parse(
    json: ICoverageCostToBeneficiary,
    providedInstance: CoverageCostToBeneficiary = new CoverageCostToBeneficiary()
  ): CoverageCostToBeneficiary {
    const newInstance: CoverageCostToBeneficiary = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.valueQuantity !== undefined) {
      newInstance.value = SimpleQuantity.parse(json.valueQuantity);
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
      result.valueQuantity = this.value.toJSON();
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
