/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  IClaimResponsePayment,
  Identifier,
  Money,
  PrimitiveDate,
  FhirType
} from "../internal";

@FhirType("ClaimResponsePayment", "BackboneElement")
export class ClaimResponsePayment extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ClaimResponse.Payment";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("Money")
  public adjustment?: Money;

  @FhirField("CodeableConcept")
  public adjustmentReason?: CodeableConcept;

  @FhirField("PrimitiveDate")
  public date?: PrimitiveDate;

  @FhirField("Money")
  public amount?: Money;

  @FhirField("Identifier")
  public identifier?: Identifier;

  public static parse(
    json: IClaimResponsePayment,
    providedInstance: ClaimResponsePayment = new ClaimResponsePayment()
  ): ClaimResponsePayment {
    const newInstance: ClaimResponsePayment = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.adjustment !== undefined) {
      newInstance.adjustment = Money.parse(json.adjustment);
    }
    if (json.adjustmentReason !== undefined) {
      newInstance.adjustmentReason = CodeableConcept.parse(json.adjustmentReason);
    }
    if (json.date !== undefined) {
      newInstance.date = PrimitiveDate.parsePrimitive(json.date, json._date);
    }
    if (json.amount !== undefined) {
      newInstance.amount = Money.parse(json.amount);
    }
    if (json.identifier !== undefined) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    return newInstance;
  }

  public static isClaimResponsePayment(input?: unknown): input is ClaimResponsePayment {
    const castInput = input as ClaimResponsePayment;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClaimResponsePayment";
  }

  public toJSON(): IClaimResponsePayment {
    const result: IClaimResponsePayment = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.adjustment) {
      result.adjustment = this.adjustment.toJSON();
    }

    if (this.adjustmentReason) {
      result.adjustmentReason = this.adjustmentReason.toJSON();
    }

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.amount) {
      result.amount = this.amount.toJSON();
    }

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    return result;
  }

  public clone(): ClaimResponsePayment {
    return ClaimResponsePayment.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ClaimResponsePayment";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
