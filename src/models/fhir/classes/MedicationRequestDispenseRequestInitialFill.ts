/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Duration,
  IMedicationRequestDispenseRequestInitialFill,
  SimpleQuantity,
  FieldMetadata
} from "../internal";

export class MedicationRequestDispenseRequestInitialFill extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationRequest.DispenseRequest.InitialFill";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "quantity",
      fieldType: [SimpleQuantity],
      isArray: false
    }, {
      fieldName: "duration",
      fieldType: [Duration],
      isArray: false
    }];
  }

  public quantity?: SimpleQuantity;

  public duration?: Duration;

  public static parse(
    json: IMedicationRequestDispenseRequestInitialFill,
    providedInstance: MedicationRequestDispenseRequestInitialFill = new MedicationRequestDispenseRequestInitialFill()
  ): MedicationRequestDispenseRequestInitialFill {
    const newInstance: MedicationRequestDispenseRequestInitialFill = BackboneElement.parse(json, providedInstance);
  
    if (json.quantity !== undefined) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    if (json.duration !== undefined) {
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

  public clone(): MedicationRequestDispenseRequestInitialFill {
    return MedicationRequestDispenseRequestInitialFill.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationRequestDispenseRequestInitialFill";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
