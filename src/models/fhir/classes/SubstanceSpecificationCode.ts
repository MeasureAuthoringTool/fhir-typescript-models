/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  FhirList,
  ISubstanceSpecificationCode,
  PrimitiveDateTime,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("SubstanceSpecificationCode", "BackboneElement")
export class SubstanceSpecificationCode extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSpecification.Code";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirField("CodeableConcept")
  public status?: CodeableConcept;

  @FhirField("PrimitiveDateTime")
  public statusDate?: PrimitiveDateTime;

  @FhirField("PrimitiveString")
  public comment?: PrimitiveString;

  @FhirList("Reference")
  public source?: Array<Reference>;

  public static parse(
    json: ISubstanceSpecificationCode,
    providedInstance: SubstanceSpecificationCode = new SubstanceSpecificationCode()
  ): SubstanceSpecificationCode {
    const newInstance: SubstanceSpecificationCode = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.status !== undefined) {
      newInstance.status = CodeableConcept.parse(json.status);
    }
    if (json.statusDate !== undefined) {
      newInstance.statusDate = PrimitiveDateTime.parsePrimitive(json.statusDate, json._statusDate);
    }
    if (json.comment !== undefined) {
      newInstance.comment = PrimitiveString.parsePrimitive(json.comment, json._comment);
    }
    if (json.source !== undefined) {
      newInstance.source = json.source.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isSubstanceSpecificationCode(input?: unknown): input is SubstanceSpecificationCode {
    const castInput = input as SubstanceSpecificationCode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceSpecificationCode";
  }

  public toJSON(): ISubstanceSpecificationCode {
    const result: ISubstanceSpecificationCode = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.status) {
      result.status = this.status.toJSON();
    }

    if (this.statusDate) {
      result.statusDate = this.statusDate.value;
      result._statusDate = Extension.serializePrimitiveExtension(this.statusDate);
    }

    if (this.comment) {
      result.comment = this.comment.value;
      result._comment = Extension.serializePrimitiveExtension(this.comment);
    }

    if (this.source) {
      result.source = this.source.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): SubstanceSpecificationCode {
    return SubstanceSpecificationCode.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceSpecificationCode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
