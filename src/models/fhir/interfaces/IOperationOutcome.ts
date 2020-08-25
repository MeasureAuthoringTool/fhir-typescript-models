/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IDomainResource,
  IOperationOutcomeIssue,
} from "../internal";

export interface IOperationOutcome extends IDomainResource {
  issue?: Array<IOperationOutcomeIssue>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
