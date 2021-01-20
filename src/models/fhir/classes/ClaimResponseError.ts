/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  IClaimResponseError,
  PrimitivePositiveInt,
  FhirType
} from "../internal";

@FhirType("ClaimResponseError", "BackboneElement")
export class ClaimResponseError extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ClaimResponse.Error";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitivePositiveInt")
  public itemSequence?: PrimitivePositiveInt;

  @FhirField("PrimitivePositiveInt")
  public detailSequence?: PrimitivePositiveInt;

  @FhirField("PrimitivePositiveInt")
  public subDetailSequence?: PrimitivePositiveInt;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  public static parse(
    json: IClaimResponseError,
    providedInstance: ClaimResponseError = new ClaimResponseError()
  ): ClaimResponseError {
    const newInstance: ClaimResponseError = BackboneElement.parse(json, providedInstance);
  
    if (json.itemSequence !== undefined) {
      newInstance.itemSequence = PrimitivePositiveInt.parsePrimitive(json.itemSequence, json._itemSequence);
    }
    if (json.detailSequence !== undefined) {
      newInstance.detailSequence = PrimitivePositiveInt.parsePrimitive(json.detailSequence, json._detailSequence);
    }
    if (json.subDetailSequence !== undefined) {
      newInstance.subDetailSequence = PrimitivePositiveInt.parsePrimitive(json.subDetailSequence, json._subDetailSequence);
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    return newInstance;
  }

  public static isClaimResponseError(input?: unknown): input is ClaimResponseError {
    const castInput = input as ClaimResponseError;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClaimResponseError";
  }

  public toJSON(): IClaimResponseError {
    const result: IClaimResponseError = super.toJSON();

    if (this.itemSequence) {
      result.itemSequence = this.itemSequence.value;
      result._itemSequence = Extension.serializePrimitiveExtension(this.itemSequence);
    }

    if (this.detailSequence) {
      result.detailSequence = this.detailSequence.value;
      result._detailSequence = Extension.serializePrimitiveExtension(this.detailSequence);
    }

    if (this.subDetailSequence) {
      result.subDetailSequence = this.subDetailSequence.value;
      result._subDetailSequence = Extension.serializePrimitiveExtension(this.subDetailSequence);
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    return result;
  }

  public clone(): ClaimResponseError {
    return ClaimResponseError.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ClaimResponseError";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
