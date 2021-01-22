/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  FhirList,
  IMedicationDispenseSubstitution,
  PrimitiveBoolean,
  Reference,
  FhirType
} from "../internal";

@FhirType("MedicationDispenseSubstitution", "BackboneElement")
export class MedicationDispenseSubstitution extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationDispense.Substitution";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveBoolean")
  public wasSubstituted?: PrimitiveBoolean;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirList("CodeableConcept")
  public reason?: Array<CodeableConcept>;

  @FhirList("Reference")
  public responsibleParty?: Array<Reference>;

  public static parse(
    json: IMedicationDispenseSubstitution,
    providedInstance: MedicationDispenseSubstitution = new MedicationDispenseSubstitution()
  ): MedicationDispenseSubstitution {
    const newInstance: MedicationDispenseSubstitution = BackboneElement.parse(json, providedInstance);
  
    if (json.wasSubstituted !== undefined) {
      newInstance.wasSubstituted = PrimitiveBoolean.parsePrimitive(json.wasSubstituted, json._wasSubstituted);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.reason !== undefined) {
      newInstance.reason = json.reason.map((x) => CodeableConcept.parse(x));
    }
    if (json.responsibleParty !== undefined) {
      newInstance.responsibleParty = json.responsibleParty.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isMedicationDispenseSubstitution(input?: unknown): input is MedicationDispenseSubstitution {
    const castInput = input as MedicationDispenseSubstitution;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationDispenseSubstitution";
  }

  public toJSON(): IMedicationDispenseSubstitution {
    const result: IMedicationDispenseSubstitution = super.toJSON();

    if (this.wasSubstituted) {
      result.wasSubstituted = this.wasSubstituted.value;
      result._wasSubstituted = Extension.serializePrimitiveExtension(this.wasSubstituted);
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.reason) {
      result.reason = this.reason.map((x) => x.toJSON());
    }

    if (this.responsibleParty) {
      result.responsibleParty = this.responsibleParty.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MedicationDispenseSubstitution {
    return MedicationDispenseSubstitution.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationDispenseSubstitution";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
