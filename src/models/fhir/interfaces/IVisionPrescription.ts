/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IDomainResource,
  IElement,
  IIdentifier,
  IPrimitiveDateTime,
  IReference,
  IVisionPrescriptionLensSpecification,
  IVisionStatus,
} from "../internal";

export interface IVisionPrescription extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IVisionStatus;
  _status?: IElement;

  created?: IPrimitiveDateTime;
  _created?: IElement;

  patient?: IReference;

  encounter?: IReference;

  dateWritten?: IPrimitiveDateTime;
  _dateWritten?: IElement;

  prescriber?: IReference;

  lensSpecification?: Array<IVisionPrescriptionLensSpecification>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
