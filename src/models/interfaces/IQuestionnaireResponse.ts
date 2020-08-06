/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IDomainResource,
  IElement,
  IIdentifier,
  IPrimitiveCanonical,
  IPrimitiveDateTime,
  IQuestionnaireResponseItem,
  IQuestionnaireResponseStatus,
  IReference,
} from "../internal";

export interface IQuestionnaireResponse extends IDomainResource {
  identifier?: IIdentifier;

  basedOn?: Array<IReference>;

  partOf?: Array<IReference>;

  questionnaire?: IPrimitiveCanonical;
  _questionnaire?: IElement;

  status?: IQuestionnaireResponseStatus;
  _status?: IElement;

  subject?: IReference;

  encounter?: IReference;

  authored?: IPrimitiveDateTime;
  _authored?: IElement;

  author?: IReference;

  source?: IReference;

  item?: Array<IQuestionnaireResponseItem>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
