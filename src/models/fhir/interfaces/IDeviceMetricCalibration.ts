/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IDeviceMetricCalibrationState,
  IDeviceMetricCalibrationType,
  IElement,
  IPrimitiveInstant,
} from "../internal";

export interface IDeviceMetricCalibration extends IBackboneElement {
  type?: IDeviceMetricCalibrationType;
  _type?: IElement;

  state?: IDeviceMetricCalibrationState;
  _state?: IElement;

  time?: IPrimitiveInstant;
  _time?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
