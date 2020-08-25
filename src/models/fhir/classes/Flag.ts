/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  FlagStatus,
  Identifier,
  IFlag,
  Period,
  Reference,
} from "../internal";

export class Flag extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Flag";

  public identifier?: Array<Identifier>;

  public status?: FlagStatus;

  public category?: Array<CodeableConcept>;

  public code?: CodeableConcept;

  public subject?: Reference;

  public period?: Period;

  public encounter?: Reference;

  public author?: Reference;

  public static parse(
    json: IFlag,
    providedInstance: Flag = new Flag()
  ): Flag {
    const newInstance: Flag = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status) {
      newInstance.status = FlagStatus.parsePrimitive(json.status, json._status);
    }
    if (json.category) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.code) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.subject) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.period) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.encounter) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.author) {
      newInstance.author = Reference.parse(json.author);
    }
    return newInstance;
  }

  public static isFlag(input?: unknown): input is Flag {
    const castInput = input as Flag;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Flag";
  }

  public toJSON(): IFlag {
    const result: IFlag = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.category) {
      result.category = this.category.map((x) => x.toJSON());
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.encounter) {
      result.encounter = this.encounter.toJSON();
    }

    if (this.author) {
      result.author = this.author.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "Flag";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
