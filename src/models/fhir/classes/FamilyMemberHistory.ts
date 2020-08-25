/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Age,
  Annotation,
  CodeableConcept,
  DomainResource,
  Extension,
  FamilyHistoryStatus,
  FamilyMemberHistoryCondition,
  Identifier,
  IFamilyMemberHistory,
  Period,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveDate,
  PrimitiveDateTime,
  PrimitiveString,
  PrimitiveUri,
  Range,
  Reference,
} from "../internal";

export class FamilyMemberHistory extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "FamilyMemberHistory";

  public identifier?: Array<Identifier>;

  public instantiatesCanonical?: Array<PrimitiveCanonical>;

  public instantiatesUri?: Array<PrimitiveUri>;

  public status?: FamilyHistoryStatus;

  public dataAbsentReason?: CodeableConcept;

  public patient?: Reference;

  public date?: PrimitiveDateTime;

  public name?: PrimitiveString;

  public relationship?: CodeableConcept;

  public sex?: CodeableConcept;

  public born?: Period | PrimitiveDate | PrimitiveString;

  public age?: Age | Range | PrimitiveString;

  public estimatedAge?: PrimitiveBoolean;

  public deceased?: PrimitiveBoolean | Age | Range | PrimitiveDate | PrimitiveString;

  public reasonCode?: Array<CodeableConcept>;

  public reasonReference?: Array<Reference>;

  public note?: Array<Annotation>;

  public condition?: Array<FamilyMemberHistoryCondition>;

  public static parse(
    json: IFamilyMemberHistory,
    providedInstance: FamilyMemberHistory = new FamilyMemberHistory()
  ): FamilyMemberHistory {
    const newInstance: FamilyMemberHistory = DomainResource.parse(json, providedInstance);
  
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
    if (json.status !== undefined) {
      newInstance.status = FamilyHistoryStatus.parsePrimitive(json.status, json._status);
    }
    if (json.dataAbsentReason !== undefined) {
      newInstance.dataAbsentReason = CodeableConcept.parse(json.dataAbsentReason);
    }
    if (json.patient !== undefined) {
      newInstance.patient = Reference.parse(json.patient);
    }
    if (json.date !== undefined) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.relationship !== undefined) {
      newInstance.relationship = CodeableConcept.parse(json.relationship);
    }
    if (json.sex !== undefined) {
      newInstance.sex = CodeableConcept.parse(json.sex);
    }
    if (json.bornPeriod !== undefined) {
      newInstance.born = Period.parse(json.bornPeriod);
    }
    if (json.bornDate !== undefined) {
      newInstance.born = PrimitiveDate.parsePrimitive(json.bornDate, json._bornDate);
    }
    if (json.bornString !== undefined) {
      newInstance.born = PrimitiveString.parsePrimitive(json.bornString, json._bornString);
    }
    if (json.ageAge !== undefined) {
      newInstance.age = Age.parse(json.ageAge);
    }
    if (json.ageRange !== undefined) {
      newInstance.age = Range.parse(json.ageRange);
    }
    if (json.ageString !== undefined) {
      newInstance.age = PrimitiveString.parsePrimitive(json.ageString, json._ageString);
    }
    if (json.estimatedAge !== undefined) {
      newInstance.estimatedAge = PrimitiveBoolean.parsePrimitive(json.estimatedAge, json._estimatedAge);
    }
    if (json.deceasedBoolean !== undefined) {
      newInstance.deceased = PrimitiveBoolean.parsePrimitive(json.deceasedBoolean, json._deceasedBoolean);
    }
    if (json.deceasedAge !== undefined) {
      newInstance.deceased = Age.parse(json.deceasedAge);
    }
    if (json.deceasedRange !== undefined) {
      newInstance.deceased = Range.parse(json.deceasedRange);
    }
    if (json.deceasedDate !== undefined) {
      newInstance.deceased = PrimitiveDate.parsePrimitive(json.deceasedDate, json._deceasedDate);
    }
    if (json.deceasedString !== undefined) {
      newInstance.deceased = PrimitiveString.parsePrimitive(json.deceasedString, json._deceasedString);
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
    if (json.condition !== undefined) {
      newInstance.condition = json.condition.map((x) => FamilyMemberHistoryCondition.parse(x));
    }
    return newInstance;
  }

  public static isFamilyMemberHistory(input?: unknown): input is FamilyMemberHistory {
    const castInput = input as FamilyMemberHistory;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "FamilyMemberHistory";
  }

  public toJSON(): IFamilyMemberHistory {
    const result: IFamilyMemberHistory = super.toJSON();

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

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.dataAbsentReason) {
      result.dataAbsentReason = this.dataAbsentReason.toJSON();
    }

    if (this.patient) {
      result.patient = this.patient.toJSON();
    }

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.relationship) {
      result.relationship = this.relationship.toJSON();
    }

    if (this.sex) {
      result.sex = this.sex.toJSON();
    }

    if (this.born && Period.isPeriod(this.born)) {
      result.bornPeriod = this.born.toJSON();
    }

    if (this.born && PrimitiveDate.isPrimitiveDate(this.born)) {
      result.bornDate = this.born.value;
      result._bornDate = Extension.serializePrimitiveExtension(this.born);
    }

    if (this.born && PrimitiveString.isPrimitiveString(this.born)) {
      result.bornString = this.born.value;
      result._bornString = Extension.serializePrimitiveExtension(this.born);
    }

    if (this.age && Age.isAge(this.age)) {
      result.ageAge = this.age.toJSON();
    }

    if (this.age && Range.isRange(this.age)) {
      result.ageRange = this.age.toJSON();
    }

    if (this.age && PrimitiveString.isPrimitiveString(this.age)) {
      result.ageString = this.age.value;
      result._ageString = Extension.serializePrimitiveExtension(this.age);
    }

    if (this.estimatedAge) {
      result.estimatedAge = this.estimatedAge.value;
      result._estimatedAge = Extension.serializePrimitiveExtension(this.estimatedAge);
    }

    if (this.deceased && PrimitiveBoolean.isPrimitiveBoolean(this.deceased)) {
      result.deceasedBoolean = this.deceased.value;
      result._deceasedBoolean = Extension.serializePrimitiveExtension(this.deceased);
    }

    if (this.deceased && Age.isAge(this.deceased)) {
      result.deceasedAge = this.deceased.toJSON();
    }

    if (this.deceased && Range.isRange(this.deceased)) {
      result.deceasedRange = this.deceased.toJSON();
    }

    if (this.deceased && PrimitiveDate.isPrimitiveDate(this.deceased)) {
      result.deceasedDate = this.deceased.value;
      result._deceasedDate = Extension.serializePrimitiveExtension(this.deceased);
    }

    if (this.deceased && PrimitiveString.isPrimitiveString(this.deceased)) {
      result.deceasedString = this.deceased.value;
      result._deceasedString = Extension.serializePrimitiveExtension(this.deceased);
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

    if (this.condition) {
      result.condition = this.condition.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): FamilyMemberHistory {
    return FamilyMemberHistory.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "FamilyMemberHistory";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
