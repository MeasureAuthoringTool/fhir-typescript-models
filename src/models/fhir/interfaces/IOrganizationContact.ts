/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAddress,
  IBackboneElement,
  ICodeableConcept,
  IContactPoint,
  IHumanName,
} from "../internal";

export interface IOrganizationContact extends IBackboneElement {
  purpose?: ICodeableConcept;

  name?: IHumanName;

  telecom?: Array<IContactPoint>;

  address?: IAddress;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
