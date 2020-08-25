/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICoding,
  IElement,
  IPrimitiveCanonical,
  IPrimitiveId,
  IPrimitiveInstant,
  IPrimitiveUri,
} from "../internal";

export interface IMeta extends IElement {
  versionId?: IPrimitiveId;
  _versionId?: IElement;

  lastUpdated?: IPrimitiveInstant;
  _lastUpdated?: IElement;

  source?: IPrimitiveUri;
  _source?: IElement;

  profile?: Array<IPrimitiveCanonical>;
  _profile?: Array<IElement | null>;

  security?: Array<ICoding>;

  tag?: Array<ICoding>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
