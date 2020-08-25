/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAddress,
  IAdministrativeGender,
  IBackboneElement,
  ICodeableConcept,
  IContactPoint,
  IElement,
  IHumanName,
  IPeriod,
  IReference,
} from "../internal";

export interface IPatientContact extends IBackboneElement {
  relationship?: Array<ICodeableConcept>;

  name?: IHumanName;

  telecom?: Array<IContactPoint>;

  address?: IAddress;

  gender?: IAdministrativeGender;
  _gender?: IElement;

  organization?: IReference;

  period?: IPeriod;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
