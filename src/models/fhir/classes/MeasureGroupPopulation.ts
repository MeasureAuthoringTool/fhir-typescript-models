/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Expression,
  Extension,
  FhirField,
  IMeasureGroupPopulation,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("MeasureGroupPopulation", "BackboneElement")
export class MeasureGroupPopulation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Measure.Group.Population";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirField("Expression")
  public criteria?: Expression;

  public static parse(
    json: IMeasureGroupPopulation,
    providedInstance: MeasureGroupPopulation = new MeasureGroupPopulation()
  ): MeasureGroupPopulation {
    const newInstance: MeasureGroupPopulation = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.criteria !== undefined) {
      newInstance.criteria = Expression.parse(json.criteria);
    }
    return newInstance;
  }

  public static isMeasureGroupPopulation(input?: unknown): input is MeasureGroupPopulation {
    const castInput = input as MeasureGroupPopulation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MeasureGroupPopulation";
  }

  public toJSON(): IMeasureGroupPopulation {
    const result: IMeasureGroupPopulation = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.criteria) {
      result.criteria = this.criteria.toJSON();
    }

    return result;
  }

  public clone(): MeasureGroupPopulation {
    return MeasureGroupPopulation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MeasureGroupPopulation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
