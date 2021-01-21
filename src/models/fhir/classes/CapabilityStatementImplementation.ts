/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  ICapabilityStatementImplementation,
  PrimitiveString,
  PrimitiveUrl,
  Reference,
  FhirType
} from "../internal";

@FhirType("CapabilityStatementImplementation", "BackboneElement")
export class CapabilityStatementImplementation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CapabilityStatement.Implementation";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirField("PrimitiveUrl")
  public url?: PrimitiveUrl;

  @FhirField("Reference")
  public custodian?: Reference;

  public static parse(
    json: ICapabilityStatementImplementation,
    providedInstance: CapabilityStatementImplementation = new CapabilityStatementImplementation()
  ): CapabilityStatementImplementation {
    const newInstance: CapabilityStatementImplementation = BackboneElement.parse(json, providedInstance);
  
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.url !== undefined) {
      newInstance.url = PrimitiveUrl.parsePrimitive(json.url, json._url);
    }
    if (json.custodian !== undefined) {
      newInstance.custodian = Reference.parse(json.custodian);
    }
    return newInstance;
  }

  public static isCapabilityStatementImplementation(input?: unknown): input is CapabilityStatementImplementation {
    const castInput = input as CapabilityStatementImplementation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CapabilityStatementImplementation";
  }

  public toJSON(): ICapabilityStatementImplementation {
    const result: ICapabilityStatementImplementation = super.toJSON();

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.url) {
      result.url = this.url.value;
      result._url = Extension.serializePrimitiveExtension(this.url);
    }

    if (this.custodian) {
      result.custodian = this.custodian.toJSON();
    }

    return result;
  }

  public clone(): CapabilityStatementImplementation {
    return CapabilityStatementImplementation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CapabilityStatementImplementation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
