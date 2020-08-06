/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Attachment,
  BackboneElement,
  CodeableConcept,
  Extension,
  ISubstancePolymerRepeatRepeatUnitStructuralRepresentation,
  PrimitiveString,
} from "../internal";

export class SubstancePolymerRepeatRepeatUnitStructuralRepresentation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstancePolymer.Repeat.RepeatUnit.StructuralRepresentation";

  public type?: CodeableConcept;

  public representation?: PrimitiveString;

  public attachment?: Attachment;

  public static parse(
    json: ISubstancePolymerRepeatRepeatUnitStructuralRepresentation,
    providedInstance: SubstancePolymerRepeatRepeatUnitStructuralRepresentation = new SubstancePolymerRepeatRepeatUnitStructuralRepresentation()
  ): SubstancePolymerRepeatRepeatUnitStructuralRepresentation {
    const newInstance: SubstancePolymerRepeatRepeatUnitStructuralRepresentation = BackboneElement.parse(json, providedInstance);
  
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

  public static isSubstancePolymerRepeatRepeatUnitStructuralRepresentation(input?: unknown): input is SubstancePolymerRepeatRepeatUnitStructuralRepresentation {
    const castInput = input as SubstancePolymerRepeatRepeatUnitStructuralRepresentation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstancePolymerRepeatRepeatUnitStructuralRepresentation";
  }

  public toJSON(): ISubstancePolymerRepeatRepeatUnitStructuralRepresentation {
    const result: ISubstancePolymerRepeatRepeatUnitStructuralRepresentation = super.toJSON();

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
    return "SubstancePolymerRepeatRepeatUnitStructuralRepresentation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
