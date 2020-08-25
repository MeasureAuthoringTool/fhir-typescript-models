/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Duration,
  Extension,
  IMedicationRequestDispenseRequest,
  MedicationRequestDispenseRequestInitialFill,
  Period,
  PrimitiveUnsignedInt,
  Reference,
  SimpleQuantity,
} from "../internal";

export class MedicationRequestDispenseRequest extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationRequest.DispenseRequest";

  public initialFill?: MedicationRequestDispenseRequestInitialFill;

  public dispenseInterval?: Duration;

  public validityPeriod?: Period;

  public numberOfRepeatsAllowed?: PrimitiveUnsignedInt;

  public quantity?: SimpleQuantity;

  public expectedSupplyDuration?: Duration;

  public performer?: Reference;

  public static parse(
    json: IMedicationRequestDispenseRequest,
    providedInstance: MedicationRequestDispenseRequest = new MedicationRequestDispenseRequest()
  ): MedicationRequestDispenseRequest {
    const newInstance: MedicationRequestDispenseRequest = BackboneElement.parse(json, providedInstance);
  
    if (json.initialFill) {
      newInstance.initialFill = MedicationRequestDispenseRequestInitialFill.parse(json.initialFill);
    }
    if (json.dispenseInterval) {
      newInstance.dispenseInterval = Duration.parse(json.dispenseInterval);
    }
    if (json.validityPeriod) {
      newInstance.validityPeriod = Period.parse(json.validityPeriod);
    }
    if (json.numberOfRepeatsAllowed) {
      newInstance.numberOfRepeatsAllowed = PrimitiveUnsignedInt.parsePrimitive(json.numberOfRepeatsAllowed, json._numberOfRepeatsAllowed);
    }
    if (json.quantity) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    if (json.expectedSupplyDuration) {
      newInstance.expectedSupplyDuration = Duration.parse(json.expectedSupplyDuration);
    }
    if (json.performer) {
      newInstance.performer = Reference.parse(json.performer);
    }
    return newInstance;
  }

  public static isMedicationRequestDispenseRequest(input?: unknown): input is MedicationRequestDispenseRequest {
    const castInput = input as MedicationRequestDispenseRequest;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationRequestDispenseRequest";
  }

  public toJSON(): IMedicationRequestDispenseRequest {
    const result: IMedicationRequestDispenseRequest = super.toJSON();

    if (this.initialFill) {
      result.initialFill = this.initialFill.toJSON();
    }

    if (this.dispenseInterval) {
      result.dispenseInterval = this.dispenseInterval.toJSON();
    }

    if (this.validityPeriod) {
      result.validityPeriod = this.validityPeriod.toJSON();
    }

    if (this.numberOfRepeatsAllowed) {
      result.numberOfRepeatsAllowed = this.numberOfRepeatsAllowed.value;
      result._numberOfRepeatsAllowed = Extension.serializePrimitiveExtension(this.numberOfRepeatsAllowed);
    }

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    if (this.expectedSupplyDuration) {
      result.expectedSupplyDuration = this.expectedSupplyDuration.toJSON();
    }

    if (this.performer) {
      result.performer = this.performer.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MedicationRequestDispenseRequest";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
