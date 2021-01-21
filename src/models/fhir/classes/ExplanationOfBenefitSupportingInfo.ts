/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Attachment,
  BackboneElement,
  CodeableConcept,
  Coding,
  Extension,
  FhirChoice,
  FhirField,
  IExplanationOfBenefitSupportingInfo,
  Period,
  PrimitiveBoolean,
  PrimitiveDate,
  PrimitivePositiveInt,
  PrimitiveString,
  Quantity,
  Reference,
  FhirType
} from "../internal";

@FhirType("ExplanationOfBenefitSupportingInfo", "BackboneElement")
export class ExplanationOfBenefitSupportingInfo extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefit.SupportingInfo";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitivePositiveInt")
  public sequence?: PrimitivePositiveInt;

  @FhirField("CodeableConcept")
  public category?: CodeableConcept;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirChoice("PrimitiveDate", "Period")
  public timing?: PrimitiveDate | Period;

  @FhirChoice("PrimitiveBoolean", "PrimitiveString", "Quantity", "Attachment", "Reference")
  public value?: PrimitiveBoolean | PrimitiveString | Quantity | Attachment | Reference;

  @FhirField("Coding")
  public reason?: Coding;

  public static parse(
    json: IExplanationOfBenefitSupportingInfo,
    providedInstance: ExplanationOfBenefitSupportingInfo = new ExplanationOfBenefitSupportingInfo()
  ): ExplanationOfBenefitSupportingInfo {
    const newInstance: ExplanationOfBenefitSupportingInfo = BackboneElement.parse(json, providedInstance);
  
    if (json.sequence !== undefined) {
      newInstance.sequence = PrimitivePositiveInt.parsePrimitive(json.sequence, json._sequence);
    }
    if (json.category !== undefined) {
      newInstance.category = CodeableConcept.parse(json.category);
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.timingDate !== undefined) {
      newInstance.timing = PrimitiveDate.parsePrimitive(json.timingDate, json._timingDate);
    }
    if (json.timingPeriod !== undefined) {
      newInstance.timing = Period.parse(json.timingPeriod);
    }
    if (json.valueBoolean !== undefined) {
      newInstance.value = PrimitiveBoolean.parsePrimitive(json.valueBoolean, json._valueBoolean);
    }
    if (json.valueString !== undefined) {
      newInstance.value = PrimitiveString.parsePrimitive(json.valueString, json._valueString);
    }
    if (json.valueQuantity !== undefined) {
      newInstance.value = Quantity.parse(json.valueQuantity);
    }
    if (json.valueAttachment !== undefined) {
      newInstance.value = Attachment.parse(json.valueAttachment);
    }
    if (json.valueReference !== undefined) {
      newInstance.value = Reference.parse(json.valueReference);
    }
    if (json.reason !== undefined) {
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

  public clone(): ExplanationOfBenefitSupportingInfo {
    return ExplanationOfBenefitSupportingInfo.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExplanationOfBenefitSupportingInfo";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
