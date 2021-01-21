/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  FhirList,
  ISubstanceReferenceInformationGene,
  Reference,
  FhirType
} from "../internal";

@FhirType("SubstanceReferenceInformationGene", "BackboneElement")
export class SubstanceReferenceInformationGene extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceReferenceInformation.Gene";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public geneSequenceOrigin?: CodeableConcept;

  @FhirField("CodeableConcept")
  public gene?: CodeableConcept;

  @FhirList("Reference")
  public source?: Array<Reference>;

  public static parse(
    json: ISubstanceReferenceInformationGene,
    providedInstance: SubstanceReferenceInformationGene = new SubstanceReferenceInformationGene()
  ): SubstanceReferenceInformationGene {
    const newInstance: SubstanceReferenceInformationGene = BackboneElement.parse(json, providedInstance);
  
    if (json.geneSequenceOrigin !== undefined) {
      newInstance.geneSequenceOrigin = CodeableConcept.parse(json.geneSequenceOrigin);
    }
    if (json.gene !== undefined) {
      newInstance.gene = CodeableConcept.parse(json.gene);
    }
    if (json.source !== undefined) {
      newInstance.source = json.source.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isSubstanceReferenceInformationGene(input?: unknown): input is SubstanceReferenceInformationGene {
    const castInput = input as SubstanceReferenceInformationGene;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceReferenceInformationGene";
  }

  public toJSON(): ISubstanceReferenceInformationGene {
    const result: ISubstanceReferenceInformationGene = super.toJSON();

    if (this.geneSequenceOrigin) {
      result.geneSequenceOrigin = this.geneSequenceOrigin.toJSON();
    }

    if (this.gene) {
      result.gene = this.gene.toJSON();
    }

    if (this.source) {
      result.source = this.source.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): SubstanceReferenceInformationGene {
    return SubstanceReferenceInformationGene.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceReferenceInformationGene";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
