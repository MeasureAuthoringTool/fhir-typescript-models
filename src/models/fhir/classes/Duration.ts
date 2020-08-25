/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  IDuration,
  Quantity,
} from "../internal";

export class Duration extends Quantity {
  static readonly baseType: string = "FHIR.Quantity";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Duration";

  public static parse(
    json: IDuration,
    providedInstance: Duration = new Duration()
  ): Duration {
    const newInstance: Duration = Quantity.parse(json, providedInstance);
  
    return newInstance;
  }

  public static isDuration(input?: unknown): input is Duration {
    const castInput = input as Duration;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Duration";
  }

  public toJSON(): IDuration {
    const result: IDuration = super.toJSON();

    return result;
  }
  
  public getTypeName(): string {
    return "Duration";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
