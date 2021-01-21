/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  FhirList,
  IDocumentReferenceContext,
  Period,
  Reference,
  FhirType
} from "../internal";

@FhirType("DocumentReferenceContext", "BackboneElement")
export class DocumentReferenceContext extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DocumentReference.Context";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Reference")
  public encounter?: Array<Reference>;

  @FhirList("CodeableConcept")
  public event?: Array<CodeableConcept>;

  @FhirField("Period")
  public period?: Period;

  @FhirField("CodeableConcept")
  public facilityType?: CodeableConcept;

  @FhirField("CodeableConcept")
  public practiceSetting?: CodeableConcept;

  @FhirField("Reference")
  public sourcePatientInfo?: Reference;

  @FhirList("Reference")
  public related?: Array<Reference>;

  public static parse(
    json: IDocumentReferenceContext,
    providedInstance: DocumentReferenceContext = new DocumentReferenceContext()
  ): DocumentReferenceContext {
    const newInstance: DocumentReferenceContext = BackboneElement.parse(json, providedInstance);
  
    if (json.encounter !== undefined) {
      newInstance.encounter = json.encounter.map((x) => Reference.parse(x));
    }
    if (json.event !== undefined) {
      newInstance.event = json.event.map((x) => CodeableConcept.parse(x));
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.facilityType !== undefined) {
      newInstance.facilityType = CodeableConcept.parse(json.facilityType);
    }
    if (json.practiceSetting !== undefined) {
      newInstance.practiceSetting = CodeableConcept.parse(json.practiceSetting);
    }
    if (json.sourcePatientInfo !== undefined) {
      newInstance.sourcePatientInfo = Reference.parse(json.sourcePatientInfo);
    }
    if (json.related !== undefined) {
      newInstance.related = json.related.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isDocumentReferenceContext(input?: unknown): input is DocumentReferenceContext {
    const castInput = input as DocumentReferenceContext;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DocumentReferenceContext";
  }

  public toJSON(): IDocumentReferenceContext {
    const result: IDocumentReferenceContext = super.toJSON();

    if (this.encounter) {
      result.encounter = this.encounter.map((x) => x.toJSON());
    }

    if (this.event) {
      result.event = this.event.map((x) => x.toJSON());
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.facilityType) {
      result.facilityType = this.facilityType.toJSON();
    }

    if (this.practiceSetting) {
      result.practiceSetting = this.practiceSetting.toJSON();
    }

    if (this.sourcePatientInfo) {
      result.sourcePatientInfo = this.sourcePatientInfo.toJSON();
    }

    if (this.related) {
      result.related = this.related.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): DocumentReferenceContext {
    return DocumentReferenceContext.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DocumentReferenceContext";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
