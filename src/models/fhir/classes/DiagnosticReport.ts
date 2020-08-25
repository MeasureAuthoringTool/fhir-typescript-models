/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Attachment,
  CodeableConcept,
  DiagnosticReportMedia,
  DiagnosticReportStatus,
  DomainResource,
  Extension,
  Identifier,
  IDiagnosticReport,
  Period,
  PrimitiveDateTime,
  PrimitiveInstant,
  PrimitiveString,
  Reference,
} from "../internal";

export class DiagnosticReport extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DiagnosticReport";

  public identifier?: Array<Identifier>;

  public basedOn?: Array<Reference>;

  public status?: DiagnosticReportStatus;

  public category?: Array<CodeableConcept>;

  public code?: CodeableConcept;

  public subject?: Reference;

  public encounter?: Reference;

  public effective?: PrimitiveDateTime | Period;

  public issued?: PrimitiveInstant;

  public performer?: Array<Reference>;

  public resultsInterpreter?: Array<Reference>;

  public specimen?: Array<Reference>;

  public result?: Array<Reference>;

  public imagingStudy?: Array<Reference>;

  public media?: Array<DiagnosticReportMedia>;

  public conclusion?: PrimitiveString;

  public conclusionCode?: Array<CodeableConcept>;

  public presentedForm?: Array<Attachment>;

  public static parse(
    json: IDiagnosticReport,
    providedInstance: DiagnosticReport = new DiagnosticReport()
  ): DiagnosticReport {
    const newInstance: DiagnosticReport = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.basedOn) {
      newInstance.basedOn = json.basedOn.map((x) => Reference.parse(x));
    }
    if (json.status) {
      newInstance.status = DiagnosticReportStatus.parsePrimitive(json.status, json._status);
    }
    if (json.category) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.code) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.subject) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.encounter) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.effectiveDateTime) {
      newInstance.effective = PrimitiveDateTime.parsePrimitive(json.effectiveDateTime, json._effectiveDateTime);
    }
    if (json.effectivePeriod) {
      newInstance.effective = Period.parse(json.effectivePeriod);
    }
    if (json.issued) {
      newInstance.issued = PrimitiveInstant.parsePrimitive(json.issued, json._issued);
    }
    if (json.performer) {
      newInstance.performer = json.performer.map((x) => Reference.parse(x));
    }
    if (json.resultsInterpreter) {
      newInstance.resultsInterpreter = json.resultsInterpreter.map((x) => Reference.parse(x));
    }
    if (json.specimen) {
      newInstance.specimen = json.specimen.map((x) => Reference.parse(x));
    }
    if (json.result) {
      newInstance.result = json.result.map((x) => Reference.parse(x));
    }
    if (json.imagingStudy) {
      newInstance.imagingStudy = json.imagingStudy.map((x) => Reference.parse(x));
    }
    if (json.media) {
      newInstance.media = json.media.map((x) => DiagnosticReportMedia.parse(x));
    }
    if (json.conclusion) {
      newInstance.conclusion = PrimitiveString.parsePrimitive(json.conclusion, json._conclusion);
    }
    if (json.conclusionCode) {
      newInstance.conclusionCode = json.conclusionCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.presentedForm) {
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
  
  public getTypeName(): string {
    return "DiagnosticReport";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
