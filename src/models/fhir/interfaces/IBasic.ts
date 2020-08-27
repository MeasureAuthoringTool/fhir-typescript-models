/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IPrimitiveDate,
  IReference,
} from "../internal";

export interface IBasic extends IDomainResource {
  identifier?: Array<IIdentifier>;

  code?: ICodeableConcept;

  subject?: IReference;

  created?: IPrimitiveDate;
  _created?: IElement;

  author?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
