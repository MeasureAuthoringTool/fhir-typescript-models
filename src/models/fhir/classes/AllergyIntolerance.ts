/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Age,
  AllergyIntoleranceCategory,
  AllergyIntoleranceCriticality,
  AllergyIntoleranceReaction,
  AllergyIntoleranceType,
  Annotation,
  CodeableConcept,
  DomainResource,
  Extension,
  IAllergyIntolerance,
  Identifier,
  Period,
  PrimitiveDateTime,
  PrimitiveString,
  Range,
  Reference,
  FieldMetadata
} from "../internal";

export class AllergyIntolerance extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AllergyIntolerance";
  
  static readonly primaryCodePath: string | null = "code";

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "clinicalStatus",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "verificationStatus",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "type",
      fieldType: [AllergyIntoleranceType],
      isArray: false
    }, {
      fieldName: "category",
      fieldType: [AllergyIntoleranceCategory],
      isArray: true
    }, {
      fieldName: "criticality",
      fieldType: [AllergyIntoleranceCriticality],
      isArray: false
    }, {
      fieldName: "code",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "patient",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "encounter",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "onset",
      fieldType: [PrimitiveDateTime, Age, Period, Range, PrimitiveString],
      isArray: false
    }, {
      fieldName: "recordedDate",
      fieldType: [PrimitiveDateTime],
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
      fieldName: "lastOccurrence",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "note",
      fieldType: [Annotation],
      isArray: true
    }, {
      fieldName: "reaction",
      fieldType: [AllergyIntoleranceReaction],
      isArray: true
    }];
  }

  public identifier?: Array<Identifier>;

  public clinicalStatus?: CodeableConcept;

  public verificationStatus?: CodeableConcept;

  public type?: AllergyIntoleranceType;

  public category?: Array<AllergyIntoleranceCategory>;

  public criticality?: AllergyIntoleranceCriticality;

  public code?: CodeableConcept;

  public patient?: Reference;

  public encounter?: Reference;

  public onset?: PrimitiveDateTime | Age | Period | Range | PrimitiveString;

  public recordedDate?: PrimitiveDateTime;

  public recorder?: Reference;

  public asserter?: Reference;

  public lastOccurrence?: PrimitiveDateTime;

  public note?: Array<Annotation>;

  public reaction?: Array<AllergyIntoleranceReaction>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.code;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: IAllergyIntolerance,
    providedInstance: AllergyIntolerance = new AllergyIntolerance()
  ): AllergyIntolerance {
    const newInstance: AllergyIntolerance = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.clinicalStatus !== undefined) {
      newInstance.clinicalStatus = CodeableConcept.parse(json.clinicalStatus);
    }
    if (json.verificationStatus !== undefined) {
      newInstance.verificationStatus = CodeableConcept.parse(json.verificationStatus);
    }
    if (json.type !== undefined) {
      newInstance.type = AllergyIntoleranceType.parsePrimitive(json.type, json._type);
    }
    if (json.category !== undefined) {
      newInstance.category = json.category.map((x, i) => {
        const ext = json._category && json._category[i];
        return AllergyIntoleranceCategory.parsePrimitive(x, ext);
      });
    }
    if (json.criticality !== undefined) {
      newInstance.criticality = AllergyIntoleranceCriticality.parsePrimitive(json.criticality, json._criticality);
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.patient !== undefined) {
      newInstance.patient = Reference.parse(json.patient);
    }
    if (json.encounter !== undefined) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.onsetDateTime !== undefined) {
      newInstance.onset = PrimitiveDateTime.parsePrimitive(json.onsetDateTime, json._onsetDateTime);
    }
    if (json.onsetAge !== undefined) {
      newInstance.onset = Age.parse(json.onsetAge);
    }
    if (json.onsetPeriod !== undefined) {
      newInstance.onset = Period.parse(json.onsetPeriod);
    }
    if (json.onsetRange !== undefined) {
      newInstance.onset = Range.parse(json.onsetRange);
    }
    if (json.onsetString !== undefined) {
      newInstance.onset = PrimitiveString.parsePrimitive(json.onsetString, json._onsetString);
    }
    if (json.recordedDate !== undefined) {
      newInstance.recordedDate = PrimitiveDateTime.parsePrimitive(json.recordedDate, json._recordedDate);
    }
    if (json.recorder !== undefined) {
      newInstance.recorder = Reference.parse(json.recorder);
    }
    if (json.asserter !== undefined) {
      newInstance.asserter = Reference.parse(json.asserter);
    }
    if (json.lastOccurrence !== undefined) {
      newInstance.lastOccurrence = PrimitiveDateTime.parsePrimitive(json.lastOccurrence, json._lastOccurrence);
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.reaction !== undefined) {
      newInstance.reaction = json.reaction.map((x) => AllergyIntoleranceReaction.parse(x));
    }
    return newInstance;
  }

  public static isAllergyIntolerance(input?: unknown): input is AllergyIntolerance {
    const castInput = input as AllergyIntolerance;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AllergyIntolerance";
  }

  public toJSON(): IAllergyIntolerance {
    const result: IAllergyIntolerance = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.clinicalStatus) {
      result.clinicalStatus = this.clinicalStatus.toJSON();
    }

    if (this.verificationStatus) {
      result.verificationStatus = this.verificationStatus.toJSON();
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.category) {
      result.category = this.category.filter(x => !!x).map(x => x.value) as typeof result.category;
      result._category = Extension.serializePrimitiveExtensionArray(this.category);
    }

    if (this.criticality) {
      result.criticality = this.criticality.value;
      result._criticality = Extension.serializePrimitiveExtension(this.criticality);
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.patient) {
      result.patient = this.patient.toJSON();
    }

    if (this.encounter) {
      result.encounter = this.encounter.toJSON();
    }

    if (this.onset && PrimitiveDateTime.isPrimitiveDateTime(this.onset)) {
      result.onsetDateTime = this.onset.value;
      result._onsetDateTime = Extension.serializePrimitiveExtension(this.onset);
    }

    if (this.onset && Age.isAge(this.onset)) {
      result.onsetAge = this.onset.toJSON();
    }

    if (this.onset && Period.isPeriod(this.onset)) {
      result.onsetPeriod = this.onset.toJSON();
    }

    if (this.onset && Range.isRange(this.onset)) {
      result.onsetRange = this.onset.toJSON();
    }

    if (this.onset && PrimitiveString.isPrimitiveString(this.onset)) {
      result.onsetString = this.onset.value;
      result._onsetString = Extension.serializePrimitiveExtension(this.onset);
    }

    if (this.recordedDate) {
      result.recordedDate = this.recordedDate.value;
      result._recordedDate = Extension.serializePrimitiveExtension(this.recordedDate);
    }

    if (this.recorder) {
      result.recorder = this.recorder.toJSON();
    }

    if (this.asserter) {
      result.asserter = this.asserter.toJSON();
    }

    if (this.lastOccurrence) {
      result.lastOccurrence = this.lastOccurrence.value;
      result._lastOccurrence = Extension.serializePrimitiveExtension(this.lastOccurrence);
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    if (this.reaction) {
      result.reaction = this.reaction.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): AllergyIntolerance {
    return AllergyIntolerance.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "AllergyIntolerance";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
