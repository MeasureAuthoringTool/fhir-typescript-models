/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  AdministrativeGender,
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  FhirList,
  IObservationDefinitionQualifiedInterval,
  ObservationRangeCategory,
  PrimitiveString,
  Range,
  FhirType
} from "../internal";

@FhirType("ObservationDefinitionQualifiedInterval", "BackboneElement")
export class ObservationDefinitionQualifiedInterval extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ObservationDefinition.QualifiedInterval";

  static readonly primaryCodePath: string | null = null;

  @FhirField("ObservationRangeCategory")
  public category?: ObservationRangeCategory;

  @FhirField("Range")
  public range?: Range;

  @FhirField("CodeableConcept")
  public context?: CodeableConcept;

  @FhirList("CodeableConcept")
  public appliesTo?: Array<CodeableConcept>;

  @FhirField("AdministrativeGender")
  public gender?: AdministrativeGender;

  @FhirField("Range")
  public age?: Range;

  @FhirField("Range")
  public gestationalAge?: Range;

  @FhirField("PrimitiveString")
  public condition?: PrimitiveString;

  public static parse(
    json: IObservationDefinitionQualifiedInterval,
    providedInstance: ObservationDefinitionQualifiedInterval = new ObservationDefinitionQualifiedInterval()
  ): ObservationDefinitionQualifiedInterval {
    const newInstance: ObservationDefinitionQualifiedInterval = BackboneElement.parse(json, providedInstance);
  
    if (json.category !== undefined) {
      newInstance.category = ObservationRangeCategory.parsePrimitive(json.category, json._category);
    }
    if (json.range !== undefined) {
      newInstance.range = Range.parse(json.range);
    }
    if (json.context !== undefined) {
      newInstance.context = CodeableConcept.parse(json.context);
    }
    if (json.appliesTo !== undefined) {
      newInstance.appliesTo = json.appliesTo.map((x) => CodeableConcept.parse(x));
    }
    if (json.gender !== undefined) {
      newInstance.gender = AdministrativeGender.parsePrimitive(json.gender, json._gender);
    }
    if (json.age !== undefined) {
      newInstance.age = Range.parse(json.age);
    }
    if (json.gestationalAge !== undefined) {
      newInstance.gestationalAge = Range.parse(json.gestationalAge);
    }
    if (json.condition !== undefined) {
      newInstance.condition = PrimitiveString.parsePrimitive(json.condition, json._condition);
    }
    return newInstance;
  }

  public static isObservationDefinitionQualifiedInterval(input?: unknown): input is ObservationDefinitionQualifiedInterval {
    const castInput = input as ObservationDefinitionQualifiedInterval;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ObservationDefinitionQualifiedInterval";
  }

  public toJSON(): IObservationDefinitionQualifiedInterval {
    const result: IObservationDefinitionQualifiedInterval = super.toJSON();

    if (this.category) {
      result.category = this.category.value;
      result._category = Extension.serializePrimitiveExtension(this.category);
    }

    if (this.range) {
      result.range = this.range.toJSON();
    }

    if (this.context) {
      result.context = this.context.toJSON();
    }

    if (this.appliesTo) {
      result.appliesTo = this.appliesTo.map((x) => x.toJSON());
    }

    if (this.gender) {
      result.gender = this.gender.value;
      result._gender = Extension.serializePrimitiveExtension(this.gender);
    }

    if (this.age) {
      result.age = this.age.toJSON();
    }

    if (this.gestationalAge) {
      result.gestationalAge = this.gestationalAge.toJSON();
    }

    if (this.condition) {
      result.condition = this.condition.value;
      result._condition = Extension.serializePrimitiveExtension(this.condition);
    }

    return result;
  }

  public clone(): ObservationDefinitionQualifiedInterval {
    return ObservationDefinitionQualifiedInterval.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ObservationDefinitionQualifiedInterval";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
