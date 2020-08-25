/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  ClinicalImpressionFinding,
  ClinicalImpressionInvestigation,
  ClinicalImpressionStatus,
  CodeableConcept,
  DomainResource,
  Extension,
  IClinicalImpression,
  Identifier,
  Period,
  PrimitiveDateTime,
  PrimitiveString,
  PrimitiveUri,
  Reference,
} from "../internal";

export class ClinicalImpression extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ClinicalImpression";

  public identifier?: Array<Identifier>;

  public status?: ClinicalImpressionStatus;

  public statusReason?: CodeableConcept;

  public code?: CodeableConcept;

  public description?: PrimitiveString;

  public subject?: Reference;

  public encounter?: Reference;

  public effective?: PrimitiveDateTime | Period;

  public date?: PrimitiveDateTime;

  public assessor?: Reference;

  public previous?: Reference;

  public problem?: Array<Reference>;

  public investigation?: Array<ClinicalImpressionInvestigation>;

  public protocol?: Array<PrimitiveUri>;

  public summary?: PrimitiveString;

  public finding?: Array<ClinicalImpressionFinding>;

  public prognosisCodeableConcept?: Array<CodeableConcept>;

  public prognosisReference?: Array<Reference>;

  public supportingInfo?: Array<Reference>;

  public note?: Array<Annotation>;

  public static parse(
    json: IClinicalImpression,
    providedInstance: ClinicalImpression = new ClinicalImpression()
  ): ClinicalImpression {
    const newInstance: ClinicalImpression = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = ClinicalImpressionStatus.parsePrimitive(json.status, json._status);
    }
    if (json.statusReason !== undefined) {
      newInstance.statusReason = CodeableConcept.parse(json.statusReason);
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
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
    if (json.date !== undefined) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.assessor !== undefined) {
      newInstance.assessor = Reference.parse(json.assessor);
    }
    if (json.previous !== undefined) {
      newInstance.previous = Reference.parse(json.previous);
    }
    if (json.problem !== undefined) {
      newInstance.problem = json.problem.map((x) => Reference.parse(x));
    }
    if (json.investigation !== undefined) {
      newInstance.investigation = json.investigation.map((x) => ClinicalImpressionInvestigation.parse(x));
    }
    if (json.protocol !== undefined) {
      newInstance.protocol = json.protocol.map((x, i) => {
        const ext = json._protocol && json._protocol[i];
        return PrimitiveUri.parsePrimitive(x, ext);
      });
    }
    if (json.summary !== undefined) {
      newInstance.summary = PrimitiveString.parsePrimitive(json.summary, json._summary);
    }
    if (json.finding !== undefined) {
      newInstance.finding = json.finding.map((x) => ClinicalImpressionFinding.parse(x));
    }
    if (json.prognosisCodeableConcept !== undefined) {
      newInstance.prognosisCodeableConcept = json.prognosisCodeableConcept.map((x) => CodeableConcept.parse(x));
    }
    if (json.prognosisReference !== undefined) {
      newInstance.prognosisReference = json.prognosisReference.map((x) => Reference.parse(x));
    }
    if (json.supportingInfo !== undefined) {
      newInstance.supportingInfo = json.supportingInfo.map((x) => Reference.parse(x));
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    return newInstance;
  }

  public static isClinicalImpression(input?: unknown): input is ClinicalImpression {
    const castInput = input as ClinicalImpression;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClinicalImpression";
  }

  public toJSON(): IClinicalImpression {
    const result: IClinicalImpression = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.statusReason) {
      result.statusReason = this.statusReason.toJSON();
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
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

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.assessor) {
      result.assessor = this.assessor.toJSON();
    }

    if (this.previous) {
      result.previous = this.previous.toJSON();
    }

    if (this.problem) {
      result.problem = this.problem.map((x) => x.toJSON());
    }

    if (this.investigation) {
      result.investigation = this.investigation.map((x) => x.toJSON());
    }

    if (this.protocol) {
      result.protocol = this.protocol.filter(x => !!x).map(x => x.value) as typeof result.protocol;
      result._protocol = Extension.serializePrimitiveExtensionArray(this.protocol);
    }

    if (this.summary) {
      result.summary = this.summary.value;
      result._summary = Extension.serializePrimitiveExtension(this.summary);
    }

    if (this.finding) {
      result.finding = this.finding.map((x) => x.toJSON());
    }

    if (this.prognosisCodeableConcept) {
      result.prognosisCodeableConcept = this.prognosisCodeableConcept.map((x) => x.toJSON());
    }

    if (this.prognosisReference) {
      result.prognosisReference = this.prognosisReference.map((x) => x.toJSON());
    }

    if (this.supportingInfo) {
      result.supportingInfo = this.supportingInfo.map((x) => x.toJSON());
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ClinicalImpression {
    return ClinicalImpression.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ClinicalImpression";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
