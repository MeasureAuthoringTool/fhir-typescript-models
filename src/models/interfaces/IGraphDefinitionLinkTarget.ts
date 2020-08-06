/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IGraphDefinitionLink,
  IGraphDefinitionLinkTargetCompartment,
  IPrimitiveCanonical,
  IPrimitiveString,
  IResourceType,
} from "../internal";

export interface IGraphDefinitionLinkTarget extends IBackboneElement {
  type?: IResourceType;
  _type?: IElement;

  params?: IPrimitiveString;
  _params?: IElement;

  profile?: IPrimitiveCanonical;
  _profile?: IElement;

  compartment?: Array<IGraphDefinitionLinkTargetCompartment>;

  link?: Array<IGraphDefinitionLink>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
