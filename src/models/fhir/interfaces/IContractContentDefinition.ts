/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IContractPublicationStatus,
  IElement,
  IPrimitiveDateTime,
  IPrimitiveMarkdown,
  IReference,
} from "../internal";

export interface IContractContentDefinition extends IBackboneElement {
  type?: ICodeableConcept;

  subType?: ICodeableConcept;

  publisher?: IReference;

  publicationDate?: IPrimitiveDateTime;
  _publicationDate?: IElement;

  publicationStatus?: IContractPublicationStatus;
  _publicationStatus?: IElement;

  copyright?: IPrimitiveMarkdown;
  _copyright?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
