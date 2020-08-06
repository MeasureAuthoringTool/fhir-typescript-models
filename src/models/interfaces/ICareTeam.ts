/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICareTeamParticipant,
  ICareTeamStatus,
  ICodeableConcept,
  IContactPoint,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface ICareTeam extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: ICareTeamStatus;
  _status?: IElement;

  category?: Array<ICodeableConcept>;

  name?: IPrimitiveString;
  _name?: IElement;

  subject?: IReference;

  encounter?: IReference;

  period?: IPeriod;

  participant?: Array<ICareTeamParticipant>;

  reasonCode?: Array<ICodeableConcept>;

  reasonReference?: Array<IReference>;

  managingOrganization?: Array<IReference>;

  telecom?: Array<IContactPoint>;

  note?: Array<IAnnotation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
