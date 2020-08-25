/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  AllergyIntoleranceSeverity,
  Annotation,
  BackboneElement,
  CodeableConcept,
  Extension,
  IAllergyIntoleranceReaction,
  PrimitiveDateTime,
  PrimitiveString,
} from "../internal";

export class AllergyIntoleranceReaction extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AllergyIntolerance.Reaction";

  public substance?: CodeableConcept;

  public manifestation?: Array<CodeableConcept>;

  public description?: PrimitiveString;

  public onset?: PrimitiveDateTime;

  public severity?: AllergyIntoleranceSeverity;

  public exposureRoute?: CodeableConcept;

  public note?: Array<Annotation>;

  public static parse(
    json: IAllergyIntoleranceReaction,
    providedInstance: AllergyIntoleranceReaction = new AllergyIntoleranceReaction()
  ): AllergyIntoleranceReaction {
    const newInstance: AllergyIntoleranceReaction = BackboneElement.parse(json, providedInstance);
  
    if (json.substance) {
      newInstance.substance = CodeableConcept.parse(json.substance);
    }
    if (json.manifestation) {
      newInstance.manifestation = json.manifestation.map((x) => CodeableConcept.parse(x));
    }
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.onset) {
      newInstance.onset = PrimitiveDateTime.parsePrimitive(json.onset, json._onset);
    }
    if (json.severity) {
      newInstance.severity = AllergyIntoleranceSeverity.parsePrimitive(json.severity, json._severity);
    }
    if (json.exposureRoute) {
      newInstance.exposureRoute = CodeableConcept.parse(json.exposureRoute);
    }
    if (json.note) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    return newInstance;
  }

  public static isAllergyIntoleranceReaction(input?: unknown): input is AllergyIntoleranceReaction {
    const castInput = input as AllergyIntoleranceReaction;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AllergyIntoleranceReaction";
  }

  public toJSON(): IAllergyIntoleranceReaction {
    const result: IAllergyIntoleranceReaction = super.toJSON();

    if (this.substance) {
      result.substance = this.substance.toJSON();
    }

    if (this.manifestation) {
      result.manifestation = this.manifestation.map((x) => x.toJSON());
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.onset) {
      result.onset = this.onset.value;
      result._onset = Extension.serializePrimitiveExtension(this.onset);
    }

    if (this.severity) {
      result.severity = this.severity.value;
      result._severity = Extension.serializePrimitiveExtension(this.severity);
    }

    if (this.exposureRoute) {
      result.exposureRoute = this.exposureRoute.toJSON();
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "AllergyIntoleranceReaction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
