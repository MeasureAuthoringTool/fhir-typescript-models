/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IDomainResource,
  IElement,
  IIdentifier,
  IImmunizationRecommendationRecommendation,
  IPrimitiveDateTime,
  IReference,
} from "../internal";

export interface IImmunizationRecommendation extends IDomainResource {
  identifier?: Array<IIdentifier>;

  patient?: IReference;

  date?: IPrimitiveDateTime;
  _date?: IElement;

  authority?: IReference;

  recommendation?: Array<IImmunizationRecommendationRecommendation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
