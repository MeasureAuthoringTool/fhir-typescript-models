/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  ConsentDataMeaning,
  Extension,
  FhirField,
  IConsentProvisionData,
  Reference,
  FhirType
} from "../internal";

@FhirType("ConsentProvisionData", "BackboneElement")
export class ConsentProvisionData extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Consent.Provision.Data";

  static readonly primaryCodePath: string | null = null;

  @FhirField("ConsentDataMeaning")
  public meaning?: ConsentDataMeaning;

  @FhirField("Reference")
  public reference?: Reference;

  public static parse(
    json: IConsentProvisionData,
    providedInstance: ConsentProvisionData = new ConsentProvisionData()
  ): ConsentProvisionData {
    const newInstance: ConsentProvisionData = BackboneElement.parse(json, providedInstance);
  
    if (json.meaning !== undefined) {
      newInstance.meaning = ConsentDataMeaning.parsePrimitive(json.meaning, json._meaning);
    }
    if (json.reference !== undefined) {
      newInstance.reference = Reference.parse(json.reference);
    }
    return newInstance;
  }

  public static isConsentProvisionData(input?: unknown): input is ConsentProvisionData {
    const castInput = input as ConsentProvisionData;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ConsentProvisionData";
  }

  public toJSON(): IConsentProvisionData {
    const result: IConsentProvisionData = super.toJSON();

    if (this.meaning) {
      result.meaning = this.meaning.value;
      result._meaning = Extension.serializePrimitiveExtension(this.meaning);
    }

    if (this.reference) {
      result.reference = this.reference.toJSON();
    }

    return result;
  }

  public clone(): ConsentProvisionData {
    return ConsentProvisionData.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ConsentProvisionData";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
