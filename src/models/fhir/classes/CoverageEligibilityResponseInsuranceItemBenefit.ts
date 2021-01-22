/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  ICoverageEligibilityResponseInsuranceItemBenefit,
  Money,
  PrimitiveString,
  PrimitiveUnsignedInt,
  FhirType
} from "../internal";

@FhirType("CoverageEligibilityResponseInsuranceItemBenefit", "BackboneElement")
export class CoverageEligibilityResponseInsuranceItemBenefit extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CoverageEligibilityResponse.Insurance.Item.Benefit";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirChoice("PrimitiveUnsignedInt", "PrimitiveString", "Money")
  public allowed?: PrimitiveUnsignedInt | PrimitiveString | Money;

  @FhirChoice("PrimitiveUnsignedInt", "PrimitiveString", "Money")
  public used?: PrimitiveUnsignedInt | PrimitiveString | Money;

  public static parse(
    json: ICoverageEligibilityResponseInsuranceItemBenefit,
    providedInstance: CoverageEligibilityResponseInsuranceItemBenefit = new CoverageEligibilityResponseInsuranceItemBenefit()
  ): CoverageEligibilityResponseInsuranceItemBenefit {
    const newInstance: CoverageEligibilityResponseInsuranceItemBenefit = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.allowedUnsignedInt !== undefined) {
      newInstance.allowed = PrimitiveUnsignedInt.parsePrimitive(json.allowedUnsignedInt, json._allowedUnsignedInt);
    }
    if (json.allowedString !== undefined) {
      newInstance.allowed = PrimitiveString.parsePrimitive(json.allowedString, json._allowedString);
    }
    if (json.allowedMoney !== undefined) {
      newInstance.allowed = Money.parse(json.allowedMoney);
    }
    if (json.usedUnsignedInt !== undefined) {
      newInstance.used = PrimitiveUnsignedInt.parsePrimitive(json.usedUnsignedInt, json._usedUnsignedInt);
    }
    if (json.usedString !== undefined) {
      newInstance.used = PrimitiveString.parsePrimitive(json.usedString, json._usedString);
    }
    if (json.usedMoney !== undefined) {
      newInstance.used = Money.parse(json.usedMoney);
    }
    return newInstance;
  }

  public static isCoverageEligibilityResponseInsuranceItemBenefit(input?: unknown): input is CoverageEligibilityResponseInsuranceItemBenefit {
    const castInput = input as CoverageEligibilityResponseInsuranceItemBenefit;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CoverageEligibilityResponseInsuranceItemBenefit";
  }

  public toJSON(): ICoverageEligibilityResponseInsuranceItemBenefit {
    const result: ICoverageEligibilityResponseInsuranceItemBenefit = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.allowed && PrimitiveUnsignedInt.isPrimitiveUnsignedInt(this.allowed)) {
      result.allowedUnsignedInt = this.allowed.value;
      result._allowedUnsignedInt = Extension.serializePrimitiveExtension(this.allowed);
    }

    if (this.allowed && PrimitiveString.isPrimitiveString(this.allowed)) {
      result.allowedString = this.allowed.value;
      result._allowedString = Extension.serializePrimitiveExtension(this.allowed);
    }

    if (this.allowed && Money.isMoney(this.allowed)) {
      result.allowedMoney = this.allowed.toJSON();
    }

    if (this.used && PrimitiveUnsignedInt.isPrimitiveUnsignedInt(this.used)) {
      result.usedUnsignedInt = this.used.value;
      result._usedUnsignedInt = Extension.serializePrimitiveExtension(this.used);
    }

    if (this.used && PrimitiveString.isPrimitiveString(this.used)) {
      result.usedString = this.used.value;
      result._usedString = Extension.serializePrimitiveExtension(this.used);
    }

    if (this.used && Money.isMoney(this.used)) {
      result.usedMoney = this.used.toJSON();
    }

    return result;
  }

  public clone(): CoverageEligibilityResponseInsuranceItemBenefit {
    return CoverageEligibilityResponseInsuranceItemBenefit.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CoverageEligibilityResponseInsuranceItemBenefit";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
