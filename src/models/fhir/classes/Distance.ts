/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  IDistance,
  Quantity,
  FhirType
} from "../internal";

@FhirType("Distance", "Quantity")
export class Distance extends Quantity {
  static readonly baseType: string = "FHIR.Quantity";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Distance";

  static readonly primaryCodePath: string | null = null;

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

  public clone(): Distance {
    return Distance.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Distance";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
