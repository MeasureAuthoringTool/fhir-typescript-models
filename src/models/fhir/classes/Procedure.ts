/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Age,
  Annotation,
  CodeableConcept,
  DomainResource,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  Identifier,
  IProcedure,
  Period,
  PrimitiveCanonical,
  PrimitiveDateTime,
  PrimitiveString,
  PrimitiveUri,
  ProcedureFocalDevice,
  ProcedurePerformer,
  ProcedureStatus,
  Range,
  Reference,
  FhirType
} from "../internal";

@FhirType("Procedure", "DomainResource")
export class Procedure extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Procedure";

  static readonly primaryCodePath: string | null = "code";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirList("PrimitiveCanonical")
  public instantiatesCanonical?: Array<PrimitiveCanonical>;

  @FhirList("PrimitiveUri")
  public instantiatesUri?: Array<PrimitiveUri>;

  @FhirList("Reference")
  public basedOn?: Array<Reference>;

  @FhirList("Reference")
  public partOf?: Array<Reference>;

  @FhirField("ProcedureStatus")
  public status?: ProcedureStatus;

  @FhirField("CodeableConcept")
  public statusReason?: CodeableConcept;

  @FhirField("CodeableConcept")
  public category?: CodeableConcept;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirField("Reference")
  public encounter?: Reference;

  @FhirChoice("PrimitiveDateTime", "Period", "PrimitiveString", "Age", "Range")
  public performed?: PrimitiveDateTime | Period | PrimitiveString | Age | Range;

  @FhirField("Reference")
  public recorder?: Reference;

  @FhirField("Reference")
  public asserter?: Reference;

  @FhirList("ProcedurePerformer")
  public performer?: Array<ProcedurePerformer>;

  @FhirField("Reference")
  public location?: Reference;

  @FhirList("CodeableConcept")
  public reasonCode?: Array<CodeableConcept>;

  @FhirList("Reference")
  public reasonReference?: Array<Reference>;

  @FhirList("CodeableConcept")
  public bodySite?: Array<CodeableConcept>;

  @FhirField("CodeableConcept")
  public outcome?: CodeableConcept;

  @FhirList("Reference")
  public report?: Array<Reference>;

  @FhirList("CodeableConcept")
  public complication?: Array<CodeableConcept>;

  @FhirList("Reference")
  public complicationDetail?: Array<Reference>;

  @FhirList("CodeableConcept")
  public followUp?: Array<CodeableConcept>;

  @FhirList("Annotation")
  public note?: Array<Annotation>;

  @FhirList("ProcedureFocalDevice")
  public focalDevice?: Array<ProcedureFocalDevice>;

  @FhirList("Reference")
  public usedReference?: Array<Reference>;

  @FhirList("CodeableConcept")
  public usedCode?: Array<CodeableConcept>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.code;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: IProcedure,
    providedInstance: Procedure = new Procedure()
  ): Procedure {
    const newInstance: Procedure = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.instantiatesCanonical !== undefined) {
      newInstance.instantiatesCanonical = json.instantiatesCanonical.map((x, i) => PrimitiveCanonical.parsePrimitive(x, json._instantiatesCanonical?.[i]));
    }
    if (json.instantiatesUri !== undefined) {
      newInstance.instantiatesUri = json.instantiatesUri.map((x, i) => PrimitiveUri.parsePrimitive(x, json._instantiatesUri?.[i]));
    }
    if (json.basedOn !== undefined) {
      newInstance.basedOn = json.basedOn.map((x) => Reference.parse(x));
    }
    if (json.partOf !== undefined) {
      newInstance.partOf = json.partOf.map((x) => Reference.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = ProcedureStatus.parsePrimitive(json.status, json._status);
    }
    if (json.statusReason !== undefined) {
      newInstance.statusReason = CodeableConcept.parse(json.statusReason);
    }
    if (json.category !== undefined) {
      newInstance.category = CodeableConcept.parse(json.category);
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
    if (json.performedDateTime !== undefined) {
      newInstance.performed = PrimitiveDateTime.parsePrimitive(json.performedDateTime, json._performedDateTime);
    }
    if (json.performedPeriod !== undefined) {
      newInstance.performed = Period.parse(json.performedPeriod);
    }
    if (json.performedString !== undefined) {
      newInstance.performed = PrimitiveString.parsePrimitive(json.performedString, json._performedString);
    }
    if (json.performedAge !== undefined) {
      newInstance.performed = Age.parse(json.performedAge);
    }
    if (json.performedRange !== undefined) {
      newInstance.performed = Range.parse(json.performedRange);
    }
    if (json.recorder !== undefined) {
      newInstance.recorder = Reference.parse(json.recorder);
    }
    if (json.asserter !== undefined) {
      newInstance.asserter = Reference.parse(json.asserter);
    }
    if (json.performer !== undefined) {
      newInstance.performer = json.performer.map((x) => ProcedurePerformer.parse(x));
    }
    if (json.location !== undefined) {
      newInstance.location = Reference.parse(json.location);
    }
    if (json.reasonCode !== undefined) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference !== undefined) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.bodySite !== undefined) {
      newInstance.bodySite = json.bodySite.map((x) => CodeableConcept.parse(x));
    }
    if (json.outcome !== undefined) {
      newInstance.outcome = CodeableConcept.parse(json.outcome);
    }
    if (json.report !== undefined) {
      newInstance.report = json.report.map((x) => Reference.parse(x));
    }
    if (json.complication !== undefined) {
      newInstance.complication = json.complication.map((x) => CodeableConcept.parse(x));
    }
    if (json.complicationDetail !== undefined) {
      newInstance.complicationDetail = json.complicationDetail.map((x) => Reference.parse(x));
    }
    if (json.followUp !== undefined) {
      newInstance.followUp = json.followUp.map((x) => CodeableConcept.parse(x));
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.focalDevice !== undefined) {
      newInstance.focalDevice = json.focalDevice.map((x) => ProcedureFocalDevice.parse(x));
    }
    if (json.usedReference !== undefined) {
      newInstance.usedReference = json.usedReference.map((x) => Reference.parse(x));
    }
    if (json.usedCode !== undefined) {
      newInstance.usedCode = json.usedCode.map((x) => CodeableConcept.parse(x));
    }
    return newInstance;
  }

  public static isProcedure(input?: unknown): input is Procedure {
    const castInput = input as Procedure;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Procedure";
  }

  public toJSON(): IProcedure {
    const result: IProcedure = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.instantiatesCanonical) {
      result.instantiatesCanonical = this.instantiatesCanonical.filter(x => !!x).map(x => x.value) as typeof result.instantiatesCanonical;
      result._instantiatesCanonical = Extension.serializePrimitiveExtensionArray(this.instantiatesCanonical);
    }

    if (this.instantiatesUri) {
      result.instantiatesUri = this.instantiatesUri.filter(x => !!x).map(x => x.value) as typeof result.instantiatesUri;
      result._instantiatesUri = Extension.serializePrimitiveExtensionArray(this.instantiatesUri);
    }

    if (this.basedOn) {
      result.basedOn = this.basedOn.map((x) => x.toJSON());
    }

    if (this.partOf) {
      result.partOf = this.partOf.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.statusReason) {
      result.statusReason = this.statusReason.toJSON();
    }

    if (this.category) {
      result.category = this.category.toJSON();
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

    if (this.performed && PrimitiveDateTime.isPrimitiveDateTime(this.performed)) {
      result.performedDateTime = this.performed.value;
      result._performedDateTime = Extension.serializePrimitiveExtension(this.performed);
    }

    if (this.performed && Period.isPeriod(this.performed)) {
      result.performedPeriod = this.performed.toJSON();
    }

    if (this.performed && PrimitiveString.isPrimitiveString(this.performed)) {
      result.performedString = this.performed.value;
      result._performedString = Extension.serializePrimitiveExtension(this.performed);
    }

    if (this.performed && Age.isAge(this.performed)) {
      result.performedAge = this.performed.toJSON();
    }

    if (this.performed && Range.isRange(this.performed)) {
      result.performedRange = this.performed.toJSON();
    }

    if (this.recorder) {
      result.recorder = this.recorder.toJSON();
    }

    if (this.asserter) {
      result.asserter = this.asserter.toJSON();
    }

    if (this.performer) {
      result.performer = this.performer.map((x) => x.toJSON());
    }

    if (this.location) {
      result.location = this.location.toJSON();
    }

    if (this.reasonCode) {
      result.reasonCode = this.reasonCode.map((x) => x.toJSON());
    }

    if (this.reasonReference) {
      result.reasonReference = this.reasonReference.map((x) => x.toJSON());
    }

    if (this.bodySite) {
      result.bodySite = this.bodySite.map((x) => x.toJSON());
    }

    if (this.outcome) {
      result.outcome = this.outcome.toJSON();
    }

    if (this.report) {
      result.report = this.report.map((x) => x.toJSON());
    }

    if (this.complication) {
      result.complication = this.complication.map((x) => x.toJSON());
    }

    if (this.complicationDetail) {
      result.complicationDetail = this.complicationDetail.map((x) => x.toJSON());
    }

    if (this.followUp) {
      result.followUp = this.followUp.map((x) => x.toJSON());
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    if (this.focalDevice) {
      result.focalDevice = this.focalDevice.map((x) => x.toJSON());
    }

    if (this.usedReference) {
      result.usedReference = this.usedReference.map((x) => x.toJSON());
    }

    if (this.usedCode) {
      result.usedCode = this.usedCode.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): Procedure {
    return Procedure.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Procedure";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
