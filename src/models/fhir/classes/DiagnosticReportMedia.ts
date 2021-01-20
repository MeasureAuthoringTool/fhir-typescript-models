/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IDiagnosticReportMedia,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("DiagnosticReportMedia", "BackboneElement")
export class DiagnosticReportMedia extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DiagnosticReport.Media";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public comment?: PrimitiveString;

  @FhirField("Reference")
  public link?: Reference;

  public static parse(
    json: IDiagnosticReportMedia,
    providedInstance: DiagnosticReportMedia = new DiagnosticReportMedia()
  ): DiagnosticReportMedia {
    const newInstance: DiagnosticReportMedia = BackboneElement.parse(json, providedInstance);
  
    if (json.comment !== undefined) {
      newInstance.comment = PrimitiveString.parsePrimitive(json.comment, json._comment);
    }
    if (json.link !== undefined) {
      newInstance.link = Reference.parse(json.link);
    }
    return newInstance;
  }

  public static isDiagnosticReportMedia(input?: unknown): input is DiagnosticReportMedia {
    const castInput = input as DiagnosticReportMedia;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DiagnosticReportMedia";
  }

  public toJSON(): IDiagnosticReportMedia {
    const result: IDiagnosticReportMedia = super.toJSON();

    if (this.comment) {
      result.comment = this.comment.value;
      result._comment = Extension.serializePrimitiveExtension(this.comment);
    }

    if (this.link) {
      result.link = this.link.toJSON();
    }

    return result;
  }

  public clone(): DiagnosticReportMedia {
    return DiagnosticReportMedia.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DiagnosticReportMedia";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
