/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  ISubstanceAmount,
  PrimitiveString,
  Quantity,
  Range,
  SubstanceAmountReferenceRange,
  FhirType
} from "../internal";

@FhirType("SubstanceAmount", "BackboneElement")
export class SubstanceAmount extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceAmount";

  static readonly primaryCodePath: string | null = null;

  @FhirChoice("Quantity", "Range", "PrimitiveString")
  public amount?: Quantity | Range | PrimitiveString;

  @FhirField("CodeableConcept")
  public amountType?: CodeableConcept;

  @FhirField("PrimitiveString")
  public amountText?: PrimitiveString;

  @FhirField("SubstanceAmountReferenceRange")
  public referenceRange?: SubstanceAmountReferenceRange;

  public static parse(
    json: ISubstanceAmount,
    providedInstance: SubstanceAmount = new SubstanceAmount()
  ): SubstanceAmount {
    const newInstance: SubstanceAmount = BackboneElement.parse(json, providedInstance);
  
    if (json.amountQuantity !== undefined) {
      newInstance.amount = Quantity.parse(json.amountQuantity);
    }
    if (json.amountRange !== undefined) {
      newInstance.amount = Range.parse(json.amountRange);
    }
    if (json.amountString !== undefined) {
      newInstance.amount = PrimitiveString.parsePrimitive(json.amountString, json._amountString);
    }
    if (json.amountType !== undefined) {
      newInstance.amountType = CodeableConcept.parse(json.amountType);
    }
    if (json.amountText !== undefined) {
      newInstance.amountText = PrimitiveString.parsePrimitive(json.amountText, json._amountText);
    }
    if (json.referenceRange !== undefined) {
      newInstance.referenceRange = SubstanceAmountReferenceRange.parse(json.referenceRange);
    }
    return newInstance;
  }

  public static isSubstanceAmount(input?: unknown): input is SubstanceAmount {
    const castInput = input as SubstanceAmount;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceAmount";
  }

  public toJSON(): ISubstanceAmount {
    const result: ISubstanceAmount = super.toJSON();

    if (this.amount && Quantity.isQuantity(this.amount)) {
      result.amountQuantity = this.amount.toJSON();
    }

    if (this.amount && Range.isRange(this.amount)) {
      result.amountRange = this.amount.toJSON();
    }

    if (this.amount && PrimitiveString.isPrimitiveString(this.amount)) {
      result.amountString = this.amount.value;
      result._amountString = Extension.serializePrimitiveExtension(this.amount);
    }

    if (this.amountType) {
      result.amountType = this.amountType.toJSON();
    }

    if (this.amountText) {
      result.amountText = this.amountText.value;
      result._amountText = Extension.serializePrimitiveExtension(this.amountText);
    }

    if (this.referenceRange) {
      result.referenceRange = this.referenceRange.toJSON();
    }

    return result;
  }

  public clone(): SubstanceAmount {
    return SubstanceAmount.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceAmount";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
