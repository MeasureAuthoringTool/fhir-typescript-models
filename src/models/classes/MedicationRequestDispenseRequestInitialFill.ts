/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Duration,
  IMedicationRequestDispenseRequestInitialFill,
  SimpleQuantity,
} from "../internal";

export class MedicationRequestDispenseRequestInitialFill extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationRequest.DispenseRequest.InitialFill";

  public quantity?: SimpleQuantity;

  public duration?: Duration;

  public static parse(
    json: IMedicationRequestDispenseRequestInitialFill,
    providedInstance: MedicationRequestDispenseRequestInitialFill = new MedicationRequestDispenseRequestInitialFill()
  ): MedicationRequestDispenseRequestInitialFill {
    const newInstance: MedicationRequestDispenseRequestInitialFill = BackboneElement.parse(json, providedInstance);
  
    if (json.quantity) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    if (json.duration) {
      newInstance.duration = Duration.parse(json.duration);
    }
    return newInstance;
  }

  public static isMedicationRequestDispenseRequestInitialFill(input?: unknown): input is MedicationRequestDispenseRequestInitialFill {
    const castInput = input as MedicationRequestDispenseRequestInitialFill;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationRequestDispenseRequestInitialFill";
  }

  public toJSON(): IMedicationRequestDispenseRequestInitialFill {
    const result: IMedicationRequestDispenseRequestInitialFill = super.toJSON();

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    if (this.duration) {
      result.duration = this.duration.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MedicationRequestDispenseRequestInitialFill";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
