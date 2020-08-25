/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IFlagStatus,
  IIdentifier,
  IPeriod,
  IReference,
} from "../internal";

export interface IFlag extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IFlagStatus;
  _status?: IElement;

  category?: Array<ICodeableConcept>;

  code?: ICodeableConcept;

  subject?: IReference;

  period?: IPeriod;

  encounter?: IReference;

  author?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
