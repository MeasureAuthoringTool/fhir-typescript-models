/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IImplementationGuideDependsOn,
  PrimitiveCanonical,
  PrimitiveId,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("ImplementationGuideDependsOn", "BackboneElement")
export class ImplementationGuideDependsOn extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImplementationGuide.DependsOn";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveCanonical")
  public uri?: PrimitiveCanonical;

  @FhirField("PrimitiveId")
  public packageId?: PrimitiveId;

  @FhirField("PrimitiveString")
  public version?: PrimitiveString;

  public static parse(
    json: IImplementationGuideDependsOn,
    providedInstance: ImplementationGuideDependsOn = new ImplementationGuideDependsOn()
  ): ImplementationGuideDependsOn {
    const newInstance: ImplementationGuideDependsOn = BackboneElement.parse(json, providedInstance);
  
    if (json.uri !== undefined) {
      newInstance.uri = PrimitiveCanonical.parsePrimitive(json.uri, json._uri);
    }
    if (json.packageId !== undefined) {
      newInstance.packageId = PrimitiveId.parsePrimitive(json.packageId, json._packageId);
    }
    if (json.version !== undefined) {
      newInstance.version = PrimitiveString.parsePrimitive(json.version, json._version);
    }
    return newInstance;
  }

  public static isImplementationGuideDependsOn(input?: unknown): input is ImplementationGuideDependsOn {
    const castInput = input as ImplementationGuideDependsOn;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImplementationGuideDependsOn";
  }

  public toJSON(): IImplementationGuideDependsOn {
    const result: IImplementationGuideDependsOn = super.toJSON();

    if (this.uri) {
      result.uri = this.uri.value;
      result._uri = Extension.serializePrimitiveExtension(this.uri);
    }

    if (this.packageId) {
      result.packageId = this.packageId.value;
      result._packageId = Extension.serializePrimitiveExtension(this.packageId);
    }

    if (this.version) {
      result.version = this.version.value;
      result._version = Extension.serializePrimitiveExtension(this.version);
    }

    return result;
  }

  public clone(): ImplementationGuideDependsOn {
    return ImplementationGuideDependsOn.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ImplementationGuideDependsOn";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
