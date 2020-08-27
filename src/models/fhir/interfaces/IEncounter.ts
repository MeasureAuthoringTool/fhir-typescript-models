/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  ICoding,
  IDomainResource,
  IDuration,
  IElement,
  IEncounterClassHistory,
  IEncounterDiagnosis,
  IEncounterHospitalization,
  IEncounterLocation,
  IEncounterParticipant,
  IEncounterStatus,
  IEncounterStatusHistory,
  IIdentifier,
  IPeriod,
  IReference,
} from "../internal";

export interface IEncounter extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IEncounterStatus;
  _status?: IElement;

  statusHistory?: Array<IEncounterStatusHistory>;

  class?: ICoding;

  classHistory?: Array<IEncounterClassHistory>;

  type?: Array<ICodeableConcept>;

  serviceType?: ICodeableConcept;

  priority?: ICodeableConcept;

  subject?: IReference;

  episodeOfCare?: Array<IReference>;

  basedOn?: Array<IReference>;

  participant?: Array<IEncounterParticipant>;

  appointment?: Array<IReference>;

  period?: IPeriod;

  length?: IDuration;

  reasonCode?: Array<ICodeableConcept>;

  reasonReference?: Array<IReference>;

  diagnosis?: Array<IEncounterDiagnosis>;

  account?: Array<IReference>;

  hospitalization?: IEncounterHospitalization;

  location?: Array<IEncounterLocation>;

  serviceProvider?: IReference;

  partOf?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
