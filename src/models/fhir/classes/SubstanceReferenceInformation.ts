/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  DomainResource,
  Extension,
  ISubstanceReferenceInformation,
  PrimitiveString,
  SubstanceReferenceInformationClassification,
  SubstanceReferenceInformationGene,
  SubstanceReferenceInformationGeneElement,
  SubstanceReferenceInformationTarget,
} from "../internal";

export class SubstanceReferenceInformation extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceReferenceInformation";

  public comment?: PrimitiveString;

  public gene?: Array<SubstanceReferenceInformationGene>;

  public geneElement?: Array<SubstanceReferenceInformationGeneElement>;

  public classification?: Array<SubstanceReferenceInformationClassification>;

  public target?: Array<SubstanceReferenceInformationTarget>;

  public static parse(
    json: ISubstanceReferenceInformation,
    providedInstance: SubstanceReferenceInformation = new SubstanceReferenceInformation()
  ): SubstanceReferenceInformation {
    const newInstance: SubstanceReferenceInformation = DomainResource.parse(json, providedInstance);
  
    if (json.comment) {
      newInstance.comment = PrimitiveString.parsePrimitive(json.comment, json._comment);
    }
    if (json.gene) {
      newInstance.gene = json.gene.map((x) => SubstanceReferenceInformationGene.parse(x));
    }
    if (json.geneElement) {
      newInstance.geneElement = json.geneElement.map((x) => SubstanceReferenceInformationGeneElement.parse(x));
    }
    if (json.classification) {
      newInstance.classification = json.classification.map((x) => SubstanceReferenceInformationClassification.parse(x));
    }
    if (json.target) {
      newInstance.target = json.target.map((x) => SubstanceReferenceInformationTarget.parse(x));
    }
    return newInstance;
  }

  public static isSubstanceReferenceInformation(input?: unknown): input is SubstanceReferenceInformation {
    const castInput = input as SubstanceReferenceInformation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceReferenceInformation";
  }

  public toJSON(): ISubstanceReferenceInformation {
    const result: ISubstanceReferenceInformation = super.toJSON();

    if (this.comment) {
      result.comment = this.comment.value;
      result._comment = Extension.serializePrimitiveExtension(this.comment);
    }

    if (this.gene) {
      result.gene = this.gene.map((x) => x.toJSON());
    }

    if (this.geneElement) {
      result.geneElement = this.geneElement.map((x) => x.toJSON());
    }

    if (this.classification) {
      result.classification = this.classification.map((x) => x.toJSON());
    }

    if (this.target) {
      result.target = this.target.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "SubstanceReferenceInformation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
