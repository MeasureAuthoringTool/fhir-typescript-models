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
  FieldMetadata
} from "../internal";

export class MedicationRequestDispenseRequest extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationRequest.DispenseRequest";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "initialFill",
      fieldType: [MedicationRequestDispenseRequestInitialFill],
      isArray: false
    }, {
      fieldName: "dispenseInterval",
      fieldType: [Duration],
      isArray: false
    }, {
      fieldName: "validityPeriod",
      fieldType: [Period],
      isArray: false
    }, {
      fieldName: "numberOfRepeatsAllowed",
      fieldType: [PrimitiveUnsignedInt],
      isArray: false
    }, {
      fieldName: "quantity",
      fieldType: [SimpleQuantity],
      isArray: false
    }, {
      fieldName: "expectedSupplyDuration",
      fieldType: [Duration],
      isArray: false
    }, {
      fieldName: "performer",
      fieldType: [Reference],
      isArray: false
    }];
  }

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
  
    if (json.initialFill !== undefined) {
      newInstance.initialFill = MedicationRequestDispenseRequestInitialFill.parse(json.initialFill);
    }
    if (json.dispenseInterval !== undefined) {
      newInstance.dispenseInterval = Duration.parse(json.dispenseInterval);
    }
    if (json.validityPeriod !== undefined) {
      newInstance.validityPeriod = Period.parse(json.validityPeriod);
    }
    if (json.numberOfRepeatsAllowed !== undefined) {
      newInstance.numberOfRepeatsAllowed = PrimitiveUnsignedInt.parsePrimitive(json.numberOfRepeatsAllowed, json._numberOfRepeatsAllowed);
    }
    if (json.quantity !== undefined) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    if (json.expectedSupplyDuration !== undefined) {
      newInstance.expectedSupplyDuration = Duration.parse(json.expectedSupplyDuration);
    }
    if (json.performer !== undefined) {
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

  public clone(): MedicationRequestDispenseRequest {
    return MedicationRequestDispenseRequest.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationRequestDispenseRequest";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
