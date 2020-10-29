/* eslint-disable @typescript-eslint/naming-convention, import/no-cycle */
import { IDomainResource } from "../../fhir/internal";

export interface IDataElement {
  codeListId?: string;

  valueSetTitle?: string;

  description?: string;

  fhir_resource?: IDomainResource;
}

/* eslint-enable @typescript-eslint/naming-convention, import/no-cycle */
