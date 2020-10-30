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
  FieldMetadata
} from "../internal";

export class AllergyIntoleranceReaction extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AllergyIntolerance.Reaction";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "substance",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "manifestation",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "description",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "onset",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "severity",
      fieldType: [AllergyIntoleranceSeverity],
      isArray: false
    }, {
      fieldName: "exposureRoute",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "note",
      fieldType: [Annotation],
      isArray: true
    }];
  }

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
  
    if (json.substance !== undefined) {
      newInstance.substance = CodeableConcept.parse(json.substance);
    }
    if (json.manifestation !== undefined) {
      newInstance.manifestation = json.manifestation.map((x) => CodeableConcept.parse(x));
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.onset !== undefined) {
      newInstance.onset = PrimitiveDateTime.parsePrimitive(json.onset, json._onset);
    }
    if (json.severity !== undefined) {
      newInstance.severity = AllergyIntoleranceSeverity.parsePrimitive(json.severity, json._severity);
    }
    if (json.exposureRoute !== undefined) {
      newInstance.exposureRoute = CodeableConcept.parse(json.exposureRoute);
    }
    if (json.note !== undefined) {
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

  public clone(): AllergyIntoleranceReaction {
    return AllergyIntoleranceReaction.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "AllergyIntoleranceReaction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
