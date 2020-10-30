/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  ISubstanceSpecificationNameOfficial,
  PrimitiveDateTime,
  FieldMetadata
} from "../internal";

export class SubstanceSpecificationNameOfficial extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSpecification.Name.Official";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "authority",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "status",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "date",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }];
  }

  public authority?: CodeableConcept;

  public status?: CodeableConcept;

  public date?: PrimitiveDateTime;

  public static parse(
    json: ISubstanceSpecificationNameOfficial,
    providedInstance: SubstanceSpecificationNameOfficial = new SubstanceSpecificationNameOfficial()
  ): SubstanceSpecificationNameOfficial {
    const newInstance: SubstanceSpecificationNameOfficial = BackboneElement.parse(json, providedInstance);
  
    if (json.authority !== undefined) {
      newInstance.authority = CodeableConcept.parse(json.authority);
    }
    if (json.status !== undefined) {
      newInstance.status = CodeableConcept.parse(json.status);
    }
    if (json.date !== undefined) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    return newInstance;
  }

  public static isSubstanceSpecificationNameOfficial(input?: unknown): input is SubstanceSpecificationNameOfficial {
    const castInput = input as SubstanceSpecificationNameOfficial;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceSpecificationNameOfficial";
  }

  public toJSON(): ISubstanceSpecificationNameOfficial {
    const result: ISubstanceSpecificationNameOfficial = super.toJSON();

    if (this.authority) {
      result.authority = this.authority.toJSON();
    }

    if (this.status) {
      result.status = this.status.toJSON();
    }

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    return result;
  }

  public clone(): SubstanceSpecificationNameOfficial {
    return SubstanceSpecificationNameOfficial.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceSpecificationNameOfficial";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
