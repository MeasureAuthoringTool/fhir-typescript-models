/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IElement,
  INarrativeStatus,
  IPrimitiveXhtml,
} from "../internal";

export interface INarrative extends IElement {
  status?: INarrativeStatus;
  _status?: IElement;

  div?: IPrimitiveXhtml;
  _div?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
