/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IRelatedPersonCommunication,
  PrimitiveBoolean,
} from "../internal";

export class RelatedPersonCommunication extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RelatedPerson.Communication";

  public language?: CodeableConcept;

  public preferred?: PrimitiveBoolean;

  public static parse(
    json: IRelatedPersonCommunication,
    providedInstance: RelatedPersonCommunication = new RelatedPersonCommunication()
  ): RelatedPersonCommunication {
    const newInstance: RelatedPersonCommunication = BackboneElement.parse(json, providedInstance);
  
    if (json.language) {
      newInstance.language = CodeableConcept.parse(json.language);
    }
    if (json.preferred) {
      newInstance.preferred = PrimitiveBoolean.parsePrimitive(json.preferred, json._preferred);
    }
    return newInstance;
  }

  public static isRelatedPersonCommunication(input?: unknown): input is RelatedPersonCommunication {
    const castInput = input as RelatedPersonCommunication;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "RelatedPersonCommunication";
  }

  public toJSON(): IRelatedPersonCommunication {
    const result: IRelatedPersonCommunication = super.toJSON();

    if (this.language) {
      result.language = this.language.toJSON();
    }

    if (this.preferred) {
      result.preferred = this.preferred.value;
      result._preferred = Extension.serializePrimitiveExtension(this.preferred);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "RelatedPersonCommunication";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
