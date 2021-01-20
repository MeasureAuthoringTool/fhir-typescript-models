/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  FhirList,
  IMeasureGroup,
  MeasureGroupPopulation,
  MeasureGroupStratifier,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("MeasureGroup", "BackboneElement")
export class MeasureGroup extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Measure.Group";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirList("MeasureGroupPopulation")
  public population?: Array<MeasureGroupPopulation>;

  @FhirList("MeasureGroupStratifier")
  public stratifier?: Array<MeasureGroupStratifier>;

  public static parse(
    json: IMeasureGroup,
    providedInstance: MeasureGroup = new MeasureGroup()
  ): MeasureGroup {
    const newInstance: MeasureGroup = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.population !== undefined) {
      newInstance.population = json.population.map((x) => MeasureGroupPopulation.parse(x));
    }
    if (json.stratifier !== undefined) {
      newInstance.stratifier = json.stratifier.map((x) => MeasureGroupStratifier.parse(x));
    }
    return newInstance;
  }

  public static isMeasureGroup(input?: unknown): input is MeasureGroup {
    const castInput = input as MeasureGroup;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MeasureGroup";
  }

  public toJSON(): IMeasureGroup {
    const result: IMeasureGroup = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.population) {
      result.population = this.population.map((x) => x.toJSON());
    }

    if (this.stratifier) {
      result.stratifier = this.stratifier.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MeasureGroup {
    return MeasureGroup.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MeasureGroup";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
