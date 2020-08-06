/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IGuidePageGeneration,
  IPrimitiveString,
  IPrimitiveUrl,
  IReference,
} from "../internal";

export interface IImplementationGuideDefinitionPage extends IBackboneElement {
  nameUrl?: IPrimitiveUrl;
  _nameUrl?: IElement;
  
  nameReference?: IReference;

  title?: IPrimitiveString;
  _title?: IElement;

  generation?: IGuidePageGeneration;
  _generation?: IElement;

  page?: Array<IImplementationGuideDefinitionPage>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
