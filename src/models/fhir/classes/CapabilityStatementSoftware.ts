/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  ICapabilityStatementSoftware,
  PrimitiveDateTime,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("CapabilityStatementSoftware", "BackboneElement")
export class CapabilityStatementSoftware extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CapabilityStatement.Software";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("PrimitiveString")
  public version?: PrimitiveString;

  @FhirField("PrimitiveDateTime")
  public releaseDate?: PrimitiveDateTime;

  public static parse(
    json: ICapabilityStatementSoftware,
    providedInstance: CapabilityStatementSoftware = new CapabilityStatementSoftware()
  ): CapabilityStatementSoftware {
    const newInstance: CapabilityStatementSoftware = BackboneElement.parse(json, providedInstance);
  
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.version !== undefined) {
      newInstance.version = PrimitiveString.parsePrimitive(json.version, json._version);
    }
    if (json.releaseDate !== undefined) {
      newInstance.releaseDate = PrimitiveDateTime.parsePrimitive(json.releaseDate, json._releaseDate);
    }
    return newInstance;
  }

  public static isCapabilityStatementSoftware(input?: unknown): input is CapabilityStatementSoftware {
    const castInput = input as CapabilityStatementSoftware;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CapabilityStatementSoftware";
  }

  public toJSON(): ICapabilityStatementSoftware {
    const result: ICapabilityStatementSoftware = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.version) {
      result.version = this.version.value;
      result._version = Extension.serializePrimitiveExtension(this.version);
    }

    if (this.releaseDate) {
      result.releaseDate = this.releaseDate.value;
      result._releaseDate = Extension.serializePrimitiveExtension(this.releaseDate);
    }

    return result;
  }

  public clone(): CapabilityStatementSoftware {
    return CapabilityStatementSoftware.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CapabilityStatementSoftware";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
