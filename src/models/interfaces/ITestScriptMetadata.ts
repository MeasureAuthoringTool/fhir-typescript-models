/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ITestScriptMetadataCapability,
  ITestScriptMetadataLink,
} from "../internal";

export interface ITestScriptMetadata extends IBackboneElement {
  link?: Array<ITestScriptMetadataLink>;

  capability?: Array<ITestScriptMetadataCapability>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
