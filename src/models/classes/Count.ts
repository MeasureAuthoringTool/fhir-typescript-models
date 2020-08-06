/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  ICount,
  Quantity,
} from "../internal";

export class Count extends Quantity {
  static readonly baseType: string = "FHIR.Quantity";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Count";

  public static parse(
    json: ICount,
    providedInstance: Count = new Count()
  ): Count {
    const newInstance: Count = Quantity.parse(json, providedInstance);
  
    return newInstance;
  }

  public static isCount(input?: unknown): input is Count {
    const castInput = input as Count;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Count";
  }

  public toJSON(): ICount {
    const result: ICount = super.toJSON();

    return result;
  }
  
  public getTypeName(): string {
    return "Count";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
