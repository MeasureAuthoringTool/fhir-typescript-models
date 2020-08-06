/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDeviceMetricCalibration,
  IDeviceMetricCategory,
  IDeviceMetricColor,
  IDeviceMetricOperationalStatus,
  IDomainResource,
  IElement,
  IIdentifier,
  IReference,
  ITiming,
} from "../internal";

export interface IDeviceMetric extends IDomainResource {
  identifier?: Array<IIdentifier>;

  type?: ICodeableConcept;

  unit?: ICodeableConcept;

  source?: IReference;

  parent?: IReference;

  operationalStatus?: IDeviceMetricOperationalStatus;
  _operationalStatus?: IElement;

  color?: IDeviceMetricColor;
  _color?: IElement;

  category?: IDeviceMetricCategory;
  _category?: IElement;

  measurementPeriod?: ITiming;

  calibration?: Array<IDeviceMetricCalibration>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
