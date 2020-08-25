/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveCanonical,
  IPrimitiveString,
  IPrimitiveUri,
  IValueSetComposeIncludeConcept,
  IValueSetComposeIncludeFilter,
} from "../internal";

export interface IValueSetComposeInclude extends IBackboneElement {
  system?: IPrimitiveUri;
  _system?: IElement;

  version?: IPrimitiveString;
  _version?: IElement;

  concept?: Array<IValueSetComposeIncludeConcept>;

  filter?: Array<IValueSetComposeIncludeFilter>;

  valueSet?: Array<IPrimitiveCanonical>;
  _valueSet?: Array<IElement | null>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
