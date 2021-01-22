/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  FlagStatus,
  Identifier,
  IFlag,
  Period,
  Reference,
  FhirType
} from "../internal";

@FhirType("Flag", "DomainResource")
export class Flag extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Flag";

  static readonly primaryCodePath: string | null = "code";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("FlagStatus")
  public status?: FlagStatus;

  @FhirList("CodeableConcept")
  public category?: Array<CodeableConcept>;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirField("Period")
  public period?: Period;

  @FhirField("Reference")
  public encounter?: Reference;

  @FhirField("Reference")
  public author?: Reference;

  get primaryCode(): CodeableConcept | undefined {
    return this?.code;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: IFlag,
    providedInstance: Flag = new Flag()
  ): Flag {
    const newInstance: Flag = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = FlagStatus.parsePrimitive(json.status, json._status);
    }
    if (json.category !== undefined) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.encounter !== undefined) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.author !== undefined) {
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

  public clone(): Flag {
    return Flag.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Flag";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
