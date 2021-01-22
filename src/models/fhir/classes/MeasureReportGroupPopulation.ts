/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  IMeasureReportGroupPopulation,
  PrimitiveInteger,
  Reference,
  FhirType
} from "../internal";

@FhirType("MeasureReportGroupPopulation", "BackboneElement")
export class MeasureReportGroupPopulation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MeasureReport.Group.Population";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirField("PrimitiveInteger")
  public count?: PrimitiveInteger;

  @FhirField("Reference")
  public subjectResults?: Reference;

  public static parse(
    json: IMeasureReportGroupPopulation,
    providedInstance: MeasureReportGroupPopulation = new MeasureReportGroupPopulation()
  ): MeasureReportGroupPopulation {
    const newInstance: MeasureReportGroupPopulation = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.count !== undefined) {
      newInstance.count = PrimitiveInteger.parsePrimitive(json.count, json._count);
    }
    if (json.subjectResults !== undefined) {
      newInstance.subjectResults = Reference.parse(json.subjectResults);
    }
    return newInstance;
  }

  public static isMeasureReportGroupPopulation(input?: unknown): input is MeasureReportGroupPopulation {
    const castInput = input as MeasureReportGroupPopulation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MeasureReportGroupPopulation";
  }

  public toJSON(): IMeasureReportGroupPopulation {
    const result: IMeasureReportGroupPopulation = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.count) {
      result.count = this.count.value;
      result._count = Extension.serializePrimitiveExtension(this.count);
    }

    if (this.subjectResults) {
      result.subjectResults = this.subjectResults.toJSON();
    }

    return result;
  }

  public clone(): MeasureReportGroupPopulation {
    return MeasureReportGroupPopulation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MeasureReportGroupPopulation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
