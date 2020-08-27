/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveString,
  IPrimitiveUri,
  IRepositoryType,
} from "../internal";

export interface IMolecularSequenceRepository extends IBackboneElement {
  type?: IRepositoryType;
  _type?: IElement;

  url?: IPrimitiveUri;
  _url?: IElement;

  name?: IPrimitiveString;
  _name?: IElement;

  datasetId?: IPrimitiveString;
  _datasetId?: IElement;

  variantsetId?: IPrimitiveString;
  _variantsetId?: IElement;

  readsetId?: IPrimitiveString;
  _readsetId?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
