/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  ICoverageCostToBeneficiaryException,
  Period,
} from "../internal";

export class CoverageCostToBeneficiaryException extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Coverage.CostToBeneficiary.Exception";

  public type?: CodeableConcept;

  public period?: Period;

  public static parse(
    json: ICoverageCostToBeneficiaryException,
    providedInstance: CoverageCostToBeneficiaryException = new CoverageCostToBeneficiaryException()
  ): CoverageCostToBeneficiaryException {
    const newInstance: CoverageCostToBeneficiaryException = BackboneElement.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.period) {
      newInstance.period = Period.parse(json.period);
    }
    return newInstance;
  }

  public static isCoverageCostToBeneficiaryException(input?: unknown): input is CoverageCostToBeneficiaryException {
    const castInput = input as CoverageCostToBeneficiaryException;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CoverageCostToBeneficiaryException";
  }

  public toJSON(): ICoverageCostToBeneficiaryException {
    const result: ICoverageCostToBeneficiaryException = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "CoverageCostToBeneficiaryException";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
