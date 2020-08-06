/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveString,
  IReference,
  IResearchSubjectStatus,
} from "../internal";

export interface IResearchSubject extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IResearchSubjectStatus;
  _status?: IElement;

  period?: IPeriod;

  study?: IReference;

  individual?: IReference;

  assignedArm?: IPrimitiveString;
  _assignedArm?: IElement;

  actualArm?: IPrimitiveString;
  _actualArm?: IElement;

  consent?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
