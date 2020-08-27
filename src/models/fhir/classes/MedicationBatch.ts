/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IMedicationBatch,
  PrimitiveDateTime,
  PrimitiveString,
} from "../internal";

export class MedicationBatch extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Medication.Batch";

  public lotNumber?: PrimitiveString;

  public expirationDate?: PrimitiveDateTime;

  public static parse(
    json: IMedicationBatch,
    providedInstance: MedicationBatch = new MedicationBatch()
  ): MedicationBatch {
    const newInstance: MedicationBatch = BackboneElement.parse(json, providedInstance);
  
    if (json.lotNumber !== undefined) {
      newInstance.lotNumber = PrimitiveString.parsePrimitive(json.lotNumber, json._lotNumber);
    }
    if (json.expirationDate !== undefined) {
      newInstance.expirationDate = PrimitiveDateTime.parsePrimitive(json.expirationDate, json._expirationDate);
    }
    return newInstance;
  }

  public static isMedicationBatch(input?: unknown): input is MedicationBatch {
    const castInput = input as MedicationBatch;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationBatch";
  }

  public toJSON(): IMedicationBatch {
    const result: IMedicationBatch = super.toJSON();

    if (this.lotNumber) {
      result.lotNumber = this.lotNumber.value;
      result._lotNumber = Extension.serializePrimitiveExtension(this.lotNumber);
    }

    if (this.expirationDate) {
      result.expirationDate = this.expirationDate.value;
      result._expirationDate = Extension.serializePrimitiveExtension(this.expirationDate);
    }

    return result;
  }

  public clone(): MedicationBatch {
    return MedicationBatch.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationBatch";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
