/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  ContactDetail,
  ContributorType,
  Element,
  Extension,
  FhirField,
  FhirList,
  IContributor,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("Contributor", "Element")
export class Contributor extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Contributor";

  static readonly primaryCodePath: string | null = null;

  @FhirField("ContributorType")
  public type?: ContributorType;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirList("ContactDetail")
  public contact?: Array<ContactDetail>;

  public static parse(
    json: IContributor,
    providedInstance: Contributor = new Contributor()
  ): Contributor {
    const newInstance: Contributor = Element.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = ContributorType.parsePrimitive(json.type, json._type);
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.contact !== undefined) {
      newInstance.contact = json.contact.map((x) => ContactDetail.parse(x));
    }
    return newInstance;
  }

  public static isContributor(input?: unknown): input is Contributor {
    const castInput = input as Contributor;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Contributor";
  }

  public toJSON(): IContributor {
    const result: IContributor = super.toJSON();

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.contact) {
      result.contact = this.contact.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): Contributor {
    return Contributor.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Contributor";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
