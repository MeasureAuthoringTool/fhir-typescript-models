/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  IDistance,
  Quantity,
} from "../internal";

export class Distance extends Quantity {
  static readonly baseType: string = "FHIR.Quantity";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Distance";

  public static parse(
    json: IDistance,
    providedInstance: Distance = new Distance()
  ): Distance {
    const newInstance: Distance = Quantity.parse(json, providedInstance);
  
    return newInstance;
  }

  public static isDistance(input?: unknown): input is Distance {
    const castInput = input as Distance;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Distance";
  }

  public toJSON(): IDistance {
    const result: IDistance = super.toJSON();

    return result;
  }
  
  public getTypeName(): string {
    return "Distance";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
