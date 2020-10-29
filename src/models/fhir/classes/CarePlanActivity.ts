/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  BackboneElement,
  CarePlanActivityDetail,
  CodeableConcept,
  ICarePlanActivity,
  Reference,
  FieldMetadata
} from "../internal";

export class CarePlanActivity extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CarePlan.Activity";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "outcomeCodeableConcept",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "outcomeReference",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "progress",
      fieldType: [Annotation],
      isArray: true
    }, {
      fieldName: "reference",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "detail",
      fieldType: [CarePlanActivityDetail],
      isArray: false
    }];
  }

  public outcomeCodeableConcept?: Array<CodeableConcept>;

  public outcomeReference?: Array<Reference>;

  public progress?: Array<Annotation>;

  public reference?: Reference;

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
