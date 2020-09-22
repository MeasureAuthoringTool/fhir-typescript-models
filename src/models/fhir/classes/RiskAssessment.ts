/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  IRiskAssessment,
  Period,
  PrimitiveDateTime,
  PrimitiveString,
  Reference,
  RiskAssessmentPrediction,
  RiskAssessmentStatus,
} from "../internal";

export class RiskAssessment extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RiskAssessment";
  
  static readonly primaryCodePath: string | null = "code";

  public identifier?: Array<Identifier>;

  public basedOn?: Reference;

  public parent?: Reference;

  public status?: RiskAssessmentStatus;

  public method?: CodeableConcept;

  public code?: CodeableConcept;

  public subject?: Reference;

  public encounter?: Reference;

  public occurrence?: PrimitiveDateTime | Period;

  public condition?: Reference;

  public performer?: Reference;

  public reasonCode?: Array<CodeableConcept>;

  public reasonReference?: Array<Reference>;

  public basis?: Array<Reference>;

  public prediction?: Array<RiskAssessmentPrediction>;

  public mitigation?: PrimitiveString;

  public note?: Array<Annotation>;

  get primaryCode(): CodeableConcept | undefined {
    return this.code;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: IRiskAssessment,
    providedInstance: RiskAssessment = new RiskAssessment()
  ): RiskAssessment {
    const newInstance: RiskAssessment = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.basedOn !== undefined) {
      newInstance.basedOn = Reference.parse(json.basedOn);
    }
    if (json.parent !== undefined) {
      newInstance.parent = Reference.parse(json.parent);
    }
    if (json.status !== undefined) {
      newInstance.status = RiskAssessmentStatus.parsePrimitive(json.status, json._status);
    }
    if (json.method !== undefined) {
      newInstance.method = CodeableConcept.parse(json.method);
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
    if (json.occurrenceDateTime !== undefined) {
      newInstance.occurrence = PrimitiveDateTime.parsePrimitive(json.occurrenceDateTime, json._occurrenceDateTime);
    }
    if (json.occurrencePeriod !== undefined) {
      newInstance.occurrence = Period.parse(json.occurrencePeriod);
    }
    if (json.condition !== undefined) {
      newInstance.condition = Reference.parse(json.condition);
    }
    if (json.performer !== undefined) {
      newInstance.performer = Reference.parse(json.performer);
    }
    if (json.reasonCode !== undefined) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference !== undefined) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.basis !== undefined) {
      newInstance.basis = json.basis.map((x) => Reference.parse(x));
    }
    if (json.prediction !== undefined) {
      newInstance.prediction = json.prediction.map((x) => RiskAssessmentPrediction.parse(x));
    }
    if (json.mitigation !== undefined) {
      newInstance.mitigation = PrimitiveString.parsePrimitive(json.mitigation, json._mitigation);
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    return newInstance;
  }

  public static isRiskAssessment(input?: unknown): input is RiskAssessment {
    const castInput = input as RiskAssessment;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "RiskAssessment";
  }

  public toJSON(): IRiskAssessment {
    const result: IRiskAssessment = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.basedOn) {
      result.basedOn = this.basedOn.toJSON();
    }

    if (this.parent) {
      result.parent = this.parent.toJSON();
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.method) {
      result.method = this.method.toJSON();
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

    if (this.occurrence && PrimitiveDateTime.isPrimitiveDateTime(this.occurrence)) {
      result.occurrenceDateTime = this.occurrence.value;
      result._occurrenceDateTime = Extension.serializePrimitiveExtension(this.occurrence);
    }

    if (this.occurrence && Period.isPeriod(this.occurrence)) {
      result.occurrencePeriod = this.occurrence.toJSON();
    }

    if (this.condition) {
      result.condition = this.condition.toJSON();
    }

    if (this.performer) {
      result.performer = this.performer.toJSON();
    }

    if (this.reasonCode) {
      result.reasonCode = this.reasonCode.map((x) => x.toJSON());
    }

    if (this.reasonReference) {
      result.reasonReference = this.reasonReference.map((x) => x.toJSON());
    }

    if (this.basis) {
      result.basis = this.basis.map((x) => x.toJSON());
    }

    if (this.prediction) {
      result.prediction = this.prediction.map((x) => x.toJSON());
    }

    if (this.mitigation) {
      result.mitigation = this.mitigation.value;
      result._mitigation = Extension.serializePrimitiveExtension(this.mitigation);
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): RiskAssessment {
    return RiskAssessment.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "RiskAssessment";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
