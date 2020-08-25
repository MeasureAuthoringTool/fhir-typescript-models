/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IEpisodeOfCareStatus,
  IPeriod,
} from "../internal";

export interface IEpisodeOfCareStatusHistory extends IBackboneElement {
  status?: IEpisodeOfCareStatus;
  _status?: IElement;

  period?: IPeriod;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
