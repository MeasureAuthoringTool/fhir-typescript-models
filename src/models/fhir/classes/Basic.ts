/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  IBasic,
  Identifier,
  PrimitiveDate,
  Reference,
} from "../internal";

export class Basic extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Basic";

  public identifier?: Array<Identifier>;

  public code?: CodeableConcept;

  public subject?: Reference;

  public created?: PrimitiveDate;

  public author?: Reference;

  public static parse(
    json: IBasic,
    providedInstance: Basic = new Basic()
  ): Basic {
    const newInstance: Basic = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.code) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.subject) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.created) {
      newInstance.created = PrimitiveDate.parsePrimitive(json.created, json._created);
    }
    if (json.author) {
      newInstance.author = Reference.parse(json.author);
    }
    return newInstance;
  }

  public static isBasic(input?: unknown): input is Basic {
    const castInput = input as Basic;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Basic";
  }

  public toJSON(): IBasic {
    const result: IBasic = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.created) {
      result.created = this.created.value;
      result._created = Extension.serializePrimitiveExtension(this.created);
    }

    if (this.author) {
      result.author = this.author.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "Basic";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
