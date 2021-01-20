/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  AddressType,
  AddressUse,
  Element,
  Extension,
  FhirField,
  FhirList,
  IAddress,
  Period,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("Address", "Element")
export class Address extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Address";

  static readonly primaryCodePath: string | null = null;

  @FhirField("AddressUse")
  public use?: AddressUse;

  @FhirField("AddressType")
  public type?: AddressType;

  @FhirField("PrimitiveString")
  public text?: PrimitiveString;

  @FhirList("PrimitiveString")
  public line?: Array<PrimitiveString>;

  @FhirField("PrimitiveString")
  public city?: PrimitiveString;

  @FhirField("PrimitiveString")
  public district?: PrimitiveString;

  @FhirField("PrimitiveString")
  public state?: PrimitiveString;

  @FhirField("PrimitiveString")
  public postalCode?: PrimitiveString;

  @FhirField("PrimitiveString")
  public country?: PrimitiveString;

  @FhirField("Period")
  public period?: Period;

  public static parse(
    json: IAddress,
    providedInstance: Address = new Address()
  ): Address {
    const newInstance: Address = Element.parse(json, providedInstance);
  
    if (json.use !== undefined) {
      newInstance.use = AddressUse.parsePrimitive(json.use, json._use);
    }
    if (json.type !== undefined) {
      newInstance.type = AddressType.parsePrimitive(json.type, json._type);
    }
    if (json.text !== undefined) {
      newInstance.text = PrimitiveString.parsePrimitive(json.text, json._text);
    }
    if (json.line !== undefined) {
      newInstance.line = json.line.map((x, i) => PrimitiveString.parsePrimitive(x, json._line?.[i]));
    }
    if (json.city !== undefined) {
      newInstance.city = PrimitiveString.parsePrimitive(json.city, json._city);
    }
    if (json.district !== undefined) {
      newInstance.district = PrimitiveString.parsePrimitive(json.district, json._district);
    }
    if (json.state !== undefined) {
      newInstance.state = PrimitiveString.parsePrimitive(json.state, json._state);
    }
    if (json.postalCode !== undefined) {
      newInstance.postalCode = PrimitiveString.parsePrimitive(json.postalCode, json._postalCode);
    }
    if (json.country !== undefined) {
      newInstance.country = PrimitiveString.parsePrimitive(json.country, json._country);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    return newInstance;
  }

  public static isAddress(input?: unknown): input is Address {
    const castInput = input as Address;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Address";
  }

  public toJSON(): IAddress {
    const result: IAddress = super.toJSON();

    if (this.use) {
      result.use = this.use.value;
      result._use = Extension.serializePrimitiveExtension(this.use);
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.text) {
      result.text = this.text.value;
      result._text = Extension.serializePrimitiveExtension(this.text);
    }

    if (this.line) {
      result.line = this.line.filter(x => !!x).map(x => x.value) as typeof result.line;
      result._line = Extension.serializePrimitiveExtensionArray(this.line);
    }

    if (this.city) {
      result.city = this.city.value;
      result._city = Extension.serializePrimitiveExtension(this.city);
    }

    if (this.district) {
      result.district = this.district.value;
      result._district = Extension.serializePrimitiveExtension(this.district);
    }

    if (this.state) {
      result.state = this.state.value;
      result._state = Extension.serializePrimitiveExtension(this.state);
    }

    if (this.postalCode) {
      result.postalCode = this.postalCode.value;
      result._postalCode = Extension.serializePrimitiveExtension(this.postalCode);
    }

    if (this.country) {
      result.country = this.country.value;
      result._country = Extension.serializePrimitiveExtension(this.country);
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    return result;
  }

  public clone(): Address {
    return Address.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Address";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
