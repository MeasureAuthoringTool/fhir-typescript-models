/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  IClaimResponseTotal,
  Money,
  FhirType
} from "../internal";

@FhirType("ClaimResponseTotal", "BackboneElement")
export class ClaimResponseTotal extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ClaimResponse.Total";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public category?: CodeableConcept;

  @FhirField("Money")
  public amount?: Money;

  public static parse(
    json: IClaimResponseTotal,
    providedInstance: ClaimResponseTotal = new ClaimResponseTotal()
  ): ClaimResponseTotal {
    const newInstance: ClaimResponseTotal = BackboneElement.parse(json, providedInstance);
  
    if (json.category !== undefined) {
      newInstance.category = CodeableConcept.parse(json.category);
    }
    if (json.amount !== undefined) {
      newInstance.amount = Money.parse(json.amount);
    }
    return newInstance;
  }

  public static isClaimResponseTotal(input?: unknown): input is ClaimResponseTotal {
    const castInput = input as ClaimResponseTotal;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClaimResponseTotal";
  }

  public toJSON(): IClaimResponseTotal {
    const result: IClaimResponseTotal = super.toJSON();

    if (this.category) {
      result.category = this.category.toJSON();
    }

    if (this.amount) {
      result.amount = this.amount.toJSON();
    }

    return result;
  }

  public clone(): ClaimResponseTotal {
    return ClaimResponseTotal.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ClaimResponseTotal";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
