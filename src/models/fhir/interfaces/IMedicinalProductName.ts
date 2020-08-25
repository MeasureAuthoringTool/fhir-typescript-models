/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IMedicinalProductNameCountryLanguage,
  IMedicinalProductNameNamePart,
  IPrimitiveString,
} from "../internal";

export interface IMedicinalProductName extends IBackboneElement {
  productName?: IPrimitiveString;
  _productName?: IElement;

  namePart?: Array<IMedicinalProductNameNamePart>;

  countryLanguage?: Array<IMedicinalProductNameCountryLanguage>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
