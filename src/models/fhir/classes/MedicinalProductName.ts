/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IMedicinalProductName,
  MedicinalProductNameCountryLanguage,
  MedicinalProductNameNamePart,
  PrimitiveString,
} from "../internal";

export class MedicinalProductName extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProduct.Name";

  public productName?: PrimitiveString;

  public namePart?: Array<MedicinalProductNameNamePart>;

  public countryLanguage?: Array<MedicinalProductNameCountryLanguage>;

  public static parse(
    json: IMedicinalProductName,
    providedInstance: MedicinalProductName = new MedicinalProductName()
  ): MedicinalProductName {
    const newInstance: MedicinalProductName = BackboneElement.parse(json, providedInstance);
  
    if (json.productName) {
      newInstance.productName = PrimitiveString.parsePrimitive(json.productName, json._productName);
    }
    if (json.namePart) {
      newInstance.namePart = json.namePart.map((x) => MedicinalProductNameNamePart.parse(x));
    }
    if (json.countryLanguage) {
      newInstance.countryLanguage = json.countryLanguage.map((x) => MedicinalProductNameCountryLanguage.parse(x));
    }
    return newInstance;
  }

  public static isMedicinalProductName(input?: unknown): input is MedicinalProductName {
    const castInput = input as MedicinalProductName;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductName";
  }

  public toJSON(): IMedicinalProductName {
    const result: IMedicinalProductName = super.toJSON();

    if (this.productName) {
      result.productName = this.productName.value;
      result._productName = Extension.serializePrimitiveExtension(this.productName);
    }

    if (this.namePart) {
      result.namePart = this.namePart.map((x) => x.toJSON());
    }

    if (this.countryLanguage) {
      result.countryLanguage = this.countryLanguage.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MedicinalProductName";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
