/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveDecimal,
  ISearchEntryMode,
} from "../internal";

export interface IBundleEntrySearch extends IBackboneElement {
  mode?: ISearchEntryMode;
  _mode?: IElement;

  score?: IPrimitiveDecimal;
  _score?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
