/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  IImagingStudySeriesPerformer,
  Reference,
  FhirType
} from "../internal";

@FhirType("ImagingStudySeriesPerformer", "BackboneElement")
export class ImagingStudySeriesPerformer extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImagingStudy.Series.Performer";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public function?: CodeableConcept;

  @FhirField("Reference")
  public actor?: Reference;

  public static parse(
    json: IImagingStudySeriesPerformer,
    providedInstance: ImagingStudySeriesPerformer = new ImagingStudySeriesPerformer()
  ): ImagingStudySeriesPerformer {
    const newInstance: ImagingStudySeriesPerformer = BackboneElement.parse(json, providedInstance);
  
    if (json.function !== undefined) {
      newInstance.function = CodeableConcept.parse(json.function);
    }
    if (json.actor !== undefined) {
      newInstance.actor = Reference.parse(json.actor);
    }
    return newInstance;
  }

  public static isImagingStudySeriesPerformer(input?: unknown): input is ImagingStudySeriesPerformer {
    const castInput = input as ImagingStudySeriesPerformer;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImagingStudySeriesPerformer";
  }

  public toJSON(): IImagingStudySeriesPerformer {
    const result: IImagingStudySeriesPerformer = super.toJSON();

    if (this.function) {
      result.function = this.function.toJSON();
    }

    if (this.actor) {
      result.actor = this.actor.toJSON();
    }

    return result;
  }

  public clone(): ImagingStudySeriesPerformer {
    return ImagingStudySeriesPerformer.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ImagingStudySeriesPerformer";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
