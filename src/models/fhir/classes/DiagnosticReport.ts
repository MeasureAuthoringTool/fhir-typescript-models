/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Attachment,
  CodeableConcept,
  DiagnosticReportMedia,
  DiagnosticReportStatus,
  DomainResource,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  Identifier,
  IDiagnosticReport,
  Period,
  PrimitiveDateTime,
  PrimitiveInstant,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("DiagnosticReport", "DomainResource")
export class DiagnosticReport extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DiagnosticReport";

  static readonly primaryCodePath: string | null = "code";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirList("Reference")
  public basedOn?: Array<Reference>;

  @FhirField("DiagnosticReportStatus")
  public status?: DiagnosticReportStatus;

  @FhirList("CodeableConcept")
  public category?: Array<CodeableConcept>;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirField("Reference")
  public encounter?: Reference;

  @FhirChoice("PrimitiveDateTime", "Period")
  public effective?: PrimitiveDateTime | Period;

  @FhirField("PrimitiveInstant")
  public issued?: PrimitiveInstant;

  @FhirList("Reference")
  public performer?: Array<Reference>;

  @FhirList("Reference")
  public resultsInterpreter?: Array<Reference>;

  @FhirList("Reference")
  public specimen?: Array<Reference>;

  @FhirList("Reference")
  public result?: Array<Reference>;

  @FhirList("Reference")
  public imagingStudy?: Array<Reference>;

  @FhirList("DiagnosticReportMedia")
  public media?: Array<DiagnosticReportMedia>;

  @FhirField("PrimitiveString")
  public conclusion?: PrimitiveString;

  @FhirList("CodeableConcept")
  public conclusionCode?: Array<CodeableConcept>;

  @FhirList("Attachment")
  public presentedForm?: Array<Attachment>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.code;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: IDiagnosticReport,
    providedInstance: DiagnosticReport = new DiagnosticReport()
  ): DiagnosticReport {
    const newInstance: DiagnosticReport = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.basedOn !== undefined) {
      newInstance.basedOn = json.basedOn.map((x) => Reference.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = DiagnosticReportStatus.parsePrimitive(json.status, json._status);
    }
    if (json.category !== undefined) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.encounter !== undefined) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.effectiveDateTime !== undefined) {
      newInstance.effective = PrimitiveDateTime.parsePrimitive(json.effectiveDateTime, json._effectiveDateTime);
    }
    if (json.effectivePeriod !== undefined) {
      newInstance.effective = Period.parse(json.effectivePeriod);
    }
    if (json.issued !== undefined) {
      newInstance.issued = PrimitiveInstant.parsePrimitive(json.issued, json._issued);
    }
    if (json.performer !== undefined) {
      newInstance.performer = json.performer.map((x) => Reference.parse(x));
    }
    if (json.resultsInterpreter !== undefined) {
      newInstance.resultsInterpreter = json.resultsInterpreter.map((x) => Reference.parse(x));
    }
    if (json.specimen !== undefined) {
      newInstance.specimen = json.specimen.map((x) => Reference.parse(x));
    }
    if (json.result !== undefined) {
      newInstance.result = json.result.map((x) => Reference.parse(x));
    }
    if (json.imagingStudy !== undefined) {
      newInstance.imagingStudy = json.imagingStudy.map((x) => Reference.parse(x));
    }
    if (json.media !== undefined) {
      newInstance.media = json.media.map((x) => DiagnosticReportMedia.parse(x));
    }
    if (json.conclusion !== undefined) {
      newInstance.conclusion = PrimitiveString.parsePrimitive(json.conclusion, json._conclusion);
    }
    if (json.conclusionCode !== undefined) {
      newInstance.conclusionCode = json.conclusionCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.presentedForm !== undefined) {
      newInstance.presentedForm = json.presentedForm.map((x) => Attachment.parse(x));
    }
    return newInstance;
  }

  public static isDiagnosticReport(input?: unknown): input is DiagnosticReport {
    const castInput = input as DiagnosticReport;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DiagnosticReport";
  }

  public toJSON(): IDiagnosticReport {
    const result: IDiagnosticReport = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.basedOn) {
      result.basedOn = this.basedOn.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.category) {
      result.category = this.category.map((x) => x.toJSON());
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.encounter) {
      result.encounter = this.encounter.toJSON();
    }

    if (this.effective && PrimitiveDateTime.isPrimitiveDateTime(this.effective)) {
      result.effectiveDateTime = this.effective.value;
      result._effectiveDateTime = Extension.serializePrimitiveExtension(this.effective);
    }

    if (this.effective && Period.isPeriod(this.effective)) {
      result.effectivePeriod = this.effective.toJSON();
    }

    if (this.issued) {
      result.issued = this.issued.value;
      result._issued = Extension.serializePrimitiveExtension(this.issued);
    }

    if (this.performer) {
      result.performer = this.performer.map((x) => x.toJSON());
    }

    if (this.resultsInterpreter) {
      result.resultsInterpreter = this.resultsInterpreter.map((x) => x.toJSON());
    }

    if (this.specimen) {
      result.specimen = this.specimen.map((x) => x.toJSON());
    }

    if (this.result) {
      result.result = this.result.map((x) => x.toJSON());
    }

    if (this.imagingStudy) {
      result.imagingStudy = this.imagingStudy.map((x) => x.toJSON());
    }

    if (this.media) {
      result.media = this.media.map((x) => x.toJSON());
    }

    if (this.conclusion) {
      result.conclusion = this.conclusion.value;
      result._conclusion = Extension.serializePrimitiveExtension(this.conclusion);
    }

    if (this.conclusionCode) {
      result.conclusionCode = this.conclusionCode.map((x) => x.toJSON());
    }

    if (this.presentedForm) {
      result.presentedForm = this.presentedForm.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): DiagnosticReport {
    return DiagnosticReport.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DiagnosticReport";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
