/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  DocumentMode,
  Extension,
  FhirField,
  ICapabilityStatementDocument,
  PrimitiveCanonical,
  PrimitiveMarkdown,
  FhirType
} from "../internal";

@FhirType("CapabilityStatementDocument", "BackboneElement")
export class CapabilityStatementDocument extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CapabilityStatement.Document";

  static readonly primaryCodePath: string | null = null;

  @FhirField("DocumentMode")
  public mode?: DocumentMode;

  @FhirField("PrimitiveMarkdown")
  public documentation?: PrimitiveMarkdown;

  @FhirField("PrimitiveCanonical")
  public profile?: PrimitiveCanonical;

  public static parse(
    json: ICapabilityStatementDocument,
    providedInstance: CapabilityStatementDocument = new CapabilityStatementDocument()
  ): CapabilityStatementDocument {
    const newInstance: CapabilityStatementDocument = BackboneElement.parse(json, providedInstance);
  
    if (json.mode !== undefined) {
      newInstance.mode = DocumentMode.parsePrimitive(json.mode, json._mode);
    }
    if (json.documentation !== undefined) {
      newInstance.documentation = PrimitiveMarkdown.parsePrimitive(json.documentation, json._documentation);
    }
    if (json.profile !== undefined) {
      newInstance.profile = PrimitiveCanonical.parsePrimitive(json.profile, json._profile);
    }
    return newInstance;
  }

  public static isCapabilityStatementDocument(input?: unknown): input is CapabilityStatementDocument {
    const castInput = input as CapabilityStatementDocument;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CapabilityStatementDocument";
  }

  public toJSON(): ICapabilityStatementDocument {
    const result: ICapabilityStatementDocument = super.toJSON();

    if (this.mode) {
      result.mode = this.mode.value;
      result._mode = Extension.serializePrimitiveExtension(this.mode);
    }

    if (this.documentation) {
      result.documentation = this.documentation.value;
      result._documentation = Extension.serializePrimitiveExtension(this.documentation);
    }

    if (this.profile) {
      result.profile = this.profile.value;
      result._profile = Extension.serializePrimitiveExtension(this.profile);
    }

    return result;
  }

  public clone(): CapabilityStatementDocument {
    return CapabilityStatementDocument.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CapabilityStatementDocument";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
