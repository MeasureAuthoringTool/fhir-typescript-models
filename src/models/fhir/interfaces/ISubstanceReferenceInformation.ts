/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IDomainResource,
  IElement,
  IPrimitiveString,
  ISubstanceReferenceInformationClassification,
  ISubstanceReferenceInformationGene,
  ISubstanceReferenceInformationGeneElement,
  ISubstanceReferenceInformationTarget,
} from "../internal";

export interface ISubstanceReferenceInformation extends IDomainResource {
  comment?: IPrimitiveString;
  _comment?: IElement;

  gene?: Array<ISubstanceReferenceInformationGene>;

  geneElement?: Array<ISubstanceReferenceInformationGeneElement>;

  classification?: Array<ISubstanceReferenceInformationClassification>;

  target?: Array<ISubstanceReferenceInformationTarget>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
