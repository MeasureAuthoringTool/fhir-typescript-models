/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Age,
  Annotation,
  CodeableConcept,
  DomainResource,
  Extension,
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
  FieldMetadata
} from "../internal";

export class Procedure extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Procedure";
  
  static readonly primaryCodePath: string | null = "code";

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "instantiatesCanonical",
      fieldType: [PrimitiveCanonical],
      isArray: true
    }, {
      fieldName: "instantiatesUri",
      fieldType: [PrimitiveUri],
      isArray: true
    }, {
      fieldName: "basedOn",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "partOf",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "status",
      fieldType: [ProcedureStatus],
      isArray: false
    }, {
      fieldName: "statusReason",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "category",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "code",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "subject",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "encounter",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "performed",
      fieldType: [PrimitiveDateTime, Period, PrimitiveString, Age, Range],
      isArray: false
    }, {
      fieldName: "recorder",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "asserter",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "performer",
      fieldType: [ProcedurePerformer],
      isArray: true
    }, {
      fieldName: "location",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "reasonCode",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "reasonReference",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "bodySite",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "outcome",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "report",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "complication",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "complicationDetail",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "followUp",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "note",
      fieldType: [Annotation],
      isArray: true
    }, {
      fieldName: "focalDevice",
      fieldType: [ProcedureFocalDevice],
      isArray: true
    }, {
      fieldName: "usedReference",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "usedCode",
      fieldType: [CodeableConcept],
      isArray: true
    }];
  }

  public identifier?: Array<Identifier>;

  public instantiatesCanonical?: Array<PrimitiveCanonical>;

  public instantiatesUri?: Array<PrimitiveUri>;

  public basedOn?: Array<Reference>;

  public partOf?: Array<Reference>;

  public status?: ProcedureStatus;

  public statusReason?: CodeableConcept;

  public category?: CodeableConcept;

  public code?: CodeableConcept;

  public subject?: Reference;

  public encounter?: Reference;

  public performed?: PrimitiveDateTime | Period | PrimitiveString | Age | Range;

  public recorder?: Reference;

  public asserter?: Reference;

  public performer?: Array<ProcedurePerformer>;

  public location?: Reference;

  public reasonCode?: Array<CodeableConcept>;

  public reasonReference?: Array<Reference>;

  public bodySite?: Array<CodeableConcept>;

  public outcome?: CodeableConcept;

  public report?: Array<Reference>;

  public complication?: Array<CodeableConcept>;

  public complicationDetail?: Array<Reference>;

  public followUp?: Array<CodeableConcept>;

  public note?: Array<Annotation>;

  public focalDevice?: Array<ProcedureFocalDevice>;

  public usedReference?: Array<Reference>;

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
      newInstance.instantiatesCanonical = json.instantiatesCanonical.map((x, i) => {
        const ext = json._instantiatesCanonical && json._instantiatesCanonical[i];
        return PrimitiveCanonical.parsePrimitive(x, ext);
      });
    }
    if (json.instantiatesUri !== undefined) {
      newInstance.instantiatesUri = json.instantiatesUri.map((x, i) => {
        const ext = json._instantiatesUri && json._instantiatesUri[i];
        return PrimitiveUri.parsePrimitive(x, ext);
      });
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
