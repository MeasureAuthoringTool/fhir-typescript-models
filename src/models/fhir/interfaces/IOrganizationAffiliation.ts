/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IContactPoint,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveBoolean,
  IReference,
} from "../internal";

export interface IOrganizationAffiliation extends IDomainResource {
  identifier?: Array<IIdentifier>;

  active?: IPrimitiveBoolean;
  _active?: IElement;

  period?: IPeriod;

  organization?: IReference;

  participatingOrganization?: IReference;

  network?: Array<IReference>;

  code?: Array<ICodeableConcept>;

  specialty?: Array<ICodeableConcept>;

  location?: Array<IReference>;

  healthcareService?: Array<IReference>;

  telecom?: Array<IContactPoint>;

  endpoint?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
