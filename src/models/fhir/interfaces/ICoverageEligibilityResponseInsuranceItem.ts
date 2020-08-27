/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  ICoverageEligibilityResponseInsuranceItemBenefit,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveString,
  IPrimitiveUri,
  IReference,
} from "../internal";

export interface ICoverageEligibilityResponseInsuranceItem extends IBackboneElement {
  category?: ICodeableConcept;

  productOrService?: ICodeableConcept;

  modifier?: Array<ICodeableConcept>;

  provider?: IReference;

  excluded?: IPrimitiveBoolean;
  _excluded?: IElement;

  name?: IPrimitiveString;
  _name?: IElement;

  description?: IPrimitiveString;
  _description?: IElement;

  network?: ICodeableConcept;

  unit?: ICodeableConcept;

  term?: ICodeableConcept;

  benefit?: Array<ICoverageEligibilityResponseInsuranceItemBenefit>;

  authorizationRequired?: IPrimitiveBoolean;
  _authorizationRequired?: IElement;

  authorizationSupporting?: Array<ICodeableConcept>;

  authorizationUrl?: IPrimitiveUri;
  _authorizationUrl?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
