/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Attachment,
  BackboneElement,
  CodeableConcept,
  Extension,
  ISubstanceSpecificationStructureRepresentation,
  PrimitiveString,
} from "../internal";

export class SubstanceSpecificationStructureRepresentation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSpecification.Structure.Representation";

  public type?: CodeableConcept;

  public representation?: PrimitiveString;

  public attachment?: Attachment;

  public static parse(
    json: ISubstanceSpecificationStructureRepresentation,
    providedInstance: SubstanceSpecificationStructureRepresentation = new SubstanceSpecificationStructureRepresentation()
  ): SubstanceSpecificationStructureRepresentation {
    const newInstance: SubstanceSpecificationStructureRepresentation = BackboneElement.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.representation) {
      newInstance.representation = PrimitiveString.parsePrimitive(json.representation, json._representation);
    }
    if (json.attachment) {
      newInstance.attachment = Attachment.parse(json.attachment);
    }
    return newInstance;
  }

  public static isSubstanceSpecificationStructureRepresentation(input?: unknown): input is SubstanceSpecificationStructureRepresentation {
    const castInput = input as SubstanceSpecificationStructureRepresentation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceSpecificationStructureRepresentation";
  }

  public toJSON(): ISubstanceSpecificationStructureRepresentation {
    const result: ISubstanceSpecificationStructureRepresentation = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.representation) {
      result.representation = this.representation.value;
      result._representation = Extension.serializePrimitiveExtension(this.representation);
    }

    if (this.attachment) {
      result.attachment = this.attachment.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "SubstanceSpecificationStructureRepresentation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
