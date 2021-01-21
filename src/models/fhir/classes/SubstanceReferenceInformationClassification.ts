/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  FhirList,
  ISubstanceReferenceInformationClassification,
  Reference,
  FhirType
} from "../internal";

@FhirType("SubstanceReferenceInformationClassification", "BackboneElement")
export class SubstanceReferenceInformationClassification extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceReferenceInformation.Classification";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public domain?: CodeableConcept;

  @FhirField("CodeableConcept")
  public classification?: CodeableConcept;

  @FhirList("CodeableConcept")
  public subtype?: Array<CodeableConcept>;

  @FhirList("Reference")
  public source?: Array<Reference>;

  public static parse(
    json: ISubstanceReferenceInformationClassification,
    providedInstance: SubstanceReferenceInformationClassification = new SubstanceReferenceInformationClassification()
  ): SubstanceReferenceInformationClassification {
    const newInstance: SubstanceReferenceInformationClassification = BackboneElement.parse(json, providedInstance);
  
    if (json.domain !== undefined) {
      newInstance.domain = CodeableConcept.parse(json.domain);
    }
    if (json.classification !== undefined) {
      newInstance.classification = CodeableConcept.parse(json.classification);
    }
    if (json.subtype !== undefined) {
      newInstance.subtype = json.subtype.map((x) => CodeableConcept.parse(x));
    }
    if (json.source !== undefined) {
      newInstance.source = json.source.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isSubstanceReferenceInformationClassification(input?: unknown): input is SubstanceReferenceInformationClassification {
    const castInput = input as SubstanceReferenceInformationClassification;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceReferenceInformationClassification";
  }

  public toJSON(): ISubstanceReferenceInformationClassification {
    const result: ISubstanceReferenceInformationClassification = super.toJSON();

    if (this.domain) {
      result.domain = this.domain.toJSON();
    }

    if (this.classification) {
      result.classification = this.classification.toJSON();
    }

    if (this.subtype) {
      result.subtype = this.subtype.map((x) => x.toJSON());
    }

    if (this.source) {
      result.source = this.source.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): SubstanceReferenceInformationClassification {
    return SubstanceReferenceInformationClassification.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceReferenceInformationClassification";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
