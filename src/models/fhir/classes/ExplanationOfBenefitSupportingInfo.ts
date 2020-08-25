/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Attachment,
  BackboneElement,
  CodeableConcept,
  Coding,
  Extension,
  IExplanationOfBenefitSupportingInfo,
  Period,
  PrimitiveBoolean,
  PrimitiveDate,
  PrimitivePositiveInt,
  PrimitiveString,
  Quantity,
  Reference,
} from "../internal";

export class ExplanationOfBenefitSupportingInfo extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefit.SupportingInfo";

  public sequence?: PrimitivePositiveInt;

  public category?: CodeableConcept;

  public code?: CodeableConcept;

  public timing?: PrimitiveDate | Period;

  public value?: PrimitiveBoolean | PrimitiveString | Quantity | Attachment | Reference;

  public reason?: Coding;

  public static parse(
    json: IExplanationOfBenefitSupportingInfo,
    providedInstance: ExplanationOfBenefitSupportingInfo = new ExplanationOfBenefitSupportingInfo()
  ): ExplanationOfBenefitSupportingInfo {
    const newInstance: ExplanationOfBenefitSupportingInfo = BackboneElement.parse(json, providedInstance);
  
    if (json.sequence) {
      newInstance.sequence = PrimitivePositiveInt.parsePrimitive(json.sequence, json._sequence);
    }
    if (json.category) {
      newInstance.category = CodeableConcept.parse(json.category);
    }
    if (json.code) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.timingDate) {
      newInstance.timing = PrimitiveDate.parsePrimitive(json.timingDate, json._timingDate);
    }
    if (json.timingPeriod) {
      newInstance.timing = Period.parse(json.timingPeriod);
    }
    if (json.valueBoolean) {
      newInstance.value = PrimitiveBoolean.parsePrimitive(json.valueBoolean, json._valueBoolean);
    }
    if (json.valueString) {
      newInstance.value = PrimitiveString.parsePrimitive(json.valueString, json._valueString);
    }
    if (json.valueQuantity) {
      newInstance.value = Quantity.parse(json.valueQuantity);
    }
    if (json.valueAttachment) {
      newInstance.value = Attachment.parse(json.valueAttachment);
    }
    if (json.valueReference) {
      newInstance.value = Reference.parse(json.valueReference);
    }
    if (json.reason) {
      newInstance.reason = Coding.parse(json.reason);
    }
    return newInstance;
  }

  public static isExplanationOfBenefitSupportingInfo(input?: unknown): input is ExplanationOfBenefitSupportingInfo {
    const castInput = input as ExplanationOfBenefitSupportingInfo;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExplanationOfBenefitSupportingInfo";
  }

  public toJSON(): IExplanationOfBenefitSupportingInfo {
    const result: IExplanationOfBenefitSupportingInfo = super.toJSON();

    if (this.sequence) {
      result.sequence = this.sequence.value;
      result._sequence = Extension.serializePrimitiveExtension(this.sequence);
    }

    if (this.category) {
      result.category = this.category.toJSON();
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.timing && PrimitiveDate.isPrimitiveDate(this.timing)) {
      result.timingDate = this.timing.value;
      result._timingDate = Extension.serializePrimitiveExtension(this.timing);
    }

    if (this.timing && Period.isPeriod(this.timing)) {
      result.timingPeriod = this.timing.toJSON();
    }

    if (this.value && PrimitiveBoolean.isPrimitiveBoolean(this.value)) {
      result.valueBoolean = this.value.value;
      result._valueBoolean = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveString.isPrimitiveString(this.value)) {
      result.valueString = this.value.value;
      result._valueString = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && Quantity.isQuantity(this.value)) {
      result.valueQuantity = this.value.toJSON();
    }

    if (this.value && Attachment.isAttachment(this.value)) {
      result.valueAttachment = this.value.toJSON();
    }

    if (this.value && Reference.isReference(this.value)) {
      result.valueReference = this.value.toJSON();
    }

    if (this.reason) {
      result.reason = this.reason.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ExplanationOfBenefitSupportingInfo";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
