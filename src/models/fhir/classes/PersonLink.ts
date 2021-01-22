/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IdentityAssuranceLevel,
  IPersonLink,
  Reference,
  FhirType
} from "../internal";

@FhirType("PersonLink", "BackboneElement")
export class PersonLink extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Person.Link";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Reference")
  public target?: Reference;

  @FhirField("IdentityAssuranceLevel")
  public assurance?: IdentityAssuranceLevel;

  public static parse(
    json: IPersonLink,
    providedInstance: PersonLink = new PersonLink()
  ): PersonLink {
    const newInstance: PersonLink = BackboneElement.parse(json, providedInstance);
  
    if (json.target !== undefined) {
      newInstance.target = Reference.parse(json.target);
    }
    if (json.assurance !== undefined) {
      newInstance.assurance = IdentityAssuranceLevel.parsePrimitive(json.assurance, json._assurance);
    }
    return newInstance;
  }

  public static isPersonLink(input?: unknown): input is PersonLink {
    const castInput = input as PersonLink;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PersonLink";
  }

  public toJSON(): IPersonLink {
    const result: IPersonLink = super.toJSON();

    if (this.target) {
      result.target = this.target.toJSON();
    }

    if (this.assurance) {
      result.assurance = this.assurance.value;
      result._assurance = Extension.serializePrimitiveExtension(this.assurance);
    }

    return result;
  }

  public clone(): PersonLink {
    return PersonLink.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "PersonLink";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
