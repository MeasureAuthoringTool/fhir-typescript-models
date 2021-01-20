/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  FhirList,
  IMeasureReportGroup,
  MeasureReportGroupPopulation,
  MeasureReportGroupStratifier,
  Quantity,
  FhirType
} from "../internal";

@FhirType("MeasureReportGroup", "BackboneElement")
export class MeasureReportGroup extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MeasureReport.Group";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirList("MeasureReportGroupPopulation")
  public population?: Array<MeasureReportGroupPopulation>;

  @FhirField("Quantity")
  public measureScore?: Quantity;

  @FhirList("MeasureReportGroupStratifier")
  public stratifier?: Array<MeasureReportGroupStratifier>;

  public static parse(
    json: IMeasureReportGroup,
    providedInstance: MeasureReportGroup = new MeasureReportGroup()
  ): MeasureReportGroup {
    const newInstance: MeasureReportGroup = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.population !== undefined) {
      newInstance.population = json.population.map((x) => MeasureReportGroupPopulation.parse(x));
    }
    if (json.measureScore !== undefined) {
      newInstance.measureScore = Quantity.parse(json.measureScore);
    }
    if (json.stratifier !== undefined) {
      newInstance.stratifier = json.stratifier.map((x) => MeasureReportGroupStratifier.parse(x));
    }
    return newInstance;
  }

  public static isMeasureReportGroup(input?: unknown): input is MeasureReportGroup {
    const castInput = input as MeasureReportGroup;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MeasureReportGroup";
  }

  public toJSON(): IMeasureReportGroup {
    const result: IMeasureReportGroup = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.population) {
      result.population = this.population.map((x) => x.toJSON());
    }

    if (this.measureScore) {
      result.measureScore = this.measureScore.toJSON();
    }

    if (this.stratifier) {
      result.stratifier = this.stratifier.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MeasureReportGroup {
    return MeasureReportGroup.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MeasureReportGroup";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
