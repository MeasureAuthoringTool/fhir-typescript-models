/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  IBasic,
  Identifier,
  PrimitiveDate,
  Reference,
  FhirType
} from "../internal";

@FhirType("Basic", "DomainResource")
export class Basic extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Basic";

  static readonly primaryCodePath: string | null = "code";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirField("PrimitiveDate")
  public created?: PrimitiveDate;

  @FhirField("Reference")
  public author?: Reference;

  get primaryCode(): CodeableConcept | undefined {
    return this?.code;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: IBasic,
    providedInstance: Basic = new Basic()
  ): Basic {
    const newInstance: Basic = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.created !== undefined) {
      newInstance.created = PrimitiveDate.parsePrimitive(json.created, json._created);
    }
    if (json.author !== undefined) {
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

  public clone(): Basic {
    return Basic.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Basic";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
