/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IImplementationGuideDefinitionGrouping,
  IImplementationGuideDefinitionPage,
  IImplementationGuideDefinitionParameter,
  IImplementationGuideDefinitionResource,
  IImplementationGuideDefinitionTemplate,
} from "../internal";

export interface IImplementationGuideDefinition extends IBackboneElement {
  grouping?: Array<IImplementationGuideDefinitionGrouping>;

  resource?: Array<IImplementationGuideDefinitionResource>;

  page?: IImplementationGuideDefinitionPage;

  parameter?: Array<IImplementationGuideDefinitionParameter>;

  template?: Array<IImplementationGuideDefinitionTemplate>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
