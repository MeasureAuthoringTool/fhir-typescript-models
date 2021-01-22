/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  FhirList,
  IMeasureReportGroupStratifierStratum,
  MeasureReportGroupStratifierStratumComponent,
  MeasureReportGroupStratifierStratumPopulation,
  Quantity,
  FhirType
} from "../internal";

@FhirType("MeasureReportGroupStratifierStratum", "BackboneElement")
export class MeasureReportGroupStratifierStratum extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MeasureReport.Group.Stratifier.Stratum";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public value?: CodeableConcept;

  @FhirList("MeasureReportGroupStratifierStratumComponent")
  public component?: Array<MeasureReportGroupStratifierStratumComponent>;

  @FhirList("MeasureReportGroupStratifierStratumPopulation")
  public population?: Array<MeasureReportGroupStratifierStratumPopulation>;

  @FhirField("Quantity")
  public measureScore?: Quantity;

  public static parse(
    json: IMeasureReportGroupStratifierStratum,
    providedInstance: MeasureReportGroupStratifierStratum = new MeasureReportGroupStratifierStratum()
  ): MeasureReportGroupStratifierStratum {
    const newInstance: MeasureReportGroupStratifierStratum = BackboneElement.parse(json, providedInstance);
  
    if (json.value !== undefined) {
      newInstance.value = CodeableConcept.parse(json.value);
    }
    if (json.component !== undefined) {
      newInstance.component = json.component.map((x) => MeasureReportGroupStratifierStratumComponent.parse(x));
    }
    if (json.population !== undefined) {
      newInstance.population = json.population.map((x) => MeasureReportGroupStratifierStratumPopulation.parse(x));
    }
    if (json.measureScore !== undefined) {
      newInstance.measureScore = Quantity.parse(json.measureScore);
    }
    return newInstance;
  }

  public static isMeasureReportGroupStratifierStratum(input?: unknown): input is MeasureReportGroupStratifierStratum {
    const castInput = input as MeasureReportGroupStratifierStratum;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MeasureReportGroupStratifierStratum";
  }

  public toJSON(): IMeasureReportGroupStratifierStratum {
    const result: IMeasureReportGroupStratifierStratum = super.toJSON();

    if (this.value) {
      result.value = this.value.toJSON();
    }

    if (this.component) {
      result.component = this.component.map((x) => x.toJSON());
    }

    if (this.population) {
      result.population = this.population.map((x) => x.toJSON());
    }

    if (this.measureScore) {
      result.measureScore = this.measureScore.toJSON();
    }

    return result;
  }

  public clone(): MeasureReportGroupStratifierStratum {
    return MeasureReportGroupStratifierStratum.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MeasureReportGroupStratifierStratum";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
