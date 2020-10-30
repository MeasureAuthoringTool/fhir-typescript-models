/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  ContactDetail,
  ContributorType,
  Element,
  Extension,
  IContributor,
  PrimitiveString,
  FieldMetadata
} from "../internal";

export class Contributor extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Contributor";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...Element.fieldInfo, {
      fieldName: "type",
      fieldType: [ContributorType],
      isArray: false
    }, {
      fieldName: "name",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "contact",
      fieldType: [ContactDetail],
      isArray: true
    }];
  }

  public type?: ContributorType;

  public name?: PrimitiveString;

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
