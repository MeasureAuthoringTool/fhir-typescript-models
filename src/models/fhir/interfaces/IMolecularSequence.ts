/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IDomainResource,
  IElement,
  IIdentifier,
  IMolecularSequenceQuality,
  IMolecularSequenceReferenceSeq,
  IMolecularSequenceRepository,
  IMolecularSequenceStructureVariant,
  IMolecularSequenceVariant,
  IPrimitiveInteger,
  IPrimitiveString,
  IQuantity,
  IReference,
  ISequenceType,
} from "../internal";

export interface IMolecularSequence extends IDomainResource {
  identifier?: Array<IIdentifier>;

  type?: ISequenceType;
  _type?: IElement;

  coordinateSystem?: IPrimitiveInteger;
  _coordinateSystem?: IElement;

  patient?: IReference;

  specimen?: IReference;

  device?: IReference;

  performer?: IReference;

  quantity?: IQuantity;

  referenceSeq?: IMolecularSequenceReferenceSeq;

  variant?: Array<IMolecularSequenceVariant>;

  observedSeq?: IPrimitiveString;
  _observedSeq?: IElement;

  quality?: Array<IMolecularSequenceQuality>;

  readCoverage?: IPrimitiveInteger;
  _readCoverage?: IElement;

  repository?: Array<IMolecularSequenceRepository>;

  pointer?: Array<IReference>;

  structureVariant?: Array<IMolecularSequenceStructureVariant>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
