/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Annotation,
  BackboneElement,
  CarePlanActivityDetail,
  CodeableConcept,
  FhirField,
  FhirList,
  ICarePlanActivity,
  Reference,
  FhirType
} from "../internal";

@FhirType("CarePlanActivity", "BackboneElement")
export class CarePlanActivity extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CarePlan.Activity";

  static readonly primaryCodePath: string | null = null;

  @FhirList("CodeableConcept")
  public outcomeCodeableConcept?: Array<CodeableConcept>;

  @FhirList("Reference")
  public outcomeReference?: Array<Reference>;

  @FhirList("Annotation")
  public progress?: Array<Annotation>;

  @FhirField("Reference")
  public reference?: Reference;

  @FhirField("CarePlanActivityDetail")
  public detail?: CarePlanActivityDetail;

  public static parse(
    json: ICarePlanActivity,
    providedInstance: CarePlanActivity = new CarePlanActivity()
  ): CarePlanActivity {
    const newInstance: CarePlanActivity = BackboneElement.parse(json, providedInstance);
  
    if (json.outcomeCodeableConcept !== undefined) {
      newInstance.outcomeCodeableConcept = json.outcomeCodeableConcept.map((x) => CodeableConcept.parse(x));
    }
    if (json.outcomeReference !== undefined) {
      newInstance.outcomeReference = json.outcomeReference.map((x) => Reference.parse(x));
    }
    if (json.progress !== undefined) {
      newInstance.progress = json.progress.map((x) => Annotation.parse(x));
    }
    if (json.reference !== undefined) {
      newInstance.reference = Reference.parse(json.reference);
    }
    if (json.detail !== undefined) {
      newInstance.detail = CarePlanActivityDetail.parse(json.detail);
    }
    return newInstance;
  }

  public static isCarePlanActivity(input?: unknown): input is CarePlanActivity {
    const castInput = input as CarePlanActivity;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CarePlanActivity";
  }

  public toJSON(): ICarePlanActivity {
    const result: ICarePlanActivity = super.toJSON();

    if (this.outcomeCodeableConcept) {
      result.outcomeCodeableConcept = this.outcomeCodeableConcept.map((x) => x.toJSON());
    }

    if (this.outcomeReference) {
      result.outcomeReference = this.outcomeReference.map((x) => x.toJSON());
    }

    if (this.progress) {
      result.progress = this.progress.map((x) => x.toJSON());
    }

    if (this.reference) {
      result.reference = this.reference.toJSON();
    }

    if (this.detail) {
      result.detail = this.detail.toJSON();
    }

    return result;
  }

  public clone(): CarePlanActivity {
    return CarePlanActivity.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CarePlanActivity";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
