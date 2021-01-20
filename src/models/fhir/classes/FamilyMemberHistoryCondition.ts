/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Age,
  Annotation,
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  IFamilyMemberHistoryCondition,
  Period,
  PrimitiveBoolean,
  PrimitiveString,
  Range,
  FhirType
} from "../internal";

@FhirType("FamilyMemberHistoryCondition", "BackboneElement")
export class FamilyMemberHistoryCondition extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "FamilyMemberHistory.Condition";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirField("CodeableConcept")
  public outcome?: CodeableConcept;

  @FhirField("PrimitiveBoolean")
  public contributedToDeath?: PrimitiveBoolean;

  @FhirChoice("Age", "Range", "Period", "PrimitiveString")
  public onset?: Age | Range | Period | PrimitiveString;

  @FhirList("Annotation")
  public note?: Array<Annotation>;

  public static parse(
    json: IFamilyMemberHistoryCondition,
    providedInstance: FamilyMemberHistoryCondition = new FamilyMemberHistoryCondition()
  ): FamilyMemberHistoryCondition {
    const newInstance: FamilyMemberHistoryCondition = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.outcome !== undefined) {
      newInstance.outcome = CodeableConcept.parse(json.outcome);
    }
    if (json.contributedToDeath !== undefined) {
      newInstance.contributedToDeath = PrimitiveBoolean.parsePrimitive(json.contributedToDeath, json._contributedToDeath);
    }
    if (json.onsetAge !== undefined) {
      newInstance.onset = Age.parse(json.onsetAge);
    }
    if (json.onsetRange !== undefined) {
      newInstance.onset = Range.parse(json.onsetRange);
    }
    if (json.onsetPeriod !== undefined) {
      newInstance.onset = Period.parse(json.onsetPeriod);
    }
    if (json.onsetString !== undefined) {
      newInstance.onset = PrimitiveString.parsePrimitive(json.onsetString, json._onsetString);
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    return newInstance;
  }

  public static isFamilyMemberHistoryCondition(input?: unknown): input is FamilyMemberHistoryCondition {
    const castInput = input as FamilyMemberHistoryCondition;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "FamilyMemberHistoryCondition";
  }

  public toJSON(): IFamilyMemberHistoryCondition {
    const result: IFamilyMemberHistoryCondition = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.outcome) {
      result.outcome = this.outcome.toJSON();
    }

    if (this.contributedToDeath) {
      result.contributedToDeath = this.contributedToDeath.value;
      result._contributedToDeath = Extension.serializePrimitiveExtension(this.contributedToDeath);
    }

    if (this.onset && Age.isAge(this.onset)) {
      result.onsetAge = this.onset.toJSON();
    }

    if (this.onset && Range.isRange(this.onset)) {
      result.onsetRange = this.onset.toJSON();
    }

    if (this.onset && Period.isPeriod(this.onset)) {
      result.onsetPeriod = this.onset.toJSON();
    }

    if (this.onset && PrimitiveString.isPrimitiveString(this.onset)) {
      result.onsetString = this.onset.value;
      result._onsetString = Extension.serializePrimitiveExtension(this.onset);
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): FamilyMemberHistoryCondition {
    return FamilyMemberHistoryCondition.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "FamilyMemberHistoryCondition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
