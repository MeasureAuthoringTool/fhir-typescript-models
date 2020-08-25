/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IMeasureReportGroup,
  MeasureReportGroupPopulation,
  MeasureReportGroupStratifier,
  Quantity,
} from "../internal";

export class MeasureReportGroup extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MeasureReport.Group";

  public code?: CodeableConcept;

  public population?: Array<MeasureReportGroupPopulation>;

  public measureScore?: Quantity;

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
