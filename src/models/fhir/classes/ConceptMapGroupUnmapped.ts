/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  ConceptMapGroupUnmappedMode,
  Extension,
  FhirField,
  IConceptMapGroupUnmapped,
  PrimitiveCanonical,
  PrimitiveCode,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("ConceptMapGroupUnmapped", "BackboneElement")
export class ConceptMapGroupUnmapped extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ConceptMap.Group.Unmapped";

  static readonly primaryCodePath: string | null = null;

  @FhirField("ConceptMapGroupUnmappedMode")
  public mode?: ConceptMapGroupUnmappedMode;

  @FhirField("PrimitiveCode")
  public code?: PrimitiveCode;

  @FhirField("PrimitiveString")
  public display?: PrimitiveString;

  @FhirField("PrimitiveCanonical")
  public url?: PrimitiveCanonical;

  public static parse(
    json: IConceptMapGroupUnmapped,
    providedInstance: ConceptMapGroupUnmapped = new ConceptMapGroupUnmapped()
  ): ConceptMapGroupUnmapped {
    const newInstance: ConceptMapGroupUnmapped = BackboneElement.parse(json, providedInstance);
  
    if (json.mode !== undefined) {
      newInstance.mode = ConceptMapGroupUnmappedMode.parsePrimitive(json.mode, json._mode);
    }
    if (json.code !== undefined) {
      newInstance.code = PrimitiveCode.parsePrimitive(json.code, json._code);
    }
    if (json.display !== undefined) {
      newInstance.display = PrimitiveString.parsePrimitive(json.display, json._display);
    }
    if (json.url !== undefined) {
      newInstance.url = PrimitiveCanonical.parsePrimitive(json.url, json._url);
    }
    return newInstance;
  }

  public static isConceptMapGroupUnmapped(input?: unknown): input is ConceptMapGroupUnmapped {
    const castInput = input as ConceptMapGroupUnmapped;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ConceptMapGroupUnmapped";
  }

  public toJSON(): IConceptMapGroupUnmapped {
    const result: IConceptMapGroupUnmapped = super.toJSON();

    if (this.mode) {
      result.mode = this.mode.value;
      result._mode = Extension.serializePrimitiveExtension(this.mode);
    }

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.display) {
      result.display = this.display.value;
      result._display = Extension.serializePrimitiveExtension(this.display);
    }

    if (this.url) {
      result.url = this.url.value;
      result._url = Extension.serializePrimitiveExtension(this.url);
    }

    return result;
  }

  public clone(): ConceptMapGroupUnmapped {
    return ConceptMapGroupUnmapped.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ConceptMapGroupUnmapped";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
