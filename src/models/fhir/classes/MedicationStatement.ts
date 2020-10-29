/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  CodeableConcept,
  DomainResource,
  Dosage,
  Extension,
  Identifier,
  IMedicationStatement,
  MedicationStatementStatus,
  Period,
  PrimitiveDateTime,
  Reference,
  FieldMetadata
} from "../internal";

export class MedicationStatement extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationStatement";
  
  static readonly primaryCodePath: string | null = "medication";

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
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
      fieldType: [MedicationStatementStatus],
      isArray: false
    }, {
      fieldName: "statusReason",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "category",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "medication",
      fieldType: [CodeableConcept, Reference],
      isArray: false
    }, {
      fieldName: "subject",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "context",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "effective",
      fieldType: [PrimitiveDateTime, Period],
      isArray: false
    }, {
      fieldName: "dateAsserted",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "informationSource",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "derivedFrom",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "reasonCode",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "reasonReference",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "note",
      fieldType: [Annotation],
      isArray: true
    }, {
      fieldName: "dosage",
      fieldType: [Dosage],
      isArray: true
    }];
  }

  public identifier?: Array<Identifier>;

  public basedOn?: Array<Reference>;

  public partOf?: Array<Reference>;

  public status?: MedicationStatementStatus;

  public statusReason?: Array<CodeableConcept>;

  public category?: CodeableConcept;

  public medication?: CodeableConcept | Reference;

  public subject?: Reference;

  public context?: Reference;

  public effective?: PrimitiveDateTime | Period;

  public dateAsserted?: PrimitiveDateTime;

  public informationSource?: Reference;

  public derivedFrom?: Array<Reference>;

  public reasonCode?: Array<CodeableConcept>;

  public reasonReference?: Array<Reference>;

  public note?: Array<Annotation>;

  public dosage?: Array<Dosage>;

  get primaryCode(): CodeableConcept | Reference | undefined {
    return this?.medication;
  }

  set primaryCode(primaryCode: CodeableConcept | Reference | undefined) {
    this.medication = primaryCode;
  }

  public static parse(
    json: IMedicationStatement,
    providedInstance: MedicationStatement = new MedicationStatement()
  ): MedicationStatement {
    const newInstance: MedicationStatement = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.basedOn !== undefined) {
      newInstance.basedOn = json.basedOn.map((x) => Reference.parse(x));
    }
    if (json.partOf !== undefined) {
      newInstance.partOf = json.partOf.map((x) => Reference.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = MedicationStatementStatus.parsePrimitive(json.status, json._status);
    }
    if (json.statusReason !== undefined) {
      newInstance.statusReason = json.statusReason.map((x) => CodeableConcept.parse(x));
    }
    if (json.category !== undefined) {
      newInstance.category = CodeableConcept.parse(json.category);
    }
    if (json.medicationCodeableConcept !== undefined) {
      newInstance.medication = CodeableConcept.parse(json.medicationCodeableConcept);
    }
    if (json.medicationReference !== undefined) {
      newInstance.medication = Reference.parse(json.medicationReference);
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.context !== undefined) {
      newInstance.context = Reference.parse(json.context);
    }
    if (json.effectiveDateTime !== undefined) {
      newInstance.effective = PrimitiveDateTime.parsePrimitive(json.effectiveDateTime, json._effectiveDateTime);
    }
    if (json.effectivePeriod !== undefined) {
      newInstance.effective = Period.parse(json.effectivePeriod);
    }
    if (json.dateAsserted !== undefined) {
      newInstance.dateAsserted = PrimitiveDateTime.parsePrimitive(json.dateAsserted, json._dateAsserted);
    }
    if (json.informationSource !== undefined) {
      newInstance.informationSource = Reference.parse(json.informationSource);
    }
    if (json.derivedFrom !== undefined) {
      newInstance.derivedFrom = json.derivedFrom.map((x) => Reference.parse(x));
    }
    if (json.reasonCode !== undefined) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference !== undefined) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.dosage !== undefined) {
      newInstance.dosage = json.dosage.map((x) => Dosage.parse(x));
    }
    return newInstance;
  }

  public static isMedicationStatement(input?: unknown): input is MedicationStatement {
    const castInput = input as MedicationStatement;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationStatement";
  }

  public toJSON(): IMedicationStatement {
    const result: IMedicationStatement = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
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
      result.statusReason = this.statusReason.map((x) => x.toJSON());
    }

    if (this.category) {
      result.category = this.category.toJSON();
    }

    if (this.medication && CodeableConcept.isCodeableConcept(this.medication)) {
      result.medicationCodeableConcept = this.medication.toJSON();
    }

    if (this.medication && Reference.isReference(this.medication)) {
      result.medicationReference = this.medication.toJSON();
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.context) {
      result.context = this.context.toJSON();
    }

    if (this.effective && PrimitiveDateTime.isPrimitiveDateTime(this.effective)) {
      result.effectiveDateTime = this.effective.value;
      result._effectiveDateTime = Extension.serializePrimitiveExtension(this.effective);
    }

    if (this.effective && Period.isPeriod(this.effective)) {
      result.effectivePeriod = this.effective.toJSON();
    }

    if (this.dateAsserted) {
      result.dateAsserted = this.dateAsserted.value;
      result._dateAsserted = Extension.serializePrimitiveExtension(this.dateAsserted);
    }

    if (this.informationSource) {
      result.informationSource = this.informationSource.toJSON();
    }

    if (this.derivedFrom) {
      result.derivedFrom = this.derivedFrom.map((x) => x.toJSON());
    }

    if (this.reasonCode) {
      result.reasonCode = this.reasonCode.map((x) => x.toJSON());
    }

    if (this.reasonReference) {
      result.reasonReference = this.reasonReference.map((x) => x.toJSON());
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    if (this.dosage) {
      result.dosage = this.dosage.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MedicationStatement {
    return MedicationStatement.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationStatement";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
