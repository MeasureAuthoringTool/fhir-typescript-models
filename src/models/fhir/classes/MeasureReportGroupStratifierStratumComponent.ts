/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  IMeasureReportGroupStratifierStratumComponent,
  FhirType
} from "../internal";

@FhirType("MeasureReportGroupStratifierStratumComponent", "BackboneElement")
export class MeasureReportGroupStratifierStratumComponent extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MeasureReport.Group.Stratifier.Stratum.Component";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirField("CodeableConcept")
  public value?: CodeableConcept;

  public static parse(
    json: IMeasureReportGroupStratifierStratumComponent,
    providedInstance: MeasureReportGroupStratifierStratumComponent = new MeasureReportGroupStratifierStratumComponent()
  ): MeasureReportGroupStratifierStratumComponent {
    const newInstance: MeasureReportGroupStratifierStratumComponent = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.value !== undefined) {
      newInstance.value = CodeableConcept.parse(json.value);
    }
    return newInstance;
  }

  public static isMeasureReportGroupStratifierStratumComponent(input?: unknown): input is MeasureReportGroupStratifierStratumComponent {
    const castInput = input as MeasureReportGroupStratifierStratumComponent;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MeasureReportGroupStratifierStratumComponent";
  }

  public toJSON(): IMeasureReportGroupStratifierStratumComponent {
    const result: IMeasureReportGroupStratifierStratumComponent = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.value) {
      result.value = this.value.toJSON();
    }

    return result;
  }

  public clone(): MeasureReportGroupStratifierStratumComponent {
    return MeasureReportGroupStratifierStratumComponent.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MeasureReportGroupStratifierStratumComponent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
