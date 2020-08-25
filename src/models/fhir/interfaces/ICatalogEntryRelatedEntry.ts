/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICatalogEntryRelationType,
  IElement,
  IReference,
} from "../internal";

export interface ICatalogEntryRelatedEntry extends IBackboneElement {
  relationtype?: ICatalogEntryRelationType;
  _relationtype?: IElement;

  item?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
