/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  IAge,
  Quantity,
  FhirType
} from "../internal";

@FhirType("Age", "Quantity")
export class Age extends Quantity {
  static readonly baseType: string = "FHIR.Quantity";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Age";

  static readonly primaryCodePath: string | null = null;

  public static parse(
    json: IAge,
    providedInstance: Age = new Age()
  ): Age {
    const newInstance: Age = Quantity.parse(json, providedInstance);
  
    return newInstance;
  }

  public static isAge(input?: unknown): input is Age {
    const castInput = input as Age;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Age";
  }

  public toJSON(): IAge {
    const result: IAge = super.toJSON();

    return result;
  }

  public clone(): Age {
    return Age.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Age";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
