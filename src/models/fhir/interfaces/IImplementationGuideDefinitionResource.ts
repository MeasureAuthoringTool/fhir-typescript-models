/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IFHIRVersion,
  IPrimitiveBoolean,
  IPrimitiveCanonical,
  IPrimitiveId,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IImplementationGuideDefinitionResource extends IBackboneElement {
  reference?: IReference;

  fhirVersion?: Array<IFHIRVersion>;
  _fhirVersion?: Array<IElement | null>;

  name?: IPrimitiveString;
  _name?: IElement;

  description?: IPrimitiveString;
  _description?: IElement;

  exampleBoolean?: IPrimitiveBoolean;
  _exampleBoolean?: IElement;
  
  exampleCanonical?: IPrimitiveCanonical;
  _exampleCanonical?: IElement;

  groupingId?: IPrimitiveId;
  _groupingId?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
