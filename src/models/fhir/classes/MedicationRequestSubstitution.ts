/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IMedicationRequestSubstitution,
  PrimitiveBoolean,
} from "../internal";

export class MedicationRequestSubstitution extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationRequest.Substitution";

  public allowed?: PrimitiveBoolean | CodeableConcept;

  public reason?: CodeableConcept;

  public static parse(
    json: IMedicationRequestSubstitution,
    providedInstance: MedicationRequestSubstitution = new MedicationRequestSubstitution()
  ): MedicationRequestSubstitution {
    const newInstance: MedicationRequestSubstitution = BackboneElement.parse(json, providedInstance);
  
    if (json.allowedBoolean) {
      newInstance.allowed = PrimitiveBoolean.parsePrimitive(json.allowedBoolean, json._allowedBoolean);
    }
    if (json.allowedCodeableConcept) {
      newInstance.allowed = CodeableConcept.parse(json.allowedCodeableConcept);
    }
    if (json.reason) {
      newInstance.reason = CodeableConcept.parse(json.reason);
    }
    return newInstance;
  }

  public static isMedicationRequestSubstitution(input?: unknown): input is MedicationRequestSubstitution {
    const castInput = input as MedicationRequestSubstitution;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationRequestSubstitution";
  }

  public toJSON(): IMedicationRequestSubstitution {
    const result: IMedicationRequestSubstitution = super.toJSON();

    if (this.allowed && PrimitiveBoolean.isPrimitiveBoolean(this.allowed)) {
      result.allowedBoolean = this.allowed.value;
      result._allowedBoolean = Extension.serializePrimitiveExtension(this.allowed);
    }

    if (this.allowed && CodeableConcept.isCodeableConcept(this.allowed)) {
      result.allowedCodeableConcept = this.allowed.toJSON();
    }

    if (this.reason) {
      result.reason = this.reason.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MedicationRequestSubstitution";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
