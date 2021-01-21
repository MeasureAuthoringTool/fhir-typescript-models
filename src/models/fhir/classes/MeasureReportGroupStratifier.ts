/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirList,
  IMeasureReportGroupStratifier,
  MeasureReportGroupStratifierStratum,
  FhirType
} from "../internal";

@FhirType("MeasureReportGroupStratifier", "BackboneElement")
export class MeasureReportGroupStratifier extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MeasureReport.Group.Stratifier";

  static readonly primaryCodePath: string | null = null;

  @FhirList("CodeableConcept")
  public code?: Array<CodeableConcept>;

  @FhirList("MeasureReportGroupStratifierStratum")
  public stratum?: Array<MeasureReportGroupStratifierStratum>;

  public static parse(
    json: IMeasureReportGroupStratifier,
    providedInstance: MeasureReportGroupStratifier = new MeasureReportGroupStratifier()
  ): MeasureReportGroupStratifier {
    const newInstance: MeasureReportGroupStratifier = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = json.code.map((x) => CodeableConcept.parse(x));
    }
    if (json.stratum !== undefined) {
      newInstance.stratum = json.stratum.map((x) => MeasureReportGroupStratifierStratum.parse(x));
    }
    return newInstance;
  }

  public static isMeasureReportGroupStratifier(input?: unknown): input is MeasureReportGroupStratifier {
    const castInput = input as MeasureReportGroupStratifier;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MeasureReportGroupStratifier";
  }

  public toJSON(): IMeasureReportGroupStratifier {
    const result: IMeasureReportGroupStratifier = super.toJSON();

    if (this.code) {
      result.code = this.code.map((x) => x.toJSON());
    }

    if (this.stratum) {
      result.stratum = this.stratum.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MeasureReportGroupStratifier {
    return MeasureReportGroupStratifier.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MeasureReportGroupStratifier";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
