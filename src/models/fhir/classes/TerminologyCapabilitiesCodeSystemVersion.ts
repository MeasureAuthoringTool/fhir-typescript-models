/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  FhirList,
  ITerminologyCapabilitiesCodeSystemVersion,
  PrimitiveBoolean,
  PrimitiveCode,
  PrimitiveString,
  TerminologyCapabilitiesCodeSystemVersionFilter,
  FhirType
} from "../internal";

@FhirType("TerminologyCapabilitiesCodeSystemVersion", "BackboneElement")
export class TerminologyCapabilitiesCodeSystemVersion extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TerminologyCapabilities.CodeSystem.Version";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public code?: PrimitiveString;

  @FhirField("PrimitiveBoolean")
  public isDefault?: PrimitiveBoolean;

  @FhirField("PrimitiveBoolean")
  public compositional?: PrimitiveBoolean;

  @FhirList("PrimitiveCode")
  public language?: Array<PrimitiveCode>;

  @FhirList("TerminologyCapabilitiesCodeSystemVersionFilter")
  public filter?: Array<TerminologyCapabilitiesCodeSystemVersionFilter>;

  @FhirList("PrimitiveCode")
  public property?: Array<PrimitiveCode>;

  public static parse(
    json: ITerminologyCapabilitiesCodeSystemVersion,
    providedInstance: TerminologyCapabilitiesCodeSystemVersion = new TerminologyCapabilitiesCodeSystemVersion()
  ): TerminologyCapabilitiesCodeSystemVersion {
    const newInstance: TerminologyCapabilitiesCodeSystemVersion = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = PrimitiveString.parsePrimitive(json.code, json._code);
    }
    if (json.isDefault !== undefined) {
      newInstance.isDefault = PrimitiveBoolean.parsePrimitive(json.isDefault, json._isDefault);
    }
    if (json.compositional !== undefined) {
      newInstance.compositional = PrimitiveBoolean.parsePrimitive(json.compositional, json._compositional);
    }
    if (json.language !== undefined) {
      newInstance.language = json.language.map((x, i) => PrimitiveCode.parsePrimitive(x, json._language?.[i]));
    }
    if (json.filter !== undefined) {
      newInstance.filter = json.filter.map((x) => TerminologyCapabilitiesCodeSystemVersionFilter.parse(x));
    }
    if (json.property !== undefined) {
      newInstance.property = json.property.map((x, i) => PrimitiveCode.parsePrimitive(x, json._property?.[i]));
    }
    return newInstance;
  }

  public static isTerminologyCapabilitiesCodeSystemVersion(input?: unknown): input is TerminologyCapabilitiesCodeSystemVersion {
    const castInput = input as TerminologyCapabilitiesCodeSystemVersion;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TerminologyCapabilitiesCodeSystemVersion";
  }

  public toJSON(): ITerminologyCapabilitiesCodeSystemVersion {
    const result: ITerminologyCapabilitiesCodeSystemVersion = super.toJSON();

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.isDefault) {
      result.isDefault = this.isDefault.value;
      result._isDefault = Extension.serializePrimitiveExtension(this.isDefault);
    }

    if (this.compositional) {
      result.compositional = this.compositional.value;
      result._compositional = Extension.serializePrimitiveExtension(this.compositional);
    }

    if (this.language) {
      result.language = this.language.filter(x => !!x).map(x => x.value) as typeof result.language;
      result._language = Extension.serializePrimitiveExtensionArray(this.language);
    }

    if (this.filter) {
      result.filter = this.filter.map((x) => x.toJSON());
    }

    if (this.property) {
      result.property = this.property.filter(x => !!x).map(x => x.value) as typeof result.property;
      result._property = Extension.serializePrimitiveExtensionArray(this.property);
    }

    return result;
  }

  public clone(): TerminologyCapabilitiesCodeSystemVersion {
    return TerminologyCapabilitiesCodeSystemVersion.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TerminologyCapabilitiesCodeSystemVersion";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
