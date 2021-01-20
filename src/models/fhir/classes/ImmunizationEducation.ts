/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IImmunizationEducation,
  PrimitiveDateTime,
  PrimitiveString,
  PrimitiveUri,
  FhirType
} from "../internal";

@FhirType("ImmunizationEducation", "BackboneElement")
export class ImmunizationEducation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Immunization.Education";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public documentType?: PrimitiveString;

  @FhirField("PrimitiveUri")
  public reference?: PrimitiveUri;

  @FhirField("PrimitiveDateTime")
  public publicationDate?: PrimitiveDateTime;

  @FhirField("PrimitiveDateTime")
  public presentationDate?: PrimitiveDateTime;

  public static parse(
    json: IImmunizationEducation,
    providedInstance: ImmunizationEducation = new ImmunizationEducation()
  ): ImmunizationEducation {
    const newInstance: ImmunizationEducation = BackboneElement.parse(json, providedInstance);
  
    if (json.documentType !== undefined) {
      newInstance.documentType = PrimitiveString.parsePrimitive(json.documentType, json._documentType);
    }
    if (json.reference !== undefined) {
      newInstance.reference = PrimitiveUri.parsePrimitive(json.reference, json._reference);
    }
    if (json.publicationDate !== undefined) {
      newInstance.publicationDate = PrimitiveDateTime.parsePrimitive(json.publicationDate, json._publicationDate);
    }
    if (json.presentationDate !== undefined) {
      newInstance.presentationDate = PrimitiveDateTime.parsePrimitive(json.presentationDate, json._presentationDate);
    }
    return newInstance;
  }

  public static isImmunizationEducation(input?: unknown): input is ImmunizationEducation {
    const castInput = input as ImmunizationEducation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImmunizationEducation";
  }

  public toJSON(): IImmunizationEducation {
    const result: IImmunizationEducation = super.toJSON();

    if (this.documentType) {
      result.documentType = this.documentType.value;
      result._documentType = Extension.serializePrimitiveExtension(this.documentType);
    }

    if (this.reference) {
      result.reference = this.reference.value;
      result._reference = Extension.serializePrimitiveExtension(this.reference);
    }

    if (this.publicationDate) {
      result.publicationDate = this.publicationDate.value;
      result._publicationDate = Extension.serializePrimitiveExtension(this.publicationDate);
    }

    if (this.presentationDate) {
      result.presentationDate = this.presentationDate.value;
      result._presentationDate = Extension.serializePrimitiveExtension(this.presentationDate);
    }

    return result;
  }

  public clone(): ImmunizationEducation {
    return ImmunizationEducation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ImmunizationEducation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
