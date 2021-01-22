/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  ContactPoint,
  Element,
  Extension,
  FhirField,
  FhirList,
  IContactDetail,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("ContactDetail", "Element")
export class ContactDetail extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ContactDetail";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirList("ContactPoint")
  public telecom?: Array<ContactPoint>;

  public static parse(
    json: IContactDetail,
    providedInstance: ContactDetail = new ContactDetail()
  ): ContactDetail {
    const newInstance: ContactDetail = Element.parse(json, providedInstance);
  
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.telecom !== undefined) {
      newInstance.telecom = json.telecom.map((x) => ContactPoint.parse(x));
    }
    return newInstance;
  }

  public static isContactDetail(input?: unknown): input is ContactDetail {
    const castInput = input as ContactDetail;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ContactDetail";
  }

  public toJSON(): IContactDetail {
    const result: IContactDetail = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.telecom) {
      result.telecom = this.telecom.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ContactDetail {
    return ContactDetail.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ContactDetail";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
