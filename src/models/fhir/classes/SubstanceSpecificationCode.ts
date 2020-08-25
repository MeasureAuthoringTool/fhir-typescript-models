/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  ISubstanceSpecificationCode,
  PrimitiveDateTime,
  PrimitiveString,
  Reference,
} from "../internal";

export class SubstanceSpecificationCode extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSpecification.Code";

  public code?: CodeableConcept;

  public status?: CodeableConcept;

  public statusDate?: PrimitiveDateTime;

  public comment?: PrimitiveString;

  public source?: Array<Reference>;

  public static parse(
    json: ISubstanceSpecificationCode,
    providedInstance: SubstanceSpecificationCode = new SubstanceSpecificationCode()
  ): SubstanceSpecificationCode {
    const newInstance: SubstanceSpecificationCode = BackboneElement.parse(json, providedInstance);
  
    if (json.code) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.status) {
      newInstance.status = CodeableConcept.parse(json.status);
    }
    if (json.statusDate) {
      newInstance.statusDate = PrimitiveDateTime.parsePrimitive(json.statusDate, json._statusDate);
    }
    if (json.comment) {
      newInstance.comment = PrimitiveString.parsePrimitive(json.comment, json._comment);
    }
    if (json.source) {
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
  
  public getTypeName(): string {
    return "SubstanceSpecificationCode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
